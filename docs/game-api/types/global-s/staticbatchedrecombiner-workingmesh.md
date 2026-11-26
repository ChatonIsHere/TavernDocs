---
title: "StaticBatchedRecombiner.WorkingMesh"
description: "Private mesh buffer that StaticBatchedRecombiner fills for one material before building the combined mesh."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBatchedRecombiner.WorkingMesh

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private mesh buffer that `StaticBatchedRecombiner` fills for one material before building the combined mesh.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`StaticBatchedRecombiner`](/game-api/types/global-s/staticbatchedrecombiner)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WorkingMesh()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"readonly "}<Link to="/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Color> colors"}</code> | Vertex colours, padded to match the vertex count. |
| <Link id="m-normals" /><code>{"readonly "}<Link to="/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector3> normals"}</code> | Normals, padded to match the vertex count. |
| <Link id="m-tangents" /><code>{"readonly "}<Link to="/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> tangents"}</code> | Tangents, padded to match the vertex count. |
| <Link id="m-triangles" /><code>{"readonly List<int> triangles"}</code> | Triangle indices. |
| <Link id="m-uv" /><code>{"readonly "}<Link to="/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector2> uv"}</code> | UV channel 0. |
| <Link id="m-uv2" /><code>{"readonly "}<Link to="/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> uv2"}</code> | UV channel 1. |
| <Link id="m-uv3" /><code>{"readonly "}<Link to="/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> uv3"}</code> | UV channel 2. |
| <Link id="m-uv4" /><code>{"readonly "}<Link to="/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> uv4"}</code> | UV channel 3. |
| <Link id="m-vertices" /><code>{"readonly List<Vector3> vertices"}</code> | Vertex positions in the parent's local space. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createmesh" /><code>{"Mesh CreateMesh()"}</code> | Builds a mesh from the buffers, only setting optional channels that have data, then clears the buffers. |
