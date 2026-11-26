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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatConverter()"}</code> | <span className="api-desc">Creates a `StatConverter` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-last" /><code>{"static "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" Last { get; private set; }"}</code> | <span className="api-desc">The stat returned by the last conversion.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | <span className="api-desc">True for strings.</span> |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | <span className="api-desc">Looks the lowercased name up in the health stat manager of `PlayerConverter.Last`. Returns null and logs if there is no player.</span> |
