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
| <Link id="m-ctor" /><code>{"SteamStats()"}</code> | Creates a `SteamStats` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameid" /><code>{"private CGameID gameId"}</code> | This game's Steam ID, used to filter callbacks. |
| <Link id="m-isstatschanged" /><code>{"private bool isStatsChanged"}</code> | True when there are unsaved changes to store on Steam. |
| <Link id="m-isstatsrequested" /><code>{"private bool isStatsRequested"}</code> | True once the request for current stats went through. |
| <Link id="m-userachievementstored" /><code>{"private Callback<UserAchievementStored_t> userAchievementStored"}</code> | Steam callback handle for achievement stored events. |
| <Link id="m-userstatsreceived" /><code>{"private Callback<UserStatsReceived_t> userStatsReceived"}</code> | Steam callback handle for stats received events. |
| <Link id="m-userstatsstored" /><code>{"private Callback<UserStatsStored_t> userStatsStored"}</code> | Steam callback handle for stats stored events. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Reads the Steam app ID and registers the stats received, stored and achievement stored callbacks. |
| <Link id="m-lateupdate" /><code>{"override void LateUpdate()"}</code> | Requests current stats from Steam until it succeeds, and stores pending changes once per frame when anything changed. |
| <Link id="m-requestupdate" /><code>{"override void RequestUpdate("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Reads one achievement (achieved flag, name, description, hidden) or one stat from Steam into the game object. |
| <Link id="m-requestupdate-2" /><code>{"override void RequestUpdate("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Reads one achievement (achieved flag, name, description, hidden) or one stat from Steam into the game object. |
| <Link id="m-statchanged" /><code>{"override void StatChanged("}<Link to="/mod/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> | Writes a stat's int or float value to Steam and flags stats to be stored. |
| <Link id="m-unlockachievement" /><code>{"override void UnlockAchievement("}<Link to="/mod/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> | Sets the achievement on Steam and flags stats to be stored next `LateUpdate`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-achievementstored" /><code>{"private void AchievementStored(UserAchievementStored_t param)"}</code> | Steam callback: marks the stored achievement as achieved, or passes its progress on. |
| <Link id="m-iscorrectgame" /><code>{"private bool IsCorrectGame(ulong paramGameId)"}</code> | Checks that a Steam callback is for this game's ID. |
| <Link id="m-statsreceived" /><code>{"private void StatsReceived(UserStatsReceived_t param)"}</code> | Steam callback: on success calls `AchievementManager.UpdateAll`. |
| <Link id="m-statsstored" /><code>{"private void StatsStored(UserStatsStored_t param)"}</code> | Steam callback: logs the result, and reloads all stats if Steam reports an invalid parameter. |

</details>
