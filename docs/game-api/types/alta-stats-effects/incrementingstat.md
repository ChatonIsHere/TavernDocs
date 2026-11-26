---
title: "IncrementingStat"
description: "Stat definition that changes by a fixed amount per second on the manager's incremental tick, while its value is above 0."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IncrementingStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Stat definition that changes by a fixed amount per second on the manager's incremental tick, while its value is above 0.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`IncrementingStat.Create`](/game-api/types/alta-stats-effects/incrementingstat-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/incrementingstat-create)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IncrementingStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincrementing" /><code>{"private bool isIncrementing"}</code> | Backing field for `IsIncrementing`. |
| <Link id="m-statchangepersecond" /><code>{"private float statChangePerSecond"}</code> | Change per second. Negative values drain the stat. |
| <Link id="m-statchangepertick" /><code>{"private float statChangePerTick"}</code> | `statChangePerSecond` times the manager's incremental tick time. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isincrementing-2" /><code>{"bool IsIncrementing { get; }"}</code> | True when the change per second is negative, so the name reads backwards. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Works out the per tick change and adds it on each incremental update while the value is above 0. |
