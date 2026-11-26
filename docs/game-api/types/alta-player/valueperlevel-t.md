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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`FloatValuesPerLevel`](/game-api/types/alta-player/floatvaluesperlevel), [`IntValuesPerLevel`](/game-api/types/alta-player/intvaluesperlevel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ValuePerLevel()"}</code> | Creates a `ValuePerLevel` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-valueperlevel" /><code>{"private T[] valuePerLevel"}</code> | The values, first entry for level 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getforlevel" /><code>{"T GetForLevel(int level)"}</code> | Value for a level (level 1 is the first entry), clamped to the array, so higher levels reuse the last value. |
