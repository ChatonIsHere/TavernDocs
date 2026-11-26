---
title: "SAMeshColliderCommon.SplitMesh"
description: "Which part of a mesh an SAMeshCollider covers (submesh, triangle or polygon), from the SAColliderBuilder editor tool (third party)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SAMeshColliderCommon.SplitMesh

A **class** in `Root.Township`, the global namespace.

Which part of a mesh an `SAMeshCollider` covers (submesh, triangle or polygon), from the SAColliderBuilder editor tool (third party).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SAMeshColliderCommon`](/mod/game-api/types/global-s/sameshcollidercommon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplitMesh()"}</code> | <span className="api-desc">Creates a `SAMeshColliderCommon.SplitMesh` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-polygontriangles" /><code>{"int[] polygonTriangles"}</code> | <span className="api-desc">Triangle indices of the polygon this collider covers.</span> |
| <Link id="m-polygonvertices" /><code>{"Vector3[] polygonVertices"}</code> | <span className="api-desc">Vertices of the polygon this collider covers.</span> |
| <Link id="m-submesh" /><code>{"int subMesh"}</code> | <span className="api-desc">Index of the submesh this collider covers, or -1.</span> |
| <Link id="m-submeshcount" /><code>{"int subMeshCount"}</code> | <span className="api-desc">Number of submeshes in the source mesh.</span> |
| <Link id="m-triangle" /><code>{"int triangle"}</code> | <span className="api-desc">Index of the triangle this collider covers, or -1.</span> |
| <Link id="m-trianglenormals" /><code>{"Vector3[] triangleNormals"}</code> | <span className="api-desc">Working copy of triangle normals, not saved.</span> |
| <Link id="m-triangles" /><code>{"int[] triangles"}</code> | <span className="api-desc">Working copy of the triangle indices, not saved.</span> |
| <Link id="m-trianglevertex" /><code>{"Vector3 triangleVertex"}</code> | <span className="api-desc">A vertex of the chosen triangle, used to find it again.</span> |
| <Link id="m-vertices" /><code>{"Vector3[] vertices"}</code> | <span className="api-desc">Working copy of the vertices, not saved.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purgetemporary" /><code>{"void PurgeTemporary()"}</code> | <span className="api-desc">Drops the non-serialized working arrays (triangles, vertices, normals).</span> |

## Used in

Members of other types that take, return or hold a `SplitMesh`:

<div className="api-used-in">

[`SAMeshCollider.splitMesh`](/mod/game-api/types/global-s/sameshcollider#m-splitmesh).

</div>
