<!-- XSLT script to automatically generate SVG SMIL slideshow from an XML db -->
<xsl:stylesheet version="1.0"
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xmlns="http://www.w3.org/2000/svg">
  <xsl:output method="xml"/>
  <xsl:template match="/">
    <svg id="i_love_slideshow_svg" height="400px" width="1080px">
      <g id="i_love_slideshow_svg_g">
	<xsl:apply-templates select="//animal" />
      </g>
    </svg>
  </xsl:template>

  <xsl:template match="animal">
    <xsl:variable name="file" select="slider/@path" />
    <xsl:variable name="width" select="slider/@width" />
    <xsl:variable name="height" select="slider/@height" />

    <xsl:choose>
      <xsl:when test="position() = 1">
	<xsl:variable name="count" select="count(../animal)" />
	<!-- show first element -->
	<animateMotion id="motion{position()}_s" path="M 0 0" begin="0s;motion{$count}.end" dur="3s" />
	<!-- bring in the next slide -->
	<animateMotion id="motion{position()}" path="M 0 0 L -{$width} 0" begin="motion{position()}_s.end" dur="6s" />

	<!-- first element -->
	<image id="i_love_slideshow_{@name}" xlink:href="{$file}" width="{$width}px" height="{$height}px" y="0px" x="0px" />
	<!-- last element -->
	<image id="i_love_slideshow_{@name}_2" xlink:href="{$file}" width="{$width}px" height="{$height}px" y="0px" x="{$width * $count}px" />
      </xsl:when>
      <xsl:otherwise>
	<!-- show slide -->
	<animateMotion id="motion{position()}_s" path="M -{$width * (position() - 1)} 0" begin="motion{position() - 1}.end" dur="3s" />
	<!-- bring in the next slide -->
	<animateMotion id="motion{position()}" path="M -{$width * (position() - 1)} 0 L -{$width * position()} 0" begin="motion{position()}_s.end" dur="6s" />
	<image id="i_love_slideshow_{@name}" xlink:href="{$file}" width="{$width}px" height="{$height}px" y="0px" x="{$width * (position() - 1)}px" />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
