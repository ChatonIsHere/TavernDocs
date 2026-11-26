---
title: "ActiveNest"
description: "Night action: the agent walks to the nearest free Nest of its type and sleeps until the time of day passes StartTired."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveNest

A **class** in `Root.Township`, `Alta.Intelligence`.

Night action: the agent walks to the nearest free `Nest` of its type and sleeps until the time of day passes `StartTired`. With no nest it wanders.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveNest, Agent, AgentNestSettings>`](/mod/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveNest`](/mod/game-api/types/alta-intelligence/activenest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveNest()"}</code> | <span className="api-desc">Creates an `ActiveNest` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> | <span className="api-desc">The running `CheckTimeOfDay` coroutine.</span> |
| <Link id="m-defaultdrag" /><code>{"private float defaultDrag"}</code> | <span className="api-desc">Rigidbody drag before sleeping. Only set on arrival, so a cancel before that restores 0.</span> |
| <Link id="m-issleeping" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" isSleeping"}</code> | <span className="api-desc">Synced animator bool for sleeping.</span> |
| <Link id="m-nest" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{" nest"}</code> | <span className="api-desc">The nest claimed for this sleep.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction("}<Link to="/mod/game-api/types/alta-intelligence/agentnestsettings">{"AgentNestSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Builds the action, with its need rising from `StartTired` to `FullTired` by time of day.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Claims the closest nest and walks to it, or wanders if none is in range.</span> |
| <Link id="m-targetreached" /><code>{"protected override void TargetReached()"}</code> | <span className="api-desc">Starts sleeping: sets the animator bool and asleep sense, raises drag to 1 and starts `CheckTimeOfDay`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checktimeofday" /><code>{"private IEnumerator CheckTimeOfDay() (iterator)"}</code> | <span className="api-desc">Coroutine that checks every 10 seconds, waits until it's no longer sleep time, then wakes, frees the nest and finishes.</span> |
| <Link id="m-handlecancelled" /><code>{"private void HandleCancelled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | <span className="api-desc">Clears the asleep sense, restores drag, stops the coroutine and frees the nest.</span> |

</details>
