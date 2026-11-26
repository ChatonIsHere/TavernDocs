---
title: "WalkerState"
description: "Snapshot of a walking creature's movement, sent by Walker.Updated each update and used by WalkerAnimator to set animator parameters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WalkerState

A **struct** in `Root.Township`, `Alta.Pathfinding`.

Snapshot of a walking creature's movement, sent by `Walker.Updated` each update and used by `WalkerAnimator` to set animator parameters.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-forwardspeed" /><code>{"float ForwardSpeed"}</code> | Horizontal speed along the creature's forward direction. |
| <Link id="m-isfinalstretch" /><code>{"bool IsFinalStretch"}</code> | True when the walker is on the last stretch to its target and not overshooting; drives the stopping animation. |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded"}</code> | Whether the walker is on the ground. |
| <Link id="m-ispivoting" /><code>{"bool IsPivoting"}</code> | Whether the walker is turning on the spot. |
| <Link id="m-turnspeed" /><code>{"float TurnSpeed"}</code> | How far the walker rotated this update. |
| <Link id="m-velocity" /><code>{"Vector3 Velocity"}</code> | Full velocity, horizontal plus vertical. |

## Used in

Members of other types that take, return or hold a `WalkerState`:

[`Walker.Updated`](/game-api/types/alta-intelligence/walker#m-updated), [`WalkerAnimator.UpdateAnimation`](/game-api/types/alta-intelligence/walkeranimator#m-updateanimation).
