---
title: "AttributeUsage"
description: "A float value made from a base value scaled by attribute curves, such as biome attributes in world generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeUsage

A **class** in `Root.Township`, the global namespace.

A float value made from a base value scaled by attribute curves, such as biome attributes in world generation.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttributeUsage()"}</code> | <span className="api-desc">Creates an `AttributeUsage` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | <span className="api-desc">The starting value before multipliers. Defaults to 1.</span> |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] multipliers"}</code> | <span className="api-desc">Curves that each scale the value by one attribute.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"float GetValue("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | <span className="api-desc">Returns `baseValue` times each multiplier curve evaluated at its attribute. With no attribute set, returns `baseValue`.</span> |

## Used in

Members of other types that take, return or hold a `AttributeUsage`:

<div className="api-used-in">

[`PouchSpawner.count`](/mod/game-api/types/global-p/pouchspawner#m-count).

</div>
