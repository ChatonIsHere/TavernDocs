---
title: "PlayerConverter"
description: "Type converter that turns a string (username or user ID) into an online player, used for console command arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerConverter

A **class** in `Root.Township`, the global namespace.

Type converter that turns a string (username or user ID) into an online player, used for console command arguments.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerConverter()"}</code> | Creates a `PlayerConverter` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-last" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Last { get; private set; }"}</code> | The player from the last conversion, which stat converters use to look up stats. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Finds an online player by username or ID, ignoring case, then again ignoring spaces and underscores. Null if none. |
