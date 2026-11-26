---
title: "ChanceOperation"
description: "Prefab component that adds a Chance scoring rule to its action, from the scoring child object it sits under."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChanceOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab component that adds a `Chance` scoring rule to its action, from the scoring child object it sits under. Renames its GameObject to show its values.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChanceOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"private float chance"}</code> | <span className="api-desc">Probability of success (default 0.5).</span> |
| <Link id="m-fail" /><code>{"private float fail"}</code> | <span className="api-desc">Value on a failed roll (default 0).</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Weight of the rule. Only matters for preferred rules.</span> |
| <Link id="m-success" /><code>{"private float success"}</code> | <span className="api-desc">Value on a successful roll (default 1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Makes the `Chance` rule with these values and `multiplier` as its weight.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name, like `Chance 0.5 ? 1 : 0 (x1)`.</span> |
