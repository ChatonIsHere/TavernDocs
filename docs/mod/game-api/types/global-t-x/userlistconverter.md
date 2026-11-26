---
title: "UserListConverter"
description: "Type converter that turns a comma-separated console argument into a UserList of UserInfoAccess entries (ids or lowercased names)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserListConverter

A **class** in `Root.Township`, the global namespace.

Type converter that turns a comma-separated console argument into a `UserList` of `UserInfoAccess` entries (ids or lowercased names).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserListConverter()"}</code> | Creates an `UserListConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Splits the lowercased string on commas and makes a `UserInfoAccess` from each trimmed part, by id if numeric. |
