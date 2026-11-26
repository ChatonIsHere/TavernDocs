---
title: "RecentPlayerInteractionType"
description: "How you recently met another player, in the Alta API: combat, nearby or on the same server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayerInteractionType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

How you recently met another player, in the Alta API: combat, nearby or on the same server.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-combat" /><code>{"Combat = 1"}</code> |
| <Link id="m-nearby" /><code>{"Nearby = 2"}</code> |
| <Link id="m-onserver" /><code>{"OnServer = 3"}</code> |

## Used in

Members of other types that take, return or hold a `RecentPlayerInteractionType`:

[`IRecentPlayersClient.RecordInteractionAsync`](/game-api/types/assembly-api-client/irecentplayersclient#m-recordinteractionasync), [`RecentPlayersClient.RecordInteractionAsync`](/game-api/types/assembly-api-client/recentplayersclient#m-recordinteractionasync), [`RecentPlayerInteractionRequest.Type`](/game-api/types/assembly-api-models/recentplayerinteractionrequest#m-type), [`RecentPlayerInteractionInfo.Type`](/game-api/types/assembly-api-models/recentplayerinteractioninfo#m-type), [`RecentPlayers.RecordInteraction`](/game-api/types/global-q-r/recentplayers#m-recordinteraction).
