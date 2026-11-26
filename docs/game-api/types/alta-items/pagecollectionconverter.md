---
title: "PageCollectionConverter"
description: "TypeConverter that turns a string into a PageCollection by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PageCollectionConverter

A **class** in `Root.Township`, `Alta.Pages`.

`TypeConverter` that turns a string into a `PageCollection` by name. Nothing in this build attaches it to a type.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PageCollectionConverter()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings, otherwise defers to the base converter. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Finds the `PageCollection` whose name matches the string, ignoring case. Logs and returns null if there is none. |
