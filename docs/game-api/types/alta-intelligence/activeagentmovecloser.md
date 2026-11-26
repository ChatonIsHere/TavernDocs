---
title: "ActiveAgentMoveCloser"
description: "Server: running action that slides a creature's rigidbody straight towards its target until it's at the reached distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveAgentMoveCloser

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that slides a creature's rigidbody straight towards its target until it's at the reached distance. Settings come from `AgentMoveCloserSettings`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAgentMoveCloser<AgentMoveCloserSettings>`](/game-api/types/alta-intelligence/basicactiveagentmovecloser-t)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveAgentMoveCloser()"}</code> | Creates an `ActiveAgentMoveCloser` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"protected override void Update(Vector3 position, Vector3 targetPosition, Vector3 toTargetXZ, Vector3 toEdge, float flatDistance)"}</code> | Moves the rigidbody towards the edge of the reached distance at `Speed` times the creature's speed stat, and finishes once there. |
