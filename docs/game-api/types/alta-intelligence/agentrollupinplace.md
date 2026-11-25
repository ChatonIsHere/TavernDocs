---
title: "AgentRollUpInPlace"
description: "class AgentRollUpInPlace in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentRollUpInPlace

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentRollUpInPlaceSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Nested types** [`Point`](/game-api/types/alta-intelligence/agentrollupinplace-point)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentRollUpInPlace()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |
| <Link id="m-turningupnormal" /><code>{"private Vector3 turningUpNormal"}</code> |  |
| <Link id="m-turningupposition" /><code>{"private Vector3 turningUpPosition"}</code> |  |
| <Link id="m-turninguprotation" /><code>{"private Quaternion turningUpRotation"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update-2" /><code>{"override void Update(bool hasTarget)"}</code> |  |
| <Link id="m-calculateturn" /><code>{"private void CalculateTurn()"}</code> |  |
| <Link id="m-getclosestpoint" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agentrollupinplace-point">{"AgentRollUpInPlace.Point"}</Link>{" GetClosestPoint(Collider collider, Vector3 point, Quaternion rotation)"}</code> |  |
| <Link id="m-onfinished" /><code>{"private void OnFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |  |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> |  |
| <Link id="m-terminateupdate" /><code>{"private void TerminateUpdate("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-terminateupdate-2" /><code>{"private void TerminateUpdate()"}</code> |  |
| <Link id="m-turnup" /><code>{"private void TurnUp()"}</code> |  |
