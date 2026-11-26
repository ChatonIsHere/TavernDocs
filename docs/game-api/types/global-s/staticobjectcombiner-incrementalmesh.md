---
title: "StaticObjectCombiner.IncrementalMesh"
description: "Private helper for StaticObjectCombiner that gathers the vertices, triangles and source colliders of every mesh collider on one layer before they are joined..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticObjectCombiner.IncrementalMesh

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper for `StaticObjectCombiner` that gathers the vertices, triangles and source colliders of every mesh collider on one layer before they are joined into a single collision mesh.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`StaticObjectCombiner`](/game-api/types/global-s/staticobjectcombiner)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IncrementalMesh()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"List<Collider> Colliders { get; }"}</code> | The mesh colliders folded into this mesh; they are destroyed once the joined collider is made. |
| <Link id="m-indices" /><code>{"List<int> Indices { get; }"}</code> | Triangle indices, already offset into the combined vertex list. |
| <Link id="m-vertices" /><code>{"List<Vector3> Vertices { get; }"}</code> | Vertices moved into the combiner's local space. |
