---
title: "AgentRollUpInPlace"
description: "Server: running action that turns an upside down or tipped crawler back upright onto the nearest ground surface, then can switch action sets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentRollUpInPlace

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that turns an upside down or tipped crawler back upright onto the nearest ground surface, then can switch action sets. Settings come from `AgentRollUpInPlaceSettings`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentRollUpInPlaceSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Nested types** [`Point`](/game-api/types/alta-intelligence/agentrollupinplace-point)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentRollUpInPlace()"}</code> | Creates an `AgentRollUpInPlace` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | The creature's rigidbody transform, moved directly. |
| <Link id="m-turningupnormal" /><code>{"private Vector3 turningUpNormal"}</code> | Normal of the surface the creature is turning onto. |
| <Link id="m-turningupposition" /><code>{"private Vector3 turningUpPosition"}</code> | Ground point the creature ends up on. |
| <Link id="m-turninguprotation" /><code>{"private Quaternion turningUpRotation"}</code> | Upright rotation the creature turns to. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered `TurnUp` update. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared "Turn up Update" fixed update module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update-2" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing. The turning runs in `TurnUp`. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Works out the turn and registers `TurnUp` on its fixed update module. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateturn" /><code>{"private void CalculateTurn()"}</code> | Finds the nearest ground point and normal around the creature and works out the upright position and rotation to turn to. Falls back to world up. |
| <Link id="m-getclosestpoint" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agentrollupinplace-point">{"AgentRollUpInPlace.Point"}</Link>{" GetClosestPoint(Collider collider, Vector3 point, Quaternion rotation)"}</code> | Gets the closest point on a ground collider. Non-convex mesh colliders are raycast instead, since `ClosestPoint` doesn't work on them. |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Stops the turn update and switches to the `ExitTo` set if one is set. |
| <Link id="m-terminateupdate" /><code>{"private void TerminateUpdate("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Deregisters the `TurnUp` update. The overload taking an action is the cancel handler. |
| <Link id="m-terminateupdate-2" /><code>{"private void TerminateUpdate()"}</code> | Deregisters the `TurnUp` update. The overload taking an action is the cancel handler. |
| <Link id="m-turnup" /><code>{"private void TurnUp()"}</code> | Fixed update: rotates the creature towards the upright rotation, pivoting around the ground contact, and finishes once it's there. |

</details>
