---
title: "FireLighter"
description: "A trigger that tries to light any IFlammable collider that enters it, with a set chance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireLighter

A **class** in `Root.Township`, `Alta.Heat`.

A trigger that tries to light any `IFlammable` collider that enters it, with a set chance.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Heat](/mod/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireLighter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"private float chance"}</code> | Backing field for `Chance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chance-2" /><code>{"float Chance { get; set; }"}</code> | Probability from 0 to 1 that an entering collider gets `TryLight` called. Default 1. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | Rolls against `Chance` and calls `TryLight` on the entering collider's `IFlammable`, if it has one. |

</details>
