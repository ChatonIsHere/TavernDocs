---
title: "RecentPlayersClient"
description: "Online client for the players you recently met."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayersClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for the players you recently met. Reached as `ApiAccess.ApiClient.RecentPlayers`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IRecentPlayersClient`](/mod/game-api/types/assembly-api-client/irecentplayersclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal RecentPlayersClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `RecentPlayersClient` from `clientManager`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllAsync(int? serverId = null, int limit = 25)"}</code> | Gets recent interactions, on one server if given, up to `limit` (default 25). |
| <Link id="m-recordinteractionasync" /><code>{"Task RecordInteractionAsync("}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user, "}<Link to="/mod/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" type)"}</code> | Queues an interaction of the given type with another user. |
