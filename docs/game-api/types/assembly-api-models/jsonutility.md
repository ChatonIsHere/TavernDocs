---
title: "JsonUtility"
description: "Shared Json.NET settings for the Alta API: its converters, ISO UTC dates and nulls left out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JsonUtility

A **static class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Utility`.

Shared Json.NET settings for the Alta API: its converters, ISO UTC dates and nulls left out.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allconverters" /><code>{"static JsonConverter[] AllConverters"}</code> | The converters used: IP address, region, JWT token and enums as strings. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"static JsonSerializerSettings Settings { get; }"}</code> | Serializer settings with `AllConverters`, ISO UTC dates and null values ignored. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupjsonserializersettings" /><code>{"static void SetupJsonSerializerSettings()"}</code> | Makes `Settings` Json.NET's global default. The API clients call it on start, so it affects every `JsonConvert` call in the process. |
