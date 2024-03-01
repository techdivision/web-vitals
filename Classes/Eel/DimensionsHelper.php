<?php
declare(strict_types=1);

namespace TechDivision\WebVitals\Eel;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Utility;
use Neos\Flow\Annotations as Flow;
use Neos\Eel\ProtectedContextAwareInterface;

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
 * @Flow\Proxy(false)
 */
class DimensionsHelper implements ProtectedContextAwareInterface
{
    /**
     * @param NodeInterface $node
     * @return string
     */
    public function getHash(NodeInterface $node): string
    {
        $dimensions = $node->getDimensions();
        return Utility::sortDimensionValueArrayAndReturnDimensionsHash($dimensions);
    }

    /**
     * All methods are considered safe
     *
     * @param string $methodName
     * @return boolean
     */
    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
