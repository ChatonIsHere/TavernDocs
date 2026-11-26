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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FacingOperation()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dotproductmaximum" /><code>{"private float dotProductMaximum"}</code> | Facing dot product that maps to 1 (default 1, dead ahead). |
| <Link id="m-dotproductminimum" /><code>{"private float dotProductMinimum"}</code> | Facing dot product that maps to 0 (default 0.8). |
| <Link id="m-isignoringy" /><code>{"private bool isIgnoringY"}</code> | Use the flat Facing2D sense instead of Facing3D (default true). |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes a target sense rule on the Facing2D (or Facing3D) sense, mapping the dot product range onto 0 to 1. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Facing XZ 0.8 -> 1 (x1)`. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: renames the GameObject and migrates the settings to a `SenseOperation`. |
