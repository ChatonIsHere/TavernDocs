---
title: "SchmeecheeOperation"
description: "Prefab scoring component for schmeechees: one value when the schmeechee is grounded (or upside down), another when it isn't."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SchmeecheeOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component for schmeechees: one value when the schmeechee is grounded (or upside down), another when it isn't.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SchmeecheeOperation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-falsevalue" /><code>{"private float falseValue"}</code> | Value when the condition doesn't hold (default 0). |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |
| <Link id="m-operation" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/schmeechee-operationtype">{"Schmeechee.OperationType"}</Link>{" operation"}</code> | Which condition to check: `Grounded` or `UpsideDown`. |
| <Link id="m-truevalue" /><code>{"private float trueValue"}</code> | Value when the condition holds (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes a `Schmeechee.Operation` rule with these values, weighted by `multiplier`. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Names the GameObject "Schmee Grounded" or "Schmee Upside Down". |
