---
title: "LauncherGameInfoShort"
description: "Short details of a game for the list in Alta's launcher."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LauncherGameInfoShort

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Short details of a game for the list in Alta's launcher. `LauncherGameInfoFull` extends it.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`LauncherGameInfoFull`](/game-api/types/assembly-api-models/launchergameinfofull)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LauncherGameInfoShort()"}</code> | Creates a `LauncherGameInfoShort` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bucketurl" /><code>{"string BucketUrl { get; set; }"}</code> | Address of the storage bucket the game's files are in. |
| <Link id="m-displayorder" /><code>{"int DisplayOrder { get; set; }"}</code> | Where the game sits in the launcher's list. |
| <Link id="m-icon" /><code>{"string Icon { get; set; }"}</code> | Address of the game's icon. |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The game's numeric id. |
| <Link id="m-stringidentifier" /><code>{"string StringIdentifier { get; set; }"}</code> | The game's text id. |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | The game's display title. |

## Used in

Members of other types that take, return or hold a `LauncherGameInfoShort`:

[`ILauncherApiClient.GetAllLauncherGamesAsync`](/game-api/types/assembly-api-client/ilauncherapiclient#m-getalllaunchergamesasync), [`LauncherApiClient.GetAllLauncherGamesAsync`](/game-api/types/assembly-api-client/launcherapiclient#m-getalllaunchergamesasync), [`OfflineLauncherApiClient.GetAllLauncherGamesAsync`](/game-api/types/assembly-api-client/offlinelauncherapiclient#m-getalllaunchergamesasync), [`LowLevelApiClient.GetAllLauncherGames`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getalllaunchergames).
