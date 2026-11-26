---
title: "AgentIdleSettings"
description: "Settings for a creature's idle action: how long it lasts, whether it faces or follows its target during set time windows, and a chance to wander to a new spot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentIdleSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for a creature's idle action: how long it lasts, whether it faces or follows its target during set time windows, and a chance to wander to a new spot. Its action is `ActiveIdle`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveIdle`](/game-api/types/alta-intelligence/activeidle)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AgentIdleSettings()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-followfrom" /><code>{"private float followFrom"}</code> | Seconds into the idle after which the agent starts facing its target (-1 means from the start). |
| <Link id="m-followmovementfrom" /><code>{"private float followMovementFrom"}</code> | Seconds into the idle after which the agent starts walking after its target. |
| <Link id="m-followmovementto" /><code>{"private float followMovementTo"}</code> | Seconds into the idle after which it stops walking after the target; below 0 means no end. |
| <Link id="m-followto" /><code>{"private float followTo"}</code> | Seconds into the idle after which it stops facing the target; below 0 means no end. |
| <Link id="m-isfacingtarget" /><code>{"private bool isFacingTarget"}</code> | Whether the agent turns to face its target during the idle. |
| <Link id="m-isfollowingmovement" /><code>{"private bool isFollowingMovement"}</code> | Whether the agent walks towards its target during the idle. |
| <Link id="m-isslowingdownwhenmoving" /><code>{"private bool isSlowingDownWhenMoving"}</code> | Value given to the walker's `IsSlowedWhenNotMoving` while following; restored when the idle ends. |
| <Link id="m-isusingtarget" /><code>{"private bool isUsingTarget"}</code> | Whether the idle action uses a target at all. |
| <Link id="m-movespawnchance" /><code>{"private float moveSpawnChance"}</code> | Chance (0 to 1) that starting the idle asks the agent's population to move it elsewhere. |
| <Link id="m-targetreacheddistance" /><code>{"private float targetReachedDistance"}</code> | Distance at which following the target counts as reached (default 0.1). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-followfrom-2" /><code>{"float FollowFrom { get; }"}</code> | Seconds into the idle before the creature starts facing its target. |
| <Link id="m-followmovementfrom-2" /><code>{"float FollowMovementFrom { get; }"}</code> | Seconds into the idle before the creature starts walking toward its target. |
| <Link id="m-followmovementto-2" /><code>{"float FollowMovementTo { get; }"}</code> | Seconds into the idle when it stops walking toward its target. -1 means until the end. |
| <Link id="m-followto-2" /><code>{"float FollowTo { get; }"}</code> | Seconds into the idle when it stops facing its target. -1 means until the end. |
| <Link id="m-isfacingtarget-2" /><code>{"bool IsFacingTarget { get; }"}</code> | Whether the creature turns to face its target while idling. |
| <Link id="m-isfollowingmovement-2" /><code>{"bool IsFollowingMovement { get; }"}</code> | Whether the creature walks toward its target while idling. |
| <Link id="m-isslowingdownwhenmoving-2" /><code>{"bool IsSlowingDownWhenMoving { get; }"}</code> | Value given to the walker's slowed-when-not-moving flag during this idle, restored after. |
| <Link id="m-isusingtarget-2" /><code>{"bool IsUsingTarget { get; }"}</code> | Whether the idle action uses a target at all. |
| <Link id="m-movespawnchance-2" /><code>{"float MoveSpawnChance { get; }"}</code> | Chance (0 to 1) at the start of the idle that a population creature asks its population to move it. |
| <Link id="m-targetreacheddistance-2" /><code>{"float TargetReachedDistance { get; }"}</code> | How close counts as reaching the target when following it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Returns an `ActiveIdle` action using these settings. |

## Used in

Members of other types that take, return or hold a `AgentIdleSettings`:

[`ActiveIdle.GetAction`](/game-api/types/alta-intelligence/activeidle#m-getaction), [`ActiveSchmeecheePlant.GetAction`](/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction).
