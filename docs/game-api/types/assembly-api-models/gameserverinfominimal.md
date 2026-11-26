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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`INamedEntity`](/game-api/types/assembly-api-models/inamedentity)
- **Derived types** [`GameServerInfo`](/game-api/types/assembly-api-models/gameserverinfo)

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

[`PlayerReportSummary.Server`](/game-api/types/assembly-api-client/playerreportsummary#m-server), [`PlayerReportInfo.Server`](/game-api/types/assembly-api-models/playerreportinfo#m-server), [`RecentPlayerInteractionInfo.Server`](/game-api/types/assembly-api-models/recentplayerinteractioninfo#m-server), [`JoinedServerInfo.Info`](/game-api/types/alta-networking/joinedserverinfo#m-info).
