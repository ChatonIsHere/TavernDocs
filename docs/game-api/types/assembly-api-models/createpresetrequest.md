---
title: "CreatePresetRequest"
description: "Body of the Alta web API call that saves a cosmetic preset (CreateCosmeticPreset)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreatePresetRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of the Alta web API call that saves a cosmetic preset (`CreateCosmeticPreset`).

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CreatePresetRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytesize" /><code>{"int ByteSize { get; set; }"}</code> | Size of the preset data in bytes. |
| <Link id="m-data" /><code>{"uint[] Data { get; set; }"}</code> | The packed preset data. |
| <Link id="m-presetid" /><code>{"int PresetId { get; set; }"}</code> | Which preset slot to save to. |

## Used in

Members of other types that take, return or hold a `CreatePresetRequest`:

[`LowLevelApiClient.CreateCosmeticPreset`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createcosmeticpreset).
