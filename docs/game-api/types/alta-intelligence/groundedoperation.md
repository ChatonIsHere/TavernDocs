---
title: "GroundedOperation"
description: "Prefab scoring component that adds a Grounded rule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroundedOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds a `Grounded` rule. It has no multiplier, so its weight is always 1.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroundedOperation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> | Value when the creature is in the air (default 0). |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> | Value when the creature is grounded (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes the `Grounded` rule with these values. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Grounded ? 1 : 0`. |
