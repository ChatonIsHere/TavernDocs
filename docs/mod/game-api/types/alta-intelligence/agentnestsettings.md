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
| <Link id="m-ctor" /><code>{"AgentNestSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatorsleepingbool" /><code>{"private string animatorSleepingBool"}</code> | <span className="api-desc">Backing field for `AnimatorSleepingBool`.</span> |
| <Link id="m-fulltired" /><code>{"private float fullTired"}</code> | <span className="api-desc">Backing field for `FullTired`.</span> |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> | <span className="api-desc">Backing field for `MaximumDistance`.</span> |
| <Link id="m-nonestwanderheuristic" /><code>{"private int noNestWanderHeuristic"}</code> | <span className="api-desc">Backing field for `NoNestWanderHeuristic`.</span> |
| <Link id="m-starttired" /><code>{"private float startTired"}</code> | <span className="api-desc">Backing field for `StartTired`.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Type`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatorsleepingbool-2" /><code>{"string AnimatorSleepingBool { get; }"}</code> | <span className="api-desc">Name of the network animator bool set while the agent sleeps (default `IsSleeping`).</span> |
| <Link id="m-fulltired-2" /><code>{"float FullTired { get; }"}</code> | <span className="api-desc">Normalized time of day at which the nest action reaches full weight.</span> |
| <Link id="m-maximumdistance-2" /><code>{"float MaximumDistance { get; }"}</code> | <span className="api-desc">How far to search for a nest (default 50).</span> |
| <Link id="m-nonestwanderheuristic-2" /><code>{"int NoNestWanderHeuristic { get; }"}</code> | <span className="api-desc">Wander heuristic passed to the director when no nest is found.</span> |
| <Link id="m-starttired-2" /><code>{"float StartTired { get; }"}</code> | <span className="api-desc">Normalized time of day when the agent starts getting tired; it stays asleep until the time drops below this.</span> |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/alta-intelligence/nesttype">{"NestType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The `NestType` of nest to look for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Returns the `ActiveNest` action for these settings.</span> |

## Used in

Members of other types that take, return or hold a `AgentNestSettings`:

<div className="api-used-in">

[`ActiveNest.GetAction`](/mod/game-api/types/alta-intelligence/activenest#m-getaction).

</div>
