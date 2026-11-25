---
title: "AchievementApiClient"
description: "class AchievementApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IAchievementClient`](/game-api/types/assembly-api-client/iachievementclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal AchievementApiClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionstatrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/updateactionstatrequest">{"UpdateActionStatRequest"}</Link>{" actionStatRequest"}</code> |  |
| <Link id="m-updateachievementrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/updateachievementrequest">{"UpdateAchievementRequest"}</Link>{" updateAchievementRequest"}</code> |  |
| <Link id="m-updateactionstatrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/updateactionstatrequest">{"UpdateActionStatRequest"}</Link>{" updateActionStatRequest"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievementsforuserasync" /><code>{"async Task<IEnumerable<uint>> GetAchievementsForUserAsync(int userId)"}</code> |  |
| <Link id="m-getactionstatsforuserasync" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{">> GetActionStatsForUserAsync(int userId)"}</code> |  |
| <Link id="m-updateachievementforuserasync" /><code>{"Task UpdateAchievementForUserAsync(int userId, uint achievementHash, bool isCompleted)"}</code> |  |
| <Link id="m-updateactionstatforuserasync" /><code>{"Task UpdateActionStatForUserAsync(int userId, uint statHash, float newProgress)"}</code> |  |
| <Link id="m-updateactionstatforuserasync-2" /><code>{"Task UpdateActionStatForUserAsync(int userId, List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> stats)"}</code> |  |
