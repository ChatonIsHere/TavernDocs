---
title: "AgentCircleRepositionSettings"
description: "Settings for ActiveCircleReposition: a short sidestep around the target, left or right, by a set angle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentCircleRepositionSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveCircleReposition`: a short sidestep around the target, left or right, by a set angle.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/mod/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveCircleReposition`](/mod/game-api/types/alta-intelligence/activecirclereposition)
- **Nested types** [`MovementDirection`](/mod/game-api/types/alta-intelligence/agentcirclerepositionsettings-movementdirection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentCircleRepositionSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isfacingtarget" /><code>{"private bool isFacingTarget"}</code> | <span className="api-desc">Backing field for `IsFacingTarget`.</span> |
| <Link id="m-ismovingbackwards" /><code>{"private bool isMovingBackwards"}</code> | <span className="api-desc">Backing field for `IsMovingBackwards`.</span> |
| <Link id="m-movementdirection" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agentcirclerepositionsettings-movementdirection">{"AgentCircleRepositionSettings.MovementDirection"}</Link>{" movementDirection"}</code> | <span className="api-desc">Right or left.</span> |
| <Link id="m-movementduration" /><code>{"private float movementDuration"}</code> | <span className="api-desc">Backing field for `MovementDuration`.</span> |
| <Link id="m-raycasthieght" /><code>{"private float raycastHieght"}</code> | <span className="api-desc">Backing field for `RaycastHieght`.</span> |
| <Link id="m-repositionangle" /><code>{"private float repositionAngle"}</code> | <span className="api-desc">Angle in degrees to move around the target.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfacingtarget-2" /><code>{"bool IsFacingTarget { get; }"}</code> | <span className="api-desc">Whether the agent keeps facing the target while moving.</span> |
| <Link id="m-ismovingbackwards-2" /><code>{"bool IsMovingBackwards { get; }"}</code> | <span className="api-desc">Whether the sidestep also backs away.</span> |
| <Link id="m-ismovingright" /><code>{"bool IsMovingRight { get; private set; }"}</code> | <span className="api-desc">True when the direction is right; set in `GetAction`.</span> |
| <Link id="m-movementduration-2" /><code>{"float MovementDuration { get; }"}</code> | <span className="api-desc">Passed to the walker's `NormalizedMove`.</span> |
| <Link id="m-raycasthieght-2" /><code>{"float RaycastHieght { get; }"}</code> | <span className="api-desc">Height raycasts start from when checking the new spot.</span> |
| <Link id="m-repositionangle-2" /><code>{"Quaternion RepositionAngle { get; private set; }"}</code> | <span className="api-desc">Rotation around the target for the sidestep; set in `GetAction`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Works out `IsMovingRight` and `RepositionAngle`, then builds the `ActiveCircleReposition` action.</span> |
