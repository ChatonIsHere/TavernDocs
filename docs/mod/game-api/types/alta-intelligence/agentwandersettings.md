---
title: "AgentWanderSettings"
description: "Settings for ActiveWander and ActiveBlockCanceleableWander: walk to a random reachable point near the creature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentWanderSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveWander` and `ActiveBlockCanceleableWander`: walk to a random reachable point near the creature. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AgentNavigationSettings`](/mod/game-api/types/alta-intelligence/agentnavigationsettings)
- **Derived types** [`ActiveWander`](/mod/game-api/types/alta-intelligence/activewander)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentWanderSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heuristicmaximum" /><code>{"private int heuristicMaximum"}</code> | Backing field for `HeuristicMaximum` (default 20000). |
| <Link id="m-iscancelingonblocked" /><code>{"private bool isCancelingOnBlocked"}</code> | If true, the wander cancels as soon as the walker is blocked. |
| <Link id="m-isusingtarget" /><code>{"private bool isUsingTarget"}</code> | Backing field for `IsUsingTarget`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heuristicmaximum-2" /><code>{"int HeuristicMaximum { get; }"}</code> | Search length for the pathfinder's constant path, which limits how far away the random point can be. |
| <Link id="m-isusingtarget-2" /><code>{"bool IsUsingTarget { get; }"}</code> | Whether the action is scored and run against a target. With the blockable wander, losing the target cancels it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds `ActiveBlockCanceleableWander` if `isCancelingOnBlocked` is on, otherwise `ActiveWander`, using a target only if `IsUsingTarget`. |
