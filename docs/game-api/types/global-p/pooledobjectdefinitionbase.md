---
title: "PooledObjectDefinitionBase"
description: "abstract class PooledObjectDefinitionBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectDefinitionBase

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PooledObjectDefinition`](/game-api/types/global-p/pooledobjectdefinition), [`RandomPooledObjectDefinition`](/game-api/types/global-q-r/randompooledobjectdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PooledObjectDefinitionBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lifetimepooledobjects" /><code>{"private Dictionary<Transform, "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> lifetimePooledObjects"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get()"}</code> |  |
| <Link id="m-get-2" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position)"}</code> |  |
| <Link id="m-get-3" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Transform parent)"}</code> |  |
| <Link id="m-get-4" /><code>{"abstract "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> |  |
| <Link id="m-initializepool" /><code>{"abstract void InitializePool()"}</code> |  |
| <Link id="m-releaselifetime" /><code>{"void ReleaseLifeTime(Transform parent)"}</code> |  |
| <Link id="m-spawnalignedhit" /><code>{"void SpawnAlignedHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> |  |
| <Link id="m-spawnat" /><code>{"void SpawnAt(Transform target)"}</code> |  |
| <Link id="m-spawnat-2" /><code>{"void SpawnAt(Transform target, float scale)"}</code> |  |
| <Link id="m-spawnat-3" /><code>{"void SpawnAt(Vector3 position)"}</code> |  |
| <Link id="m-spawnat-4" /><code>{"void SpawnAt(Vector3 position, Quaternion rotation)"}</code> |  |
| <Link id="m-spawnatendofframe" /><code>{"void SpawnAtEndOfFrame(Transform target)"}</code> |  |
| <Link id="m-spawnatparented" /><code>{"void SpawnAtParented(Transform target)"}</code> |  |
| <Link id="m-spawnatparentedforlifetime" /><code>{"void SpawnAtParentedForLifeTime(Transform parent)"}</code> |  |
| <Link id="m-spawnatproxy" /><code>{"void SpawnAtProxy("}<Link to="/game-api/types/global-t-x/transformproxy">{"TransformProxy"}</Link>{" target)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PooledObjectDefinitionBase`:

[`Explosive.effectDefinition`](/game-api/types/global-e-h/explosive#m-effectdefinition).
