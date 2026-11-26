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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DistanceOperation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Distance that maps to 0. |
| <Link id="m-issquared" /><code>{"private bool isSquared"}</code> | Use the DistanceSquared sense instead of Distance. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |
| <Link id="m-to" /><code>{"private float to"}</code> | Distance that maps to 1 (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes a target sense rule on the Distance or DistanceSquared sense, from `from` to `to`, weighted by `multiplier`. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Distance 0 -> 1 (x1)`. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: renames the GameObject and migrates the settings to a `SenseOperation` (or `OldSenseOperation`). |
