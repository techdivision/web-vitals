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

class FirstInputDelayMeasureDto extends AbstractMeasureDto
{
    public static $shortName = 'fid';
    public static $name = 'First input delay';
    public static $minimumThreshold = '100';
    public static $maximumThreshold = '300';
    public static $unit = 'ms';
}
