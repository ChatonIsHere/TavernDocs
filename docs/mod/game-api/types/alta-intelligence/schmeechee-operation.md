---
title: "Schmeechee.Operation"
description: "A scoring rule for schmeechee actions that returns one value when the critter is grounded (or upside down) and another when not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Schmeechee.Operation

A **class** in `Root.Township`, `Alta.Intelligence`.

A scoring rule for schmeechee actions that returns one value when the critter is grounded (or upside down) and another when not.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`Schmeechee`](/mod/game-api/types/alta-intelligence/schmeechee)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)
- **Documented in** [Other creatures](/mod/game-api/creatures/other-creatures)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Operation("}<Link to="/mod/game-api/types/alta-intelligence/schmeechee-operationtype">{"Schmeechee.OperationType"}</Link>{" operation, float trueValue, float falseValue)"}</code> | <span className="api-desc">Creates a `Schmeechee.Operation` from `operation`, `trueValue` and `falseValue`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-falsevalue" /><code>{"private float falseValue"}</code> | <span className="api-desc">Score when the state doesn't hold. Default 0.</span> |
| <Link id="m-operation" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/schmeechee-operationtype">{"Schmeechee.OperationType"}</Link>{" operation"}</code> | <span className="api-desc">Which state to check: grounded or upside down.</span> |
| <Link id="m-truevalue" /><code>{"private float trueValue"}</code> | <span className="api-desc">Score when the state holds. Default 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Returns `trueValue` if the agent is a schmeechee in the chosen state, otherwise `falseValue`.</span> |
