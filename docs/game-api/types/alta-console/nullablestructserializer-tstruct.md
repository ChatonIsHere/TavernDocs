---
title: "NullableStructSerializer<TStruct>"
description: "JSON converter for a nullable struct that writes null or hands the value to the struct's own converter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NullableStructSerializer&lt;TStruct&gt;

A **class** in `Root.Township`, `Alta.Console`.

JSON converter for a nullable struct that writes null or hands the value to the struct's own converter. Created by `AddNullableConverters`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `JsonConverter<TStruct?>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NullableStructSerializer()"}</code> | Creates a `NullableStructSerializer` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readjson" /><code>{"override TStruct? ReadJson(JsonReader reader, Type objectType, TStruct? existingValue, bool hasExistingValue, JsonSerializer serializer)"}</code> | Returns null for a JSON null, otherwise deserializes the struct. |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, TStruct? value, JsonSerializer serializer)"}</code> | Writes null when empty, otherwise serializes the value. |
