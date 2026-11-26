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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentRegainControlSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveRegainControl()"}</code> | <span className="api-desc">Creates an `ActiveRegainControl` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimumvelocitysquared" /><code>{"private float minimumVelocitySquared"}</code> | <span className="api-desc">Squared `MinimumVelocity` from the settings.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Finishes once the rigidbody is slower than the minimum velocity.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Sets an optional max duration and the walker's power gain per second.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Sets walker power back to 1 and switches to the `ExitTo` set if one is set.</span> |

</details>
