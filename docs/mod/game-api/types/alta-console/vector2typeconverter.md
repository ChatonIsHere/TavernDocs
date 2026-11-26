---
title: "Vector2TypeConverter"
description: "JSON converter that writes a Vector2 as a two-number array and reads it back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Vector2TypeConverter

A **class** in `Root.Township`, `Alta.Console`.

JSON converter that writes a `Vector2` as a two-number array and reads it back.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `JsonConverter<Vector2>`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Vector2TypeConverter()"}</code> | <span className="api-desc">Creates a `Vector2TypeConverter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readjson" /><code>{"override Vector2 ReadJson(JsonReader reader, Type objectType, Vector2 existingValue, bool hasExistingValue, JsonSerializer serializer)"}</code> | <span className="api-desc">Reads `[x, y]`; returns zero if the token is not an array.</span> |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, Vector2 value, JsonSerializer serializer)"}</code> | <span className="api-desc">Writes `[x, y]`.</span> |
