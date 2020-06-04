<?php
declare(strict_types = 1);

namespace TechDivision\WebVitals\Domain\Model;

use Neos\Flow\Annotations as Flow;
use Doctrine\ORM\Mapping as ORM;

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
 * @Flow\Entity
 * @api
 */
class WebVitalMeasure {

    /**
     * @var string
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="UUID")
     * @ORM\Column(name="persistence_object_identifier", type="string", length=40)
     */
    protected $Persistence_Object_Identifier;

    /**
     * site identifier
     * @var string
     */
    protected $siteReference;

    /**
     * node identifier
     * @var string
     */
    protected $nodeReference;

    /**
     * node identifier
     * @var string
     */
    protected $nodeDimensions;

    /**
     * cumulated layout shift
     * @var float
     * @ORM\Column(nullable=true)
     */
    protected $cls;

    /**
     * first contentful paint
     * @var float
     * @ORM\Column(nullable=true)
     */
    protected $fcp;

    /**
     * first input delay
     * @var float
     * @ORM\Column(nullable=true)
     */
    protected $fid;

    /**
     * largest contentful paint
     * @var float
     * @ORM\Column(nullable=true)
     */
    protected $lcp;

    /**
     * time to first byte
     * @var float
     * @ORM\Column(nullable=true)
     */
    protected $ttfb;

    /**
     * entryDate
     * @var \DateTime
     */
    protected $entryDate;

    /**
     * WebVitalMeasure constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        $this->entryDate = new \DateTime();
    }

    /**
     * @return float
     */
    public function getCls(): ?float
    {
        return $this->cls;
    }

    /**
     * @param float $cls
     */
    public function setCls(float $cls): void
    {
        $this->cls = $cls;
    }

    /**
     * @return float
     */
    public function getFcp(): ?float
    {
        return $this->fcp;
    }

    /**
     * @param float $fcp
     */
    public function setFcp(float $fcp): void
    {
        $this->fcp = $fcp;
    }

    /**
     * @return float
     */
    public function getFid(): ?float
    {
        return $this->fid;
    }

    /**
     * @param float $fid
     */
    public function setFid(float $fid): void
    {
        $this->fid = $fid;
    }

    /**
     * @return float
     */
    public function getLcp(): ?float
    {
        return $this->lcp;
    }

    /**
     * @param float $lcp
     */
    public function setLcp(float $lcp): void
    {
        $this->lcp = $lcp;
    }

    /**
     * @return float
     */
    public function getTtfb(): ?float
    {
        return $this->ttfb;
    }

    /**
     * @param float $ttfb
     */
    public function setTtfb(float $ttfb): void
    {
        $this->ttfb = $ttfb;
    }

    /**
     * @return string
     */
    public function getSiteReference(): string
    {
        return $this->siteReference;
    }

    /**
     * @param string $siteReference
     */
    public function setSiteReference(string $siteReference)
    {
        $this->siteReference = $siteReference;
    }

    /**
     * @return string
     */
    public function getNodeReference()
    {
        return $this->nodeReference;
    }

    /**
     * @param string $nodeReference
     */
    public function setNodeReference($nodeReference)
    {
        $this->nodeReference = $nodeReference;
    }

    /**
     * @return string
     */
    public function getNodeDimensions()
    {
        return $this->nodeDimensions;
    }

    /**
     * @param string $nodeDimensions
     */
    public function setNodeDimensions($nodeDimensions)
    {
        $this->nodeDimensions = $nodeDimensions;
    }


    /**
     * @return string
     */
    public function getPersistenceObjectIdentifier()
    {
        return $this->Persistence_Object_Identifier;
    }

    /**
     * @param string $Persistence_Object_Identifier
     */
    public function setPersistenceObjectIdentifier($Persistence_Object_Identifier)
    {
        $this->Persistence_Object_Identifier = $Persistence_Object_Identifier;
    }


    /**
     * @return \DateTime
     */
    public function getEntryDate(): \DateTime
    {
        return $this->entryDate;
    }

    /**
     * @param \DateTime $entryDate
     */
    public function setEntryDate(\DateTime $entryDate)
    {
        $this->entryDate = $entryDate;
    }
}
