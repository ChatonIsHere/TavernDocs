---
title: "AgentNestSettings"
description: "Action component that sends an agent to the closest free nest of a type to sleep at night."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentNestSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Action component that sends an agent to the closest free nest of a type to sleep at night. Runs `ActiveNest` on the server's AI.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AgentNavigationSettings`](/mod/game-api/types/alta-intelligence/agentnavigationsettings)
- **Derived types** [`ActiveNest`](/mod/game-api/types/alta-intelligence/activenest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentNestSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatorsleepingbool" /><code>{"private string animatorSleepingBool"}</code> | Backing field for `AnimatorSleepingBool`. |
| <Link id="m-fulltired" /><code>{"private float fullTired"}</code> | Backing field for `FullTired`. |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> | Backing field for `MaximumDistance`. |
| <Link id="m-nonestwanderheuristic" /><code>{"private int noNestWanderHeuristic"}</code> | Backing field for `NoNestWanderHeuristic`. |
| <Link id="m-starttired" /><code>{"private float startTired"}</code> | Backing field for `StartTired`. |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type"}</code> | Backing field for `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatorsleepingbool-2" /><code>{"string AnimatorSleepingBool { get; }"}</code> | Name of the network animator bool set while the agent sleeps (default `IsSleeping`). |
| <Link id="m-fulltired-2" /><code>{"float FullTired { get; }"}</code> | Normalized time of day at which the nest action reaches full weight. |
| <Link id="m-maximumdistance-2" /><code>{"float MaximumDistance { get; }"}</code> | How far to search for a nest (default 50). |
| <Link id="m-nonestwanderheuristic-2" /><code>{"int NoNestWanderHeuristic { get; }"}</code> | Wander heuristic passed to the director when no nest is found. |
| <Link id="m-starttired-2" /><code>{"float StartTired { get; }"}</code> | Normalized time of day when the agent starts getting tired; it stays asleep until the time drops below this. |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" Type { get; }"}</code> | The `NestType` of nest to look for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Returns the `ActiveNest` action for these settings. |

## Used in

Members of other types that take, return or hold a `AgentNestSettings`:

[`ActiveNest.GetAction`](/mod/game-api/types/alta-intelligence/activenest#m-getaction).
