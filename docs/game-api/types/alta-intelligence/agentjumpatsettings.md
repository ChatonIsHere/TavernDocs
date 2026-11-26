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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveJumpAt`](/game-api/types/alta-intelligence/activejumpat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentJumpAtSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extrayoffset" /><code>{"private float extraYOffset"}</code> | Backing field for `ExtraYOffset` (default 0.1). |
| <Link id="m-jumpgravitymultiplier" /><code>{"private float jumpGravityMultiplier"}</code> | Backing field for `JumpGravityMultiplier` (default 1). |
| <Link id="m-jumpvelocity" /><code>{"private float jumpVelocity"}</code> | Backing field for `JumpVelocity` (default 10). |
| <Link id="m-walkerpowerpersecond" /><code>{"private float walkerPowerPerSecond"}</code> | Backing field for `WalkerPowerPerSecond` (default 0.1). |
| <Link id="m-yoffsetmultiplier" /><code>{"private float yOffsetMultiplier"}</code> | Backing field for `YOffsetMultiplier` (default 1.1). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-extrayoffset-2" /><code>{"float ExtraYOffset { get; }"}</code> | Fixed amount added to the upward part of the jump direction. |
| <Link id="m-jumpgravitymultiplier-2" /><code>{"float JumpGravityMultiplier { get; }"}</code> | Walker gravity multiplier used during the jump. The old value is put back when the action ends. |
| <Link id="m-jumpvelocity-2" /><code>{"float JumpVelocity { get; }"}</code> | Speed the rigidbody is launched at, along the direction to the target. |
| <Link id="m-walkerpowerpersecond-2" /><code>{"float WalkerPowerPerSecond { get; }"}</code> | Rate the walker's power recovers after being cut to -1 for the jump. |
| <Link id="m-yoffsetmultiplier-2" /><code>{"float YOffsetMultiplier { get; }"}</code> | Multiplies the target's height above the creature (0 if below) when aiming the jump. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveJumpAt` action, which uses a target. |
