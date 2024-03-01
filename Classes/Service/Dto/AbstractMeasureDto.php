<?php
declare(strict_types=1);

namespace TechDivision\WebVitals\Service\Dto;

use DateTime;

/**
 * This file is part of the TechDivision.WebVitals package.
 *
 * TechDivision - neos@techdivision.com
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

abstract class AbstractMeasureDto
{
    /**
     * @var int
     */
    protected $numberOfLowMeasures;

    /**
     * @var int
     */
    protected $numberOfMediumMeasures;

    /**
     * @var int
     */
    protected $numberOfHighMeasures;

    /**
     * @var int
     */
    protected $numberOfTotalMeasures;

    /**
     * @var DateTime
     */
    protected $fromDate;

    /**
     * @var DateTime
     */
    protected $toDate;

    /**
     * @return int
     */
    public function getNumberOfLowMeasures(): int
    {
        return $this->numberOfLowMeasures;
    }

    /**
     * @return float
     */
    public function getPercentageOfLowMeasures(): float
    {
        return round(($this->numberOfLowMeasures / $this->getDenominator()) * 100, 2);
    }

    /**
     * @param int $numberOfLowMeasures
     */
    public function setNumberOfLowMeasures(int $numberOfLowMeasures): void
    {
        $this->numberOfLowMeasures = $numberOfLowMeasures;
    }

    /**
     * @return int
     */
    public function getNumberOfMediumMeasures(): int
    {
        return $this->numberOfMediumMeasures;
    }

    /**
     * @return float
     */
    public function getPercentageOfMediumMeasures(): float
    {
        return round(($this->numberOfMediumMeasures / $this->getDenominator()) * 100, 2);
    }

    /**
     * @param int $numberOfMediumMeasures
     */
    public function setNumberOfMediumMeasures(int $numberOfMediumMeasures): void
    {
        $this->numberOfMediumMeasures = $numberOfMediumMeasures;
    }

    /**
     * @return int
     */
    public function getNumberOfHighMeasures(): int
    {
        return $this->numberOfHighMeasures;
    }

    /**
     * @return float
     */
    public function getPercentageOfHighMeasures(): float
    {
        return round(($this->numberOfHighMeasures / $this->getDenominator()) * 100, 2);
    }

    /**
     * @param int $numberOfHighMeasures
     */
    public function setNumberOfHighMeasures(int $numberOfHighMeasures): void
    {
        $this->numberOfHighMeasures = $numberOfHighMeasures;
    }

    /**
     * @return int
     */
    public function getNumberOfTotalMeasures(): int
    {
        return $this->numberOfTotalMeasures;
    }

    /**
     * @return int
     */
    public function getDenominator(): int
    {
        return $this->numberOfTotalMeasures > 0 ? $this->numberOfTotalMeasures : 1;
    }

    /**
     * @param int $numberOfTotalMeasures
     */
    public function setNumberOfTotalMeasures(int $numberOfTotalMeasures): void
    {
        $this->numberOfTotalMeasures = $numberOfTotalMeasures;
    }

    /**
     * @return DateTime
     */
    public function getFromDate(): DateTime
    {
        return $this->fromDate;
    }

    /**
     * @param DateTime $fromDate
     */
    public function setFromDate(DateTime $fromDate): void
    {
        $this->fromDate = $fromDate;
    }

    /**
     * @return DateTime
     */
    public function getToDate(): DateTime
    {
        return $this->toDate;
    }

    /**
     * @param DateTime $toDate
     */
    public function setToDate(DateTime $toDate): void
    {
        $this->toDate = $toDate;
    }

    /**
     * @return array
     */
    public function __toArray(): array
    {
        return [
            'data' => [
                'name' => static::$name . ' (' . static::$shortName . ')',
                'unit' => static::$unit,
                'percentage' => [
                    'low' => $this->getPercentageOfLowMeasures(),
                    'medium' => $this->getPercentageOfMediumMeasures(),
                    'high' => $this->getPercentageOfHighMeasures(),
                ],
                'total' => $this->getNumberOfTotalMeasures(),
                'fromDate' => $this->getFromDate()->format('d.m.Y'),
                'toDate' => $this->getToDate()->format('d.m.Y'),
                'threshold' => [
                    'min' => static::$minimumThreshold,
                    'max' => static::$maximumThreshold,
                ],
            ],
        ];
    }
}
