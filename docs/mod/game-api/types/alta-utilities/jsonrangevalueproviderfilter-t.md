---
title: "JsonRangeValueProviderFilter<T>"
description: "Wraps a Json.NET IValueProvider so values are clamped to a range both when read and when written."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonRangeValueProviderFilter&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities`.

Wraps a Json.NET `IValueProvider` so values are clamped to a range both when read and when written. Subclasses define `Clamp`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `IValueProvider`
- **Derived types** [`JsonMaxValueProvider`](/mod/game-api/types/alta-utilities/jsonmaxvalueprovider), [`JsonMinValueProvider`](/mod/game-api/types/alta-utilities/jsonminvalueprovider), [`JsonRangeFloatValueProvider`](/mod/game-api/types/alta-utilities/jsonrangefloatvalueprovider), [`JsonRangeValueProvider`](/mod/game-api/types/alta-utilities/jsonrangevalueprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonRangeValueProviderFilter(IValueProvider baseProvider)"}</code> | Creates a `JsonRangeValueProviderFilter` from `baseProvider`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseprovider" /><code>{"private IValueProvider baseProvider"}</code> | The wrapped value provider that does the real get and set. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"abstract T Clamp(T value)"}</code> | Limits a value to the allowed range. |
| <Link id="m-getvalue" /><code>{"object GetValue(object target)"}</code> | Reads the value from the wrapped provider and returns it clamped. |
| <Link id="m-setvalue" /><code>{"void SetValue(object target, object value)"}</code> | Clamps the value, then writes it through the wrapped provider. |
