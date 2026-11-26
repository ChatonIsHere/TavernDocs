---
title: "GameServerInfoMinimal"
description: "A game server's id and name only, as Alta's web API returned in short lists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerInfoMinimal

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A game server's id and name only, as Alta's web API returned in short lists.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`INamedEntity`](/mod/game-api/types/assembly-api-models/inamedentity)
- **Derived types** [`GameServerInfo`](/mod/game-api/types/assembly-api-models/gameserverinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerInfoMinimal()"}</code> | Creates a `GameServerInfoMinimal` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | The server id. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The server's name. |

## Used in

Members of other types that take, return or hold a `GameServerInfoMinimal`:

[`PlayerReportSummary.Server`](/mod/game-api/types/assembly-api-client/playerreportsummary#m-server), [`PlayerReportInfo.Server`](/mod/game-api/types/assembly-api-models/playerreportinfo#m-server), [`RecentPlayerInteractionInfo.Server`](/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo#m-server), [`JoinedServerInfo.Info`](/mod/game-api/types/alta-networking/joinedserverinfo#m-info).
