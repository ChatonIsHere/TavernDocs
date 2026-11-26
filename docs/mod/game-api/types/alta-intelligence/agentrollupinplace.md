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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentRollUpInPlaceSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Nested types** [`Point`](/mod/game-api/types/alta-intelligence/agentrollupinplace-point)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentRollUpInPlace()"}</code> | <span className="api-desc">Creates an `AgentRollUpInPlace` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">The creature's rigidbody transform, moved directly.</span> |
| <Link id="m-turningupnormal" /><code>{"private Vector3 turningUpNormal"}</code> | <span className="api-desc">Normal of the surface the creature is turning onto.</span> |
| <Link id="m-turningupposition" /><code>{"private Vector3 turningUpPosition"}</code> | <span className="api-desc">Ground point the creature ends up on.</span> |
| <Link id="m-turninguprotation" /><code>{"private Quaternion turningUpRotation"}</code> | <span className="api-desc">Upright rotation the creature turns to.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered `TurnUp` update.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared "Turn up Update" fixed update module.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update-2" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Does nothing. The turning runs in `TurnUp`.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Works out the turn and registers `TurnUp` on its fixed update module.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateturn" /><code>{"private void CalculateTurn()"}</code> | <span className="api-desc">Finds the nearest ground point and normal around the creature and works out the upright position and rotation to turn to. Falls back to world up.</span> |
| <Link id="m-getclosestpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agentrollupinplace-point">{"AgentRollUpInPlace.Point"}</Link>{" GetClosestPoint(Collider collider, Vector3 point, Quaternion rotation)"}</code> | <span className="api-desc">Gets the closest point on a ground collider. Non-convex mesh colliders are raycast instead, since `ClosestPoint` doesn't work on them.</span> |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Stops the turn update and switches to the `ExitTo` set if one is set.</span> |
| <Link id="m-terminateupdate" /><code>{"private void TerminateUpdate("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Deregisters the `TurnUp` update. The overload taking an action is the cancel handler.</span> |
| <Link id="m-terminateupdate-2" /><code>{"private void TerminateUpdate()"}</code> | <span className="api-desc">Deregisters the `TurnUp` update. The overload taking an action is the cancel handler.</span> |
| <Link id="m-turnup" /><code>{"private void TurnUp()"}</code> | <span className="api-desc">Fixed update: rotates the creature towards the upright rotation, pivoting around the ground contact, and finishes once it's there.</span> |

</details>
