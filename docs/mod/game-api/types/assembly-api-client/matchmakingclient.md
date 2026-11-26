---
title: "MatchMakingClient"
description: "Online client for matchmaking."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MatchMakingClient

A **internal class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Online client for matchmaking. Reached as `ApiAccess.ApiClient.MatchMaking`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IMatchMakingClient`](/mod/game-api/types/assembly-api-client/imatchmakingclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MatchMakingClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `MatchMakingClient` from `clientManager`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettutorialserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTutorialServer()"}</code> | Asks the API for the best server running scene 1, the tutorial. |
