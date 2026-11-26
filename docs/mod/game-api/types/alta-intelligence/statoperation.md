---
title: "StatOperation"
description: "Prefab scoring component that adds a StatValue rule on a stat of the creature or the target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds a `StatValue` rule on a stat of the creature or the target. The shipped "Aggroing Stat" rules are this.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | <span className="api-desc">Stat value that maps to 0.</span> |
| <Link id="m-isratio" /><code>{"private bool isRatio"}</code> | <span className="api-desc">Use the stat's position between its minimum and maximum (0 to 1) instead of its raw value.</span> |
| <Link id="m-istargetstat" /><code>{"private bool isTargetStat"}</code> | <span className="api-desc">Read the target's stat instead of the creature's.</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Weight of the rule. Only matters for preferred rules.</span> |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | <span className="api-desc">The stat read.</span> |
| <Link id="m-to" /><code>{"private float to"}</code> | <span className="api-desc">Stat value that maps to 1 (default 1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Makes the `StatValue` rule, weighted by `multiplier`. Logs an error and returns null if no stat is set.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name from the stat's name and range.</span> |
