---
title: "ValuePerLevel<T>"
description: "Serializable array of values, one per skill level, used by skills for level scaled numbers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ValuePerLevel&lt;T&gt;

A **class** in `Root.Township`, `Alta.Progression.Skills`.

Serializable array of values, one per skill level, used by skills for level scaled numbers.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`FloatValuesPerLevel`](/mod/game-api/types/alta-player/floatvaluesperlevel), [`IntValuesPerLevel`](/mod/game-api/types/alta-player/intvaluesperlevel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValuePerLevel()"}</code> | <span className="api-desc">Creates a `ValuePerLevel` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-valueperlevel" /><code>{"private T[] valuePerLevel"}</code> | <span className="api-desc">The values, first entry for level 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getforlevel" /><code>{"T GetForLevel(int level)"}</code> | <span className="api-desc">Value for a level (level 1 is the first entry), clamped to the array, so higher levels reuse the last value.</span> |
