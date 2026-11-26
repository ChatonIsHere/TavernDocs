---
title: "SteamStats"
description: "Steam backend for achievements and stats, built by AchievementManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamStats

A **class** in `Root.Township`, `Alta.Achievements`.

Steam backend for achievements and stats, built by `AchievementManager`. Does nothing unless `SteamManager` is initialized, so it is inert on a headless server.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlatformStats`](/mod/game-api/types/alta-player/platformstats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamStats()"}</code> | <span className="api-desc">Creates a `SteamStats` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameid" /><code>{"private CGameID gameId"}</code> | <span className="api-desc">This game's Steam ID, used to filter callbacks.</span> |
| <Link id="m-isstatschanged" /><code>{"private bool isStatsChanged"}</code> | <span className="api-desc">True when there are unsaved changes to store on Steam.</span> |
| <Link id="m-isstatsrequested" /><code>{"private bool isStatsRequested"}</code> | <span className="api-desc">True once the request for current stats went through.</span> |
| <Link id="m-userachievementstored" /><code>{"private Callback<UserAchievementStored_t> userAchievementStored"}</code> | <span className="api-desc">Steam callback handle for achievement stored events.</span> |
| <Link id="m-userstatsreceived" /><code>{"private Callback<UserStatsReceived_t> userStatsReceived"}</code> | <span className="api-desc">Steam callback handle for stats received events.</span> |
| <Link id="m-userstatsstored" /><code>{"private Callback<UserStatsStored_t> userStatsStored"}</code> | <span className="api-desc">Steam callback handle for stats stored events.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Reads the Steam app ID and registers the stats received, stored and achievement stored callbacks.</span> |
| <Link id="m-lateupdate" /><code>{"override void LateUpdate()"}</code> | <span className="api-desc">Requests current stats from Steam until it succeeds, and stores pending changes once per frame when anything changed.</span> |
| <Link id="m-requestupdate" /><code>{"override void RequestUpdate("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Reads one achievement (achieved flag, name, description, hidden) or one stat from Steam into the game object.</span> |
| <Link id="m-requestupdate-2" /><code>{"override void RequestUpdate("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Reads one achievement (achieved flag, name, description, hidden) or one stat from Steam into the game object.</span> |
| <Link id="m-statchanged" /><code>{"override void StatChanged("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Writes a stat's int or float value to Steam and flags stats to be stored.</span> |
| <Link id="m-unlockachievement" /><code>{"override void UnlockAchievement("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Sets the achievement on Steam and flags stats to be stored next `LateUpdate`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievementstored" /><code>{"private void AchievementStored(UserAchievementStored_t param)"}</code> | <span className="api-desc">Steam callback: marks the stored achievement as achieved, or passes its progress on.</span> |
| <Link id="m-iscorrectgame" /><code>{"private bool IsCorrectGame(ulong paramGameId)"}</code> | <span className="api-desc">Checks that a Steam callback is for this game's ID.</span> |
| <Link id="m-statsreceived" /><code>{"private void StatsReceived(UserStatsReceived_t param)"}</code> | <span className="api-desc">Steam callback: on success calls `AchievementManager.UpdateAll`.</span> |
| <Link id="m-statsstored" /><code>{"private void StatsStored(UserStatsStored_t param)"}</code> | <span className="api-desc">Steam callback: logs the result, and reloads all stats if Steam reports an invalid parameter.</span> |

</details>
