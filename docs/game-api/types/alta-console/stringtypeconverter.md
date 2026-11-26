---
title: "StringTypeConverter"
description: "Write-only JSON converter that writes a Type as its name string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StringTypeConverter

A **class** in `Root.Township`, `Alta.Console`.

Write-only JSON converter that writes a `Type` as its name string.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `JsonConverter<Type>`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StringTypeConverter()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canread" /><code>{"override bool CanRead { get; }"}</code> | False: this converter cannot read. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readjson" /><code>{"override Type ReadJson(JsonReader reader, Type objectType, Type existingValue, bool hasExistingValue, JsonSerializer serializer)"}</code> | Not implemented; throws. |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, Type value, JsonSerializer serializer)"}</code> | Writes the type's name as a string. |
