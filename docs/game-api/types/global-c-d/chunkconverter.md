---
title: "ChunkConverter"
description: "TypeConverter for Chunk, so a string (such as a console command argument) can name a chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkConverter

A **class** in `Root.Township`, no namespace.

`TypeConverter` for `Chunk`, so a string (such as a console command argument) can name a chunk.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkConverter()"}</code> | Creates a `ChunkConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | True for strings. |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | "global" gives the global chunk; anything else matches a chunk identifier as a whole word, ignoring case. Null and a log line if none match. |
