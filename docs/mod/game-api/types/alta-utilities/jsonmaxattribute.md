---
title: "JsonMaxAttribute"
description: "JSON property attribute that caps a float at a maximum whenever the property is read or written through Newtonsoft."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonMaxAttribute

A **class** in `Root.Township`, `Alta.Utilities`.

JSON property attribute that caps a float at a maximum whenever the property is read or written through Newtonsoft.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonPropertyFilterAttribute`](/mod/game-api/types/alta-utilities/jsonpropertyfilterattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonMaxAttribute(float max)"}</code> | Creates a `JsonMaxAttribute` from `max`. |

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
| <Link id="m-filter" /><code>{"override IValueProvider Filter(IValueProvider baseProvider)"}</code> | Wraps the property's value provider in a `JsonMaxValueProvider`. |
