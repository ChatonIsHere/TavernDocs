---
title: "Vector3TypeConverter"
description: "JSON converter that writes a Vector3 as a three-number array and reads it back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Vector3TypeConverter

A **class** in `Root.Township`, `Alta.Console`.

JSON converter that writes a `Vector3` as a three-number array and reads it back.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `JsonConverter<Vector3>`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Vector3TypeConverter()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readjson" /><code>{"override Vector3 ReadJson(JsonReader reader, Type objectType, Vector3 existingValue, bool hasExistingValue, JsonSerializer serializer)"}</code> | Reads `[x, y, z]`; returns zero if the token is not an array. |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, Vector3 value, JsonSerializer serializer)"}</code> | Writes `[x, y, z]`. |
