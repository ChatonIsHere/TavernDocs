---
title: "MaxLimitPooledObjectPool"
description: "Object pool with a hard limit (MaximumPoolSize): when it runs out it recycles the oldest active object instead of making a new one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaxLimitPooledObjectPool

A **class** in `Root.Township`, the global namespace.

Object pool with a hard limit (`MaximumPoolSize`): when it runs out it recycles the oldest active object instead of making a new one. `PooledObjectDefinition` creates it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`BasicPooledObjectPool`](/mod/game-api/types/global-a-b/basicpooledobjectpool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaxLimitPooledObjectPool("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Creates a `MaxLimitPooledObjectPool` from `definition`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeobjects" /><code>{"private LinkedList<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeObjects"}</code> | <span className="api-desc">Objects handed out, oldest first.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, Action releaseCallback)"}</code> | <span className="api-desc">Takes an object back: removes it from the active list and stores it inactive, or destroys it if the pool is full. Warns on double release.</span> |
| <Link id="m-request" /><code>{"override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Request(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Returns a pooled object, a new one, or the oldest active one when at the limit, placed at the given position and rotation.</span> |
