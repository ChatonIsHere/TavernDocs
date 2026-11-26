---
title: "StatValue"
description: "Scoring rule on a stat of the creature or the target, mapped onto 0 to 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatValue

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule on a stat of the creature or the target, mapped onto 0 to 1. Made by `CreateTargetOperation.Stat`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatValue("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float from, float to, bool isTargetStat, bool isRatio)"}</code> | Creates a `StatValue` from `statDefinition`, `from`, `to`, `isTargetStat` and `isRatio`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Value that maps to 0. |
| <Link id="m-isratio" /><code>{"private bool isRatio"}</code> | Use the stat's position between its minimum and maximum. |
| <Link id="m-istargetstat" /><code>{"private bool isTargetStat"}</code> | Read the target's stat instead of the creature's. |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | The stat read. |
| <Link id="m-to" /><code>{"private float to"}</code> | Value that maps to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Returns the stat's value (or ratio) inverse-lerped from `from` to `to`. Returns 1 if the stat or stat manager is missing. |
