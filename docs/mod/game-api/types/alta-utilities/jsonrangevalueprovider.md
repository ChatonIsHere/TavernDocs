---
title: "JsonRangeValueProvider"
description: "Value provider used by JsonRangeAttribute: clamps an int property between min and max on get and set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonRangeValueProvider

A **class** in `Root.Township`, `Alta.Utilities`.

Value provider used by `JsonRangeAttribute`: clamps an int property between `min` and `max` on get and set.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonRangeValueProviderFilter<int>`](/mod/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonRangeValueProvider(IValueProvider baseProvider, int min, int max)"}</code> | Creates a `JsonRangeValueProvider` from `baseProvider`, `min` and `max`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private int max"}</code> | The upper limit. |
| <Link id="m-min" /><code>{"private int min"}</code> | The lower limit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"override int Clamp(int value)"}</code> | Clamps the value between `min` and `max`. |
