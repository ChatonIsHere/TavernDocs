---
title: "PooledObjectPool"
description: "The default pool for a PooledObjectDefinition: reuses inactive instances and makes new ones from the prefab when empty."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledObjectPool

A **class** in `Root.Township`, the global namespace.

The default pool for a `PooledObjectDefinition`: reuses inactive instances and makes new ones from the prefab when empty.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BasicPooledObjectPool`](/mod/game-api/types/global-a-b/basicpooledobjectpool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledObjectPool("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Creates a `PooledObjectPool` from `definition`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for release errors.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, Action releaseCallback)"}</code> | <span className="api-desc">Deactivates and stores the object, or destroys it if the pool is over its maximum size. Logs double or destroyed releases.</span> |
| <Link id="m-request" /><code>{"override "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Request(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Takes a stored instance or makes one, places it and finishes the request.</span> |
