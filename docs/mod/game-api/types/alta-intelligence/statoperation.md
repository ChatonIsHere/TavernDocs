---
title: "StatOperation"
description: "Prefab scoring component that adds a StatValue rule on a stat of the creature or the target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds a `StatValue` rule on a stat of the creature or the target. The shipped "Aggroing Stat" rules are this.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatOperation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Stat value that maps to 0. |
| <Link id="m-isratio" /><code>{"private bool isRatio"}</code> | Use the stat's position between its minimum and maximum (0 to 1) instead of its raw value. |
| <Link id="m-istargetstat" /><code>{"private bool isTargetStat"}</code> | Read the target's stat instead of the creature's. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | The stat read. |
| <Link id="m-to" /><code>{"private float to"}</code> | Stat value that maps to 1 (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes the `StatValue` rule, weighted by `multiplier`. Logs an error and returns null if no stat is set. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name from the stat's name and range. |
