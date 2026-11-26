---
title: "JsonPropertyFilterAttribute"
description: "Base of the JsonMin, JsonMax and JsonRange attributes on settings properties, which clamp values when JSON is read or a value is set from the console."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonPropertyFilterAttribute

An **abstract class** in `Root.Township`, `Alta.Utilities`.

Base of the `JsonMin`, `JsonMax` and `JsonRange` attributes on settings properties, which clamp values when JSON is read or a value is set from the console.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `Attribute`
- **Derived types** [`JsonMaxAttribute`](/mod/game-api/types/alta-utilities/jsonmaxattribute), [`JsonMinAttribute`](/mod/game-api/types/alta-utilities/jsonminattribute), [`JsonRangeAttribute`](/mod/game-api/types/alta-utilities/jsonrangeattribute), [`JsonRangeFloatAttribute`](/mod/game-api/types/alta-utilities/jsonrangefloatattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected JsonPropertyFilterAttribute()"}</code> | <span className="api-desc">Creates a `JsonPropertyFilterAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"abstract IValueProvider Filter(IValueProvider baseProvider)"}</code> | <span className="api-desc">Wraps the JSON value provider so values are clamped.</span> |
| <Link id="m-filtervalue" /><code>{"T FilterValue<T>(T value)"}</code> | <span className="api-desc">Clamps a value to the attribute's range. The console settings command uses it, but for int settings it throws the clamped result away.</span> |
