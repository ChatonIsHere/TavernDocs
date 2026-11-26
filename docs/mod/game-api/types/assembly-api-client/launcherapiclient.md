---
title: "LauncherApiClient"
description: "Online client for the game list shown by Alta's launcher."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LauncherApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for the game list shown by Alta's launcher. Reached as `ApiAccess.ApiClient.LauncherClient`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`ILauncherApiClient`](/mod/game-api/types/assembly-api-client/ilauncherapiclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal LauncherApiClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `LauncherApiClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getalllaunchergamesasync" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/launchergameinfoshort">{"LauncherGameInfoShort"}</Link>{">> GetAllLauncherGamesAsync()"}</code> | <span className="api-desc">Lists every launcher game in short form.</span> |
| <Link id="m-getlaunchergameasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/launchergameinfofull">{"LauncherGameInfoFull"}</Link>{"> GetLauncherGameAsync(int gameIdentifier)"}</code> | <span className="api-desc">Gets the full details of one launcher game by ID.</span> |
