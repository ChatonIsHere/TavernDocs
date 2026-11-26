---
title: "PositionedPrefab<T>"
description: "Serializable base for a saved prefab reference with a local position and rotation, which subclasses spawn back under a parent in a chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionedPrefab&lt;T&gt;

An **abstract class** in `Root.Township`, the global namespace.

Serializable base for a saved prefab reference with a local position and rotation, which subclasses spawn back under a parent in a chunk.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Derived types** [`PositionedNetworkPrefab`](/mod/game-api/types/global-p/positionednetworkprefab), [`PositionedStaticPrefab`](/mod/game-api/types/global-p/positionedstaticprefab)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PositionedPrefab()"}</code> | <span className="api-desc">Creates a `PositionedPrefab` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"protected Vector3 position"}</code> | <span className="api-desc">Saved local position.</span> |
| <Link id="m-rotation" /><code>{"protected Quaternion rotation"}</code> | <span className="api-desc">Saved local rotation.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"abstract T Load(Transform transformParent, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Spawns the prefab under a parent in a chunk.</span> |
| <Link id="m-save" /><code>{"virtual void Save(T scenePrefab)"}</code> | <span className="api-desc">Stores the instance's local position and rotation.</span> |
| <Link id="m-gettransform" /><code>{"protected abstract Transform GetTransform(T scenePrefab)"}</code> | <span className="api-desc">Returns the transform of a spawned instance.</span> |
