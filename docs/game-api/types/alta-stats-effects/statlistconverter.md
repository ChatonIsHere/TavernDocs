---
title: "StatListConverter"
description: "Type converter that turns a stat name into a StatList of stat and player pairs for console commands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatListConverter

A **class** in `Root.Township`, `Alta.StatSystem`.

Type converter that turns a stat name into a `StatList` of stat and player pairs for console commands.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatListConverter()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastlist" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{"> LastList { get; private set; }"}</code> | Meant to hold the last converted list; this converter never sets it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | For each player in `PlayerList.LastList`, adds a pair. It splits the text on commas but ignores the result, and always reads the stat from `PlayerConverter.Last`. |
