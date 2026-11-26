---
title: "ActiveJumpAt"
description: "Action where the agent leaps at its target with set velocity and gravity, finishing when it lands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveJumpAt

A **class** in `Root.Township`, `Alta.Intelligence`.

Action where the agent leaps at its target with set velocity and gravity, finishing when it lands. Tells an `IJumpAttacker` agent it is jumping.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentJumpAtSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveJumpAt()"}</code> | <span className="api-desc">Creates an `ActiveJumpAt` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gravity" /><code>{"private float gravity"}</code> | <span className="api-desc">The walker's gravity multiplier before the jump, restored after.</span> |
| <Link id="m-jumpattacker" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/ijumpattacker">{"IJumpAttacker"}</Link>{" jumpAttacker"}</code> | <span className="api-desc">The agent as an `IJumpAttacker`, or null.</span> |
| <Link id="m-targetrotation" /><code>{"private Quaternion targetRotation"}</code> | <span className="api-desc">Flat rotation towards the target, held during the jump.</span> |
| <Link id="m-wasjumping" /><code>{"private bool wasJumping"}</code> | <span className="api-desc">Whether the agent has left the ground yet.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Keeps facing the target and finishes once the agent touches ground after being in the air.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Launches the agent at the target, lowers gravity, faces it and sets the action's duration.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlefinished" /><code>{"private void HandleFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Restores walker power and gravity, clears facing and tells the jump attacker the jump is over.</span> |

</details>
