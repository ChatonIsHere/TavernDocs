---
title: "RopeBelt"
description: "Belt visual that draws a mechanical belt as a rope tube mesh and scrolls its texture as the belt turns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeBelt

A **class** in `Root.Township`, no namespace.

Belt visual that draws a mechanical belt as a rope tube mesh and scrolls its texture as the belt turns. Client visuals.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`BeltVisual`](/game-api/types/global-a-b/beltvisual)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RopeBelt()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sampler-st" /><code>{"private static readonly int _Sampler_ST"}</code> | Shader id of `_Sampler_ST`, the texture scale and offset. |
| <Link id="m-actualtexturelength" /><code>{"private float actualTextureLength"}</code> | Whole number of texture repeats along the belt. |
| <Link id="m-block" /><code>{"private MaterialPropertyBlock block"}</code> | Property block used to set the texture offset. |
| <Link id="m-isgeneratingmesh" /><code>{"private bool isGeneratingMesh"}</code> | Editor button that was meant to build the mesh. |
| <Link id="m-length" /><code>{"private float length"}</code> | Backing field for `Length`. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | The tube mesh being built. |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | The belt's renderer. |
| <Link id="m-roperadius" /><code>{"private float ropeRadius"}</code> | Radius of the rope tube. |
| <Link id="m-ropesides" /><code>{"private int ropeSides"}</code> | Number of sides around the tube. |
| <Link id="m-texturelength" /><code>{"private float textureLength"}</code> | Belt length covered by one texture repeat. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-length-2" /><code>{"float Length { get; }"}</code> | Length of the belt path, saved when the mesh was made. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawconnections" /><code>{"override void DrawConnections()"}</code> | Scrolls the texture offset by the belt's rotation each draw. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Gets the renderer and works out how many texture repeats fit the stored length. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrings" /><code>{"private float AddRings(List<float> lengths, List<Vector3> vertices, List<Vector3> normals, Vector3 previous2, Vector3 previous, Vector3 point, Vector3 face)"}</code> | Adds one ring of vertices and normals around a point on the belt path and returns that segment's length. |
| <Link id="m-createmesh" /><code>{"private void CreateMesh()"}</code> | Builds the tube mesh along the belt's points and stores its length. Not called anywhere in this build. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: resets the `isGeneratingMesh` toggle. It no longer builds the mesh. |

</details>

## Used in

Members of other types that take, return or hold a `RopeBelt`:

[`RopeGrab.ropeBelt`](/game-api/types/global-q-r/ropegrab#m-ropebelt).
