---
title: "BasicActiveAgentMoveCloser<T>"
description: "Base for running actions that move a creature straight at its target without pathfinding."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicActiveAgentMoveCloser&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for running actions that move a creature straight at its target without pathfinding. Faces the target each tick, cancels if it's lost or too far, and leaves the movement to the subclass. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, T>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Derived types** [`ActiveAgentMoveCloser`](/mod/game-api/types/alta-intelligence/activeagentmovecloser), [`ActiveAgentRotateClose`](/mod/game-api/types/alta-intelligence/activeagentrotateclose)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicActiveAgentMoveCloser()"}</code> | Creates a `BasicActiveAgentMoveCloser` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-getspeedmultiplier" /><code>{"protected Func<float> getSpeedMultiplier"}</code> | Returns the creature's current "speed" stat value, or 1. Set in `OnStart`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Each tick: cancels without a target or past `MaxDistanceBeforeCancelSquared`, turns the body to the target, then calls the abstract overload with the offset to the stopping point. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Picks up the creature's "speed" stat as a speed multiplier, or 1 if it has none. |
| <Link id="m-update-2" /><code>{"protected abstract void Update(Vector3 position, Vector3 targetPosition, Vector3 toTargetXZ, Vector3 toEdge, float flatDistance)"}</code> | Each tick: cancels without a target or past `MaxDistanceBeforeCancelSquared`, turns the body to the target, then calls the abstract overload with the offset to the stopping point. |
