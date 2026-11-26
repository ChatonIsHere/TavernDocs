---
title: "StatConverter"
description: "Type converter that turns a stat name into the Stat on the last parsed player, for console command arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatConverter

A **class** in `Root.Township`, `Alta.StatSystem`.

Type converter that turns a stat name into the `Stat` on the last parsed player, for console command arguments. The player argument must come first.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatConverter()"}</code> | Creates a `StatConverter` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-last" /><code>{"static "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" Last { get; private set; }"}</code> | The stat returned by the last conversion. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Looks the lowercased name up in the health stat manager of `PlayerConverter.Last`. Returns null and logs if there is no player. |
