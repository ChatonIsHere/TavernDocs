---
title: "ViewConeOperation"
description: "Inspector component that adds a view cone sense check to an AI action's target scoring."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ViewConeOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Inspector component that adds a view cone sense check to an AI action's target scoring. Its `OnValidate` migrates it to the newer sense operation setup.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ViewConeOperation()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Sense value that maps to a score of 0 (the start of the range). |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight applied to the operation. Only used when it's in a preferred list. |
| <Link id="m-to" /><code>{"private float to"}</code> | Sense value that maps to a score of 1 (the end of the range). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Returns a target operation that maps the view cone sense from `from` to `to`, weighted by `multiplier`. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name from the settings, such as `View Cone 1 -> 0 (x1)`. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: renames the GameObject and migrates the settings into an `OldSenseOperation`. |
