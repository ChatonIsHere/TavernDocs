---
title: "ILauncherApiClient"
description: "Alta web API calls for the games listed in Alta's launcher."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILauncherApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for the games listed in Alta's launcher. `ApiAccess.ApiClient.LauncherClient`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`LauncherApiClient`](/mod/game-api/types/assembly-api-client/launcherapiclient), [`OfflineLauncherApiClient`](/mod/game-api/types/assembly-api-client/offlinelauncherapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getalllaunchergamesasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/launchergameinfoshort">{"LauncherGameInfoShort"}</Link>{">> GetAllLauncherGamesAsync()"}</code> | <span className="api-desc">Lists every launcher game in short form.</span> |
| <Link id="m-getlaunchergameasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/launchergameinfofull">{"LauncherGameInfoFull"}</Link>{"> GetLauncherGameAsync(int gameIdentifier)"}</code> | <span className="api-desc">Gets the full details of one launcher game.</span> |

## Used in

Members of other types that take, return or hold a `ILauncherApiClient`:

<div className="api-used-in">

[`HighLevelApiClient.LauncherClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-launcherclient), [`IHighLevelApiClient.LauncherClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-launcherclient), [`OfflineHighLevelApiClient.LauncherClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-launcherclient).

</div>
