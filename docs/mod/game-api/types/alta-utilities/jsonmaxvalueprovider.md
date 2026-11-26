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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonRangeValueProviderFilter<float>`](/mod/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonMaxValueProvider(IValueProvider baseProvider, float max)"}</code> | <span className="api-desc">Creates a `JsonMaxValueProvider` from `baseProvider` and `max`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private float max"}</code> | <span className="api-desc">The upper limit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"override float Clamp(float value)"}</code> | <span className="api-desc">Returns the smaller of the value and `max`.</span> |
