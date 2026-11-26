---
title: "JwtSecurityTokenJsonConverter"
description: "JSON converter that stores a JwtSecurityToken as its encoded string."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JwtSecurityTokenJsonConverter

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Converters`.

JSON converter that stores a `JwtSecurityToken` as its encoded string.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `JsonConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JwtSecurityTokenJsonConverter()"}</code> | Creates a `JwtSecurityTokenJsonConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvert" /><code>{"override bool CanConvert(Type objectType)"}</code> | True only for `JwtSecurityToken`. |
| <Link id="m-readjson" /><code>{"override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)"}</code> | Rebuilds the token from the string with `JWTUtility.CreateFromString`, keeping the raw string as a claim. |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)"}</code> | Writes the token as its encoded string. |
