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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`LauncherGameInfoFull`](/mod/game-api/types/assembly-api-models/launchergameinfofull)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LauncherGameInfoShort()"}</code> | <span className="api-desc">Creates a `LauncherGameInfoShort` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bucketurl" /><code>{"string BucketUrl { get; set; }"}</code> | <span className="api-desc">Address of the storage bucket the game's files are in.</span> |
| <Link id="m-displayorder" /><code>{"int DisplayOrder { get; set; }"}</code> | <span className="api-desc">Where the game sits in the launcher's list.</span> |
| <Link id="m-icon" /><code>{"string Icon { get; set; }"}</code> | <span className="api-desc">Address of the game's icon.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The game's numeric id.</span> |
| <Link id="m-stringidentifier" /><code>{"string StringIdentifier { get; set; }"}</code> | <span className="api-desc">The game's text id.</span> |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | <span className="api-desc">The game's display title.</span> |

## Used in

Members of other types that take, return or hold a `LauncherGameInfoShort`:

<div className="api-used-in">

[`ILauncherApiClient.GetAllLauncherGamesAsync`](/mod/game-api/types/assembly-api-client/ilauncherapiclient#m-getalllaunchergamesasync), [`LauncherApiClient.GetAllLauncherGamesAsync`](/mod/game-api/types/assembly-api-client/launcherapiclient#m-getalllaunchergamesasync), [`OfflineLauncherApiClient.GetAllLauncherGamesAsync`](/mod/game-api/types/assembly-api-client/offlinelauncherapiclient#m-getalllaunchergamesasync), [`LowLevelApiClient.GetAllLauncherGames`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getalllaunchergames).

</div>
