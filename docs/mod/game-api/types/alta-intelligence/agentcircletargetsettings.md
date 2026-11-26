---
title: "AgentCircleTargetSettings"
description: "Settings for ActiveCircleTarget: the agent circles its target at a set distance on a random timer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentCircleTargetSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveCircleTarget`: the agent circles its target at a set distance on a random timer.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveCircleTarget`](/mod/game-api/types/alta-intelligence/activecircletarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentCircleTargetSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circlingcalculationdistance" /><code>{"private float circlingCalculationDistance"}</code> | Backing field for `CirclingCalculationDistance`. |
| <Link id="m-maxdistancefromtargetsquared" /><code>{"private float maxDistanceFromTargetSquared"}</code> | Backing field for `MaxDistanceFromTargetSquared`. |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> | Backing field for `TargetDistance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-circlingcalculationdistance-2" /><code>{"float CirclingCalculationDistance { get; }"}</code> | Distance moved around the circle per second, also the reach of the path check. |
| <Link id="m-maxdistancefromtargetsquared-2" /><code>{"float MaxDistanceFromTargetSquared { get; }"}</code> | Squared distance from the target past which circling finishes. |
| <Link id="m-targetdistance-2" /><code>{"float TargetDistance { get; }"}</code> | Radius to circle the target at. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the `ActiveCircleTarget` action, using a target. |
