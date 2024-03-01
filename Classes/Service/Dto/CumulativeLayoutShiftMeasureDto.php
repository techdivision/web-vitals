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

class CumulativeLayoutShiftMeasureDto extends AbstractMeasureDto
{
    public static string $shortName = 'cls';
    public static string $name = 'Cumulative layout shift';
    public static string $minimumThreshold = '0.1';
    public static string $maximumThreshold = '0.25';
    public static string $unit = '';
}
