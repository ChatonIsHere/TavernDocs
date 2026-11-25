---
title: "MaxLimitPooledObjectPool"
description: "class MaxLimitPooledObjectPool in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaxLimitPooledObjectPool

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`BasicPooledObjectPool`](/game-api/types/global-a-b/basicpooledobjectpool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaxLimitPooledObjectPool("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeobjects" /><code>{"private LinkedList<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeObjects"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject, Action releaseCallback)"}</code> |  |
| <Link id="m-request" /><code>{"override "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" Request(Vector3 position, Quaternion rotation)"}</code> |  |
