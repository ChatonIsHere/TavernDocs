---
title: "AgentRollUpInPlaceSettings"
description: "Settings for AgentRollUpInPlace: turn the creature's body upright on the nearest ground surface, then optionally switch action set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentRollUpInPlaceSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `AgentRollUpInPlace`: turn the creature's body upright on the nearest ground surface, then optionally switch action set. Server only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`AgentRollUpInPlace`](/game-api/types/alta-intelligence/agentrollupinplace)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AgentRollUpInPlaceSettings()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius" /><code>{"private float colliderRadius"}</code> | Backing field for `ColliderRadius` (default 0.1). |
| <Link id="m-exitto" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" exitTo"}</code> | Backing field for `ExitTo`. |
| <Link id="m-groundlayer" /><code>{"private LayerMask groundLayer"}</code> | Backing field for `GroundLayer`. |
| <Link id="m-standupspeed" /><code>{"private float standUpSpeed"}</code> | Backing field for `StandUpSpeed` (default 0.06). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius-2" /><code>{"float ColliderRadius { get; }"}</code> | Radius of the body used to find the ground. The search reaches five times this. |
| <Link id="m-exitto-2" /><code><Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" ExitTo { get; }"}</code> | Action set the creature switches to when it's upright. Null keeps the current set. |
| <Link id="m-groundlayer-2" /><code>{"LayerMask GroundLayer { get; }"}</code> | Layers searched for the surface to stand up on. |
| <Link id="m-standupspeed-2" /><code>{"float StandUpSpeed { get; }"}</code> | Lerp rate per second for turning the body to the upright rotation. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `AgentRollUpInPlace` action, without a target. |
