---
title: "MaxLimitPooledObjectPool"
description: "Object pool with a hard limit (MaximumPoolSize): when it runs out it recycles the oldest active object instead of making a new one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaxLimitPooledObjectPool

A **class** in `Root.Township`, no namespace.

Object pool with a hard limit (`MaximumPoolSize`): when it runs out it recycles the oldest active object instead of making a new one. `PooledObjectDefinition` creates it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`BasicPooledObjectPool`](/game-api/types/global-a-b/basicpooledobjectpool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaxLimitPooledObjectPool("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition)"}</code> | Creates a `MaxLimitPooledObjectPool` from `definition`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeobjects" /><code>{"private LinkedList<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeObjects"}</code> | Objects handed out, oldest first. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, Action releaseCallback)"}</code> | Takes an object back: removes it from the active list and stores it inactive, or destroys it if the pool is full. Warns on double release. |
| <Link id="m-request" /><code>{"override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Request(Vector3 position, Quaternion rotation)"}</code> | Returns a pooled object, a new one, or the oldest active one when at the limit, placed at the given position and rotation. |
