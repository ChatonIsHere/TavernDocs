---
title: "RVOBlockedOperation"
description: "Prefab scoring component that adds an RVOBlockedValue rule: one value when the creature's walker is blocked, another when it isn't."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RVOBlockedOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds an `RVOBlockedValue` rule: one value when the creature's walker is blocked, another when it isn't.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RVOBlockedOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blocked" /><code>{"private float blocked"}</code> | <span className="api-desc">Value when the walker is blocked (default 0).</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Weight of the rule. Only matters for preferred rules.</span> |
| <Link id="m-unblocked" /><code>{"private float unblocked"}</code> | <span className="api-desc">Value when it isn't blocked (default 1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Makes the rule, weighted by `multiplier`.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name, like `RVO Blocked 1 -> 0 (x1)`.</span> |
