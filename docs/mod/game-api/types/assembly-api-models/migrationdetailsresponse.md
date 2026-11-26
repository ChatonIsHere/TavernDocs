---
title: "MigrationDetailsResponse"
description: "A server's latest save storage (EFS) migration, from LowLevelApiClient.GetLatestEfsMigrationForServer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MigrationDetailsResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A server's latest save storage (EFS) migration, from `LowLevelApiClient.GetLatestEfsMigrationForServer`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MigrationDetailsResponse()"}</code> | <span className="api-desc">Creates a `MigrationDetailsResponse` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasmigrated" /><code>{"bool HasMigrated { get; set; }"}</code> | <span className="api-desc">True if the server's saves have been migrated.</span> |
| <Link id="m-migrationdatetime" /><code>{"DateTime MigrationDateTime { get; set; }"}</code> | <span className="api-desc">When the migration happened.</span> |
| <Link id="m-serverid" /><code>{"int ServerId { get; set; }"}</code> | <span className="api-desc">The server the details are for.</span> |

## Used in

Members of other types that take, return or hold a `MigrationDetailsResponse`:

<div className="api-used-in">

[`IServerApiClient.GetLatestEfsMigrationForServer`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getlatestefsmigrationforserver), [`OfflineServerApiClient.GetLatestEfsMigrationForServer`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getlatestefsmigrationforserver), [`ServerApiClient.GetLatestEfsMigrationForServer`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getlatestefsmigrationforserver), [`LowLevelApiClient.GetLatestEfsMigrationForServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getlatestefsmigrationforserver).

</div>
