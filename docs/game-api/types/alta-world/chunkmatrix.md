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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkMatrix(Matrix4x4 matrix)"}</code> | Creates a `ChunkMatrix` from `matrix`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-matrix" /><code>{"private Matrix4x4 matrix"}</code> | The wrapped matrix. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"void Direction(ref Vector3 direction)"}</code> | Transforms a direction by the matrix, in place. |
| <Link id="m-position" /><code>{"void Position(ref Vector3 position)"}</code> | Transforms a point by the matrix, in place. |
| <Link id="m-rotation" /><code>{"void Rotation(ref Quaternion rotation)"}</code> | Applies the matrix's rotation to a rotation, in place. |

## Used in

Members of other types that take, return or hold a `ChunkMatrix`:

[`DynamicChunkContentManager.ActiveMatrix`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-activematrix), [`LocationChunk.OffsetMatrix`](/game-api/types/alta-world/locationchunk#m-offsetmatrix).
