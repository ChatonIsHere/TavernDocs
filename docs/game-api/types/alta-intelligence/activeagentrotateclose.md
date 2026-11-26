---
title: "ActiveAgentRotateClose"
description: "Server: running action that moves a creature in to its target, then circles the target at the reached distance in a random direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveAgentRotateClose

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that moves a creature in to its target, then circles the target at the reached distance in a random direction. Settings come from `AgentCircleCloserSettings`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAgentMoveCloser<AgentCircleCloserSettings>`](/game-api/types/alta-intelligence/basicactiveagentmovecloser-t)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveAgentRotateClose()"}</code> | Creates an `ActiveAgentRotateClose` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationangle" /><code>{"private Vector3 rotationAngle"}</code> | The circling axis, up or down, picked at random on start. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Sets up the speed multiplier and picks clockwise or anticlockwise at random. |
| <Link id="m-update" /><code>{"protected override void Update(Vector3 position, Vector3 targetPosition, Vector3 toTargetXZ, Vector3 toEdge, float flatDistance)"}</code> | Moves straight in while still outside the reached distance, otherwise steps around the target at `CircleSpeed`. |
