---
title: "JsonRangeFloatValueProvider"
description: "Value provider used by JsonRangeFloatAttribute: clamps a float property between min and max on get and set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonRangeFloatValueProvider

A **class** in `Root.Township`, `Alta.Utilities`.

Value provider used by `JsonRangeFloatAttribute`: clamps a float property between `min` and `max` on get and set.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonRangeValueProviderFilter<float>`](/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonRangeFloatValueProvider(IValueProvider baseProvider, float min, float max)"}</code> | Creates a `JsonRangeFloatValueProvider` from `baseProvider`, `min` and `max`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private float max"}</code> | The upper limit. |
| <Link id="m-min" /><code>{"private float min"}</code> | The lower limit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"override float Clamp(float value)"}</code> | Clamps the value between `min` and `max`. |
