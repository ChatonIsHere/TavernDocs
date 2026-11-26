---
title: "JsonRangeFloatAttribute"
description: "JSON property attribute that clamps a float between a minimum and maximum whenever the property is read or written through Newtonsoft."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonRangeFloatAttribute

A **class** in `Root.Township`, `Alta.Utilities`.

JSON property attribute that clamps a float between a minimum and maximum whenever the property is read or written through Newtonsoft.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonPropertyFilterAttribute`](/mod/game-api/types/alta-utilities/jsonpropertyfilterattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonRangeFloatAttribute(float min, float max)"}</code> | Creates a `JsonRangeFloatAttribute` from `min` and `max`. |

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
| <Link id="m-filter" /><code>{"override IValueProvider Filter(IValueProvider baseProvider)"}</code> | Wraps the property's value provider in a `JsonRangeFloatValueProvider`. |
