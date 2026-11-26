---
title: "FacingOperation"
description: "Older prefab scoring component for how much the creature faces the target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FacingOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Older prefab scoring component for how much the creature faces the target. In the editor it migrates itself to a `SenseOperation`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FacingOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dotproductmaximum" /><code>{"private float dotProductMaximum"}</code> | <span className="api-desc">Facing dot product that maps to 1 (default 1, dead ahead).</span> |
| <Link id="m-dotproductminimum" /><code>{"private float dotProductMinimum"}</code> | <span className="api-desc">Facing dot product that maps to 0 (default 0.8).</span> |
| <Link id="m-isignoringy" /><code>{"private bool isIgnoringY"}</code> | <span className="api-desc">Use the flat Facing2D sense instead of Facing3D (default true).</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Weight of the rule. Only matters for preferred rules.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Makes a target sense rule on the Facing2D (or Facing3D) sense, mapping the dot product range onto 0 to 1.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name, like `Facing XZ 0.8 -> 1 (x1)`.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: renames the GameObject and migrates the settings to a `SenseOperation`.</span> |
