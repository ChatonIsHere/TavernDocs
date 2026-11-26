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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Agent, AgentSwapActionSetSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSwapActionSet()"}</code> | <span className="api-desc">Creates an `ActiveSwapActionSet` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction("}<Link to="/mod/game-api/types/alta-intelligence/agentswapactionsetsettings">{"AgentSwapActionSetSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Builds the action for these settings, using a target if the settings say so.</span> |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Switches the creature to `Settings.Set` and sets the duration.</span> |
