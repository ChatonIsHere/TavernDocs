---
title: "PlayerListConverter"
description: "Type converter that turns a comma-separated string into a PlayerList, used for console command arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerListConverter

A **class** in `Root.Township`, no namespace.

Type converter that turns a comma-separated string into a `PlayerList`, used for console command arguments.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerListConverter()"}</code> | Creates a `PlayerListConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Matches each name or user id against online players, ignoring spaces and case. `*` returns every player; unknown names are skipped. |
