---
title: "JsonMinAttribute"
description: "JSON property attribute that keeps a float at or above a minimum whenever the property is read or written through Newtonsoft."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonMinAttribute

A **class** in `Root.Township`, `Alta.Utilities`.

JSON property attribute that keeps a float at or above a minimum whenever the property is read or written through Newtonsoft.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`JsonPropertyFilterAttribute`](/mod/game-api/types/alta-utilities/jsonpropertyfilterattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonMinAttribute(float min)"}</code> | <span className="api-desc">Creates a `JsonMinAttribute` from `min`.</span> |

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
| <Link id="m-filter" /><code>{"override IValueProvider Filter(IValueProvider baseProvider)"}</code> | <span className="api-desc">Wraps the property's value provider in a `JsonMinValueProvider`.</span> |
