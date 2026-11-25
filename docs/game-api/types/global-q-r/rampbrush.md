---
title: "RampBrush"
description: "class RampBrush in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RampBrush

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-backupvector" /><code>{"Vector3 backupVector"}</code> |  |
| <Link id="m-beginramp" /><code>{"Vector3 beginRamp"}</code> |  |
| <Link id="m-brushon" /><code>{"bool brushOn"}</code> |  |
| <Link id="m-brushopacity" /><code>{"float brushOpacity"}</code> |  |
| <Link id="m-brushposition" /><code>{"Vector3 brushPosition"}</code> |  |
| <Link id="m-brushsampledensity" /><code>{"float brushSampleDensity"}</code> |  |
| <Link id="m-brushsize" /><code>{"float brushSize"}</code> |  |
| <Link id="m-brushsoftness" /><code>{"float brushSoftness"}</code> |  |
| <Link id="m-controlpoints" /><code>{"List<Vector3> controlPoints"}</code> |  |
| <Link id="m-endramp" /><code>{"Vector3 endRamp"}</code> |  |
| <Link id="m-isbrushhidden" /><code>{"bool isBrushHidden"}</code> |  |
| <Link id="m-multipoint" /><code>{"bool multiPoint"}</code> |  |
| <Link id="m-numsubdivperseg" /><code>{"int numSubDivPerSeg"}</code> |  |
| <Link id="m-shiftprocessed" /><code>{"bool shiftProcessed"}</code> |  |
| <Link id="m-sizejitter" /><code>{"float sizeJitter"}</code> |  |
| <Link id="m-spacingjitter" /><code>{"float spacingJitter"}</code> |  |
| <Link id="m-turnbrushonvar" /><code>{"bool turnBrushOnVar"}</code> |  |
| <Link id="m-distbetweenpoints" /><code>{"private List<float> _distBetweenPoints"}</code> |  |
| <Link id="m-totallength" /><code>{"private float _totalLength"}</code> |  |
| <Link id="m-totallengthpixels" /><code>{"private float _totalLengthPixels"}</code> |  |
| <Link id="m-verbose" /><code>{"private bool VERBOSE"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-strokepath-2" /><code>{"void _StrokePath()"}</code> |  |
| <Link id="m-bitmapcordstoterrain" /><code>{"float[] bitmapCordsToTerrain(TerrainData terData, int x, int y)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos()"}</code> |  |
| <Link id="m-rampbrush" /><code>{"void rampBrush()"}</code> |  |
| <Link id="m-strokepath" /><code>{"void StrokePath()"}</code> |  |
| <Link id="m-terraincordstobitmap" /><code>{"int[] terrainCordsToBitmap(TerrainData terData, Vector3 v)"}</code> |  |
| <Link id="m-togglebrushon" /><code>{"void toggleBrushOn()"}</code> |  |
| <Link id="m-calculatedistbetweenpoints" /><code>{"private void calculateDistBetweenPoints(List<Vector3> cps)"}</code> |  |
| <Link id="m-calculatedistbetweenpointsinpixels" /><code>{"private void calculateDistBetweenPointsInPixels(List<Vector3> cps, TerrainData terData)"}</code> |  |
| <Link id="m-parameterizedline" /><code>{"private Ray parameterizedLine(float t, List<Vector3> cps, StringBuilder sb = null)"}</code> |  |
