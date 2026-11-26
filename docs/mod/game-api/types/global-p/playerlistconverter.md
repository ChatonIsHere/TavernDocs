---
title: "PlayerListConverter"
description: "Type converter that turns a comma-separated string into a PlayerList, used for console command arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerListConverter

A **class** in `Root.Township`, the global namespace.

Type converter that turns a comma-separated string into a `PlayerList`, used for console command arguments.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerListConverter()"}</code> | <span className="api-desc">Creates a `PlayerListConverter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | <span className="api-desc">True for strings.</span> |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | <span className="api-desc">Matches each name or user id against online players, ignoring spaces and case. `*` returns every player; unknown names are skipped.</span> |
