---
title: "MeshReplacePooledObject"
description: "Base for pooled objects that take a mesh and material when handed out, such as ParticleMeshReplacePooledObject and RendererMeshReplacePooledObject."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshReplacePooledObject

An **abstract class** in `Root.Township`, the global namespace.

Base for pooled objects that take a mesh and material when handed out, such as `ParticleMeshReplacePooledObject` and `RendererMeshReplacePooledObject`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Derived types** [`ParticleMeshReplacePooledObject`](/mod/game-api/types/global-p/particlemeshreplacepooledobject), [`RendererMeshReplacePooledObject`](/mod/game-api/types/global-q-r/renderermeshreplacepooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MeshReplacePooledObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"abstract void Setup(Mesh mesh, Material material)"}</code> | Applies the given mesh and material to the object. |
