---
title: "ForceDefaultConverter"
description: "A JSON converter that can neither read nor write, so Json.NET falls back to default handling for a property marked with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForceDefaultConverter

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Converters`.

A JSON converter that can neither read nor write, so Json.NET falls back to default handling for a property marked with it. Its methods all throw.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** `JsonConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForceDefaultConverter()"}</code> | Creates a `ForceDefaultConverter` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canread" /><code>{"override bool CanRead { get; }"}</code> | Always false, so the converter is skipped when reading. |
| <Link id="m-canwrite" /><code>{"override bool CanWrite { get; }"}</code> | Always false, so the converter is skipped when writing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvert" /><code>{"override bool CanConvert(Type objectType)"}</code> | Not implemented; throws. |
| <Link id="m-readjson" /><code>{"override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)"}</code> | Not implemented; throws. |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)"}</code> | Not implemented; throws. |
