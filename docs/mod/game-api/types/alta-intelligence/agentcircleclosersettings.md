---
title: "AgentCircleCloserSettings"
description: "Move-closer settings that also circle around the target, run by ActiveAgentRotateClose."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentCircleCloserSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Move-closer settings that also circle around the target, run by `ActiveAgentRotateClose`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AgentMoveCloserSettings`](/mod/game-api/types/alta-intelligence/agentmoveclosersettings)
- **Derived types** [`ActiveAgentRotateClose`](/mod/game-api/types/alta-intelligence/activeagentrotateclose)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentCircleCloserSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-circlespeed" /><code>{"private float circleSpeed"}</code> | <span className="api-desc">Backing field for `CircleSpeed`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-circlespeed-2" /><code>{"float CircleSpeed { get; }"}</code> | <span className="api-desc">How fast the agent circles while closing in.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the `ActiveAgentRotateClose` action, using a target.</span> |
