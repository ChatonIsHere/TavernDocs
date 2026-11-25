---
title: "AgentCircleRepositionSettings"
description: "class AgentCircleRepositionSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentCircleRepositionSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveCircleReposition`](/game-api/types/alta-intelligence/activecirclereposition)
- **Nested types** [`MovementDirection`](/game-api/types/alta-intelligence/agentcirclerepositionsettings-movementdirection)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AgentCircleRepositionSettings()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isfacingtarget" /><code>{"private bool isFacingTarget"}</code> |
| <Link id="m-ismovingbackwards" /><code>{"private bool isMovingBackwards"}</code> |
| <Link id="m-movementdirection" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agentcirclerepositionsettings-movementdirection">{"AgentCircleRepositionSettings.MovementDirection"}</Link>{" movementDirection"}</code> |
| <Link id="m-movementduration" /><code>{"private float movementDuration"}</code> |
| <Link id="m-raycasthieght" /><code>{"private float raycastHieght"}</code> |
| <Link id="m-repositionangle" /><code>{"private float repositionAngle"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isfacingtarget-2" /><code>{"bool IsFacingTarget { get; }"}</code> |
| <Link id="m-ismovingbackwards-2" /><code>{"bool IsMovingBackwards { get; }"}</code> |
| <Link id="m-ismovingright" /><code>{"bool IsMovingRight { get; private set; }"}</code> |
| <Link id="m-movementduration-2" /><code>{"float MovementDuration { get; }"}</code> |
| <Link id="m-raycasthieght-2" /><code>{"float RaycastHieght { get; }"}</code> |
| <Link id="m-repositionangle-2" /><code>{"Quaternion RepositionAngle { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> |
