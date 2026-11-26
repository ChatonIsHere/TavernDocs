---
title: "SAMeshColliderCommon.SplitMesh"
description: "Which part of a mesh an SAMeshCollider covers (submesh, triangle or polygon), from the SAColliderBuilder editor tool (third party)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SplitMesh

A **class** in `Root.Township`, no namespace.

Which part of a mesh an `SAMeshCollider` covers (submesh, triangle or polygon), from the SAColliderBuilder editor tool (third party).

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/game-api/types/global-s/sameshcollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplitMesh()"}</code> | Creates a `SAMeshColliderCommon.SplitMesh` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-polygontriangles" /><code>{"int[] polygonTriangles"}</code> | Triangle indices of the polygon this collider covers. |
| <Link id="m-polygonvertices" /><code>{"Vector3[] polygonVertices"}</code> | Vertices of the polygon this collider covers. |
| <Link id="m-submesh" /><code>{"int subMesh"}</code> | Index of the submesh this collider covers, or -1. |
| <Link id="m-submeshcount" /><code>{"int subMeshCount"}</code> | Number of submeshes in the source mesh. |
| <Link id="m-triangle" /><code>{"int triangle"}</code> | Index of the triangle this collider covers, or -1. |
| <Link id="m-trianglenormals" /><code>{"Vector3[] triangleNormals"}</code> | Working copy of triangle normals, not saved. |
| <Link id="m-triangles" /><code>{"int[] triangles"}</code> | Working copy of the triangle indices, not saved. |
| <Link id="m-trianglevertex" /><code>{"Vector3 triangleVertex"}</code> | A vertex of the chosen triangle, used to find it again. |
| <Link id="m-vertices" /><code>{"Vector3[] vertices"}</code> | Working copy of the vertices, not saved. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purgetemporary" /><code>{"void PurgeTemporary()"}</code> | Drops the non-serialized working arrays (triangles, vertices, normals). |

## Used in

Members of other types that take, return or hold a `SplitMesh`:

[`SAMeshCollider.splitMesh`](/game-api/types/global-s/sameshcollider#m-splitmesh).
