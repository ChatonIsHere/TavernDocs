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
| <Link id="m-ctor" /><code>{"AgentCircleTargetSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circlingcalculationdistance" /><code>{"private float circlingCalculationDistance"}</code> | <span className="api-desc">Backing field for `CirclingCalculationDistance`.</span> |
| <Link id="m-maxdistancefromtargetsquared" /><code>{"private float maxDistanceFromTargetSquared"}</code> | <span className="api-desc">Backing field for `MaxDistanceFromTargetSquared`.</span> |
| <Link id="m-targetdistance" /><code>{"private float targetDistance"}</code> | <span className="api-desc">Backing field for `TargetDistance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-circlingcalculationdistance-2" /><code>{"float CirclingCalculationDistance { get; }"}</code> | <span className="api-desc">Distance moved around the circle per second, also the reach of the path check.</span> |
| <Link id="m-maxdistancefromtargetsquared-2" /><code>{"float MaxDistanceFromTargetSquared { get; }"}</code> | <span className="api-desc">Squared distance from the target past which circling finishes.</span> |
| <Link id="m-targetdistance-2" /><code>{"float TargetDistance { get; }"}</code> | <span className="api-desc">Radius to circle the target at.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the `ActiveCircleTarget` action, using a target.</span> |
