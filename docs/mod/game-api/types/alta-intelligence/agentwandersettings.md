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
| <Link id="m-ctor" /><code>{"AgentWanderSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heuristicmaximum" /><code>{"private int heuristicMaximum"}</code> | <span className="api-desc">Backing field for `HeuristicMaximum` (default 20000).</span> |
| <Link id="m-iscancelingonblocked" /><code>{"private bool isCancelingOnBlocked"}</code> | <span className="api-desc">If true, the wander cancels as soon as the walker is blocked.</span> |
| <Link id="m-isusingtarget" /><code>{"private bool isUsingTarget"}</code> | <span className="api-desc">Backing field for `IsUsingTarget`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heuristicmaximum-2" /><code>{"int HeuristicMaximum { get; }"}</code> | <span className="api-desc">Search length for the pathfinder's constant path, which limits how far away the random point can be.</span> |
| <Link id="m-isusingtarget-2" /><code>{"bool IsUsingTarget { get; }"}</code> | <span className="api-desc">Whether the action is scored and run against a target. With the blockable wander, losing the target cancels it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds `ActiveBlockCanceleableWander` if `isCancelingOnBlocked` is on, otherwise `ActiveWander`, using a target only if `IsUsingTarget`.</span> |
