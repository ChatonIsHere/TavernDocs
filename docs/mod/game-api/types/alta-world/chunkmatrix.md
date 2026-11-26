---
title: "ChunkMatrix"
description: "Wraps a transform matrix and applies it in place to positions, rotations and directions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkMatrix

A **class** in `Root.Township`, `Alta.Chunks`.

Wraps a transform matrix and applies it in place to positions, rotations and directions.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkMatrix(Matrix4x4 matrix)"}</code> | <span className="api-desc">Creates a `ChunkMatrix` from `matrix`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-matrix" /><code>{"private Matrix4x4 matrix"}</code> | <span className="api-desc">The wrapped matrix.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"void Direction(ref Vector3 direction)"}</code> | <span className="api-desc">Transforms a direction by the matrix, in place.</span> |
| <Link id="m-position" /><code>{"void Position(ref Vector3 position)"}</code> | <span className="api-desc">Transforms a point by the matrix, in place.</span> |
| <Link id="m-rotation" /><code>{"void Rotation(ref Quaternion rotation)"}</code> | <span className="api-desc">Applies the matrix's rotation to a rotation, in place.</span> |

## Used in

Members of other types that take, return or hold a `ChunkMatrix`:

<div className="api-used-in">

[`DynamicChunkContentManager.ActiveMatrix`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-activematrix), [`LocationChunk.OffsetMatrix`](/mod/game-api/types/alta-world/locationchunk#m-offsetmatrix).

</div>
