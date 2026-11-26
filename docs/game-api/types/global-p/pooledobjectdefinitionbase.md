---
title: "PooledObjectDefinitionBase"
description: "Asset for a pooled object (usually a visual effect) with helpers to spawn it at transforms, hits or positions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinitionBase

An **abstract class** in `Root.Township`, no namespace.

Asset for a pooled object (usually a visual effect) with helpers to spawn it at transforms, hits or positions. Most helpers do nothing on a headless server.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PooledObjectDefinition`](/game-api/types/global-p/pooledobjectdefinition), [`RandomPooledObjectDefinition`](/game-api/types/global-q-r/randompooledobjectdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PooledObjectDefinitionBase()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lifetimepooledobjects" /><code>{"private Dictionary<Transform, "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> lifetimePooledObjects"}</code> | Objects spawned with `SpawnAtParentedForLifeTime`, one per parent, until `ReleaseLifeTime` is called. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get()"}</code> | Takes an object from the pool at a position and rotation, or parented to a transform. |
| <Link id="m-get-2" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position)"}</code> | Takes an object from the pool at a position and rotation, or parented to a transform. |
| <Link id="m-get-3" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Transform parent)"}</code> | Takes an object from the pool at a position and rotation, or parented to a transform. |
| <Link id="m-get-4" /><code>{"abstract "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | Takes an object from the pool at a position and rotation, or parented to a transform. |
| <Link id="m-initializepool" /><code>{"abstract void InitializePool()"}</code> | Subclass: sets up the pool. |
| <Link id="m-releaselifetime" /><code>{"void ReleaseLifeTime(Transform parent)"}</code> | Releases the object kept for a parent. |
| <Link id="m-spawnalignedhit" /><code>{"void SpawnAlignedHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Spawns at an impact point facing along the hit normal. Skipped on headless. |
| <Link id="m-spawnat" /><code>{"void SpawnAt(Transform target)"}</code> | Spawns at a transform (skipped on headless) or a position (always). |
| <Link id="m-spawnat-2" /><code>{"void SpawnAt(Transform target, float scale)"}</code> | Spawns at a transform (skipped on headless) or a position (always). |
| <Link id="m-spawnat-3" /><code>{"void SpawnAt(Vector3 position)"}</code> | Spawns at a transform (skipped on headless) or a position (always). |
| <Link id="m-spawnat-4" /><code>{"void SpawnAt(Vector3 position, Quaternion rotation)"}</code> | Spawns at a transform (skipped on headless) or a position (always). |
| <Link id="m-spawnatendofframe" /><code>{"void SpawnAtEndOfFrame(Transform target)"}</code> | Spawns at a transform on a delayed call. Skipped on headless. |
| <Link id="m-spawnatparented" /><code>{"void SpawnAtParented(Transform target)"}</code> | Spawns as a child of a transform. Skipped on headless. |
| <Link id="m-spawnatparentedforlifetime" /><code>{"void SpawnAtParentedForLifeTime(Transform parent)"}</code> | Spawns one object parented to a transform and keeps it until `ReleaseLifeTime`. Only one per parent. |
| <Link id="m-spawnatproxy" /><code>{"void SpawnAtProxy("}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" target)"}</code> | Spawns at a transform proxy's position and rotation. Skipped on headless. |

## Used in

Members of other types that take, return or hold a `PooledObjectDefinitionBase`:

[`Explosive.effectDefinition`](/game-api/types/global-e-h/explosive#m-effectdefinition).
