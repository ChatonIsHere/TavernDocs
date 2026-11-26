---
title: "PooledObjectDefinitionBase"
description: "Asset for a pooled object (usually a visual effect) with helpers to spawn it at transforms, hits or positions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinitionBase

An **abstract class** in `Root.Township`, the global namespace.

Asset for a pooled object (usually a visual effect) with helpers to spawn it at transforms, hits or positions. Most helpers do nothing on a headless server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PooledObjectDefinition`](/mod/game-api/types/global-p/pooledobjectdefinition), [`RandomPooledObjectDefinition`](/mod/game-api/types/global-q-r/randompooledobjectdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PooledObjectDefinitionBase()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lifetimepooledobjects" /><code>{"private Dictionary<Transform, "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> lifetimePooledObjects"}</code> | <span className="api-desc">Objects spawned with `SpawnAtParentedForLifeTime`, one per parent, until `ReleaseLifeTime` is called.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get()"}</code> | <span className="api-desc">Takes an object from the pool at a position and rotation, or parented to a transform.</span> |
| <Link id="m-get-2" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position)"}</code> | <span className="api-desc">Takes an object from the pool at a position and rotation, or parented to a transform.</span> |
| <Link id="m-get-3" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Transform parent)"}</code> | <span className="api-desc">Takes an object from the pool at a position and rotation, or parented to a transform.</span> |
| <Link id="m-get-4" /><code>{"abstract "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Takes an object from the pool at a position and rotation, or parented to a transform.</span> |
| <Link id="m-initializepool" /><code>{"abstract void InitializePool()"}</code> | <span className="api-desc">Subclass: sets up the pool.</span> |
| <Link id="m-releaselifetime" /><code>{"void ReleaseLifeTime(Transform parent)"}</code> | <span className="api-desc">Releases the object kept for a parent.</span> |
| <Link id="m-spawnalignedhit" /><code>{"void SpawnAlignedHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Spawns at an impact point facing along the hit normal. Skipped on headless.</span> |
| <Link id="m-spawnat" /><code>{"void SpawnAt(Transform target)"}</code> | <span className="api-desc">Spawns at a transform (skipped on headless) or a position (always).</span> |
| <Link id="m-spawnat-2" /><code>{"void SpawnAt(Transform target, float scale)"}</code> | <span className="api-desc">Spawns at a transform (skipped on headless) or a position (always).</span> |
| <Link id="m-spawnat-3" /><code>{"void SpawnAt(Vector3 position)"}</code> | <span className="api-desc">Spawns at a transform (skipped on headless) or a position (always).</span> |
| <Link id="m-spawnat-4" /><code>{"void SpawnAt(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Spawns at a transform (skipped on headless) or a position (always).</span> |
| <Link id="m-spawnatendofframe" /><code>{"void SpawnAtEndOfFrame(Transform target)"}</code> | <span className="api-desc">Spawns at a transform on a delayed call. Skipped on headless.</span> |
| <Link id="m-spawnatparented" /><code>{"void SpawnAtParented(Transform target)"}</code> | <span className="api-desc">Spawns as a child of a transform. Skipped on headless.</span> |
| <Link id="m-spawnatparentedforlifetime" /><code>{"void SpawnAtParentedForLifeTime(Transform parent)"}</code> | <span className="api-desc">Spawns one object parented to a transform and keeps it until `ReleaseLifeTime`. Only one per parent.</span> |
| <Link id="m-spawnatproxy" /><code>{"void SpawnAtProxy("}<Link to="/mod/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" target)"}</code> | <span className="api-desc">Spawns at a transform proxy's position and rotation. Skipped on headless.</span> |

## Used in

Members of other types that take, return or hold a `PooledObjectDefinitionBase`:

<div className="api-used-in">

[`Explosive.effectDefinition`](/mod/game-api/types/global-e-h/explosive#m-effectdefinition).

</div>
