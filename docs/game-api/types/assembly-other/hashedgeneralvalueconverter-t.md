---
title: "HashedGeneralValueConverter<T>"
description: "The console converter for those types: a hash, or a name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValueConverter&lt;T&gt;

A **class** in `Alta.Values`, `Alta`.

The console converter for those types: a hash, or a name.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `TypeConverter`
- **Derived types** [`StatDefinitionConverter`](/game-api/types/alta-utilities/statdefinitionconverter), [`PlayerUnlockConverter`](/game-api/types/global-p/playerunlockconverter)
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HashedGeneralValueConverter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> |  |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> |  |
| <Link id="m-getfromstring" /><code>{"protected virtual "}<Link to="/game-api/types/assembly-other/hashedgeneralvalue-t">{"HashedGeneralValue"}</Link>{"<T> GetFromString(string input)"}</code> |  |
