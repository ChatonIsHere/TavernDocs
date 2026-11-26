---
title: "IPAddressJsonConverter"
description: "JSON converter that writes an IPAddress as its string and parses it back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPAddressJsonConverter

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Converters`.

JSON converter that writes an `IPAddress` as its string and parses it back.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `JsonConverter`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IPAddressJsonConverter()"}</code> | Creates an `IPAddressJsonConverter` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canconvert" /><code>{"override bool CanConvert(Type objectType)"}</code> | True for `IPAddress` and subclasses. |
| <Link id="m-readjson" /><code>{"override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)"}</code> | Parses the string to an `IPAddress`; empty gives null and an unparseable value is returned as the raw string. |
| <Link id="m-writejson" /><code>{"override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)"}</code> | Writes the address as a string. |
