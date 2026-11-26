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
| <Link id="m-ctor" /><code>{"RampBrush()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-backupvector" /><code>{"Vector3 backupVector"}</code> | Spare vector kept by the tool. |
| <Link id="m-beginramp" /><code>{"Vector3 beginRamp"}</code> | Start point of a single ramp. |
| <Link id="m-brushon" /><code>{"bool brushOn"}</code> | Whether the brush is on. |
| <Link id="m-brushopacity" /><code>{"float brushOpacity"}</code> | How strongly the ramp replaces the existing height (0 to 1). |
| <Link id="m-brushposition" /><code>{"Vector3 brushPosition"}</code> | Where the brush gizmo is drawn. |
| <Link id="m-brushsampledensity" /><code>{"float brushSampleDensity"}</code> | How often the brush is stamped along the path. |
| <Link id="m-brushsize" /><code>{"float brushSize"}</code> | Brush width in world units. |
| <Link id="m-brushsoftness" /><code>{"float brushSoftness"}</code> | How soft the brush edge is. |
| <Link id="m-controlpoints" /><code>{"List<Vector3> controlPoints"}</code> | Points the ramp path runs through. |
| <Link id="m-endramp" /><code>{"Vector3 endRamp"}</code> | End point of a single ramp. |
| <Link id="m-isbrushhidden" /><code>{"bool isBrushHidden"}</code> | Editor flag to hide the brush. |
| <Link id="m-multipoint" /><code>{"bool multiPoint"}</code> | Whether the ramp uses the control point list rather than one start point. |
| <Link id="m-numsubdivperseg" /><code>{"int numSubDivPerSeg"}</code> | Subdivisions per path segment. |
| <Link id="m-shiftprocessed" /><code>{"bool shiftProcessed"}</code> | Editor input flag. |
| <Link id="m-sizejitter" /><code>{"float sizeJitter"}</code> | Random variation in brush size. |
| <Link id="m-spacingjitter" /><code>{"float spacingJitter"}</code> | Random sideways offset of each stamp, as a fraction of the brush size. |
| <Link id="m-turnbrushonvar" /><code>{"bool turnBrushOnVar"}</code> | Whether the brush gizmo is drawn. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distbetweenpoints" /><code>{"private List<float> _distBetweenPoints"}</code> | Length of each segment between control points, filled by `calculateDistBetweenPoints`. |
| <Link id="m-totallength" /><code>{"private float _totalLength"}</code> | Total path length through the control points in world units. |
| <Link id="m-totallengthpixels" /><code>{"private float _totalLengthPixels"}</code> | Total path length in heightmap pixels, used to space brush samples when stroking a path. |
| <Link id="m-verbose" /><code>{"private bool VERBOSE"}</code> | Private flag that turns on debug logging while painting; off by default. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-strokepath-2" /><code>{"void _StrokePath()"}</code> | Flattens the terrain into a ramp along the control points, blended by the brush settings. |
| <Link id="m-bitmapcordstoterrain" /><code>{"float[] bitmapCordsToTerrain(TerrainData terData, int x, int y)"}</code> | Turns heightmap pixel coordinates into terrain-local x and z. |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos()"}</code> | Draws the brush and the ramp's control points and path in the scene view. |
| <Link id="m-rampbrush" /><code>{"void rampBrush()"}</code> | Checks for a terrain and reads its data, but does nothing else in this build. |
| <Link id="m-strokepath" /><code>{"void StrokePath()"}</code> | Runs `_StrokePath`. |
| <Link id="m-terraincordstobitmap" /><code>{"int[] terrainCordsToBitmap(TerrainData terData, Vector3 v)"}</code> | Turns terrain-local coordinates into heightmap pixel coordinates. |
| <Link id="m-togglebrushon" /><code>{"void toggleBrushOn()"}</code> | Flips whether the brush gizmo is drawn. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatedistbetweenpoints" /><code>{"private void calculateDistBetweenPoints(List<Vector3> cps)"}</code> | Fills `_distBetweenPoints` and `_totalLength` from a list of control points. |
| <Link id="m-calculatedistbetweenpointsinpixels" /><code>{"private void calculateDistBetweenPointsInPixels(List<Vector3> cps, TerrainData terData)"}</code> | Sums the path length in heightmap pixels into `_totalLengthPixels`. |
| <Link id="m-parameterizedline" /><code>{"private Ray parameterizedLine(float t, List<Vector3> cps, StringBuilder sb = null)"}</code> | Returns the point and direction at fraction `t` along a Catmull-Rom spline through the control points. |

</details>
