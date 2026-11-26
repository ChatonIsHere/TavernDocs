---
title: "NetworkPrefabConverter"
description: "Type converter that turns a string (a prefab hash or name) into a NetworkPrefab, for console command arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkPrefabConverter

A **class** in `Root.Township`, `Alta.Networking`.

Type converter that turns a string (a prefab hash or name) into a `NetworkPrefab`, for console command arguments.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkPrefabConverter()"}</code> | Creates a `NetworkPrefabConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Looks up the prefab by hash or lower-case name; returns null if it can't be spawned by command. An unknown name probably throws. |
