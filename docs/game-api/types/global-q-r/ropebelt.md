---
title: "RopeBelt"
description: "class RopeBelt in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeBelt

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`BeltVisual`](/game-api/types/global-a-b/beltvisual)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RopeBelt()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-sampler-st" /><code>{"private static readonly int _Sampler_ST"}</code> |
| <Link id="m-actualtexturelength" /><code>{"private float actualTextureLength"}</code> |
| <Link id="m-block" /><code>{"private MaterialPropertyBlock block"}</code> |
| <Link id="m-isgeneratingmesh" /><code>{"private bool isGeneratingMesh"}</code> |
| <Link id="m-length" /><code>{"private float length"}</code> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> |
| <Link id="m-renderer" /><code>{"private Renderer renderer"}</code> |
| <Link id="m-roperadius" /><code>{"private float ropeRadius"}</code> |
| <Link id="m-ropesides" /><code>{"private int ropeSides"}</code> |
| <Link id="m-texturelength" /><code>{"private float textureLength"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-length-2" /><code>{"float Length { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-drawconnections" /><code>{"override void DrawConnections()"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addrings" /><code>{"private float AddRings(List<float> lengths, List<Vector3> vertices, List<Vector3> normals, Vector3 previous2, Vector3 previous, Vector3 point, Vector3 face)"}</code> |
| <Link id="m-createmesh" /><code>{"private void CreateMesh()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RopeBelt`:

[`RopeGrab.ropeBelt`](/game-api/types/global-q-r/ropegrab#m-ropebelt).
