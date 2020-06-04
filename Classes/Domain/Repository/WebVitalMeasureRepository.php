<?php
declare(strict_types = 1);

namespace TechDivision\WebVitals\Domain\Repository;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Repository;

/**
 * This file is part of the TechDivision.WebVitals package.
 *
 * TechDivision - neos@techdivision.com
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

/**
 * @Flow\Scope("singleton")
 * @api
 */
class WebVitalMeasureRepository extends Repository
{

    /**
     * @param string $nodeIdentifier
     * @param string $dimensionsHash
     * @param string $type
     * @param \DateTime $startDate
     * @return int
     * @throws \Neos\Flow\Persistence\Exception\InvalidQueryException
     */
    public function getNumberOfTotalMeasures($nodeIdentifier, $dimensionsHash, $type, $startDate): int
    {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('nodeReference', $nodeIdentifier),
                $query->equals('nodeDimensions', $dimensionsHash),
                $query->logicalNot(
                    $query->equals($type, null)
                ),
                $query->greaterThanOrEqual('entryDate', $startDate)
            )
        );
        return $query->count();
    }

    /**
     * @param string $nodeIdentifier
     * @param string $dimensionsHash
     * @param string $type
     * @param \DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws \Neos\Flow\Persistence\Exception\InvalidQueryException
     */
    public function getNumberOfMeasuresLowerThanThreshold($nodeIdentifier = null, $dimensionsHash, $type, $startDate, $threshold): int
    {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('nodeReference', $nodeIdentifier),
                $query->equals('nodeDimensions', $dimensionsHash),
                $query->logicalNot(
                    $query->equals($type, null)
                ),
                $query->greaterThanOrEqual('entryDate', $startDate),
                $query->lessThanOrEqual($type, $threshold)
            )
        );
        return $query->count();
    }

    /**
     * @param string $nodeIdentifier
     * @param string $dimensionsHash
     * @param string $type
     * @param \DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws \Neos\Flow\Persistence\Exception\InvalidQueryException
     */
    public function getNumberOfMeasuresHigherThanThreshold($nodeIdentifier, $dimensionsHash, $type, $startDate, $threshold): int
    {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('nodeReference', $nodeIdentifier),
                $query->equals('nodeDimensions', $dimensionsHash),
                $query->logicalNot(
                    $query->equals($type, null)
                ),
                $query->greaterThanOrEqual('entryDate', $startDate),
                $query->greaterThan($type, $threshold)
            )
        );
        return $query->count();
    }

    /**
     * @param string $siteNodeName
     * @param string $type
     * @param \DateTime $startDate
     * @return int
     * @throws \Neos\Flow\Persistence\Exception\InvalidQueryException
     */
    public function getNumberOfTotalMeasuresForEntireSite($siteNodeName, $type, $startDate): int
    {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('siteReference', $siteNodeName),
                $query->logicalNot(
                    $query->equals($type, null)
                ),
                $query->greaterThanOrEqual('entryDate', $startDate)
            )
        );
        return $query->count();
    }

    /**
     * @param string $siteNodeName
     * @param string $type
     * @param \DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws \Neos\Flow\Persistence\Exception\InvalidQueryException
     */
    public function getNumberOfMeasuresLowerThanThresholdForEntireSite($siteNodeName, $type, $startDate, $threshold): int
    {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('siteReference', $siteNodeName),
                $query->logicalNot(
                    $query->equals($type, null)
                ),
                $query->greaterThanOrEqual('entryDate', $startDate),
                $query->lessThanOrEqual($type, $threshold)
            )
        );
        return $query->count();
    }

    /**
     * @param string $siteNodeName
     * @param string $type
     * @param \DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws \Neos\Flow\Persistence\Exception\InvalidQueryException
     */
    public function getNumberOfMeasuresHigherThanThresholdForEntireSite($siteNodeName, $type, $startDate, $threshold): int
    {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('siteReference', $siteNodeName),
                $query->logicalNot(
                    $query->equals($type, null)
                ),
                $query->greaterThanOrEqual('entryDate', $startDate),
                $query->greaterThan($type, $threshold)
            )
        );
        return $query->count();
    }
}
