---
title: "IncrementingStat"
description: "Adds statChangePerSecond on every incremental tick while the value is above 0."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IncrementingStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Adds `statChangePerSecond` on every incremental tick while the value is above 0.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition)
- **Derived types** [`IncrementingStat.Create`](/game-api/types/alta-stats-effects/incrementingstat-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/incrementingstat-create)
- **Documented in** [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IncrementingStat()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isincrementing" /><code>{"private bool isIncrementing"}</code> |
| <Link id="m-statchangepersecond" /><code>{"private float statChangePerSecond"}</code> |
| <Link id="m-statchangepertick" /><code>{"private float statChangePerTick"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isincrementing-2" /><code>{"bool IsIncrementing { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |
