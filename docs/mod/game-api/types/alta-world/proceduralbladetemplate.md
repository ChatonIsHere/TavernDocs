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
| <Link id="m-ctor" /><code>{"ProceduralBladeTemplate()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basetriangles" /><code>{"private List<int> baseTriangles"}</code> | <span className="api-desc">Fixed triangle list for the nine-vertex blade.</span> |
| <Link id="m-isavailable" /><code>{"private bool isAvailable"}</code> | <span className="api-desc">Backing field for `IsAvailable`.</span> |
| <Link id="m-iswidthvariable" /><code>{"private bool isWidthVariable"}</code> | <span className="api-desc">When set, width narrows toward the top; otherwise it stays the same.</span> |
| <Link id="m-maxbendingfront" /><code>{"private float maxBendingFront"}</code> | <span className="api-desc">Most forward bend at the tip.</span> |
| <Link id="m-maxbendingsideways" /><code>{"private float maxBendingSideways"}</code> | <span className="api-desc">Most sideways bend at the tip.</span> |
| <Link id="m-maxheight" /><code>{"private float maxHeight"}</code> | <span className="api-desc">Tallest blade.</span> |
| <Link id="m-maxwidthattop" /><code>{"private float maxWidthAtTop"}</code> | <span className="api-desc">Widest top width when width varies.</span> |
| <Link id="m-maxwidthaverage" /><code>{"private float maxWidthAverage"}</code> | <span className="api-desc">Widest base width.</span> |
| <Link id="m-minheight" /><code>{"private float minHeight"}</code> | <span className="api-desc">Shortest blade.</span> |
| <Link id="m-minwidthattop" /><code>{"private float minWidthAtTop"}</code> | <span className="api-desc">Narrowest top width when width varies.</span> |
| <Link id="m-minwidthaverage" /><code>{"private float minWidthAverage"}</code> | <span className="api-desc">Narrowest base width.</span> |
| <Link id="m-templatename" /><code>{"private string templateName"}</code> | <span className="api-desc">Backing field for `Name`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable { get; set; }"}</code> | <span className="api-desc">Whether the template is offered for use.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Template name.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code>{"void GetMesh(out Vector3[] vertices, out int[] triangles, out Color[] colors, out Vector2[] uv)"}</code> | <span className="api-desc">Generates a random nine-vertex blade with UVs and vertex colours (height, side, random value) for the wind shader.</span> |
| <Link id="m-loadtemplate" /><code>{"void LoadTemplate(out float maxBendingFront, out float maxBendingSideways, out float minHeight, out float maxHeight, out float minWidth, out float maxWidth, out bool isWidthVariable, out float minWidthAtTop, out float maxWidthAtTop)"}</code> | <span className="api-desc">Copies the template's ranges out.</span> |
| <Link id="m-savetemplate" /><code>{"void SaveTemplate(float maxBendingFront, float maxBendingSideways, float minHeight, float maxHeight, float minWidthAverage, float maxWidthAverage, bool isWidthVariable, float minWidthAtTop, float maxWidthAtTop)"}</code> | <span className="api-desc">Stores new ranges in the template.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getspineandwidth" /><code>{"private void GetSpineAndWidth(ref List<Vector3> spine, ref List<float> width)"}</code> | <span className="api-desc">Rolls a random five-point bent spine and the width at each point within the template's ranges.</span> |

</details>
