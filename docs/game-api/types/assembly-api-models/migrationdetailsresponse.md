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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MigrationDetailsResponse()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasmigrated" /><code>{"bool HasMigrated { get; set; }"}</code> | True if the server's saves have been migrated. |
| <Link id="m-migrationdatetime" /><code>{"DateTime MigrationDateTime { get; set; }"}</code> | When the migration happened. |
| <Link id="m-serverid" /><code>{"int ServerId { get; set; }"}</code> | The server the details are for. |

## Used in

Members of other types that take, return or hold a `MigrationDetailsResponse`:

[`IServerApiClient.GetLatestEfsMigrationForServer`](/game-api/types/assembly-api-client/iserverapiclient#m-getlatestefsmigrationforserver), [`OfflineServerApiClient.GetLatestEfsMigrationForServer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getlatestefsmigrationforserver), [`ServerApiClient.GetLatestEfsMigrationForServer`](/game-api/types/assembly-api-client/serverapiclient#m-getlatestefsmigrationforserver), [`LowLevelApiClient.GetLatestEfsMigrationForServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getlatestefsmigrationforserver).
