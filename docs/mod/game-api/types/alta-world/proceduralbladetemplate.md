---
title: "ProceduralBladeTemplate"
description: "Asset with ranges for generating random grass blades: bend, height and width."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProceduralBladeTemplate

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Asset with ranges for generating random grass blades: bend, height and width. Used by the grass editor tools.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProceduralBladeTemplate()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basetriangles" /><code>{"private List<int> baseTriangles"}</code> | Fixed triangle list for the nine-vertex blade. |
| <Link id="m-isavailable" /><code>{"private bool isAvailable"}</code> | Backing field for `IsAvailable`. |
| <Link id="m-iswidthvariable" /><code>{"private bool isWidthVariable"}</code> | When set, width narrows toward the top; otherwise it stays the same. |
| <Link id="m-maxbendingfront" /><code>{"private float maxBendingFront"}</code> | Most forward bend at the tip. |
| <Link id="m-maxbendingsideways" /><code>{"private float maxBendingSideways"}</code> | Most sideways bend at the tip. |
| <Link id="m-maxheight" /><code>{"private float maxHeight"}</code> | Tallest blade. |
| <Link id="m-maxwidthattop" /><code>{"private float maxWidthAtTop"}</code> | Widest top width when width varies. |
| <Link id="m-maxwidthaverage" /><code>{"private float maxWidthAverage"}</code> | Widest base width. |
| <Link id="m-minheight" /><code>{"private float minHeight"}</code> | Shortest blade. |
| <Link id="m-minwidthattop" /><code>{"private float minWidthAtTop"}</code> | Narrowest top width when width varies. |
| <Link id="m-minwidthaverage" /><code>{"private float minWidthAverage"}</code> | Narrowest base width. |
| <Link id="m-templatename" /><code>{"private string templateName"}</code> | Backing field for `Name`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable { get; set; }"}</code> | Whether the template is offered for use. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Template name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code>{"void GetMesh(out Vector3[] vertices, out int[] triangles, out Color[] colors, out Vector2[] uv)"}</code> | Generates a random nine-vertex blade with UVs and vertex colours (height, side, random value) for the wind shader. |
| <Link id="m-loadtemplate" /><code>{"void LoadTemplate(out float maxBendingFront, out float maxBendingSideways, out float minHeight, out float maxHeight, out float minWidth, out float maxWidth, out bool isWidthVariable, out float minWidthAtTop, out float maxWidthAtTop)"}</code> | Copies the template's ranges out. |
| <Link id="m-savetemplate" /><code>{"void SaveTemplate(float maxBendingFront, float maxBendingSideways, float minHeight, float maxHeight, float minWidthAverage, float maxWidthAverage, bool isWidthVariable, float minWidthAtTop, float maxWidthAtTop)"}</code> | Stores new ranges in the template. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getspineandwidth" /><code>{"private void GetSpineAndWidth(ref List<Vector3> spine, ref List<float> width)"}</code> | Rolls a random five-point bent spine and the width at each point within the template's ranges. |

</details>
