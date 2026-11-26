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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`LauncherApiClient`](/game-api/types/assembly-api-client/launcherapiclient), [`OfflineLauncherApiClient`](/game-api/types/assembly-api-client/offlinelauncherapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getalllaunchergamesasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/launchergameinfoshort">{"LauncherGameInfoShort"}</Link>{">> GetAllLauncherGamesAsync()"}</code> | Lists every launcher game in short form. |
| <Link id="m-getlaunchergameasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/launchergameinfofull">{"LauncherGameInfoFull"}</Link>{"> GetLauncherGameAsync(int gameIdentifier)"}</code> | Gets the full details of one launcher game. |

## Used in

Members of other types that take, return or hold a `ILauncherApiClient`:

[`HighLevelApiClient.LauncherClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-launcherclient), [`IHighLevelApiClient.LauncherClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-launcherclient), [`OfflineHighLevelApiClient.LauncherClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-launcherclient).
