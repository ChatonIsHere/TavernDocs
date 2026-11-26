---
title: "ActiveSwapActionSet"
description: "Server: running action that switches the creature to a different action set when it starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSwapActionSet

A **class** in `Root.Township`, `Alta.Intelligence`.

Server: running action that switches the creature to a different action set when it starts.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentSwapActionSetSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSwapActionSet()"}</code> | Creates an `ActiveSwapActionSet` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction("}<Link to="/game-api/types/alta-intelligence/agentswapactionsetsettings">{"AgentSwapActionSetSettings"}</Link>{" settings)"}</code> | Builds the action for these settings, using a target if the settings say so. |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | Does nothing. |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | Switches the creature to `Settings.Set` and sets the duration. |
