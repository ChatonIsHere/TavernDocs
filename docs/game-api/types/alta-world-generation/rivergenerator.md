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
| <Link id="m-ctor" /><code>{"RiverGenerator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-calculatetask" /><code>{"private Task<"}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> calculateTask"}</code> |  |
| <Link id="m-curvemaxwidth" /><code>{"private float curveMaxWidth"}</code> |  |
| <Link id="m-curvetangentmultiplier" /><code>{"private float curveTangentMultiplier"}</code> |  |
| <Link id="m-decorationmultiplier" /><code>{"private float decorationMultiplier"}</code> |  |
| <Link id="m-depthcurve" /><code>{"private AnimationCurve depthCurve"}</code> |  |
| <Link id="m-distancenoise" /><code>{"private float distanceNoise"}</code> |  |
| <Link id="m-edgesegments" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> edgeSegments"}</code> |  |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> |  |
| <Link id="m-intersections" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/riverintersections">{"RiverIntersections"}</Link>{" intersections"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-lowerstrengthcurve" /><code>{"private AnimationCurve lowerStrengthCurve"}</code> |  |
| <Link id="m-maxvolume" /><code>{"private float maxVolume"}</code> |  |
| <Link id="m-nodewidthmultiplier" /><code>{"private float nodeWidthMultiplier"}</code> |  |
| <Link id="m-overgroundvolumethreshold" /><code>{"private float overgroundVolumeThreshold"}</code> |  |
| <Link id="m-raisestrengthcurve" /><code>{"private AnimationCurve raiseStrengthCurve"}</code> |  |
| <Link id="m-riverdepths" /><code>{"private float[,] riverDepths"}</code> |  |
| <Link id="m-riversegmentminimum" /><code>{"private int riverSegmentMinimum"}</code> |  |
| <Link id="m-rivervalues" /><code>{"private float[,] riverValues"}</code> |  |
| <Link id="m-segments" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> segments"}</code> |  |
| <Link id="m-splitdistance" /><code>{"private int splitDistance"}</code> |  |
| <Link id="m-splitpositionjitter" /><code>{"private float splitPositionJitter"}</code> |  |
| <Link id="m-staticwaterfallvolumemultiplier" /><code>{"private float[] staticWaterfallVolumeMultiplier"}</code> |  |
| <Link id="m-volumepernode" /><code>{"private AnimationCurve volumePerNode"}</code> |  |
| <Link id="m-waterfallalignmentthreshold" /><code>{"private float waterfallAlignmentThreshold"}</code> |  |
| <Link id="m-waterfallcliffstrength" /><code>{"private float waterfallCliffStrength"}</code> |  |
| <Link id="m-waterfallslope" /><code>{"private float waterfallSlope"}</code> |  |
| <Link id="m-waterfallvolumemultiplier" /><code>{"private float waterfallVolumeMultiplier"}</code> |  |
| <Link id="m-wetnessattribute" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" wetnessAttribute"}</code> |  |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> |  |

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
| <Link id="m-calculate" /><code>{"private async Task<"}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{"> Calculate("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access)"}</code> |  |
| <Link id="m-getcatmullromposition" /><code>{"private Vector2 GetCatmullRomPosition(float t, Vector2 p0, Vector2 p1, Vector2 p2, Vector2 p3, float tangentStrength)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RiverGenerator`:

[`ForestGenerator.RiverGenerator`](/game-api/types/alta-world-generation/forestgenerator#m-rivergenerator), [`LakeGenerator.riverGenerator`](/game-api/types/alta-world-generation/lakegenerator#m-rivergenerator), [`RiverAudio.river`](/game-api/types/alta-world-generation/riveraudio#m-river), [`RiverCenterFill.river`](/game-api/types/alta-world-generation/rivercenterfill#m-river), [`RiverEdgeFill.river`](/game-api/types/alta-world-generation/riveredgefill#m-river), [`RiverMeshTest.river`](/game-api/types/alta-world-generation/rivermeshtest#m-river), [`WaterfallEffectGenerator.river`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-river).
