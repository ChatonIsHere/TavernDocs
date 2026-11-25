---
title: "Schmeechee.Operation"
description: "A scoring rule for \"grounded\" or \"upside down\"."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Schmeechee.Operation

A **class** in `Root.Township`, `Alta.Intelligence`.

A scoring rule for "grounded" or "upside down".

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`Schmeechee`](/game-api/types/alta-intelligence/schmeechee)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Operation("}<Link to="/game-api/types/alta-intelligence/schmeechee-operationtype">{"Schmeechee.OperationType"}</Link>{" operation, float trueValue, float falseValue)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-falsevalue" /><code>{"private float falseValue"}</code> |  |
| <Link id="m-operation" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/schmeechee-operationtype">{"Schmeechee.OperationType"}</Link>{" operation"}</code> |  |
| <Link id="m-truevalue" /><code>{"private float trueValue"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
