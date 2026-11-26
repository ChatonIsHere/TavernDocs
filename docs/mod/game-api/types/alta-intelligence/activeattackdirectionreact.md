---
title: "ActiveAttackDirectionReact"
description: "Server: running action that drives an AttackDirectionCore (reacting to the direction a player attacks from) for a random duration while there's a target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveAttackDirectionReact

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that drives an `AttackDirectionCore` (reacting to the direction a player attacks from) for a random duration while there's a target.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentAttackDirectionReactSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveAttackDirectionReact()"}</code> | <span className="api-desc">Creates an `ActiveAttackDirectionReact` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-core" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncore">{"AttackDirectionCore"}</Link>{" core"}</code> | <span className="api-desc">The attack direction core in use, cleared when the action ends.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Updates the core each tick, or finishes if the target is gone.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Sets a random duration, gets the core from the settings for this creature and hooks the end events.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishedorcanceled" /><code>{"private void FinishedOrCanceled("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Disables the core for this creature when the action ends either way.</span> |

</details>
