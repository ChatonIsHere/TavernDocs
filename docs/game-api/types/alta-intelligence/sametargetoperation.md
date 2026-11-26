---
title: "SameTargetOperation"
description: "Prefab scoring component that adds a SameTarget rule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SameTargetOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds a `SameTarget` rule.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SameTargetOperation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-differentvalue" /><code>{"private float differentValue"}</code> | Value for any other target (default 0.8). |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |
| <Link id="m-samevalue" /><code>{"private float sameValue"}</code> | Value for the current target (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes the `SameTarget` rule, weighted by `multiplier`. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Same Target ? 1 : 0.8 (x1)`. |
