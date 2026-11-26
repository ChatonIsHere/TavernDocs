---
title: "ActiveDelayEnterSet"
description: "Server: running action that waits a set time, then switches the creature to another action set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveDelayEnterSet

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that waits a set time, then switches the creature to another action set. Settings come from `AgentDelayEnterSetSettings`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentDelayEnterSetSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveDelayEnterSet()"}</code> | Creates an `ActiveDelayEnterSet` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Sets the duration and hooks `OnFinished`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Switches to the `ExitTo` set when the time is up, if one is set. |

</details>
