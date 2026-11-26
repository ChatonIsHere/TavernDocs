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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`AchievementApiClient`](/mod/game-api/types/assembly-api-client/achievementapiclient), [`OfflineAchievementApiClient`](/mod/game-api/types/assembly-api-client/offlineachievementapiclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievementsforuserasync" /><code>{"Task<IEnumerable<uint>> GetAchievementsForUserAsync(int userId)"}</code> | <span className="api-desc">Gets the hashes of the achievements a user has.</span> |
| <Link id="m-getactionstatsforuserasync" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{">> GetActionStatsForUserAsync(int userId)"}</code> | <span className="api-desc">Gets a user's action stat progress.</span> |
| <Link id="m-updateachievementforuserasync" /><code>{"Task UpdateAchievementForUserAsync(int userId, uint achievementHash, bool isCompleted)"}</code> | <span className="api-desc">Marks an achievement (by hash) as done or not done for a user.</span> |
| <Link id="m-updateactionstatforuserasync" /><code>{"Task UpdateActionStatForUserAsync(int userId, List<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> stats)"}</code> | <span className="api-desc">Sends new progress for a list of a user's action stats.</span> |

## Used in

Members of other types that take, return or hold a `IAchievementClient`:

<div className="api-used-in">

[`HighLevelApiClient.AchievementClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-achievementclient), [`IHighLevelApiClient.AchievementClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-achievementclient), [`OfflineHighLevelApiClient.AchievementClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-achievementclient).

</div>
