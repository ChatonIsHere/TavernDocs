---
title: "SensitiveStringConverter"
description: "JSON converter for strings that masks secrets: any value whose JSON path contains password, token or nonce is written as ."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SensitiveStringConverter

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Converters`.

JSON converter for strings that masks secrets: any value whose JSON path contains `password`, `token` or `nonce` is written as `*`. Meant for logging.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** `JsonConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SensitiveStringConverter()"}</code> | <span className="api-desc">Creates a `SensitiveStringConverter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvert" /><code>{"override bool CanConvert(Type objectType)"}</code> | <span className="api-desc">True for strings.</span> |
| <Link id="m-readjson" /><code>{"override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)"}</code> | <span className="api-desc">Reads the string unchanged.</span> |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)"}</code> | <span className="api-desc">Writes the string, or `*` when the path mentions password, token or nonce.</span> |
