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

class LargestContentfulPaintMeasureDto extends AbstractMeasureDto
{
    public static string $shortName = 'lcp';
    public static string $name = 'Largest Contentful Paint';
    public static string $minimumThreshold = '2500';
    public static string $maximumThreshold = '4000';
    public static string $unit = 'ms';
}
