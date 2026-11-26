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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IAchievementClient`](/game-api/types/assembly-api-client/iachievementclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal AchievementApiClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |

</details>

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionstatrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/updateactionstatrequest">{"UpdateActionStatRequest"}</Link>{" actionStatRequest"}</code> | Last request built for the list overload of `UpdateActionStatForUserAsync`. |
| <Link id="m-updateachievementrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/updateachievementrequest">{"UpdateAchievementRequest"}</Link>{" updateAchievementRequest"}</code> | Last request built by `UpdateAchievementForUserAsync`. |
| <Link id="m-updateactionstatrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/updateactionstatrequest">{"UpdateActionStatRequest"}</Link>{" updateActionStatRequest"}</code> | Last request built for the single stat overload of `UpdateActionStatForUserAsync`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getachievementsforuserasync" /><code>{"async Task<IEnumerable<uint>> GetAchievementsForUserAsync(int userId)"}</code> | Gets the hashes of the user's completed achievements, or an empty list if the API returns none. |
| <Link id="m-getactionstatsforuserasync" /><code>{"async Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{">> GetActionStatsForUserAsync(int userId)"}</code> | Gets the user's action stat progress, or an empty list if the API returns none. |
| <Link id="m-updateachievementforuserasync" /><code>{"Task UpdateAchievementForUserAsync(int userId, uint achievementHash, bool isCompleted)"}</code> | Sets one achievement (by hash) as completed or not for the user. |
| <Link id="m-updateactionstatforuserasync" /><code>{"Task UpdateActionStatForUserAsync(int userId, uint statHash, float newProgress)"}</code> | Sets the progress of one stat by hash, or of a list of stats at once. |
| <Link id="m-updateactionstatforuserasync-2" /><code>{"Task UpdateActionStatForUserAsync(int userId, List<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> stats)"}</code> | Sets the progress of one stat by hash, or of a list of stats at once. |
