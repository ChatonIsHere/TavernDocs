---
title: "IAchievementClient"
description: "Alta web API calls for a user's achievements and action stats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAchievementClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for a user's achievements and action stats. `ApiAccess.ApiClient.AchievementClient`. The API is gone, so calls fail.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`AchievementApiClient`](/game-api/types/assembly-api-client/achievementapiclient), [`OfflineAchievementApiClient`](/game-api/types/assembly-api-client/offlineachievementapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievementsforuserasync" /><code>{"Task<IEnumerable<uint>> GetAchievementsForUserAsync(int userId)"}</code> | Gets the hashes of the achievements a user has. |
| <Link id="m-getactionstatsforuserasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{">> GetActionStatsForUserAsync(int userId)"}</code> | Gets a user's action stat progress. |
| <Link id="m-updateachievementforuserasync" /><code>{"Task UpdateAchievementForUserAsync(int userId, uint achievementHash, bool isCompleted)"}</code> | Marks an achievement (by hash) as done or not done for a user. |
| <Link id="m-updateactionstatforuserasync" /><code>{"Task UpdateActionStatForUserAsync(int userId, List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> stats)"}</code> | Sends new progress for a list of a user's action stats. |

## Used in

Members of other types that take, return or hold a `IAchievementClient`:

[`HighLevelApiClient.AchievementClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-achievementclient), [`IHighLevelApiClient.AchievementClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-achievementclient), [`OfflineHighLevelApiClient.AchievementClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-achievementclient).
