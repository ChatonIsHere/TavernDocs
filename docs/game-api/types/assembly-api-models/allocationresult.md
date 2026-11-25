---
title: "AllocationResult"
description: "class AllocationResult in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AllocationResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AllocationResult()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-connectioninfo" /><code><Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/connectioninfo">{"ConnectionInfo"}</Link>{" { get; set; }"}</code> |
| <Link id="m-failuretype" /><code><Link to="/game-api/types/assembly-api-models/agonesallocationfailuretype">{"AgonesAllocationFailureType"}</Link>{" FailureType { get; set; }"}</code> |
| <Link id="m-gameservername" /><code>{"string GameServerName { get; set; }"}</code> |
| <Link id="m-isallocated" /><code>{"bool IsAllocated { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `AllocationResult`:

[`IServerApiClient.AllocateServerForMigration`](/game-api/types/assembly-api-client/iserverapiclient#m-allocateserverformigration), [`OfflineServerApiClient.AllocateServerForMigration`](/game-api/types/assembly-api-client/offlineserverapiclient#m-allocateserverformigration), [`ServerApiClient.AllocateServerForMigration`](/game-api/types/assembly-api-client/serverapiclient#m-allocateserverformigration), [`LowLevelApiClient.AllocateServerForMigration`](/game-api/types/assembly-api-client/lowlevelapiclient#m-allocateserverformigration), [`ServerCommandModule.RequestMigrationFromWebApi`](/game-api/types/alta-console/servercommandmodule#m-requestmigrationfromwebapi).
