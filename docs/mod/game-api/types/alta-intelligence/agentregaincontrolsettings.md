---
title: "AgentRegainControlSettings"
description: "Settings for ActiveRegainControl: wait until the creature's body has nearly stopped moving after being knocked about, then optionally switch action set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentRegainControlSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveRegainControl`: wait until the creature's body has nearly stopped moving after being knocked about, then optionally switch action set. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveRegainControl`](/mod/game-api/types/alta-intelligence/activeregaincontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentRegainControlSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exitto" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" exitTo"}</code> | <span className="api-desc">Backing field for `ExitTo`.</span> |
| <Link id="m-hasmaxduration" /><code>{"private bool hasMaxDuration"}</code> | <span className="api-desc">Backing field for `HasMaxDuration` (default true).</span> |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> | <span className="api-desc">Backing field for `MinimumVelocity` (default 0.2).</span> |
| <Link id="m-walkerpowerpersecond" /><code>{"private float walkerPowerPerSecond"}</code> | <span className="api-desc">Backing field for `WalkerPowerPerSecond` (default 0.1).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exitto-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" ExitTo { get; }"}</code> | <span className="api-desc">Action set the creature switches to when the action finishes. Null keeps the current set.</span> |
| <Link id="m-hasmaxduration-2" /><code>{"bool HasMaxDuration { get; }"}</code> | <span className="api-desc">If true, the action also finishes after a random duration between the minimum and maximum.</span> |
| <Link id="m-minimumvelocity-2" /><code>{"float MinimumVelocity { get; }"}</code> | <span className="api-desc">The action finishes once the rigidbody's speed drops below this.</span> |
| <Link id="m-walkerpowerpersecond-2" /><code>{"float WalkerPowerPerSecond { get; }"}</code> | <span className="api-desc">Rate the walker's power recovers while regaining control. Power is set to 1 when it finishes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `ActiveRegainControl` action, without a target.</span> |
