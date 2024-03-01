<?php
declare(strict_types=1);

namespace TechDivision\WebVitals\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\Exception\StopActionException;
use Neos\Flow\Persistence\Exception\InvalidQueryException;
use Neos\Fusion\View\FusionView;
use Neos\Neos\Controller\CreateContentContextTrait;
use Neos\Neos\Domain\Model\Site;
use TechDivision\WebVitals\Domain\Repository\WebVitalMeasureRepository;
use TechDivision\WebVitals\Service\Dto\AbstractMeasureDto;
use TechDivision\WebVitals\Service\Dto\CumulativeLayoutShiftMeasureDto;
use TechDivision\WebVitals\Service\Dto\FirstContentfulPaintMeasureDto;
use TechDivision\WebVitals\Service\Dto\FirstInputDelayMeasureDto;
use TechDivision\WebVitals\Service\Dto\LargestContentfulPaintMeasureDto;
use TechDivision\WebVitals\Service\Dto\TimeToFirstByteMeasureDto;

/**
 * This file is part of the TechDivision.WebVitals package.
 *
 * TechDivision - neos@techdivision.com
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

class BackendModuleController extends ActionController
{
    use CreateContentContextTrait;

    /**
     * @Flow\InjectConfiguration(package="TechDivision.WebVitals", path="backendModule.defaultFromDate")
     * @var string
     */
    protected $defaultFromDate;

    /**
     * @var string
     */
    protected $defaultViewObjectName = FusionView::class;

    /**
     * @Flow\Inject
     * @var WebVitalMeasureRepository
     */
    protected $webVitalMeasureRepository;

    /**
     * @return void
     * @throws InvalidQueryException
     * @throws StopActionException
     */
    public function indexAction(): void
    {
        $this->view->assignMultiple([
            LargestContentfulPaintMeasureDto::$shortName => $this->getData(new LargestContentfulPaintMeasureDto()),
            FirstInputDelayMeasureDto::$shortName => $this->getData(new FirstInputDelayMeasureDto()),
            CumulativeLayoutShiftMeasureDto::$shortName => $this->getData(new CumulativeLayoutShiftMeasureDto()),
            TimeToFirstByteMeasureDto::$shortName => $this->getData(new TimeToFirstByteMeasureDto()),
            FirstContentfulPaintMeasureDto::$shortName => $this->getData(new FirstContentfulPaintMeasureDto()),
        ]);
    }

    /**
     * @param AbstractMeasureDto $dto
     * @return array
     * @throws InvalidQueryException
     * @throws StopActionException
     */
    protected function getData(AbstractMeasureDto $dto): array
    {
        $contentContext = $this->createContentContext('live');
        /** @var Site $currentSite */
        $currentSite = $contentContext->getCurrentSite();
        $currentSiteNodeName = $currentSite->getNodeName();

        $fromDateArgument = $this->defaultFromDate ?? '3 months ago';
        try {
            $fromDate = new \DateTime($fromDateArgument);
        } catch (\Exception $exception) {
            $this->throwStatus(
                500,
                null,
                'Invalid date format for setting "TechDivision.WebVitals.backendModule.defaultFromDate"'
            );
        }

        $total = $this->webVitalMeasureRepository->getNumberOfTotalMeasuresForEntireSite(
            $currentSiteNodeName,
            $dto::$shortName,
            $fromDate
        );
        $low = $this->webVitalMeasureRepository->getNumberOfMeasuresLowerThanThresholdForEntireSite(
            $currentSiteNodeName,
            $dto::$shortName,
            $fromDate,
            $dto::$minimumThreshold
        );
        $lowAndMedium = $this->webVitalMeasureRepository->getNumberOfMeasuresLowerThanThresholdForEntireSite(
            $currentSiteNodeName,
            $dto::$shortName,
            $fromDate,
            $dto::$maximumThreshold
        );
        $high = $this->webVitalMeasureRepository->getNumberOfMeasuresHigherThanThresholdForEntireSite(
            $currentSiteNodeName,
            $dto::$shortName,
            $fromDate,
            $dto::$maximumThreshold
        );
        $toDate = new \DateTime();

        $dto->setNumberOfTotalMeasures($total);
        $dto->setNumberOfLowMeasures($low);
        $dto->setNumberOfMediumMeasures($lowAndMedium - $low);
        $dto->setNumberOfHighMeasures($high);
        $dto->setFromDate($fromDate);
        $dto->setToDate($toDate);

        return $dto->__toArray();
    }
}
