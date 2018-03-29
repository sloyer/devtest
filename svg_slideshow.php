<?php
/* should work if PHP instance has XSLT 1.0 support installed */
$xml = new DOMDocument;
$xml->load('data.xml');

$xsl = new DOMDocument;
$xsl->load('svg_slideshow.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

echo $proc->transformToXML($xml);
?>