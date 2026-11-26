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
| <Link id="m-ctor" /><code>{"AgentInteractApproachSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arrivaldistance" /><code>{"private float arrivalDistance"}</code> | Backing field for `ArrivalDistance` (default 0.1). |
| <Link id="m-canreach" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" canReach"}</code> | Backing field for `CanReach`. |
| <Link id="m-cantreach" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" cantReach"}</code> | Backing field for `CantReach`. |
| <Link id="m-giveupdistance" /><code>{"private float giveUpDistance"}</code> | Backing field for `GiveUpDistance` (default 10). |
| <Link id="m-giveuphurtmaximum" /><code>{"private float giveUpHurtMaximum"}</code> | Backing field for `GiveUpHurtMaximum` (default 0). |
| <Link id="m-maximumrelativeheight" /><code>{"private float maximumRelativeHeight"}</code> | Backing field for `MaximumRelativeHeight` (default 1). |
| <Link id="m-minimumrelativeheight" /><code>{"private float minimumRelativeHeight"}</code> | Backing field for `MinimumRelativeHeight` (default -1). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arrivaldistance-2" /><code>{"float ArrivalDistance { get; }"}</code> | How close the creature follows the target before checking the height and stopping. |
| <Link id="m-canreach-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" CanReach { get; }"}</code> | Action started on the target when it's within the height range. |
| <Link id="m-cantreach-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" CantReach { get; }"}</code> | Action started on the target when it's too high or low. If null the approach just cancels. |
| <Link id="m-giveupdistance-2" /><code>{"float GiveUpDistance { get; }"}</code> | The action cancels when the remaining path is longer than this and the target hasn't hurt the creature more than `GiveUpHurtMaximum`. |
| <Link id="m-giveuphurtmaximum-2" /><code>{"float GiveUpHurtMaximum { get; }"}</code> | A target whose `Hurt` value is above this is never given up on for distance. |
| <Link id="m-maximumrelativeheight-2" /><code>{"float MaximumRelativeHeight { get; }"}</code> | Highest the target can be above the creature on arrival and still count as reachable. |
| <Link id="m-minimumrelativeheight-2" /><code>{"float MinimumRelativeHeight { get; }"}</code> | Lowest (most negative) the target can be relative to the creature and still count as reachable. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveInteractApproach` action, which uses a target. |
