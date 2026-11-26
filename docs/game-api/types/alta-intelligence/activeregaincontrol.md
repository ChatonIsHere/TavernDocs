---
title: "ActiveRegainControl"
description: "Server: running action for a creature recovering after being knocked about."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveRegainControl

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action for a creature recovering after being knocked about. Waits until it's nearly still, then restores walker power and can switch action sets.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentRegainControlSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveRegainControl()"}</code> | Creates an `ActiveRegainControl` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimumvelocitysquared" /><code>{"private float minimumVelocitySquared"}</code> | Squared `MinimumVelocity` from the settings. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Finishes once the rigidbody is slower than the minimum velocity. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Sets an optional max duration and the walker's power gain per second. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Sets walker power back to 1 and switches to the `ExitTo` set if one is set. |

</details>
