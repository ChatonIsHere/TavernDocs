---
title: "ActiveCircleReposition"
description: "Server: running action that walks a creature to a spot rotated around its target (and optionally backwards), to reposition mid fight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveCircleReposition

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that walks a creature to a spot rotated around its target (and optionally backwards), to reposition mid fight. Settings come from `AgentCircleRepositionSettings`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentCircleRepositionSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveCircleReposition()"}</code> | Creates an `ActiveCircleReposition` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Keeps the creature facing the target if `IsFacingTarget` is set. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Finds the destination and starts walking there for the set duration, or finishes on the next frame if there's no valid spot. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishorcancel" /><code>{"private void FinishOrCancel("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Stops the walker and director and clears the forward facing flag. |
| <Link id="m-getposition" /><code>{"private bool GetPosition(Vector3 topicPosition, Vector3 targetPosition, out Vector3 intendedPosition)"}</code> | Works out the destination by rotating the offset from the target by `RepositionAngle`, then raycasts for walls and ground. False if no ground is found. |

</details>
