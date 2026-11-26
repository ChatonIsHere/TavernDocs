---
title: "AgentFollowSettings"
description: "Settings for ActiveFollow: chase the target with the pathfinder until close, giving up past a distance unless the target has hurt the creature enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentFollowSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveFollow`: chase the target with the pathfinder until close, giving up past a distance unless the target has hurt the creature enough. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AgentNavigationSettings`](/mod/game-api/types/alta-intelligence/agentnavigationsettings)
- **Derived types** [`ActiveFollow`](/mod/game-api/types/alta-intelligence/activefollow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentFollowSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-giveupdistance" /><code>{"private float giveUpDistance"}</code> | Backing field for `GiveUpDistance` (default -1, so any path length counts as too far). |
| <Link id="m-giveuphurtmaximum" /><code>{"private float giveUpHurtMaximum"}</code> | Backing field for `GiveUpHurtMaximum` (default 0). |
| <Link id="m-targetreacheddistance" /><code>{"private float targetReachedDistance"}</code> | Backing field for `TargetReachedDistance` (default 0.1). |
| <Link id="m-targetreachedrandomextra" /><code>{"private float targetReachedRandomExtra"}</code> | Backing field for `TargetReachedRandomExtra`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-giveupdistance-2" /><code>{"float GiveUpDistance { get; }"}</code> | The action cancels when the remaining path is longer than this and the target's hurt is at most `GiveUpHurtMaximum`. |
| <Link id="m-giveuphurtmaximum-2" /><code>{"float GiveUpHurtMaximum { get; }"}</code> | A target whose `Hurt` value is above this is never given up on for distance. |
| <Link id="m-targetreacheddistance-2" /><code>{"float TargetReachedDistance { get; }"}</code> | Distance from the target that counts as reached and finishes the action (unless overshooting). |
| <Link id="m-targetreachedrandomextra-2" /><code>{"float TargetReachedRandomExtra { get; }"}</code> | Up to this much random extra is added to `TargetReachedDistance` each time the action starts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveFollow` action, which uses a target. |
