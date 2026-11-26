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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonRangeValueProviderFilter<float>`](/mod/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonRangeFloatValueProvider(IValueProvider baseProvider, float min, float max)"}</code> | <span className="api-desc">Creates a `JsonRangeFloatValueProvider` from `baseProvider`, `min` and `max`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private float max"}</code> | <span className="api-desc">The upper limit.</span> |
| <Link id="m-min" /><code>{"private float min"}</code> | <span className="api-desc">The lower limit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"override float Clamp(float value)"}</code> | <span className="api-desc">Clamps the value between `min` and `max`.</span> |
