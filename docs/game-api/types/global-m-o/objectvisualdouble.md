---
title: "ObjectVisualDouble"
description: "Pooled object that shows ghost copies of a set of mesh renderers, for example while an item moves into a dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectVisualDouble

A **class** in `Root.Township`, no namespace.

Pooled object that shows ghost copies of a set of mesh renderers, for example while an item moves into a dock.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`MovingObjectsBetweenDocks`](/game-api/types/global-m-o/movingobjectsbetweendocks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ObjectVisualDouble()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeghosts" /><code>{"private List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeGhosts"}</code> | Ghosts currently shown. |
| <Link id="m-rendererghostdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" rendererGhostDefinition"}</code> | Pool definition used to get each `RendererGhost`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-releaseactive" /><code>{"void ReleaseActive()"}</code> | Returns all current ghosts to the pool. |
| <Link id="m-setuprenderers" /><code>{"void SetupRenderers(IEnumerable<MeshRenderer> renderers)"}</code> | Releases old ghosts, then makes a ghost of each active renderer and parents it to this object. |
