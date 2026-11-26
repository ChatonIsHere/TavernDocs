---
title: "GameServerStatus"
description: "Online state of a game server in the Alta API: forced offline, offline or online."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerStatus

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Enums`.

Online state of a game server in the Alta API: forced offline, offline or online.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-forcedoffline" /><code>{"ForcedOffline = -1"}</code> |
| <Link id="m-offline" /><code>{"Offline = 0"}</code> |
| <Link id="m-online" /><code>{"Online = 1"}</code> |

## Used in

Members of other types that take, return or hold a `GameServerStatus`:

[`ServerStatusRequest.Status`](/mod/game-api/types/assembly-api-models/serverstatusrequest#m-status), [`FleetInfo.Status`](/mod/game-api/types/assembly-api-models/fleetinfo#m-status), [`GameServerInfo.FinalStatus`](/mod/game-api/types/assembly-api-models/gameserverinfo#m-finalstatus), [`GameServerInfo.ServerStatus`](/mod/game-api/types/assembly-api-models/gameserverinfo#m-serverstatus), [`GroupServerInfo.Status`](/mod/game-api/types/assembly-api-models/groupserverinfo#m-status).
