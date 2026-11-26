---
title: "IActionDecider"
description: "Picks an AI agent's actions from the targets it knows about."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActionDecider

An **interface** in `Root.Township`, `Alta.Intelligence`.

Picks an AI agent's actions from the targets it knows about. `ActionDecider<TAgent>` implements it; reach it through `Agent.GeneralActionDecider`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`ActionDecider<TAgent>`](/mod/game-api/types/alta-intelligence/actiondecider-tagent)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-possibletargets" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> PossibleTargets { get; }"}</code> | Targets the decider can currently choose between. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Adds a possible target; returns whether it was added. |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Removes a possible target; returns whether it was there. |

## Used in

Members of other types that take, return or hold a `IActionDecider`:

[`Agent.GeneralActionDecider`](/mod/game-api/types/alta-intelligence/agent#m-generalactiondecider), [`Agent<TThis>.GeneralActionDecider`](/mod/game-api/types/alta-intelligence/agent-tthis#m-generalactiondecider).
