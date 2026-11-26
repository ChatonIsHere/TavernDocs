---
title: "JsonRangeAttribute"
description: "JSON property attribute that clamps an int between a minimum and maximum whenever the property is read or written through Newtonsoft."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonRangeAttribute

A **class** in `Root.Township`, `Alta.Utilities`.

JSON property attribute that clamps an int between a minimum and maximum whenever the property is read or written through Newtonsoft.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonPropertyFilterAttribute`](/mod/game-api/types/alta-utilities/jsonpropertyfilterattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonRangeAttribute(int min, int max)"}</code> | <span className="api-desc">Creates a `JsonRangeAttribute` from `min` and `max`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"private int max"}</code> | <span className="api-desc">The upper limit.</span> |
| <Link id="m-min" /><code>{"private int min"}</code> | <span className="api-desc">The lower limit.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override IValueProvider Filter(IValueProvider baseProvider)"}</code> | <span className="api-desc">Wraps the property's value provider in a `JsonRangeValueProvider`.</span> |
