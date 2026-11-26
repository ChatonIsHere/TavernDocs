---
title: "Vector4TypeConverter"
description: "JSON converter that writes a Vector4 as a four-number array and reads it back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Vector4TypeConverter

A **class** in `Root.Township`, `Alta.Console`.

JSON converter that writes a `Vector4` as a four-number array and reads it back.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `JsonConverter<Vector4>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Vector4TypeConverter()"}</code> | <span className="api-desc">Creates a `Vector4TypeConverter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readjson" /><code>{"override Vector4 ReadJson(JsonReader reader, Type objectType, Vector4 existingValue, bool hasExistingValue, JsonSerializer serializer)"}</code> | <span className="api-desc">Reads `[x, y, z, w]`, but goes through a `Vector3`, so `w` comes back as 0.</span> |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, Vector4 value, JsonSerializer serializer)"}</code> | <span className="api-desc">Writes `[x, y, z, w]`.</span> |
