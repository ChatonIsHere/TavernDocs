---
title: "RampBrush"
description: "Editor tool for terrain: strokes a ramp along control points into the terrain heightmap, blending with brush size, softness and opacity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RampBrush

A **class** in `Root.Township`, no namespace.

Editor tool for terrain: strokes a ramp along control points into the terrain heightmap, blending with brush size, softness and opacity. Needs a `Terrain` on the same object; not used at runtime.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`, `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RampBrush()"}</code> |  |

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
| <Link id="m-distbetweenpoints" /><code>{"private List<float> _distBetweenPoints"}</code> |  |
| <Link id="m-totallength" /><code>{"private float _totalLength"}</code> |  |
| <Link id="m-totallengthpixels" /><code>{"private float _totalLengthPixels"}</code> |  |
| <Link id="m-verbose" /><code>{"private bool VERBOSE"}</code> |  |

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
| <Link id="m-calculatedistbetweenpoints" /><code>{"private void calculateDistBetweenPoints(List<Vector3> cps)"}</code> |  |
| <Link id="m-calculatedistbetweenpointsinpixels" /><code>{"private void calculateDistBetweenPointsInPixels(List<Vector3> cps, TerrainData terData)"}</code> |  |
| <Link id="m-parameterizedline" /><code>{"private Ray parameterizedLine(float t, List<Vector3> cps, StringBuilder sb = null)"}</code> |  |
