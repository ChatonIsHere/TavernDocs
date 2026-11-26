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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** `JsonConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JwtSecurityTokenJsonConverter()"}</code> | <span className="api-desc">Creates a `JwtSecurityTokenJsonConverter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvert" /><code>{"override bool CanConvert(Type objectType)"}</code> | <span className="api-desc">True only for `JwtSecurityToken`.</span> |
| <Link id="m-readjson" /><code>{"override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)"}</code> | <span className="api-desc">Rebuilds the token from the string with `JWTUtility.CreateFromString`, keeping the raw string as a claim.</span> |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)"}</code> | <span className="api-desc">Writes the token as its encoded string.</span> |
