---
title: "AllocationRequest"
description: "Body of the Alta web API call that allocates a server for migration (AllocateServerForMigration)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AllocationRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of the Alta web API call that allocates a server for migration (`AllocateServerForMigration`).

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AllocationRequest()"}</code> | <span className="api-desc">Creates an `AllocationRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-serveridentifier" /><code>{"int ServerIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the server to allocate.</span> |

## Used in

Members of other types that take, return or hold a `AllocationRequest`:

<div className="api-used-in">

[`LowLevelApiClient.AllocateServerForMigration`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-allocateserverformigration).

</div>
