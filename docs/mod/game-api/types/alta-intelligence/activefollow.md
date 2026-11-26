---
title: "ActiveFollow"
description: "Navigation action that follows the agent's target until within reach, or gives up when the target gets too far and hasn't hurt the agent enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveFollow

A **class** in `Root.Township`, `Alta.Intelligence`.

Navigation action that follows the agent's target until within reach, or gives up when the target gets too far and hasn't hurt the agent enough.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveFollow, Agent, AgentFollowSettings>`](/mod/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveFollow`](/mod/game-api/types/alta-intelligence/activefollow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveFollow()"}</code> | <span className="api-desc">Creates an `ActiveFollow` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">Squared distance at which the target counts as reached.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Cancels or stops without a target, gives up if too far and not hurt enough, finishes when close (unless overshooting).</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Picks a random reach distance and starts following the target; cancels with a warning if there's no target.</span> |
