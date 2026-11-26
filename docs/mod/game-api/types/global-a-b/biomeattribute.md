---
title: "BiomeAttribute"
description: "A named world generation value, such as prosperity, elevation or slope, that biomes set ranges for."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeAttribute

A **class** in `Root.Township`, the global namespace.

A named world generation value, such as prosperity, elevation or slope, that biomes set ranges for. Spawn and loot rules read these values from `SpawnData` attributes.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`AttributeCurveRange`](/mod/game-api/types/global-a-b/attributecurverange), [`AttributeCurveValue`](/mod/game-api/types/global-a-b/attributecurvevalue), [`AttributeDoubleValue`](/mod/game-api/types/global-a-b/attributedoublevalue), [`AttributeSet`](/mod/game-api/types/global-a-b/attributeset), [`AttributeSingleValue`](/mod/game-api/types/global-a-b/attributesinglevalue), [`BiomeAttribute.Create`](/mod/game-api/types/global-a-b/biomeattribute-create)
- **Nested types** [`Create`](/mod/game-api/types/global-a-b/biomeattribute-create)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeAttribute()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

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

[`Biome.GetAttribute`](/mod/game-api/types/alta-world-generation/biome#m-getattribute), [`BiomeResources.attributes`](/mod/game-api/types/alta-world-generation/biomeresources#m-attributes), [`BiomeResources.Attributes`](/mod/game-api/types/alta-world-generation/biomeresources#m-attributes-2), [`BiomeSettings.prosperityAttribute`](/mod/game-api/types/alta-world-generation/biomesettings#m-prosperityattribute), [`BiomeSettings.ProsperityAttribute`](/mod/game-api/types/alta-world-generation/biomesettings#m-prosperityattribute-2), [`GeneratingBiome.attributeRanges`](/mod/game-api/types/alta-world-generation/generatingbiome#m-attributeranges), [`BlobEdge.sizeAttribute`](/mod/game-api/types/alta-world-generation/blobedge#m-sizeattribute), [`BlobEdge.SizeAttribute`](/mod/game-api/types/alta-world-generation/blobedge#m-sizeattribute-2), [`BasePart.Attributes`](/mod/game-api/types/alta-console/basepart#m-attributes), [`ForestConnectivityIncreaser.cutChance`](/mod/game-api/types/alta-world-generation/forestconnectivityincreaser#m-cutchance), [`ForestPathAttributeLerper.attributes`](/mod/game-api/types/alta-world-generation/forestpathattributelerper#m-attributes), [`RiverGenerator.wetnessAttribute`](/mod/game-api/types/alta-world-generation/rivergenerator#m-wetnessattribute), [`AttributeImpact.attribute`](/mod/game-api/types/alta-world-generation/attributeimpact#m-attribute), [`AttributeCurveRange.AttributeCurveRange`](/mod/game-api/types/global-a-b/attributecurverange#m-ctor-2), [`AttributeCurveValue.AttributeCurveValue`](/mod/game-api/types/global-a-b/attributecurvevalue#m-ctor-2), [`AttributeDoubleValue.AttributeDoubleValue`](/mod/game-api/types/global-a-b/attributedoublevalue#m-ctor-2), [`AttributeSet.attributes`](/mod/game-api/types/global-a-b/attributeset#m-attributes), [`AttributeSet.Get`](/mod/game-api/types/global-a-b/attributeset#m-get), [`AttributeSet.GetEnumerator`](/mod/game-api/types/global-a-b/attributeset#m-getenumerator), [`AttributeSet.IsSet`](/mod/game-api/types/global-a-b/attributeset#m-isset), [`AttributeSet.Set`](/mod/game-api/types/global-a-b/attributeset#m-set), [`MiningBaseGenerator.PartOption.attribute`](/mod/game-api/types/global-m-o/miningbasegenerator-partoption#m-attribute), [`MiningBaseGenerator.PartOption.Attribute`](/mod/game-api/types/global-m-o/miningbasegenerator-partoption#m-attribute-2), [`SpawnData.OverrideAttribute`](/mod/game-api/types/global-s/spawndata#m-overrideattribute), [`SpecialBiomeAttributes.depth`](/mod/game-api/types/global-s/specialbiomeattributes#m-depth), [`SpecialBiomeAttributes.Depth`](/mod/game-api/types/global-s/specialbiomeattributes#m-depth-2), [`SpecialBiomeAttributes.distanceFromBorder`](/mod/game-api/types/global-s/specialbiomeattributes#m-distancefromborder), [`SpecialBiomeAttributes.DistanceFromBorder`](/mod/game-api/types/global-s/specialbiomeattributes#m-distancefromborder-2), [`SpecialBiomeAttributes.distanceFromPath`](/mod/game-api/types/global-s/specialbiomeattributes#m-distancefrompath), [`SpecialBiomeAttributes.DistanceFromPath`](/mod/game-api/types/global-s/specialbiomeattributes#m-distancefrompath-2), [`SpecialBiomeAttributes.elevation`](/mod/game-api/types/global-s/specialbiomeattributes#m-elevation), [`SpecialBiomeAttributes.Elevation`](/mod/game-api/types/global-s/specialbiomeattributes#m-elevation-2), [`SpecialBiomeAttributes.radius`](/mod/game-api/types/global-s/specialbiomeattributes#m-radius), [`SpecialBiomeAttributes.Radius`](/mod/game-api/types/global-s/specialbiomeattributes#m-radius-2), [`SpecialBiomeAttributes.relativeElevationMax`](/mod/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmax), [`SpecialBiomeAttributes.RelativeElevationMax`](/mod/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmax-2), [`SpecialBiomeAttributes.relativeElevationMin`](/mod/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmin), [`SpecialBiomeAttributes.RelativeElevationMin`](/mod/game-api/types/global-s/specialbiomeattributes#m-relativeelevationmin-2), [`SpecialBiomeAttributes.slope`](/mod/game-api/types/global-s/specialbiomeattributes#m-slope), [`SpecialBiomeAttributes.Slope`](/mod/game-api/types/global-s/specialbiomeattributes#m-slope-2), [`SpecialBiomeAttributes.traversalDepth`](/mod/game-api/types/global-s/specialbiomeattributes#m-traversaldepth), [`SpecialBiomeAttributes.TraversalDepth`](/mod/game-api/types/global-s/specialbiomeattributes#m-traversaldepth-2).
