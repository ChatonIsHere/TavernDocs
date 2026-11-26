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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveFollow, Agent, AgentFollowSettings>`](/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveFollow`](/game-api/types/alta-intelligence/activefollow)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActiveFollow()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distance" /><code>{"private float distance"}</code> | Squared distance at which the target counts as reached. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Cancels or stops without a target, gives up if too far and not hurt enough, finishes when close (unless overshooting). |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Picks a random reach distance and starts following the target; cancels with a warning if there's no target. |
