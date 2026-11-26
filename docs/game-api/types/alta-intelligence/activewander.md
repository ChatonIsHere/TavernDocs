---
title: "ActiveWander"
description: "Navigation action that makes the agent wander, up to HeuristicMaximum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveWander

A **class** in `Root.Township`, `Alta.Intelligence`.

Navigation action that makes the agent wander, up to `HeuristicMaximum`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ActiveNavigation<ActiveWander, Agent, AgentWanderSettings>`](/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings)
- **Derived types** [`ActiveBlockCanceleableWander`](/game-api/types/alta-intelligence/activeblockcanceleablewander), [`ActiveWander`](/game-api/types/alta-intelligence/activewander)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveWander()"}</code> | Creates an `ActiveWander` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Applies navigation settings and starts a wander. |
