---
title: "DistanceOperation"
description: "Older prefab scoring component for the target's distance (or squared distance)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Older prefab scoring component for the target's distance (or squared distance). In the editor it migrates itself to a `SenseOperation`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | <span className="api-desc">Distance that maps to 0.</span> |
| <Link id="m-issquared" /><code>{"private bool isSquared"}</code> | <span className="api-desc">Use the DistanceSquared sense instead of Distance.</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Weight of the rule. Only matters for preferred rules.</span> |
| <Link id="m-to" /><code>{"private float to"}</code> | <span className="api-desc">Distance that maps to 1 (default 1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Makes a target sense rule on the Distance or DistanceSquared sense, from `from` to `to`, weighted by `multiplier`.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name, like `Distance 0 -> 1 (x1)`.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: renames the GameObject and migrates the settings to a `SenseOperation` (or `OldSenseOperation`).</span> |
