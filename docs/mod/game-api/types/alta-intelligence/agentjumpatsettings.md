---
title: "AgentJumpAtSettings"
description: "Settings for ActiveJumpAt: launch the creature's rigidbody at the target and finish when it lands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentJumpAtSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveJumpAt`: launch the creature's rigidbody at the target and finish when it lands. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveJumpAt`](/mod/game-api/types/alta-intelligence/activejumpat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentJumpAtSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extrayoffset" /><code>{"private float extraYOffset"}</code> | <span className="api-desc">Backing field for `ExtraYOffset` (default 0.1).</span> |
| <Link id="m-jumpgravitymultiplier" /><code>{"private float jumpGravityMultiplier"}</code> | <span className="api-desc">Backing field for `JumpGravityMultiplier` (default 1).</span> |
| <Link id="m-jumpvelocity" /><code>{"private float jumpVelocity"}</code> | <span className="api-desc">Backing field for `JumpVelocity` (default 10).</span> |
| <Link id="m-walkerpowerpersecond" /><code>{"private float walkerPowerPerSecond"}</code> | <span className="api-desc">Backing field for `WalkerPowerPerSecond` (default 0.1).</span> |
| <Link id="m-yoffsetmultiplier" /><code>{"private float yOffsetMultiplier"}</code> | <span className="api-desc">Backing field for `YOffsetMultiplier` (default 1.1).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-extrayoffset-2" /><code>{"float ExtraYOffset { get; }"}</code> | <span className="api-desc">Fixed amount added to the upward part of the jump direction.</span> |
| <Link id="m-jumpgravitymultiplier-2" /><code>{"float JumpGravityMultiplier { get; }"}</code> | <span className="api-desc">Walker gravity multiplier used during the jump. The old value is put back when the action ends.</span> |
| <Link id="m-jumpvelocity-2" /><code>{"float JumpVelocity { get; }"}</code> | <span className="api-desc">Speed the rigidbody is launched at, along the direction to the target.</span> |
| <Link id="m-walkerpowerpersecond-2" /><code>{"float WalkerPowerPerSecond { get; }"}</code> | <span className="api-desc">Rate the walker's power recovers after being cut to -1 for the jump.</span> |
| <Link id="m-yoffsetmultiplier-2" /><code>{"float YOffsetMultiplier { get; }"}</code> | <span className="api-desc">Multiplies the target's height above the creature (0 if below) when aiming the jump.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `ActiveJumpAt` action, which uses a target.</span> |
