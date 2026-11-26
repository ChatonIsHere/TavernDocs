---
title: "RegionEndpointJsonConverter"
description: "JSON converter that stores a Region as its short name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RegionEndpointJsonConverter

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Converters`.

JSON converter that stores a `Region` as its short name.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** `JsonConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RegionEndpointJsonConverter()"}</code> | Creates a `RegionEndpointJsonConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvert" /><code>{"override bool CanConvert(Type objectType)"}</code> | True only for `Region`. |
| <Link id="m-readjson" /><code>{"override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)"}</code> | Turns a short name back into a `Region` with `Region.Parse`. |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)"}</code> | Writes the region's `ShortName`. |
