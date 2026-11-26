---
title: "AgentMoveCloserSettings"
description: "Settings for ActiveAgentMoveCloser: slide the creature's rigidbody straight toward the target, without pathfinding, until it is a set distance away."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentMoveCloserSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveAgentMoveCloser`: slide the creature's rigidbody straight toward the target, without pathfinding, until it is a set distance away. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`ActiveAgentMoveCloser`](/mod/game-api/types/alta-intelligence/activeagentmovecloser), [`AgentCircleCloserSettings`](/mod/game-api/types/alta-intelligence/agentcircleclosersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentMoveCloserSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxdistancebeforecancelsquared" /><code>{"private float maxDistanceBeforeCancelSquared"}</code> | Backing field for `MaxDistanceBeforeCancelSquared` (default 400, so 20 m). |
| <Link id="m-reacheddistance" /><code>{"private float reachedDistance"}</code> | Backing field for `ReachedDistance`. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Backing field for `Speed`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxdistancebeforecancelsquared-2" /><code>{"float MaxDistanceBeforeCancelSquared { get; }"}</code> | Squared distance to the target beyond which the action cancels. |
| <Link id="m-reacheddistance-2" /><code>{"float ReachedDistance { get; }"}</code> | How far from the target's ground position the creature stops. |
| <Link id="m-speed-2" /><code>{"float Speed { get; }"}</code> | Movement speed in metres per second, multiplied by the creature's "speed" stat if it has one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveAgentMoveCloser` action, which uses a target. |
