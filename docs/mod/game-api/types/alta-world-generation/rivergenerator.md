---
title: "RiverGenerator"
description: "Part of a procedural forest: works out the river network from the forest's spaces and terrain heights, carves it into the terrain, paints the river bed and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverGenerator

A **class** in `Root.Township`, `Alta.Forests`.

Part of a procedural forest: works out the river network from the forest's spaces and terrain heights, carves it into the terrain, paints the river bed and spawns the river visuals. The result is cached per forest seed.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`ISplatPainter`](/mod/game-api/types/alta-world-generation/isplatpainter)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverGenerator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>29 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatetask" /><code>{"private Task<"}<Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> calculateTask"}</code> | <span className="api-desc">The cached river generation task, started by `GetGenerationAsync`.</span> |
| <Link id="m-curvemaxwidth" /><code>{"private float curveMaxWidth"}</code> | <span className="api-desc">Cap on the part of a river's radius that gets the depth curve and width scaling. Defaults to 3.</span> |
| <Link id="m-curvetangentmultiplier" /><code>{"private float curveTangentMultiplier"}</code> | <span className="api-desc">Tangent strength for the spline that curves split segments. Defaults to 2.</span> |
| <Link id="m-decorationmultiplier" /><code>{"private float decorationMultiplier"}</code> | <span className="api-desc">Passed to the edge segment evaluation for river decorations.</span> |
| <Link id="m-depthcurve" /><code>{"private AnimationCurve depthCurve"}</code> | <span className="api-desc">Curve from distance across the river (0 at the centre) to depth, scaled by the river's radius.</span> |
| <Link id="m-distancenoise" /><code>{"private float distanceNoise"}</code> | <span className="api-desc">Random extra width added per terrain point, as a fraction of the radius, to roughen the banks.</span> |
| <Link id="m-edgesegments" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> edgeSegments"}</code> | <span className="api-desc">Backing field for `EdgeSegments`, filled by `Calculate`.</span> |
| <Link id="m-forest" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | <span className="api-desc">Backing field for `Forest`.</span> |
| <Link id="m-intersections" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/riverintersections">{"RiverIntersections"}</Link>{" intersections"}</code> | <span className="api-desc">Backing field for `Intersections`, built on first use.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-lowerstrengthcurve" /><code>{"private AnimationCurve lowerStrengthCurve"}</code> | <span className="api-desc">How strongly terrain above the river is carved down to it, by distance across.</span> |
| <Link id="m-maxvolume" /><code>{"private float maxVolume"}</code> | <span className="api-desc">Largest river volume, passed to the river generation.</span> |
| <Link id="m-nodewidthmultiplier" /><code>{"private float nodeWidthMultiplier"}</code> | <span className="api-desc">Width multiplier passed to the river generation.</span> |
| <Link id="m-overgroundvolumethreshold" /><code>{"private float overgroundVolumeThreshold"}</code> | <span className="api-desc">Volume a river needs to run overground, passed to the river generation. Defaults to 2.5.</span> |
| <Link id="m-raisestrengthcurve" /><code>{"private AnimationCurve raiseStrengthCurve"}</code> | <span className="api-desc">How strongly terrain below the river is raised to it, by distance across.</span> |
| <Link id="m-riverdepths" /><code>{"private float[,] riverDepths"}</code> | <span className="api-desc">Per terrain point river depth from `Modify`, used to paint the riverbed.</span> |
| <Link id="m-riversegmentminimum" /><code>{"private int riverSegmentMinimum"}</code> | <span className="api-desc">Rivers with fewer overground segments than this upstream are marked too small. Defaults to 3.</span> |
| <Link id="m-rivervalues" /><code>{"private float[,] riverValues"}</code> | <span className="api-desc">Per terrain point river strength (0 to 1) from `Modify`, used for splat painting.</span> |
| <Link id="m-segments" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> segments"}</code> | <span className="api-desc">Backing field for `Segments`, filled by `Calculate`.</span> |
| <Link id="m-splitdistance" /><code>{"private int splitDistance"}</code> | <span className="api-desc">Length each river path is split into, in metres; 0 or less means no split.</span> |
| <Link id="m-splitpositionjitter" /><code>{"private float splitPositionJitter"}</code> | <span className="api-desc">Random offset radius for each split point. Defaults to 0.5.</span> |
| <Link id="m-staticwaterfallvolumemultiplier" /><code>{"private float[] staticWaterfallVolumeMultiplier"}</code> | <span className="api-desc">Volume multipliers for the nodes after a waterfall's bottom.</span> |
| <Link id="m-volumepernode" /><code>{"private AnimationCurve volumePerNode"}</code> | <span className="api-desc">Curve from a space's biome wetness to the water volume it adds.</span> |
| <Link id="m-waterfallalignmentthreshold" /><code>{"private float waterfallAlignmentThreshold"}</code> | <span className="api-desc">A threshold set in the inspector. Not read in the part of the class shown in the server build.</span> |
| <Link id="m-waterfallcliffstrength" /><code>{"private float waterfallCliffStrength"}</code> | <span className="api-desc">Extra weight a waterfall top's height gets when blending terrain heights. Defaults to 5.</span> |
| <Link id="m-waterfallslope" /><code>{"private float waterfallSlope"}</code> | <span className="api-desc">Slope (height over length) above which a river segment becomes a waterfall. Defaults to 1.</span> |
| <Link id="m-waterfallvolumemultiplier" /><code>{"private float waterfallVolumeMultiplier"}</code> | <span className="api-desc">Volume multiplier for the node a waterfall drops into. Defaults to 1.2.</span> |
| <Link id="m-wetnessattribute" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" wetnessAttribute"}</code> | <span className="api-desc">Biome attribute read as wetness for each space's water volume.</span> |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> | <span className="api-desc">Scales river width when carving terrain. Defaults to 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edgesegments-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> EdgeSegments { get; }"}</code> | <span className="api-desc">Decoration segments at river ends, filled when the river is worked out.</span> |
| <Link id="m-forest-2" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" Forest { get; }"}</code> | <span className="api-desc">The forest generator this river belongs to.</span> |
| <Link id="m-intersections-2" /><code><Link to="/mod/game-api/types/alta-world-generation/riverintersections">{"RiverIntersections"}</Link>{" Intersections { get; }"}</code> | <span className="api-desc">Where rivers cross things, worked out on first use. Needs the river to be generated first.</span> |
| <Link id="m-segments-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> Segments { get; }"}</code> | <span className="api-desc">Decoration segments along the rivers.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance(Vector2 point, bool isIncludingRadius)"}</code> | <span className="api-desc">Distance from a point to the nearest overground river, optionally measured from the river's edge.</span> |
| <Link id="m-getgenerationasync" /><code>{"Task<"}<Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> GetGenerationAsync("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access)"}</code> | <span className="api-desc">Works out the river network, or loads it from the cache. The same task is reused after the first call.</span> |
| <Link id="m-modify" /><code>{"async Task Modify("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access)"}</code> | <span className="api-desc">Carves the rivers and waterfalls into a terrain height map, in parallel per column.</span> |
| <Link id="m-paint" /><code>{"void Paint("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random rowRandom, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int x, int z, Vector2 position, ref "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | <span className="api-desc">Paints river splat layers onto a terrain cell from the carved river values.</span> |
| <Link id="m-spawnvisuals" /><code>{"async Task SpawnVisuals("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Client: has every `IRiverVisual` child build its visuals from the river network. Does nothing on a headless server.</span> |
| <Link id="m-trygetgenerated" /><code><Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" TryGetGenerated(bool isError = true)"}</code> | <span className="api-desc">The river network if it's finished, otherwise null (logging an error unless told not to).</span> |
| <Link id="m-wipe" /><code>{"async Task Wipe("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Deletes the cached river network for a forest.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculate" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> Calculate("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access)"}</code> | <span className="api-desc">Builds the river network from the forest's spaces: a node per space, flow downhill, drop short rivers, split segments and add waterfalls. Cached by seed.</span> |
| <Link id="m-getcatmullromposition" /><code>{"private Vector2 GetCatmullRomPosition(float t, Vector2 p0, Vector2 p1, Vector2 p2, Vector2 p3, float tangentStrength)"}</code> | <span className="api-desc">Catmull-Rom spline point between two nodes, with adjustable tangent strength, used to curve split river segments.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the generated river paths: blue overground, green waterfalls, red underground.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RiverGenerator`:

<div className="api-used-in">

[`ForestGenerator.RiverGenerator`](/mod/game-api/types/alta-world-generation/forestgenerator#m-rivergenerator), [`LakeGenerator.riverGenerator`](/mod/game-api/types/alta-world-generation/lakegenerator#m-rivergenerator), [`RiverAudio.river`](/mod/game-api/types/alta-world-generation/riveraudio#m-river), [`RiverCenterFill.river`](/mod/game-api/types/alta-world-generation/rivercenterfill#m-river), [`RiverEdgeFill.river`](/mod/game-api/types/alta-world-generation/riveredgefill#m-river), [`RiverMeshTest.river`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-river), [`WaterfallEffectGenerator.river`](/mod/game-api/types/alta-world-generation/waterfalleffectgenerator#m-river).

</div>
