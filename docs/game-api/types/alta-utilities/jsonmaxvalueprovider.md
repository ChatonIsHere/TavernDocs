---
title: "JsonMaxValueProvider"
description: "Value provider used by JsonMaxAttribute: caps a float property at max on get and set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonMaxValueProvider

A **class** in `Root.Township`, `Alta.Utilities`.

Value provider used by `JsonMaxAttribute`: caps a float property at `max` on get and set.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonRangeValueProviderFilter<float>`](/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonMaxValueProvider(IValueProvider baseProvider, float max)"}</code> | Creates a `JsonMaxValueProvider` from `baseProvider` and `max`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private float max"}</code> | The upper limit. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"override float Clamp(float value)"}</code> | Returns the smaller of the value and `max`. |
