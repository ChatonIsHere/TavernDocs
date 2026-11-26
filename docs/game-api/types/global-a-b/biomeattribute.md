---
title: "BiomeAttribute"
description: "A named world generation value, such as prosperity, elevation or slope, that biomes set ranges for."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeAttribute

A **class** in `Root.Township`, no namespace.

A named world generation value, such as prosperity, elevation or slope, that biomes set ranges for. Spawn and loot rules read these values from `SpawnData` attributes.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`AttributeCurveRange`](/game-api/types/global-a-b/attributecurverange), [`AttributeCurveValue`](/game-api/types/global-a-b/attributecurvevalue), [`AttributeDoubleValue`](/game-api/types/global-a-b/attributedoublevalue), [`AttributeSet`](/game-api/types/global-a-b/attributeset), [`AttributeSingleValue`](/game-api/types/global-a-b/attributesinglevalue), [`BiomeAttribute.Create`](/game-api/types/global-a-b/biomeattribute-create)
- **Nested types** [`Create`](/game-api/types/global-a-b/biomeattribute-create)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BiomeAttribute()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultmaximum" /><code>{"private float defaultMaximum"}</code> | Backing field for `DefaultMaximum`, the top of the random range when no value is set. |
| <Link id="m-defaultminimum" /><code>{"private float defaultMinimum"}</code> | Backing field for `DefaultMinimum`, the bottom of the random range when no value is set. |
| <Link id="m-extraperlayer" /><code>{"private float extraPerLayer"}</code> | Backing field for `ExtraPerLayer`: added per cave layer depth. |
| <Link id="m-isprocedural" /><code>{"private bool isProcedural"}</code> | Backing field for `IsProcedural`. Procedural attributes are blended along forest edges into spawn data. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultmaximum-2" /><code>{"float DefaultMaximum { get; }"}</code> | Upper value used when a biome doesn't set this attribute. |
| <Link id="m-defaultminimum-2" /><code>{"float DefaultMinimum { get; }"}</code> | Lower value used when a biome doesn't set this attribute. |
| <Link id="m-extraperlayer-2" /><code>{"float ExtraPerLayer { get; }"}</code> | Added once per depth layer in cave biomes, so the value grows deeper down. |
| <Link id="m-isprocedural-2" /><code>{"bool IsProcedural { get; }"}</code> | When true, forest spawning averages the value between the two nodes of the nearest path edge. |

## Used in

Members of other types that take, return or hold a `BiomeAttribute`:

[`Biome.GetAttribute`](/game-api/types/alta-world-generation/biome#m-getattribute), [`BiomeResources.attributes`](/game-api/types/alta-world-generation/biomeresources#m-attributes), [`BiomeResources.Attributes`](/game-api/types/alta-world-generation/biomeresources#m-attributes-2), [`BiomeSettings.prosperityAttribute`](/game-api/types/alta-world-generation/biomesettings#m-prosperityattribute), [`BiomeSettings.ProsperityAttribute`](/game-api/types/alta-world-generation/biomesettings#m-prosperityattribute-2), [`GeneratingBiome.attributeRanges`](/game-api/types/alta-world-generation/generatingbiome#m-attributeranges), [`BlobEdge.sizeAttribute`](/game-api/types/alta-world-generation/blobedge#m-sizeattribute), [`BlobEdge.SizeAttribute`](/game-api/types/alta-world-generation/blobedge#m-sizeattribute-2), [`BasePart.Attributes`](/game-api/types/alta-console/basepart#m-attributes), [`ForestConnectivityIncreaser.cutChance`](/game-api/types/alta-world-generation/forestconnectivityincreaser#m-cutchance), [`ForestPathAttributeLerper.attributes`](/game-api/types/alta-world-generation/forestpathattributelerper#m-attributes), [`RiverGenerator.wetnessAttribute`](/game-api/types/alta-world-generation/rivergenerator#m-wetnessattribute), [`AttributeImpact.attribute`](/game-api/types/alta-world-generation/attributeimpact#m-attribute), [`AttributeCurveRange.AttributeCurveRange`](/game-api/types/global-a-b/attributecurverange#m-ctor-2), [`AttributeCurveValue.AttributeCurveValue`](/game-api/types/global-a-b/attributecurvevalue#m-ctor-2), [`AttributeDoubleValue.AttributeDoubleValue`](/game-api/types/global-a-b/attributedoublevalue#m-ctor-2), [`AttributeSet.attributes`](/game-api/types/global-a-b/attributeset#m-attributes), [`AttributeSet.Get`](/game-api/types/global-a-b/attributeset#m-get), [`AttributeSet.GetEnumerator`](/game-api/types/global-a-b/attributeset#m-getenumerator), [`AttributeSet.IsSet`](/game-api/types/global-a-b/attributeset#m-isset), [`AttributeSet.Set`](/game-api/types/global-a-b/attributeset#m-set), [`MiningBaseGenerator.PartOption.attribute`](/game-api/types/global-m-o/miningbasegenerator-partoption#m-attribute), [`MiningBaseGenerator.PartOption.Attribute`](/game-api/types/global-m-o/miningbasegenerator-partoption#m-attribute-2), [`SpawnData.OverrideAttribute`](/game-api/types/global-s/spawndata#m-overrideattribute), [`SpecialBiomeAttributes.depth`](/game-api/types/global-s/specialbiomeattributes#m-depth), [`SpecialBiomeAttributes.Depth`](/game-api/types/global-s/specialbiomeattributes#m-depth-2), [`SpecialBiomeAttributes.distanceFromBorder`](/game-api/types/global-s/specialbiomeattributes#m-distancefromborder), [`SpecialBiomeAttributes.DistanceFromBorder`](/game-api/types/global-s/specialbiomeattributes#m-distancefromborder-2), [`SpecialBiomeAttributes.distanceFromPath`](/game-api/types/global-s/specialbiomeattributes#m-distancefrompath), [`SpecialBiomeAttributes.DistanceFromPath`](/game-api/types/global-s/specialbiomeattributes#m-distancefrompath-2), [`SpecialBiomeAttributes.elevation`](/game-api/types/global-s/specialbiomeattributes#m-elevation), [`SpecialBiomeAttributes.Elevation`](/game-api/types/global-s/specialbiomeattributes#m-elevation-2), [`SpecialBiomeAttributes.radius`](/game-api/types/global-s/specialbiomeattributes#m-radius), [`SpecialBiomeAttributes.Radius`](/game-api/types/global-s/specialbiomeattributes#m-radius-2), [`SpecialBiomeAttributes.relativeElevationMax`](/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmax), [`SpecialBiomeAttributes.RelativeElevationMax`](/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmax-2), [`SpecialBiomeAttributes.relativeElevationMin`](/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmin), [`SpecialBiomeAttributes.RelativeElevationMin`](/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmin-2), [`SpecialBiomeAttributes.slope`](/game-api/types/global-s/specialbiomeattributes#m-slope), [`SpecialBiomeAttributes.Slope`](/game-api/types/global-s/specialbiomeattributes#m-slope-2), [`SpecialBiomeAttributes.traversalDepth`](/game-api/types/global-s/specialbiomeattributes#m-traversaldepth), [`SpecialBiomeAttributes.TraversalDepth`](/game-api/types/global-s/specialbiomeattributes#m-traversaldepth-2).
