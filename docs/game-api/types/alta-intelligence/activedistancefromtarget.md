---
title: "ActiveDistanceFromTarget"
description: "Navigation action that makes the agent wander relative to its target's ground position, used to keep or gain distance from it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveDistanceFromTarget

A **class** in `Root.Township`, `Alta.Intelligence`.

Navigation action that makes the agent wander relative to its target's ground position, used to keep or gain distance from it.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveDistanceFromTarget, Agent, AgentDistanceFromTargetSettings>`](/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveDistanceFromTarget`](/game-api/types/alta-intelligence/activedistancefromtarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveDistanceFromTarget()"}</code> | Creates an `ActiveDistanceFromTarget` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Starts a wander around the target's ground position, biased away from the target when `BestDotOf` is over 1. |
