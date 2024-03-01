<?php
declare(strict_types=1);

namespace TechDivision\WebVitals\Domain\Repository;

use DateTime;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Persistence\Exception\InvalidQueryException;
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
     * @param DateTime $startDate
     * @return int
     * @throws InvalidQueryException
     */
    public function getNumberOfTotalMeasures(
        string $nodeIdentifier,
        string $dimensionsHash,
        string $type,
        DateTime $startDate
    ): int {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('nodeReference', $nodeIdentifier),
                $query->equals('nodeDimensions', $dimensionsHash),
                $query->logicalNot($query->equals($type, null)),
                $query->greaterThanOrEqual('entryDate', $startDate)
            )
        );
        return $query->count();
    }

    /**
     * @param string $nodeIdentifier
     * @param string $dimensionsHash
     * @param string $type
     * @param DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws InvalidQueryException
     */
    public function getNumberOfMeasuresLowerThanThreshold(
        $nodeIdentifier,
        string $dimensionsHash,
        string $type,
        DateTime $startDate,
        int $threshold
    ): int {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('nodeReference', $nodeIdentifier),
                $query->equals('nodeDimensions', $dimensionsHash),
                $query->logicalNot($query->equals($type, null)),
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
     * @param DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws InvalidQueryException
     */
    public function getNumberOfMeasuresHigherThanThreshold(
        string $nodeIdentifier,
        string $dimensionsHash,
        string $type,
        DateTime $startDate,
        int $threshold
    ): int {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('nodeReference', $nodeIdentifier),
                $query->equals('nodeDimensions', $dimensionsHash),
                $query->logicalNot($query->equals($type, null)),
                $query->greaterThanOrEqual('entryDate', $startDate),
                $query->greaterThan($type, $threshold)
            )
        );
        return $query->count();
    }

    /**
     * @param string $siteNodeName
     * @param string $type
     * @param DateTime $startDate
     * @return int
     * @throws InvalidQueryException
     */
    public function getNumberOfTotalMeasuresForEntireSite(string $siteNodeName, string $type, DateTime $startDate): int
    {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('siteReference', $siteNodeName),
                $query->logicalNot($query->equals($type, null)),
                $query->greaterThanOrEqual('entryDate', $startDate)
            )
        );
        return $query->count();
    }

    /**
     * @param string $siteNodeName
     * @param string $type
     * @param DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws InvalidQueryException
     */
    public function getNumberOfMeasuresLowerThanThresholdForEntireSite(
        string $siteNodeName,
        string $type,
        DateTime $startDate,
        int $threshold
    ): int {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('siteReference', $siteNodeName),
                $query->logicalNot($query->equals($type, null)),
                $query->greaterThanOrEqual('entryDate', $startDate),
                $query->lessThanOrEqual($type, $threshold)
            )
        );
        return $query->count();
    }

    /**
     * @param string $siteNodeName
     * @param string $type
     * @param DateTime $startDate
     * @param int $threshold
     * @return int
     * @throws InvalidQueryException
     */
    public function getNumberOfMeasuresHigherThanThresholdForEntireSite(
        string $siteNodeName,
        string $type,
        DateTime $startDate,
        int $threshold
    ): int {
        $query = $this->createQuery();
        $query->matching(
            $query->logicalAnd(
                $query->equals('siteReference', $siteNodeName),
                $query->logicalNot($query->equals($type, null)),
                $query->greaterThanOrEqual('entryDate', $startDate),
                $query->greaterThan($type, $threshold)
            )
        );
        return $query->count();
    }
}
