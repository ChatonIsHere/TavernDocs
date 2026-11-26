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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ViewConeOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | <span className="api-desc">Sense value that maps to a score of 0 (the start of the range).</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Weight applied to the operation. Only used when it's in a preferred list.</span> |
| <Link id="m-to" /><code>{"private float to"}</code> | <span className="api-desc">Sense value that maps to a score of 1 (the end of the range).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Returns a target operation that maps the view cone sense from `from` to `to`, weighted by `multiplier`.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name from the settings, such as `View Cone 1 -> 0 (x1)`.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: renames the GameObject and migrates the settings into an `OldSenseOperation`.</span> |
