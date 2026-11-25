---
title: "PositionedPrefab<T>"
description: "abstract class PositionedPrefab<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionedPrefab&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Derived types** [`PositionedNetworkPrefab`](/game-api/types/global-p/positionednetworkprefab), [`PositionedStaticPrefab`](/game-api/types/global-p/positionedstaticprefab)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PositionedPrefab()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"protected Vector3 position"}</code> |  |
| <Link id="m-rotation" /><code>{"protected Quaternion rotation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"abstract T Load(Transform transformParent, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-save" /><code>{"virtual void Save(T scenePrefab)"}</code> |  |
| <Link id="m-gettransform" /><code>{"protected abstract Transform GetTransform(T scenePrefab)"}</code> |  |
