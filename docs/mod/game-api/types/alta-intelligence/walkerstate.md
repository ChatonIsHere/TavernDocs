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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Documented in** [Movement and pathfinding](/mod/game-api/creatures/movement-and-pathfinding)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-forwardspeed" /><code>{"float ForwardSpeed"}</code> | <span className="api-desc">Horizontal speed along the creature's forward direction.</span> |
| <Link id="m-isfinalstretch" /><code>{"bool IsFinalStretch"}</code> | <span className="api-desc">True when the walker is on the last stretch to its target and not overshooting; drives the stopping animation.</span> |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded"}</code> | <span className="api-desc">Whether the walker is on the ground.</span> |
| <Link id="m-ispivoting" /><code>{"bool IsPivoting"}</code> | <span className="api-desc">Whether the walker is turning on the spot.</span> |
| <Link id="m-turnspeed" /><code>{"float TurnSpeed"}</code> | <span className="api-desc">How far the walker rotated this update.</span> |
| <Link id="m-velocity" /><code>{"Vector3 Velocity"}</code> | <span className="api-desc">Full velocity, horizontal plus vertical.</span> |

## Used in

Members of other types that take, return or hold a `WalkerState`:

<div className="api-used-in">

[`Walker.Updated`](/mod/game-api/types/alta-intelligence/walker#m-updated), [`WalkerAnimator.UpdateAnimation`](/mod/game-api/types/alta-intelligence/walkeranimator#m-updateanimation).

</div>
