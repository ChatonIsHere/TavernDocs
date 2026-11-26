---
title: "ActiveDeleted"
description: "Server: running action that removes the creature from the scene."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveDeleted

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that removes the creature from the scene. Used as the last action of a creature that should vanish.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentDeletedSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveDeleted()"}</code> | Creates an `ActiveDeleted` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | On the next frame, scene-destroys the creature's prefab root. |
