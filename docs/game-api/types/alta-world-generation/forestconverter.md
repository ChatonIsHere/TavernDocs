---
title: "ForestConverter"
description: "A TypeConverter that turns a string into a ForestGenerator by matching its Cache name, ignoring case."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestConverter

A **class** in `Root.Township`, `Alta.Forests`.

A `TypeConverter` that turns a string into a `ForestGenerator` by matching its `Cache` name, ignoring case. Probably used when a forest is given as a text argument, such as in console commands.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestConverter()"}</code> | Creates a `ForestConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings, otherwise defers to the base converter. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | Returns the first `ForestGenerator.All` entry whose `Cache` matches the string case-insensitively, or null. |
