---
title: "HashedGeneralValueConverter<T>"
description: "Type converter that turns a string (a hash number or a name) into a HashedGeneralValue asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValueConverter&lt;T&gt;

A **class** in `Alta.Values`, `Alta`.

Type converter that turns a string (a hash number or a name) into a `HashedGeneralValue` asset. Used by console commands to parse items, populations and stats.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `TypeConverter`
- **Derived types** [`StatDefinitionConverter`](/mod/game-api/types/alta-utilities/statdefinitionconverter), [`PlayerUnlockConverter`](/mod/game-api/types/global-p/playerunlockconverter)
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HashedGeneralValueConverter()"}</code> | Creates a `HashedGeneralValueConverter` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logs failed lookups. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Lowercases the string, looks it up as a hash if it's a number, otherwise by name. Logs a warning and returns null if not found. |
| <Link id="m-getfromstring" /><code>{"protected virtual "}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue-t">{"HashedGeneralValue"}</Link>{"<T> GetFromString(string input)"}</code> | Looks up the asset by name. Override for custom name matching. |
