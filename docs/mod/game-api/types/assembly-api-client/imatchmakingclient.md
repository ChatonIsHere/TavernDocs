---
title: "IMatchMakingClient"
description: "Alta web API matchmaking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMatchMakingClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API matchmaking. `ApiAccess.ApiClient.MatchMaking`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`MatchMakingClient`](/mod/game-api/types/assembly-api-client/matchmakingclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettutorialserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTutorialServer()"}</code> | <span className="api-desc">Asks the API for the best server running the tutorial scene (scene index 1).</span> |

## Used in

Members of other types that take, return or hold a `IMatchMakingClient`:

<div className="api-used-in">

[`HighLevelApiClient.MatchMaking`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-matchmaking), [`IHighLevelApiClient.MatchMaking`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-matchmaking), [`OfflineHighLevelApiClient.MatchMaking`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-matchmaking).

</div>
