---
title: "BasicPooledObjectPool"
description: "Base pool for one PooledObjectDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPooledObjectPool

An **abstract class** in `Root.Township`, the global namespace.

Base pool for one `PooledObjectDefinition`. Fills itself with the initial pool size of inactive copies and empties on game reload. `PooledObjectPool` and `MaxLimitPooledObjectPool` derive from it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Derived types** [`MaxLimitPooledObjectPool`](/mod/game-api/types/global-m-o/maxlimitpooledobjectpool), [`PooledObjectPool`](/mod/game-api/types/global-p/pooledobjectpool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPooledObjectPool("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition)"}</code> | Creates a `BasicPooledObjectPool` from `definition`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"protected readonly "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | The definition this pool serves. |
| <Link id="m-pooledobjects" /><code>{"protected Stack<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> pooledObjects"}</code> | Inactive objects ready to hand out. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"abstract void Release("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, Action releaseCallback)"}</code> | Returns an object to the pool, then calls the callback. |
| <Link id="m-request" /><code>{"abstract "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Request(Vector3 position, Quaternion rotation)"}</code> | Takes an object from the pool at the given position and rotation. |

## Used in

Members of other types that take, return or hold a `BasicPooledObjectPool`:

[`PooledObject.Initialize`](/mod/game-api/types/global-p/pooledobject#m-initialize), [`PooledObject.Pool`](/mod/game-api/types/global-p/pooledobject#m-pool), [`PooledObjectDefinition.Pool`](/mod/game-api/types/global-p/pooledobjectdefinition#m-pool).
