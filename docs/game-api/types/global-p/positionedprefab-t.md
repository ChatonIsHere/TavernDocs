---
title: "PositionedPrefab<T>"
description: "Serializable base for a saved prefab reference with a local position and rotation, which subclasses spawn back under a parent in a chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionedPrefab&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

Serializable base for a saved prefab reference with a local position and rotation, which subclasses spawn back under a parent in a chunk.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Derived types** [`PositionedNetworkPrefab`](/game-api/types/global-p/positionednetworkprefab), [`PositionedStaticPrefab`](/game-api/types/global-p/positionedstaticprefab)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PositionedPrefab()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"protected Vector3 position"}</code> | Saved local position. |
| <Link id="m-rotation" /><code>{"protected Quaternion rotation"}</code> | Saved local rotation. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"abstract T Load(Transform transformParent, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Spawns the prefab under a parent in a chunk. |
| <Link id="m-save" /><code>{"virtual void Save(T scenePrefab)"}</code> | Stores the instance's local position and rotation. |
| <Link id="m-gettransform" /><code>{"protected abstract Transform GetTransform(T scenePrefab)"}</code> | Returns the transform of a spawned instance. |
