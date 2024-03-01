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

class FirstInputDelayMeasureDto extends AbstractMeasureDto
{
    public static string $shortName = 'fid';
    public static string $name = 'First input delay';
    public static string $minimumThreshold = '100';
    public static string $maximumThreshold = '300';
    public static string $unit = 'ms';
}
