---
title: "IAchievementClient"
description: "interface IAchievementClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAchievementClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`AchievementApiClient`](/game-api/types/assembly-api-client/achievementapiclient), [`OfflineAchievementApiClient`](/game-api/types/assembly-api-client/offlineachievementapiclient)

## Methods

| Member |
| --- |
| <Link id="m-getachievementsforuserasync" /><code>{"Task<IEnumerable<uint>> GetAchievementsForUserAsync(int userId)"}</code> |
| <Link id="m-getactionstatsforuserasync" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{">> GetActionStatsForUserAsync(int userId)"}</code> |
| <Link id="m-updateachievementforuserasync" /><code>{"Task UpdateAchievementForUserAsync(int userId, uint achievementHash, bool isCompleted)"}</code> |
| <Link id="m-updateactionstatforuserasync" /><code>{"Task UpdateActionStatForUserAsync(int userId, List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> stats)"}</code> |

## Used in

Members of other types that take, return or hold a `IAchievementClient`:

[`HighLevelApiClient.AchievementClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-achievementclient), [`IHighLevelApiClient.AchievementClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-achievementclient), [`OfflineHighLevelApiClient.AchievementClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-achievementclient).
