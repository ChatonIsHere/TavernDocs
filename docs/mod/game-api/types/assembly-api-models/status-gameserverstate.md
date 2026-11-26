---
title: "Status.GameServerState"
description: "Lifecycle state of an Agones game server, from Creating through Ready and Allocated to Shutdown or Unhealthy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Status.GameServerState

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Lifecycle state of an Agones game server, from `Creating` through `Ready` and `Allocated` to `Shutdown` or `Unhealthy`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested in** [`Status`](/mod/game-api/types/assembly-api-models/status)

## Values

| Member |
| --- |
| <Link id="m-allocated" /><code>{"Allocated = 7"}</code> |
| <Link id="m-creating" /><code>{"Creating = 0"}</code> |
| <Link id="m-error" /><code>{"Error = 2"}</code> |
| <Link id="m-portallocation" /><code>{"PortAllocation = 1"}</code> |
| <Link id="m-ready" /><code>{"Ready = 6"}</code> |
| <Link id="m-requestready" /><code>{"RequestReady = 5"}</code> |
| <Link id="m-scheduled" /><code>{"Scheduled = 4"}</code> |
| <Link id="m-shutdown" /><code>{"Shutdown = 9"}</code> |
| <Link id="m-starting" /><code>{"Starting = 3"}</code> |
| <Link id="m-unallocated" /><code>{"UnAllocated = 8"}</code> |
| <Link id="m-unhealthy" /><code>{"Unhealthy = 10"}</code> |

## Used in

Members of other types that take, return or hold a `GameServerState`:

[`Status.State`](/mod/game-api/types/assembly-api-models/status#m-state).
