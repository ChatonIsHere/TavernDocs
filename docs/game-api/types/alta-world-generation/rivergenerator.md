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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`ISplatPainter`](/game-api/types/alta-world-generation/isplatpainter)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverGenerator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>29 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatetask" /><code>{"private Task<"}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> calculateTask"}</code> | The cached river generation task, started by `GetGenerationAsync`. |
| <Link id="m-curvemaxwidth" /><code>{"private float curveMaxWidth"}</code> | Cap on the part of a river's radius that gets the depth curve and width scaling. Defaults to 3. |
| <Link id="m-curvetangentmultiplier" /><code>{"private float curveTangentMultiplier"}</code> | Tangent strength for the spline that curves split segments. Defaults to 2. |
| <Link id="m-decorationmultiplier" /><code>{"private float decorationMultiplier"}</code> | Passed to the edge segment evaluation for river decorations. |
| <Link id="m-depthcurve" /><code>{"private AnimationCurve depthCurve"}</code> | Curve from distance across the river (0 at the centre) to depth, scaled by the river's radius. |
| <Link id="m-distancenoise" /><code>{"private float distanceNoise"}</code> | Random extra width added per terrain point, as a fraction of the radius, to roughen the banks. |
| <Link id="m-edgesegments" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> edgeSegments"}</code> | Backing field for `EdgeSegments`, filled by `Calculate`. |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | Backing field for `Forest`. |
| <Link id="m-intersections" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/riverintersections">{"RiverIntersections"}</Link>{" intersections"}</code> | Backing field for `Intersections`, built on first use. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-lowerstrengthcurve" /><code>{"private AnimationCurve lowerStrengthCurve"}</code> | How strongly terrain above the river is carved down to it, by distance across. |
| <Link id="m-maxvolume" /><code>{"private float maxVolume"}</code> | Largest river volume, passed to the river generation. |
| <Link id="m-nodewidthmultiplier" /><code>{"private float nodeWidthMultiplier"}</code> | Width multiplier passed to the river generation. |
| <Link id="m-overgroundvolumethreshold" /><code>{"private float overgroundVolumeThreshold"}</code> | Volume a river needs to run overground, passed to the river generation. Defaults to 2.5. |
| <Link id="m-raisestrengthcurve" /><code>{"private AnimationCurve raiseStrengthCurve"}</code> | How strongly terrain below the river is raised to it, by distance across. |
| <Link id="m-riverdepths" /><code>{"private float[,] riverDepths"}</code> | Per terrain point river depth from `Modify`, used to paint the riverbed. |
| <Link id="m-riversegmentminimum" /><code>{"private int riverSegmentMinimum"}</code> | Rivers with fewer overground segments than this upstream are marked too small. Defaults to 3. |
| <Link id="m-rivervalues" /><code>{"private float[,] riverValues"}</code> | Per terrain point river strength (0 to 1) from `Modify`, used for splat painting. |
| <Link id="m-segments" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> segments"}</code> | Backing field for `Segments`, filled by `Calculate`. |
| <Link id="m-splitdistance" /><code>{"private int splitDistance"}</code> | Length each river path is split into, in metres; 0 or less means no split. |
| <Link id="m-splitpositionjitter" /><code>{"private float splitPositionJitter"}</code> | Random offset radius for each split point. Defaults to 0.5. |
| <Link id="m-staticwaterfallvolumemultiplier" /><code>{"private float[] staticWaterfallVolumeMultiplier"}</code> | Volume multipliers for the nodes after a waterfall's bottom. |
| <Link id="m-volumepernode" /><code>{"private AnimationCurve volumePerNode"}</code> | Curve from a space's biome wetness to the water volume it adds. |
| <Link id="m-waterfallalignmentthreshold" /><code>{"private float waterfallAlignmentThreshold"}</code> | A threshold set in the inspector. Not read in the part of the class shown in the server build. |
| <Link id="m-waterfallcliffstrength" /><code>{"private float waterfallCliffStrength"}</code> | Extra weight a waterfall top's height gets when blending terrain heights. Defaults to 5. |
| <Link id="m-waterfallslope" /><code>{"private float waterfallSlope"}</code> | Slope (height over length) above which a river segment becomes a waterfall. Defaults to 1. |
| <Link id="m-waterfallvolumemultiplier" /><code>{"private float waterfallVolumeMultiplier"}</code> | Volume multiplier for the node a waterfall drops into. Defaults to 1.2. |
| <Link id="m-wetnessattribute" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" wetnessAttribute"}</code> | Biome attribute read as wetness for each space's water volume. |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> | Scales river width when carving terrain. Defaults to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-edgesegments-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> EdgeSegments { get; }"}</code> | Decoration segments at river ends, filled when the river is worked out. |
| <Link id="m-forest-2" /><code><Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" Forest { get; }"}</code> | The forest generator this river belongs to. |
| <Link id="m-intersections-2" /><code><Link to="/game-api/types/alta-world-generation/riverintersections">{"RiverIntersections"}</Link>{" Intersections { get; }"}</code> | Where rivers cross things, worked out on first use. Needs the river to be generated first. |
| <Link id="m-segments-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> Segments { get; }"}</code> | Decoration segments along the rivers. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"float Distance(Vector2 point, bool isIncludingRadius)"}</code> | Distance from a point to the nearest overground river, optionally measured from the river's edge. |
| <Link id="m-getgenerationasync" /><code>{"Task<"}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> GetGenerationAsync("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access)"}</code> | Works out the river network, or loads it from the cache. The same task is reused after the first call. |
| <Link id="m-modify" /><code>{"async Task Modify("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access)"}</code> | Carves the rivers and waterfalls into a terrain height map, in parallel per column. |
| <Link id="m-paint" /><code>{"void Paint("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random rowRandom, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int x, int z, Vector2 position, ref "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | Paints river splat layers onto a terrain cell from the carved river values. |
| <Link id="m-spawnvisuals" /><code>{"async Task SpawnVisuals("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Client: has every `IRiverVisual` child build its visuals from the river network. Does nothing on a headless server. |
| <Link id="m-trygetgenerated" /><code><Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" TryGetGenerated(bool isError = true)"}</code> | The river network if it's finished, otherwise null (logging an error unless told not to). |
| <Link id="m-wipe" /><code>{"async Task Wipe("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | Deletes the cached river network for a forest. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculate" /><code>{"private async Task<"}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> Calculate("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access)"}</code> | Builds the river network from the forest's spaces: a node per space, flow downhill, drop short rivers, split segments and add waterfalls. Cached by seed. |
| <Link id="m-getcatmullromposition" /><code>{"private Vector2 GetCatmullRomPosition(float t, Vector2 p0, Vector2 p1, Vector2 p2, Vector2 p3, float tangentStrength)"}</code> | Catmull-Rom spline point between two nodes, with adjustable tangent strength, used to curve split river segments. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the generated river paths: blue overground, green waterfalls, red underground. |

</details>

## Used in

Members of other types that take, return or hold a `RiverGenerator`:

[`ForestGenerator.RiverGenerator`](/game-api/types/alta-world-generation/forestgenerator#m-rivergenerator), [`LakeGenerator.riverGenerator`](/game-api/types/alta-world-generation/lakegenerator#m-rivergenerator), [`RiverAudio.river`](/game-api/types/alta-world-generation/riveraudio#m-river), [`RiverCenterFill.river`](/game-api/types/alta-world-generation/rivercenterfill#m-river), [`RiverEdgeFill.river`](/game-api/types/alta-world-generation/riveredgefill#m-river), [`RiverMeshTest.river`](/game-api/types/alta-world-generation/rivermeshtest#m-river), [`WaterfallEffectGenerator.river`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-river).
