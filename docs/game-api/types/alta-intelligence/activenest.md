---
title: "ActiveNest"
description: "class ActiveNest in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveNest

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveNest, Agent, AgentNestSettings>`](/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveNest`](/game-api/types/alta-intelligence/activenest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveNest()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> |
| <Link id="m-defaultdrag" /><code>{"private float defaultDrag"}</code> |
| <Link id="m-issleeping" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" isSleeping"}</code> |
| <Link id="m-nest" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/nest">{"Nest"}</Link>{" nest"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction("}<Link to="/game-api/types/alta-intelligence/agentnestsettings">{"AgentNestSettings"}</Link>{" settings)"}</code> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |
| <Link id="m-targetreached" /><code>{"protected override void TargetReached()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checktimeofday" /><code>{"private IEnumerator CheckTimeOfDay() (iterator)"}</code> |
| <Link id="m-handlecancelled" /><code>{"private void HandleCancelled("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> |

</details>
