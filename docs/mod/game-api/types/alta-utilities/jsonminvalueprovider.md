---
title: "JsonMinValueProvider"
description: "Value provider used by JsonMinAttribute: keeps a float property at or above min on get and set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonMinValueProvider

A **class** in `Root.Township`, `Alta.Utilities`.

Value provider used by `JsonMinAttribute`: keeps a float property at or above `min` on get and set.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonRangeValueProviderFilter<float>`](/mod/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonMinValueProvider(IValueProvider baseProvider, float min)"}</code> | <span className="api-desc">Creates a `JsonMinValueProvider` from `baseProvider` and `min`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-min" /><code>{"private float min"}</code> | <span className="api-desc">The lower limit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"override float Clamp(float value)"}</code> | <span className="api-desc">Returns the larger of the value and `min`.</span> |
