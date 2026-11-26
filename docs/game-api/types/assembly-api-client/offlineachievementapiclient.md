---
title: "OfflineAchievementApiClient"
description: "Offline stand-in for the achievement client: no requests, nothing is stored."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineAchievementApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the achievement client: no requests, nothing is stored.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IAchievementClient`](/game-api/types/assembly-api-client/iachievementclient)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OfflineAchievementApiClient()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievementsforuserasync" /><code>{"async Task<IEnumerable<uint>> GetAchievementsForUserAsync(int userId)"}</code> | Returns an empty list. |
| <Link id="m-getactionstatsforuserasync" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{">> GetActionStatsForUserAsync(int userId)"}</code> | Returns an empty list. |
| <Link id="m-updateachievementforuserasync" /><code>{"Task UpdateAchievementForUserAsync(int userId, uint achievementHash, bool isCompleted)"}</code> | Does nothing. |
| <Link id="m-updateactionstatforuserasync" /><code>{"Task UpdateActionStatForUserAsync(int userId, uint statHash, float newProgress)"}</code> | Does nothing. |
| <Link id="m-updateactionstatforuserasync-2" /><code>{"Task UpdateActionStatForUserAsync(int userId, List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> stats)"}</code> | Does nothing. |
