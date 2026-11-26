---
title: "Skip"
description: "An ItemModifier that places a random prefab from its list at every Nth spot along the spline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Skip

A **class** in `Root.Township`, `Alta.Bezier`.

An `ItemModifier` that places a random prefab from its list at every Nth spot along the spline.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`ItemModifier`](/game-api/types/alta-utilities/itemmodifier), [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Skip()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private GameObject[] items"}</code> | Prefabs to choose from. |
| <Link id="m-skipinterval" /><code>{"private int skipInterval"}</code> | How often (every Nth part) to place one of `items`; 2 by default. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprefab" /><code>{"override GameObject GetPrefab(List<"}<Link to="/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index)"}</code> | On every `skipInterval`th part returns a random item; otherwise null so the decorator places its usual prefab. |
