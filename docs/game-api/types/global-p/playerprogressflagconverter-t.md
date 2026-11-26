---
title: "PlayerProgressFlagConverter<T>"
description: "Type converter that looks up a PlayerProgressFlag of type T by name or hash, used for console command arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgressFlagConverter&lt;T&gt;

A **class** in `Root.Township`, no namespace.

Type converter that looks up a `PlayerProgressFlag` of type `T` by name or hash, used for console command arguments.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerProgressFlagConverter()"}</code> | Creates a `PlayerProgressFlagConverter` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for failed lookups. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Treats a number as a hash and anything else as a lowercase name. Logs a warning and returns null if not found. |
