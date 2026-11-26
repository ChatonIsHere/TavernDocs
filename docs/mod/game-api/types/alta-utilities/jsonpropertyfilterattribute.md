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
| <Link id="m-ctor" /><code>{"protected JsonPropertyFilterAttribute()"}</code> | Creates a `JsonPropertyFilterAttribute` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"abstract IValueProvider Filter(IValueProvider baseProvider)"}</code> | Wraps the JSON value provider so values are clamped. |
| <Link id="m-filtervalue" /><code>{"T FilterValue<T>(T value)"}</code> | Clamps a value to the attribute's range. The console settings command uses it, but for int settings it throws the clamped result away. |
