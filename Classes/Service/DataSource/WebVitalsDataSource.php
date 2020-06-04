<?php
declare(strict_types=1);

namespace TechDivision\WebVitals\Service\DataSource;

use DateTime;
use InvalidArgumentException;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Doctrine\QueryResult;
use Neos\Neos\Service\DataSource\AbstractDataSource;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use TechDivision\WebVitals\Domain\Repository\WebVitalMeasureRepository;
use TechDivision\WebVitals\Service\Dto\AbstractMeasureDto;
use TechDivision\WebVitals\Service\Dto\CumulativeLayoutShiftMeasureDto;
use TechDivision\WebVitals\Service\Dto\FirstContentfulPaintMeasureDto;
use TechDivision\WebVitals\Service\Dto\FirstInputDelayMeasureDto;
use TechDivision\WebVitals\Service\Dto\LargestContentfulPaintMeasureDto;
use TechDivision\WebVitals\Service\Dto\TimeToFirstByteMeasureDto;
use Neos\ContentRepository\Utility;

/**
 * This file is part of the TechDivision.WebVitals package.
 *
 * TechDivision - neos@techdivision.com
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

class WebVitalsDataSource extends AbstractDataSource
{
    /**
     * @var string
     */
    protected static $identifier = 'WebVitals';

    /**
     * @Flow\Inject
     * @var WebVitalMeasureRepository
     */
    protected $webVitalMeasureRepository;

    /**
     * Get analytics stats for the given node
     *
     * {@inheritdoc}
     */
    public function getData(NodeInterface $node = null, array $arguments = []): array
    {
        if (!isset($arguments['measure'])) {
            throw new InvalidArgumentException('Missing "measure" argument', 1416864525);
        }

        $startDateArgument = isset($arguments['startDate']) ? $arguments['startDate'] : '3 months ago';
        $endDateArgument = isset($arguments['endDate']) ? $arguments['endDate'] : 'now';

        try {
            $startDate = new DateTime($startDateArgument);
        } catch (\Exception $exception) {
            return ['error' => ['message' => 'Invalid date format for argument "startDate"', 'code' => 1417435564]];
        }

        try {
            $endDate = new DateTime($endDateArgument);
        } catch (\Exception $exception) {
            return ['error' => ['message' => 'Invalid date format for argument "endDate"', 'code' => 1417435581]];
        }

        try {
            switch ($arguments['measure']) {
                case LargestContentfulPaintMeasureDto::$shortName:
                    return $this->calculateData(new LargestContentfulPaintMeasureDto(), $node, $startDate, $endDate);
                break;
                case FirstInputDelayMeasureDto::$shortName:
                    return $this->calculateData(new FirstInputDelayMeasureDto(), $node, $startDate, $endDate);
                break;
                case CumulativeLayoutShiftMeasureDto::$shortName:
                    return $this->calculateData(new CumulativeLayoutShiftMeasureDto(), $node, $startDate, $endDate);
                break;
                case TimeToFirstByteMeasureDto::$shortName:
                    return $this->calculateData(new TimeToFirstByteMeasureDto(), $node, $startDate, $endDate);
                break;
                case FirstContentfulPaintMeasureDto::$shortName:
                    return $this->calculateData(new FirstContentfulPaintMeasureDto(), $node, $startDate, $endDate);
                break;
            }
        } catch (Exception $exception) {
            return [
                'error' => [
                    'message' => $exception->getMessage(),
                    'code' => $exception->getCode()
                ]
            ];
        }
    }

    /**
     * @param AbstractMeasureDto $dto
     * @param NodeInterface $node
     * @param DateTime $fromDate
     * @param DateTime $endDate
     * @throws \Neos\Flow\Persistence\Exception\InvalidQueryException
     * @return array
     */
    protected function calculateData(AbstractMeasureDto $dto, NodeInterface $node, \DateTime $fromDate, \DateTime $toDate)
    {
        $dimensions = $node->getDimensions();
        $dimensionsHash = Utility::sortDimensionValueArrayAndReturnDimensionsHash($dimensions);
        $total = $this->webVitalMeasureRepository->getNumberOfTotalMeasures($node->getIdentifier(), $dimensionsHash, $dto::$shortName, $fromDate);
        $low = $this->webVitalMeasureRepository->getNumberOfMeasuresLowerThanThreshold($node->getIdentifier(), $dimensionsHash, $dto::$shortName, $fromDate, $dto::$minimumThreshold);
        $lowAndMedium = $this->webVitalMeasureRepository->getNumberOfMeasuresLowerThanThreshold( $node->getIdentifier(), $dimensionsHash, $dto::$shortName, $fromDate, $dto::$maximumThreshold);
        $high = $this->webVitalMeasureRepository->getNumberOfMeasuresHigherThanThreshold($node->getIdentifier(), $dimensionsHash, $dto::$shortName, $fromDate, $dto::$maximumThreshold);

        $dto->setNumberOfTotalMeasures($total);
        $dto->setNumberOfLowMeasures($low);
        $dto->setNumberOfMediumMeasures($lowAndMedium - $low);
        $dto->setNumberOfHighMeasures($high);
        $dto->setFromDate($fromDate);
        $dto->setToDate($toDate);

        return $dto->__toArray();
    }
}
