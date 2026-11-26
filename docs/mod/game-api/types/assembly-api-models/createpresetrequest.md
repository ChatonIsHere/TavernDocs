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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CreatePresetRequest()"}</code> | <span className="api-desc">Creates a `CreatePresetRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytesize" /><code>{"int ByteSize { get; set; }"}</code> | <span className="api-desc">Size of the preset data in bytes.</span> |
| <Link id="m-data" /><code>{"uint[] Data { get; set; }"}</code> | <span className="api-desc">The packed preset data.</span> |
| <Link id="m-presetid" /><code>{"int PresetId { get; set; }"}</code> | <span className="api-desc">Which preset slot to save to.</span> |

## Used in

Members of other types that take, return or hold a `CreatePresetRequest`:

<div className="api-used-in">

[`LowLevelApiClient.CreateCosmeticPreset`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createcosmeticpreset).

</div>
