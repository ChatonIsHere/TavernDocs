---
title: "RecentPlayersClient"
description: "class RecentPlayersClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RecentPlayersClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IRecentPlayersClient`](/game-api/types/assembly-api-client/irecentplayersclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal RecentPlayersClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getallasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/recentplayerinteractioninfo">{"RecentPlayerInteractionInfo"}</Link>{">> GetAllAsync(int? serverId = null, int limit = 25)"}</code> |
| <Link id="m-recordinteractionasync" /><code>{"Task RecordInteractionAsync("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" user, "}<Link to="/game-api/types/assembly-api-models/recentplayerinteractiontype">{"RecentPlayerInteractionType"}</Link>{" type)"}</code> |
