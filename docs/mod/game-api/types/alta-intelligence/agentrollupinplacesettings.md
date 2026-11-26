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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActionComponent`](/mod/game-api/types/alta-intelligence/actioncomponent)
- **Derived types** [`AgentRollUpInPlace`](/mod/game-api/types/alta-intelligence/agentrollupinplace)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentRollUpInPlaceSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius" /><code>{"private float colliderRadius"}</code> | <span className="api-desc">Backing field for `ColliderRadius` (default 0.1).</span> |
| <Link id="m-exitto" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" exitTo"}</code> | <span className="api-desc">Backing field for `ExitTo`.</span> |
| <Link id="m-groundlayer" /><code>{"private LayerMask groundLayer"}</code> | <span className="api-desc">Backing field for `GroundLayer`.</span> |
| <Link id="m-standupspeed" /><code>{"private float standUpSpeed"}</code> | <span className="api-desc">Backing field for `StandUpSpeed` (default 0.06).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius-2" /><code>{"float ColliderRadius { get; }"}</code> | <span className="api-desc">Radius of the body used to find the ground. The search reaches five times this.</span> |
| <Link id="m-exitto-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" ExitTo { get; }"}</code> | <span className="api-desc">Action set the creature switches to when it's upright. Null keeps the current set.</span> |
| <Link id="m-groundlayer-2" /><code>{"LayerMask GroundLayer { get; }"}</code> | <span className="api-desc">Layers searched for the surface to stand up on.</span> |
| <Link id="m-standupspeed-2" /><code>{"float StandUpSpeed { get; }"}</code> | <span className="api-desc">Lerp rate per second for turning the body to the upright rotation.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `AgentRollUpInPlace` action, without a target.</span> |
