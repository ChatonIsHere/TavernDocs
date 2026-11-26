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
| <Link id="m-ctor" /><code>{"RegionEndpointJsonConverter()"}</code> | <span className="api-desc">Creates a `RegionEndpointJsonConverter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvert" /><code>{"override bool CanConvert(Type objectType)"}</code> | <span className="api-desc">True only for `Region`.</span> |
| <Link id="m-readjson" /><code>{"override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)"}</code> | <span className="api-desc">Turns a short name back into a `Region` with `Region.Parse`.</span> |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)"}</code> | <span className="api-desc">Writes the region's `ShortName`.</span> |
