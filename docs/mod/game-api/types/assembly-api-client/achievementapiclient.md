---
title: "AchievementApiClient"
description: "Online client for a user's achievements and action stats stored by Alta's web API, which no longer answers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AchievementApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for a user's achievements and action stats stored by Alta's web API, which no longer answers. Reached as `ApiAccess.ApiClient.AchievementClient`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IAchievementClient`](/mod/game-api/types/assembly-api-client/iachievementclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal AchievementApiClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates an `AchievementApiClient` from `clientManager`.</span> |

</details>

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionstatrequest" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/updateactionstatrequest">{"UpdateActionStatRequest"}</Link>{" actionStatRequest"}</code> | <span className="api-desc">Last request built for the list overload of `UpdateActionStatForUserAsync`.</span> |
| <Link id="m-updateachievementrequest" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/updateachievementrequest">{"UpdateAchievementRequest"}</Link>{" updateAchievementRequest"}</code> | <span className="api-desc">Last request built by `UpdateAchievementForUserAsync`.</span> |
| <Link id="m-updateactionstatrequest" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/updateactionstatrequest">{"UpdateActionStatRequest"}</Link>{" updateActionStatRequest"}</code> | <span className="api-desc">Last request built for the single stat overload of `UpdateActionStatForUserAsync`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievementsforuserasync" /><code>{"async Task<IEnumerable<uint>> GetAchievementsForUserAsync(int userId)"}</code> | <span className="api-desc">Gets the hashes of the user's completed achievements, or an empty list if the API returns none.</span> |
| <Link id="m-getactionstatsforuserasync" /><code>{"async Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{">> GetActionStatsForUserAsync(int userId)"}</code> | <span className="api-desc">Gets the user's action stat progress, or an empty list if the API returns none.</span> |
| <Link id="m-updateachievementforuserasync" /><code>{"Task UpdateAchievementForUserAsync(int userId, uint achievementHash, bool isCompleted)"}</code> | <span className="api-desc">Sets one achievement (by hash) as completed or not for the user.</span> |
| <Link id="m-updateactionstatforuserasync" /><code>{"Task UpdateActionStatForUserAsync(int userId, uint statHash, float newProgress)"}</code> | <span className="api-desc">Sets the progress of one stat by hash, or of a list of stats at once.</span> |
| <Link id="m-updateactionstatforuserasync-2" /><code>{"Task UpdateActionStatForUserAsync(int userId, List<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> stats)"}</code> | <span className="api-desc">Sets the progress of one stat by hash, or of a list of stats at once.</span> |
