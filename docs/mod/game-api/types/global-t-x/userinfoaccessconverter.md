---
title: "UserInfoAccessConverter"
description: "Type converter that turns a console argument string into a UserInfoAccess: a number becomes a user id, anything else a lowercased username."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoAccessConverter

A **class** in `Root.Township`, the global namespace.

Type converter that turns a console argument string into a `UserInfoAccess`: a number becomes a user id, anything else a lowercased username.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoAccessConverter()"}</code> | Creates an `UserInfoAccessConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Lowercases the string and makes a `UserInfoAccess` from it as an id if it parses as an int, otherwise as a name. |
