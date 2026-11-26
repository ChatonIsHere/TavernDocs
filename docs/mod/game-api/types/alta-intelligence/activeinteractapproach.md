---
title: "ActiveInteractApproach"
description: "Navigation action that walks up to the target and then runs CanReach, or CantReach if the target is too high or low."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveInteractApproach

A **class** in `Root.Township`, `Alta.Intelligence`.

Navigation action that walks up to the target and then runs `CanReach`, or `CantReach` if the target is too high or low.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveInteractApproach, Agent, AgentInteractApproachSettings>`](/mod/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveInteractApproach`](/mod/game-api/types/alta-intelligence/activeinteractapproach)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveInteractApproach()"}</code> | <span className="api-desc">Creates an `ActiveInteractApproach` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Gives up if too far, else on arrival stops and checks height, then runs `CanReach` or `CantReach` (dropping the target for a while).</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Starts following the target to `ArrivalDistance`.</span> |
