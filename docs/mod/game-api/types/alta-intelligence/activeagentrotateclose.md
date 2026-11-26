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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAgentMoveCloser<AgentCircleCloserSettings>`](/mod/game-api/types/alta-intelligence/basicactiveagentmovecloser-t)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveAgentRotateClose()"}</code> | <span className="api-desc">Creates an `ActiveAgentRotateClose` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationangle" /><code>{"private Vector3 rotationAngle"}</code> | <span className="api-desc">The circling axis, up or down, picked at random on start.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Sets up the speed multiplier and picks clockwise or anticlockwise at random.</span> |
| <Link id="m-update" /><code>{"protected override void Update(Vector3 position, Vector3 targetPosition, Vector3 toTargetXZ, Vector3 toEdge, float flatDistance)"}</code> | <span className="api-desc">Moves straight in while still outside the reached distance, otherwise steps around the target at `CircleSpeed`.</span> |
