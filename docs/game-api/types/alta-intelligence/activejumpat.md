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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentJumpAtSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveJumpAt()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gravity" /><code>{"private float gravity"}</code> | The walker's gravity multiplier before the jump, restored after. |
| <Link id="m-jumpattacker" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/ijumpattacker">{"IJumpAttacker"}</Link>{" jumpAttacker"}</code> | The agent as an `IJumpAttacker`, or null. |
| <Link id="m-targetrotation" /><code>{"private Quaternion targetRotation"}</code> | Flat rotation towards the target, held during the jump. |
| <Link id="m-wasjumping" /><code>{"private bool wasJumping"}</code> | Whether the agent has left the ground yet. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Keeps facing the target and finishes once the agent touches ground after being in the air. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Launches the agent at the target, lowers gravity, faces it and sets the action's duration. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlefinished" /><code>{"private void HandleFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Restores walker power and gravity, clears facing and tells the jump attacker the jump is over. |

</details>
