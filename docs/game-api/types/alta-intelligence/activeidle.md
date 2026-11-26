---
title: "ActiveIdle"
description: "The running idle action for an agent, made from AgentIdleSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveIdle

A **class** in `Root.Township`, `Alta.Intelligence`.

The running idle action for an agent, made from `AgentIdleSettings`. It waits a random duration and can turn to face or follow the target while it does.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentIdleSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveIdle()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isslowing" /><code>{"private bool isSlowing"}</code> | The walker's `IsSlowedWhenNotMoving` value from before the idle, put back when it ends. |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | Real time the idle started, used for the follow and facing time windows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/activeidle">{"ActiveIdle"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{"> GetAction("}<Link to="/game-api/types/alta-intelligence/agentidlesettings">{"AgentIdleSettings"}</Link>{" settings)"}</code> | Builds the idle action for the given settings, copying their `IsUsingTarget` flag. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | While the target exists, faces it and follows it inside the configured time windows; otherwise stops the director. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Maybe asks the population to move the spawn, sets a random duration, records the start time and hooks the finish handlers when facing the target. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Restores the walker's slow-down flag and stops the director's facing and movement when the idle ends or is cancelled. |

</details>

## Used in

Members of other types that take, return or hold a `ActiveIdle`:

[`ActiveSchmeecheePlant.GetAction`](/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction).
