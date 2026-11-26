---
title: "RopeBelt"
description: "Belt visual that draws a mechanical belt as a rope tube mesh and scrolls its texture as the belt turns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeBelt

A **class** in `Root.Township`, the global namespace.

Belt visual that draws a mechanical belt as a rope tube mesh and scrolls its texture as the belt turns. Client visuals.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`BeltVisual`](/mod/game-api/types/global-a-b/beltvisual)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeBelt()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sampler-st" /><code>{"private static readonly int _Sampler_ST"}</code> | <span className="api-desc">Shader id of `_Sampler_ST`, the texture scale and offset.</span> |
| <Link id="m-actualtexturelength" /><code>{"private float actualTextureLength"}</code> | <span className="api-desc">Whole number of texture repeats along the belt.</span> |
| <Link id="m-block" /><code>{"private MaterialPropertyBlock block"}</code> | <span className="api-desc">Property block used to set the texture offset.</span> |
| <Link id="m-isgeneratingmesh" /><code>{"private bool isGeneratingMesh"}</code> | <span className="api-desc">Editor button that was meant to build the mesh.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">Backing field for `Length`.</span> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | <span className="api-desc">The tube mesh being built.</span> |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> | <span className="api-desc">The belt's renderer.</span> |
| <Link id="m-roperadius" /><code>{"private float ropeRadius"}</code> | <span className="api-desc">Radius of the rope tube.</span> |
| <Link id="m-ropesides" /><code>{"private int ropeSides"}</code> | <span className="api-desc">Number of sides around the tube.</span> |
| <Link id="m-texturelength" /><code>{"private float textureLength"}</code> | <span className="api-desc">Belt length covered by one texture repeat.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-length-2" /><code>{"float Length { get; }"}</code> | <span className="api-desc">Length of the belt path, saved when the mesh was made.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawconnections" /><code>{"override void DrawConnections()"}</code> | <span className="api-desc">Scrolls the texture offset by the belt's rotation each draw.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Gets the renderer and works out how many texture repeats fit the stored length.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrings" /><code>{"private float AddRings(List<float> lengths, List<Vector3> vertices, List<Vector3> normals, Vector3 previous2, Vector3 previous, Vector3 point, Vector3 face)"}</code> | <span className="api-desc">Adds one ring of vertices and normals around a point on the belt path and returns that segment's length.</span> |
| <Link id="m-createmesh" /><code>{"private void CreateMesh()"}</code> | <span className="api-desc">Builds the tube mesh along the belt's points and stores its length. Not called anywhere in this build.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: resets the `isGeneratingMesh` toggle. It no longer builds the mesh.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RopeBelt`:

<div className="api-used-in">

[`RopeGrab.ropeBelt`](/mod/game-api/types/global-q-r/ropegrab#m-ropebelt).

</div>
