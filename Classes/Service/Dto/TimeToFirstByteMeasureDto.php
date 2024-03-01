<?php
declare(strict_types=1);

namespace TechDivision\WebVitals\Service\Dto;

/**
 * This file is part of the TechDivision.WebVitals package.
 *
 * TechDivision - neos@techdivision.com
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

class TimeToFirstByteMeasureDto extends AbstractMeasureDto
{
    public static string $shortName = 'ttfb';
    public static string $name = 'Time to first byte';
    public static string $minimumThreshold = '200';
    public static string $maximumThreshold = '600';
    public static string $unit = 'ms';
}
