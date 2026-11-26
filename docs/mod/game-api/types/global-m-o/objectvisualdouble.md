---
title: "ObjectVisualDouble"
description: "Pooled object that shows ghost copies of a set of mesh renderers, for example while an item moves into a dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectVisualDouble

A **class** in `Root.Township`, the global namespace.

Pooled object that shows ghost copies of a set of mesh renderers, for example while an item moves into a dock.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Derived types** [`MovingObjectsBetweenDocks`](/mod/game-api/types/global-m-o/movingobjectsbetweendocks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectVisualDouble()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeghosts" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeGhosts"}</code> | <span className="api-desc">Ghosts currently shown.</span> |
| <Link id="m-rendererghostdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" rendererGhostDefinition"}</code> | <span className="api-desc">Pool definition used to get each `RendererGhost`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-releaseactive" /><code>{"void ReleaseActive()"}</code> | <span className="api-desc">Returns all current ghosts to the pool.</span> |
| <Link id="m-setuprenderers" /><code>{"void SetupRenderers(IEnumerable<MeshRenderer> renderers)"}</code> | <span className="api-desc">Releases old ghosts, then makes a ghost of each active renderer and parents it to this object.</span> |
