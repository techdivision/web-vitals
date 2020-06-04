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

class CumulativeLayoutShiftMeasureDto extends AbstractMeasureDto
{
    public static $shortName = 'cls';
    public static $name = 'Cumulative layout shift';
    public static $minimumThreshold = '0.1';
    public static $maximumThreshold = '0.25';
    public static $unit = '';
}
