---
title: "PooledMeshReplaceObjectDefinition"
description: "Pooled object definition whose instances are MeshReplacePooledObjects given a set mesh and material when requested."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledMeshReplaceObjectDefinition

A **class** in `Root.Township`, the global namespace.

Pooled object definition whose instances are `MeshReplacePooledObject`s given a set mesh and material when requested.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PooledObjectDefinition`](/mod/game-api/types/global-p/pooledobjectdefinition)
- **Derived types** [`PooledMeshReplaceObjectDefinition.Create`](/mod/game-api/types/global-p/pooledmeshreplaceobjectdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/pooledmeshreplaceobjectdefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledMeshReplaceObjectDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assetpathformat" /><code>{"private const string AssetPathFormat"}</code> | Path pattern for these assets in the Unity project. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Material given to each instance. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | Mesh given to each instance. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"bool Bake(IEnumerable<"}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"> atlasDefinitions)"}</code> | Applies the first matching atlas to the mesh and material and stores the baked result. Returns false if none match. |
| <Link id="m-get" /><code>{"override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | Gets a pooled object and gives it this mesh and material. Logs an error if the prefab isn't a mesh replace object. |
| <Link id="m-getorcreate" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pooledmeshreplaceobjectdefinition">{"PooledMeshReplaceObjectDefinition"}</Link>{" GetOrCreate(string name, out bool wasCreated)"}</code> | Stub in this build: always returns null. |
