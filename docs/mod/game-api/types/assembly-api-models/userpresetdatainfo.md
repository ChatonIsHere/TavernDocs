---
title: "UserPresetDataInfo"
description: "A saved cosmetics preset from the web API, packed as an array of uint values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserPresetDataInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A saved cosmetics preset from the web API, packed as an array of `uint` values.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserPresetDataInfo()"}</code> | Creates an `UserPresetDataInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bytesize" /><code>{"int ByteSize { get; set; }"}</code> | Size of the packed preset data in bytes. |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the preset was saved. |
| <Link id="m-data" /><code>{"uint[] Data { get; set; }"}</code> | The packed preset, as `uint` words. |
| <Link id="m-presetid" /><code>{"int PresetId { get; set; }"}</code> | Which preset slot this is. |
| <Link id="m-userid" /><code>{"int UserId { get; set; }"}</code> | The user who owns the preset. |

## Used in

Members of other types that take, return or hold a `UserPresetDataInfo`:

[`IUserApiClient.CreateCosmeticsPreset`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-createcosmeticspreset), [`IUserApiClient.GetAllCosmeticsPresets`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-getallcosmeticspresets), [`OfflineUserApiClient.CreateCosmeticsPreset`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-createcosmeticspreset), [`OfflineUserApiClient.GetAllCosmeticsPresets`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-getallcosmeticspresets), [`UserApiClient.CreateCosmeticsPreset`](/mod/game-api/types/assembly-api-client/userapiclient#m-createcosmeticspreset), [`UserApiClient.GetAllCosmeticsPresets`](/mod/game-api/types/assembly-api-client/userapiclient#m-getallcosmeticspresets), [`LowLevelApiClient.CreateCosmeticPreset`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createcosmeticpreset), [`LowLevelApiClient.GetAllCosmetics`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallcosmetics), [`CosmeticRotatingSlot.GetDataFrom`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-getdatafrom), [`CosmeticRotatingSlot.Setup`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-setup).
