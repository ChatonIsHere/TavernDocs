---
title: "AgonesAllocationFailureType"
description: "Why allocating an Agones game server failed: no access to the cluster, web request failed, could not allocate, or server locked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgonesAllocationFailureType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Why allocating an Agones game server failed: no access to the cluster, web request failed, could not allocate, or server locked.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-couldntaccesscluster" /><code>{"CouldntAccessCluster = 5"}</code> |
| <Link id="m-couldntallocate" /><code>{"CouldntAllocate = 7"}</code> |
| <Link id="m-lockedserver" /><code>{"LockedServer = 8"}</code> |
| <Link id="m-nothing" /><code>{"Nothing = 0"}</code> |
| <Link id="m-webrequestfailed" /><code>{"WebRequestFailed = 6"}</code> |

## Used in

Members of other types that take, return or hold a `AgonesAllocationFailureType`:

[`AllocationResult.FailureType`](/mod/game-api/types/assembly-api-models/allocationresult#m-failuretype).
