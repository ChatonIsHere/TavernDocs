---
title: "Vector3Converter"
description: "TypeConverter that parses an x,y,z string into a Vector3."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Vector3Converter

A **class** in `Root.Township`, `Alta.Console`.

`TypeConverter` that parses an `x,y,z` string into a `Vector3`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `TypeConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Vector3Converter()"}</code> | <span className="api-desc">Creates a `Vector3Converter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvertfrom" /><code>{"override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)"}</code> | <span className="api-desc">True for strings.</span> |
| <Link id="m-convertfrom" /><code>{"override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)"}</code> | <span className="api-desc">Parses `x,y,z`; logs an error and returns zero on a bad format.</span> |
