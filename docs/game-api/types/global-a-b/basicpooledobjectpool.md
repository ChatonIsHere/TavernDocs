---
title: "BasicPooledObjectPool"
description: "Base pool for one PooledObjectDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPooledObjectPool

An **abstract class** in `Root.Township`, no namespace.

Base pool for one `PooledObjectDefinition`. Fills itself with the initial pool size of inactive copies and empties on game reload. `PooledObjectPool` and `MaxLimitPooledObjectPool` derive from it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Derived types** [`MaxLimitPooledObjectPool`](/game-api/types/global-m-o/maxlimitpooledobjectpool), [`PooledObjectPool`](/game-api/types/global-p/pooledobjectpool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPooledObjectPool("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition)"}</code> | Creates a `BasicPooledObjectPool` from `definition`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"protected readonly "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> | The definition this pool serves. |
| <Link id="m-pooledobjects" /><code>{"protected Stack<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> pooledObjects"}</code> | Inactive objects ready to hand out. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"abstract void Release("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, Action releaseCallback)"}</code> | Returns an object to the pool, then calls the callback. |
| <Link id="m-request" /><code>{"abstract "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Request(Vector3 position, Quaternion rotation)"}</code> | Takes an object from the pool at the given position and rotation. |

## Used in

Members of other types that take, return or hold a `BasicPooledObjectPool`:

[`PooledObject.Initialize`](/game-api/types/global-p/pooledobject#m-initialize), [`PooledObject.Pool`](/game-api/types/global-p/pooledobject#m-pool), [`PooledObjectDefinition.Pool`](/game-api/types/global-p/pooledobjectdefinition#m-pool).
