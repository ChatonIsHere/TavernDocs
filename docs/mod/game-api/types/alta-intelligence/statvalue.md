---
title: "StatValue"
description: "Scoring rule on a stat of the creature or the target, mapped onto 0 to 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatValue

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule on a stat of the creature or the target, mapped onto 0 to 1. Made by `CreateTargetOperation.Stat`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatValue("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float from, float to, bool isTargetStat, bool isRatio)"}</code> | <span className="api-desc">Creates a `StatValue` from `statDefinition`, `from`, `to`, `isTargetStat` and `isRatio`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | <span className="api-desc">Value that maps to 0.</span> |
| <Link id="m-isratio" /><code>{"private bool isRatio"}</code> | <span className="api-desc">Use the stat's position between its minimum and maximum.</span> |
| <Link id="m-istargetstat" /><code>{"private bool isTargetStat"}</code> | <span className="api-desc">Read the target's stat instead of the creature's.</span> |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | <span className="api-desc">The stat read.</span> |
| <Link id="m-to" /><code>{"private float to"}</code> | <span className="api-desc">Value that maps to 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Returns the stat's value (or ratio) inverse-lerped from `from` to `to`. Returns 1 if the stat or stat manager is missing.</span> |
