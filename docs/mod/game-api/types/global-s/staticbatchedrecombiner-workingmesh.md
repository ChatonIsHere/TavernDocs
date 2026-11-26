---
title: "StaticBatchedRecombiner.WorkingMesh"
description: "Private mesh buffer that StaticBatchedRecombiner fills for one material before building the combined mesh."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBatchedRecombiner.WorkingMesh

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private mesh buffer that `StaticBatchedRecombiner` fills for one material before building the combined mesh.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`StaticBatchedRecombiner`](/mod/game-api/types/global-s/staticbatchedrecombiner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorkingMesh()"}</code> | <span className="api-desc">Creates a `StaticBatchedRecombiner.WorkingMesh` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"readonly "}<Link to="/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Color> colors"}</code> | <span className="api-desc">Vertex colours, padded to match the vertex count.</span> |
| <Link id="m-normals" /><code>{"readonly "}<Link to="/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector3> normals"}</code> | <span className="api-desc">Normals, padded to match the vertex count.</span> |
| <Link id="m-tangents" /><code>{"readonly "}<Link to="/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> tangents"}</code> | <span className="api-desc">Tangents, padded to match the vertex count.</span> |
| <Link id="m-triangles" /><code>{"readonly List<int> triangles"}</code> | <span className="api-desc">Triangle indices.</span> |
| <Link id="m-uv" /><code>{"readonly "}<Link to="/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector2> uv"}</code> | <span className="api-desc">UV channel 0.</span> |
| <Link id="m-uv2" /><code>{"readonly "}<Link to="/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> uv2"}</code> | <span className="api-desc">UV channel 1.</span> |
| <Link id="m-uv3" /><code>{"readonly "}<Link to="/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> uv3"}</code> | <span className="api-desc">UV channel 2.</span> |
| <Link id="m-uv4" /><code>{"readonly "}<Link to="/mod/game-api/types/global-s/staticbatchedrecombiner-anchoredlist-t">{"StaticBatchedRecombiner.AnchoredList"}</Link>{"<Vector4> uv4"}</code> | <span className="api-desc">UV channel 3.</span> |
| <Link id="m-vertices" /><code>{"readonly List<Vector3> vertices"}</code> | <span className="api-desc">Vertex positions in the parent's local space.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createmesh" /><code>{"Mesh CreateMesh()"}</code> | <span className="api-desc">Builds a mesh from the buffers, only setting optional channels that have data, then clears the buffers.</span> |
