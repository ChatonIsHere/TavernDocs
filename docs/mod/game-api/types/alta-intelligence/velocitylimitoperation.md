---
title: "VelocityLimitOperation"
description: "Prefab scoring component that adds a VelocityLimit rule on the creature's speed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityLimitOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds a `VelocityLimit` rule on the creature's speed.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VelocityLimitOperation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximimumvelocitysquared" /><code>{"private float maximimumVelocitySquared"}</code> | The speed limit, squared (default 1). The inspector shows it unsquared. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |
| <Link id="m-outsidelimitvalue" /><code>{"private float outsideLimitValue"}</code> | Value at or above the limit (default 0). |
| <Link id="m-withinlimitvalue" /><code>{"private float withinLimitValue"}</code> | Value below the limit (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes the `VelocityLimit` rule, weighted by `multiplier`. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Velocity < 1 ? 1 : 0 (x1)`. |
