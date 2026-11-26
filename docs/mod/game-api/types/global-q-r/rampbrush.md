---
title: "RampBrush"
description: "Editor tool for terrain: strokes a ramp along control points into the terrain heightmap, blending with brush size, softness and opacity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RampBrush

A **class** in `Root.Township`, the global namespace.

Editor tool for terrain: strokes a ramp along control points into the terrain heightmap, blending with brush size, softness and opacity. Needs a `Terrain` on the same object; not used at runtime.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`, `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RampBrush()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-backupvector" /><code>{"Vector3 backupVector"}</code> | <span className="api-desc">Spare vector kept by the tool.</span> |
| <Link id="m-beginramp" /><code>{"Vector3 beginRamp"}</code> | <span className="api-desc">Start point of a single ramp.</span> |
| <Link id="m-brushon" /><code>{"bool brushOn"}</code> | <span className="api-desc">Whether the brush is on.</span> |
| <Link id="m-brushopacity" /><code>{"float brushOpacity"}</code> | <span className="api-desc">How strongly the ramp replaces the existing height (0 to 1).</span> |
| <Link id="m-brushposition" /><code>{"Vector3 brushPosition"}</code> | <span className="api-desc">Where the brush gizmo is drawn.</span> |
| <Link id="m-brushsampledensity" /><code>{"float brushSampleDensity"}</code> | <span className="api-desc">How often the brush is stamped along the path.</span> |
| <Link id="m-brushsize" /><code>{"float brushSize"}</code> | <span className="api-desc">Brush width in world units.</span> |
| <Link id="m-brushsoftness" /><code>{"float brushSoftness"}</code> | <span className="api-desc">How soft the brush edge is.</span> |
| <Link id="m-controlpoints" /><code>{"List<Vector3> controlPoints"}</code> | <span className="api-desc">Points the ramp path runs through.</span> |
| <Link id="m-endramp" /><code>{"Vector3 endRamp"}</code> | <span className="api-desc">End point of a single ramp.</span> |
| <Link id="m-isbrushhidden" /><code>{"bool isBrushHidden"}</code> | <span className="api-desc">Editor flag to hide the brush.</span> |
| <Link id="m-multipoint" /><code>{"bool multiPoint"}</code> | <span className="api-desc">Whether the ramp uses the control point list rather than one start point.</span> |
| <Link id="m-numsubdivperseg" /><code>{"int numSubDivPerSeg"}</code> | <span className="api-desc">Subdivisions per path segment.</span> |
| <Link id="m-shiftprocessed" /><code>{"bool shiftProcessed"}</code> | <span className="api-desc">Editor input flag.</span> |
| <Link id="m-sizejitter" /><code>{"float sizeJitter"}</code> | <span className="api-desc">Random variation in brush size.</span> |
| <Link id="m-spacingjitter" /><code>{"float spacingJitter"}</code> | <span className="api-desc">Random sideways offset of each stamp, as a fraction of the brush size.</span> |
| <Link id="m-turnbrushonvar" /><code>{"bool turnBrushOnVar"}</code> | <span className="api-desc">Whether the brush gizmo is drawn.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distbetweenpoints" /><code>{"private List<float> _distBetweenPoints"}</code> | <span className="api-desc">Length of each segment between control points, filled by `calculateDistBetweenPoints`.</span> |
| <Link id="m-totallength" /><code>{"private float _totalLength"}</code> | <span className="api-desc">Total path length through the control points in world units.</span> |
| <Link id="m-totallengthpixels" /><code>{"private float _totalLengthPixels"}</code> | <span className="api-desc">Total path length in heightmap pixels, used to space brush samples when stroking a path.</span> |
| <Link id="m-verbose" /><code>{"private bool VERBOSE"}</code> | <span className="api-desc">Private flag that turns on debug logging while painting; off by default.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-strokepath-2" /><code>{"void _StrokePath()"}</code> | <span className="api-desc">Flattens the terrain into a ramp along the control points, blended by the brush settings.</span> |
| <Link id="m-bitmapcordstoterrain" /><code>{"float[] bitmapCordsToTerrain(TerrainData terData, int x, int y)"}</code> | <span className="api-desc">Turns heightmap pixel coordinates into terrain-local x and z.</span> |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the brush and the ramp's control points and path in the scene view.</span> |
| <Link id="m-rampbrush" /><code>{"void rampBrush()"}</code> | <span className="api-desc">Checks for a terrain and reads its data, but does nothing else in this build.</span> |
| <Link id="m-strokepath" /><code>{"void StrokePath()"}</code> | <span className="api-desc">Runs `_StrokePath`.</span> |
| <Link id="m-terraincordstobitmap" /><code>{"int[] terrainCordsToBitmap(TerrainData terData, Vector3 v)"}</code> | <span className="api-desc">Turns terrain-local coordinates into heightmap pixel coordinates.</span> |
| <Link id="m-togglebrushon" /><code>{"void toggleBrushOn()"}</code> | <span className="api-desc">Flips whether the brush gizmo is drawn.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatedistbetweenpoints" /><code>{"private void calculateDistBetweenPoints(List<Vector3> cps)"}</code> | <span className="api-desc">Fills `_distBetweenPoints` and `_totalLength` from a list of control points.</span> |
| <Link id="m-calculatedistbetweenpointsinpixels" /><code>{"private void calculateDistBetweenPointsInPixels(List<Vector3> cps, TerrainData terData)"}</code> | <span className="api-desc">Sums the path length in heightmap pixels into `_totalLengthPixels`.</span> |
| <Link id="m-parameterizedline" /><code>{"private Ray parameterizedLine(float t, List<Vector3> cps, StringBuilder sb = null)"}</code> | <span className="api-desc">Returns the point and direction at fraction `t` along a Catmull-Rom spline through the control points.</span> |

</details>
