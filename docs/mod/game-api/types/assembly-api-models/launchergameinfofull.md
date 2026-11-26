---
title: "LauncherGameInfoFull"
description: "Full details of a game for Alta's launcher, from LowLevelApiClient.GetLauncherGame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LauncherGameInfoFull

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Full details of a game for Alta's launcher, from `LowLevelApiClient.GetLauncherGame`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`LauncherGameInfoShort`](/mod/game-api/types/assembly-api-models/launchergameinfoshort)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LauncherGameInfoFull()"}</code> | Creates a `LauncherGameInfoFull` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blogaddress" /><code>{"string BlogAddress { get; set; }"}</code> | Link to the game's blog. |
| <Link id="m-buildpath" /><code>{"string BuildPath { get; set; }"}</code> | Path to the game's builds. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Game description text. |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | Address of the game's main image. |
| <Link id="m-logo" /><code>{"string Logo { get; set; }"}</code> | Address of the game's logo. |
| <Link id="m-patchnotes" /><code><Link to="/mod/game-api/types/assembly-api-models/patchnotes">{"PatchNotes"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/patchnotes">{"PatchNotes"}</Link>{" { get; set; }"}</code> | Patch notes for the game. |
| <Link id="m-shopconfigurl" /><code>{"string ShopConfigUrl { get; set; }"}</code> | Address of the shop configuration file. |
| <Link id="m-socialmedia" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/socialmediainfo">{"SocialMediaInfo"}</Link>{"> SocialMedia { get; set; }"}</code> | Links to the game's social media pages. |
| <Link id="m-versionmarkers" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/versionmarker">{"VersionMarker"}</Link>{"> VersionMarkers { get; set; }"}</code> | Version markers for the game's builds. |

## Used in

Members of other types that take, return or hold a `LauncherGameInfoFull`:

[`ILauncherApiClient.GetLauncherGameAsync`](/mod/game-api/types/assembly-api-client/ilauncherapiclient#m-getlaunchergameasync), [`LauncherApiClient.GetLauncherGameAsync`](/mod/game-api/types/assembly-api-client/launcherapiclient#m-getlaunchergameasync), [`OfflineLauncherApiClient.GetLauncherGameAsync`](/mod/game-api/types/assembly-api-client/offlinelauncherapiclient#m-getlaunchergameasync), [`LowLevelApiClient.GetLauncherGame`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getlaunchergame).
