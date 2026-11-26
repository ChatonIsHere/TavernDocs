---
title: "AttributeUsage"
description: "A float value made from a base value scaled by attribute curves, such as biome attributes in world generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeUsage

A **class** in `Root.Township`, no namespace.

A float value made from a base value scaled by attribute curves, such as biome attributes in world generation.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AttributeUsage()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | The starting value before multipliers. Defaults to 1. |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] multipliers"}</code> | Curves that each scale the value by one attribute. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"float GetValue("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | Returns `baseValue` times each multiplier curve evaluated at its attribute. With no attribute set, returns `baseValue`. |

## Used in

Members of other types that take, return or hold a `AttributeUsage`:

[`PouchSpawner.count`](/game-api/types/global-p/pouchspawner#m-count).
