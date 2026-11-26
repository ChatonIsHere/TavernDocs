---
title: "AgentInteractApproachSettings"
description: "Settings for ActiveInteractApproach: follow the target until close, then start one of two follow-up actions depending on whether its height is in reach."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentInteractApproachSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveInteractApproach`: follow the target until close, then start one of two follow-up actions depending on whether its height is in reach. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AgentNavigationSettings`](/mod/game-api/types/alta-intelligence/agentnavigationsettings)
- **Derived types** [`ActiveInteractApproach`](/mod/game-api/types/alta-intelligence/activeinteractapproach)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentInteractApproachSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrivaldistance" /><code>{"private float arrivalDistance"}</code> | <span className="api-desc">Backing field for `ArrivalDistance` (default 0.1).</span> |
| <Link id="m-canreach" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" canReach"}</code> | <span className="api-desc">Backing field for `CanReach`.</span> |
| <Link id="m-cantreach" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" cantReach"}</code> | <span className="api-desc">Backing field for `CantReach`.</span> |
| <Link id="m-giveupdistance" /><code>{"private float giveUpDistance"}</code> | <span className="api-desc">Backing field for `GiveUpDistance` (default 10).</span> |
| <Link id="m-giveuphurtmaximum" /><code>{"private float giveUpHurtMaximum"}</code> | <span className="api-desc">Backing field for `GiveUpHurtMaximum` (default 0).</span> |
| <Link id="m-maximumrelativeheight" /><code>{"private float maximumRelativeHeight"}</code> | <span className="api-desc">Backing field for `MaximumRelativeHeight` (default 1).</span> |
| <Link id="m-minimumrelativeheight" /><code>{"private float minimumRelativeHeight"}</code> | <span className="api-desc">Backing field for `MinimumRelativeHeight` (default -1).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrivaldistance-2" /><code>{"float ArrivalDistance { get; }"}</code> | <span className="api-desc">How close the creature follows the target before checking the height and stopping.</span> |
| <Link id="m-canreach-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" CanReach { get; }"}</code> | <span className="api-desc">Action started on the target when it's within the height range.</span> |
| <Link id="m-cantreach-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" CantReach { get; }"}</code> | <span className="api-desc">Action started on the target when it's too high or low. If null the approach just cancels.</span> |
| <Link id="m-giveupdistance-2" /><code>{"float GiveUpDistance { get; }"}</code> | <span className="api-desc">The action cancels when the remaining path is longer than this and the target hasn't hurt the creature more than `GiveUpHurtMaximum`.</span> |
| <Link id="m-giveuphurtmaximum-2" /><code>{"float GiveUpHurtMaximum { get; }"}</code> | <span className="api-desc">A target whose `Hurt` value is above this is never given up on for distance.</span> |
| <Link id="m-maximumrelativeheight-2" /><code>{"float MaximumRelativeHeight { get; }"}</code> | <span className="api-desc">Highest the target can be above the creature on arrival and still count as reachable.</span> |
| <Link id="m-minimumrelativeheight-2" /><code>{"float MinimumRelativeHeight { get; }"}</code> | <span className="api-desc">Lowest (most negative) the target can be relative to the creature and still count as reachable.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `ActiveInteractApproach` action, which uses a target.</span> |
