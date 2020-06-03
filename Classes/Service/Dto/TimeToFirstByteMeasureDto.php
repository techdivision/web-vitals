<?php
declare(strict_types=1);

namespace TechDivision\WebVitals\Service\Dto;

use Neos\Flow\Annotations as Flow;

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
    public static $shortName = 'ttfb';
    public static $name = 'Time to first byte';
    public static $minimumThreshold = '200';
    public static $maximumThreshold = '600';
    public static $unit = 'ms';
}
