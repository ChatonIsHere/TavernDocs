---
title: "DummyArrow"
description: "Visual-only arrow with LODs, used where an arrow is shown but not fired."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DummyArrow

A **class** in `Root.Township`, the global namespace.

Visual-only arrow with LODs, used where an arrow is shown but not fired. `Configure` adds the feathers.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DummyArrow()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidlodlevels" /><code>{"private float[] androidLodLevels"}</code> | LOD screen heights for Android. `Configure` doesn't read it in this build. |
| <Link id="m-feathersposition" /><code>{"private Transform feathersPosition"}</code> | Transform the feather model is attached under. |
| <Link id="m-lodlevels" /><code>{"private float[] lodLevels"}</code> | LOD screen heights used by `Configure`, one per child of the feather model. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configure" /><code>{"void Configure("}<Link to="/mod/game-api/types/global-e-h/feather">{"Feather"}</Link>{" feather)"}</code> | Spawns the feather's bottom model at the feathers point and builds the LOD group from its children. |

## Used in

Members of other types that take, return or hold a `DummyArrow`:

[`Quiver.dummyPrefab`](/mod/game-api/types/global-q-r/quiver#m-dummyprefab).
