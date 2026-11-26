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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveDistanceFromTarget, Agent, AgentDistanceFromTargetSettings>`](/mod/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveDistanceFromTarget`](/mod/game-api/types/alta-intelligence/activedistancefromtarget)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveDistanceFromTarget()"}</code> | <span className="api-desc">Creates an `ActiveDistanceFromTarget` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Starts a wander around the target's ground position, biased away from the target when `BestDotOf` is over 1.</span> |
