---
title: "OfflineLauncherApiClient"
description: "Offline stand-in for the launcher client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineLauncherApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the launcher client.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`ILauncherApiClient`](/mod/game-api/types/assembly-api-client/ilauncherapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineLauncherApiClient()"}</code> | <span className="api-desc">Creates an `OfflineLauncherApiClient` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getalllaunchergamesasync" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/launchergameinfoshort">{"LauncherGameInfoShort"}</Link>{">> GetAllLauncherGamesAsync()"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-getlaunchergameasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/launchergameinfofull">{"LauncherGameInfoFull"}</Link>{"> GetLauncherGameAsync(int gameIdentifier)"}</code> | <span className="api-desc">Returns an empty `LauncherGameInfoFull`.</span> |
