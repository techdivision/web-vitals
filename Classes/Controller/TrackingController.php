<?php
declare(strict_types = 1);

namespace TechDivision\WebVitals\Controller;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Property\PropertyMappingConfiguration;
use TechDivision\WebVitals\Domain\Model\WebVitalMeasure;
use TechDivision\WebVitals\Domain\Repository\WebVitalMeasureRepository;

/**
 * This file is part of the TechDivision.WebVitals package.
 *
 * TechDivision - neos@techdivision.com
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

class TrackingController extends ActionController
{

    /**
     * @var WebVitalMeasureRepository
     * @Flow\Inject
     */
    protected $webVitalMeasureRepository;

    /**
     * initialize the track action
     */
    protected function initializeTrackAction()
    {
        /** @var PropertyMappingConfiguration $propertyMappingConfiguration */
        $propertyMappingConfiguration = $this->arguments['webVitalMeasure']->getPropertyMappingConfiguration();
        $propertyMappingConfiguration->allowProperties(
            'siteReference',
            'nodeReference',
            'nodeDimensions',
            'cls',
            'fid',
            'lcp',
            'ttfb',
            'fcp'
        );
        $propertyMappingConfiguration->setTypeConverterOption(
            \Neos\Flow\Property\TypeConverter\PersistentObjectConverter::class,
            \Neos\Flow\Property\TypeConverter\PersistentObjectConverter::CONFIGURATION_CREATION_ALLOWED,
            TRUE
        );
    }

    /**
     * @param WebVitalMeasure $webVitalMeasure
     * @return false|string
     */
    public function trackAction(WebVitalMeasure $webVitalMeasure): ?string
    {
        $httpRequest = $this->request->getHttpRequest();
        // we only allow referred requests.
        if ($httpRequest->getHeader('Referer') || $httpRequest->getHeader('referer')) {
            $this->webVitalMeasureRepository->add($webVitalMeasure);
            $this->persistenceManager->persistAll();
        }
        $this->response->setContentType('image/gif');
        return file_get_contents('resource://TechDivision.WebVitals/Public/Images/Pixel.gif');
    }
}
