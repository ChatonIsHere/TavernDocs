---
title: "IRecentPlayersClient"
description: "interface IRecentPlayersClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRecentPlayersClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`RecentPlayersClient`](/game-api/types/assembly-api-client/recentplayersclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllAsync(int? serverId = null, int limit = 25)"}</code> |  |
| <Link id="m-recordinteractionasync" /><code>{"Task RecordInteractionAsync("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user, "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" type)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRecentPlayersClient`:

[`HighLevelApiClient.RecentPlayers`](/game-api/types/assembly-api-client/highlevelapiclient#m-recentplayers), [`IHighLevelApiClient.RecentPlayers`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-recentplayers), [`OfflineHighLevelApiClient.RecentPlayers`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-recentplayers).
