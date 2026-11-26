---
title: "AgentDistanceFromTargetSettings"
description: "Settings for ActiveDistanceFromTarget: walk to a random reachable point found around the target, optionally the one most on the creature's own side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentDistanceFromTargetSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveDistanceFromTarget`: walk to a random reachable point found around the target, optionally the one most on the creature's own side. Server only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AgentNavigationSettings`](/game-api/types/alta-intelligence/agentnavigationsettings)
- **Derived types** [`ActiveDistanceFromTarget`](/game-api/types/alta-intelligence/activedistancefromtarget)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AgentDistanceFromTargetSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bestdotof" /><code>{"private int bestDotOf"}</code> | Backing field for `BestDotOf` (default 3). Higher values cost more. |
| <Link id="m-heuristicmaximum" /><code>{"private int heuristicMaximum"}</code> | Backing field for `HeuristicMaximum` (default 20000). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bestdotof-2" /><code>{"int BestDotOf { get; }"}</code> | How many candidate points to compare, keeping the one furthest along the target-to-creature direction. 1 or less picks any point. |
| <Link id="m-heuristicmaximum-2" /><code>{"int HeuristicMaximum { get; }"}</code> | Search length passed to the pathfinder's constant path around the target, which limits how far away the point can be. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Builds the shared `ActiveDistanceFromTarget` action, which uses a target. |
