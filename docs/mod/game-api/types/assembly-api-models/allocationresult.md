---
title: "AllocationResult"
description: "Result of asking Agones (the game server hosting system) for a server: whether one was allocated and how to connect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AllocationResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Result of asking Agones (the game server hosting system) for a server: whether one was allocated and how to connect.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AllocationResult()"}</code> | Creates an `AllocationResult` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connectioninfo" /><code><Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> | Address details for the allocated server. |
| <Link id="m-failuretype" /><code><Link to="/mod/game-api/types/assembly-api-models/agonesallocationfailuretype">{"AgonesAllocationFailureType"}</Link>{" FailureType { get; set; }"}</code> | Why the allocation failed, when it did. |
| <Link id="m-gameservername" /><code>{"string GameServerName { get; set; }"}</code> | Agones name of the allocated game server. |
| <Link id="m-isallocated" /><code>{"bool IsAllocated { get; set; }"}</code> | Whether a server was allocated. |

## Used in

Members of other types that take, return or hold a `AllocationResult`:

[`IServerApiClient.AllocateServerForMigration`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-allocateserverformigration), [`OfflineServerApiClient.AllocateServerForMigration`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-allocateserverformigration), [`ServerApiClient.AllocateServerForMigration`](/mod/game-api/types/assembly-api-client/serverapiclient#m-allocateserverformigration), [`LowLevelApiClient.AllocateServerForMigration`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-allocateserverformigration), [`ServerCommandModule.RequestMigrationFromWebApi`](/mod/game-api/types/alta-console/servercommandmodule#m-requestmigrationfromwebapi).
