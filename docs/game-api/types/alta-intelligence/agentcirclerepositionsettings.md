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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveCircleReposition`](/game-api/types/alta-intelligence/activecirclereposition)
- **Nested types** [`MovementDirection`](/game-api/types/alta-intelligence/agentcirclerepositionsettings-movementdirection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentCircleRepositionSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isfacingtarget" /><code>{"private bool isFacingTarget"}</code> | Backing field for `IsFacingTarget`. |
| <Link id="m-ismovingbackwards" /><code>{"private bool isMovingBackwards"}</code> | Backing field for `IsMovingBackwards`. |
| <Link id="m-movementdirection" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agentcirclerepositionsettings-movementdirection">{"AgentCircleRepositionSettings.MovementDirection"}</Link>{" movementDirection"}</code> | Right or left. |
| <Link id="m-movementduration" /><code>{"private float movementDuration"}</code> | Backing field for `MovementDuration`. |
| <Link id="m-raycasthieght" /><code>{"private float raycastHieght"}</code> | Backing field for `RaycastHieght`. |
| <Link id="m-repositionangle" /><code>{"private float repositionAngle"}</code> | Angle in degrees to move around the target. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isfacingtarget-2" /><code>{"bool IsFacingTarget { get; }"}</code> | Whether the agent keeps facing the target while moving. |
| <Link id="m-ismovingbackwards-2" /><code>{"bool IsMovingBackwards { get; }"}</code> | Whether the sidestep also backs away. |
| <Link id="m-ismovingright" /><code>{"bool IsMovingRight { get; private set; }"}</code> | True when the direction is right; set in `GetAction`. |
| <Link id="m-movementduration-2" /><code>{"float MovementDuration { get; }"}</code> | Passed to the walker's `NormalizedMove`. |
| <Link id="m-raycasthieght-2" /><code>{"float RaycastHieght { get; }"}</code> | Height raycasts start from when checking the new spot. |
| <Link id="m-repositionangle-2" /><code>{"Quaternion RepositionAngle { get; private set; }"}</code> | Rotation around the target for the sidestep; set in `GetAction`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Works out `IsMovingRight` and `RepositionAngle`, then builds the `ActiveCircleReposition` action. |
