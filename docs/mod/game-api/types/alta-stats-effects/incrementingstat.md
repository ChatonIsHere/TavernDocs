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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`IncrementingStat.Create`](/mod/game-api/types/alta-stats-effects/incrementingstat-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/incrementingstat-create)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IncrementingStat()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincrementing" /><code>{"private bool isIncrementing"}</code> | <span className="api-desc">Backing field for `IsIncrementing`.</span> |
| <Link id="m-statchangepersecond" /><code>{"private float statChangePerSecond"}</code> | <span className="api-desc">Change per second. Negative values drain the stat.</span> |
| <Link id="m-statchangepertick" /><code>{"private float statChangePerTick"}</code> | <span className="api-desc">`statChangePerSecond` times the manager's incremental tick time.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isincrementing-2" /><code>{"bool IsIncrementing { get; }"}</code> | <span className="api-desc">True when the change per second is negative, so the name reads backwards.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Works out the per tick change and adds it on each incremental update while the value is above 0.</span> |
