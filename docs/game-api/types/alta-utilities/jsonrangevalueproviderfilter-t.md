---
title: "JsonRangeValueProviderFilter<T>"
description: "abstract class JsonRangeValueProviderFilter<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonRangeValueProviderFilter&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `IValueProvider`
- **Derived types** [`JsonMaxValueProvider`](/game-api/types/alta-utilities/jsonmaxvalueprovider), [`JsonMinValueProvider`](/game-api/types/alta-utilities/jsonminvalueprovider), [`JsonRangeFloatValueProvider`](/game-api/types/alta-utilities/jsonrangefloatvalueprovider), [`JsonRangeValueProvider`](/game-api/types/alta-utilities/jsonrangevalueprovider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JsonRangeValueProviderFilter(IValueProvider baseProvider)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseprovider" /><code>{"private IValueProvider baseProvider"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clamp" /><code>{"abstract T Clamp(T value)"}</code> |  |
| <Link id="m-getvalue" /><code>{"object GetValue(object target)"}</code> |  |
| <Link id="m-setvalue" /><code>{"void SetValue(object target, object value)"}</code> |  |
