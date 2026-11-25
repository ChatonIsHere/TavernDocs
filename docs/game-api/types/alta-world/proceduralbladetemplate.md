---
title: "ProceduralBladeTemplate"
description: "class ProceduralBladeTemplate in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProceduralBladeTemplate

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProceduralBladeTemplate()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basetriangles" /><code>{"private List<int> baseTriangles"}</code> |  |
| <Link id="m-isavailable" /><code>{"private bool isAvailable"}</code> |  |
| <Link id="m-iswidthvariable" /><code>{"private bool isWidthVariable"}</code> |  |
| <Link id="m-maxbendingfront" /><code>{"private float maxBendingFront"}</code> |  |
| <Link id="m-maxbendingsideways" /><code>{"private float maxBendingSideways"}</code> |  |
| <Link id="m-maxheight" /><code>{"private float maxHeight"}</code> |  |
| <Link id="m-maxwidthattop" /><code>{"private float maxWidthAtTop"}</code> |  |
| <Link id="m-maxwidthaverage" /><code>{"private float maxWidthAverage"}</code> |  |
| <Link id="m-minheight" /><code>{"private float minHeight"}</code> |  |
| <Link id="m-minwidthattop" /><code>{"private float minWidthAtTop"}</code> |  |
| <Link id="m-minwidthaverage" /><code>{"private float minWidthAverage"}</code> |  |
| <Link id="m-templatename" /><code>{"private string templateName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code>{"void GetMesh(out Vector3[] vertices, out int[] triangles, out Color[] colors, out Vector2[] uv)"}</code> |  |
| <Link id="m-loadtemplate" /><code>{"void LoadTemplate(out float maxBendingFront, out float maxBendingSideways, out float minHeight, out float maxHeight, out float minWidth, out float maxWidth, out bool isWidthVariable, out float minWidthAtTop, out float maxWidthAtTop)"}</code> |  |
| <Link id="m-savetemplate" /><code>{"void SaveTemplate(float maxBendingFront, float maxBendingSideways, float minHeight, float maxHeight, float minWidthAverage, float maxWidthAverage, bool isWidthVariable, float minWidthAtTop, float maxWidthAtTop)"}</code> |  |
| <Link id="m-getspineandwidth" /><code>{"private void GetSpineAndWidth(ref List<Vector3> spine, ref List<float> width)"}</code> |  |
