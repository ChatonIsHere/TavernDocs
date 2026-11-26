---
title: "BurnStat"
description: "Stat definition for being on fire."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BurnStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Stat definition for being on fire. Above the ignite threshold it drains the `health` stat every stat update, and the burn value falls by itself over time.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ControlledStat`](/mod/game-api/types/alta-stats-effects/controlledstat)
- **Derived types** [`BurnStat.Create`](/mod/game-api/types/alta-stats-effects/burnstat-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/burnstat-create)
- **Documented in** [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BurnStat()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagebyvalue" /><code>{"private AnimationCurve damageByValue"}</code> | Health lost per stat update for a given burn value. |
| <Link id="m-ignitethreshold" /><code>{"private float igniteThreshold"}</code> | Backing field for `IgniteThreshold`. |
| <Link id="m-putoutspeed" /><code>{"private float putOutSpeed"}</code> | Burn value removed every stat update while above 0. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ignitethreshold-2" /><code>{"float IgniteThreshold { get; }"}</code> | Burn value above which the target starts taking damage. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Hooks the stat up: starts the health drain above `igniteThreshold`, stops it at 0, and lowers the burn by `putOutSpeed` each update. |
