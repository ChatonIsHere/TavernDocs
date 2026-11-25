---
title: "SteamStats"
description: "class SteamStats in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamStats

A **class** in `Root.Township`, `Alta.Achievements`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlatformStats`](/game-api/types/alta-player/platformstats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamStats()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gameid" /><code>{"private CGameID gameId"}</code> |  |
| <Link id="m-isstatschanged" /><code>{"private bool isStatsChanged"}</code> |  |
| <Link id="m-isstatsrequested" /><code>{"private bool isStatsRequested"}</code> |  |
| <Link id="m-userachievementstored" /><code>{"private Callback<UserAchievementStored_t> userAchievementStored"}</code> |  |
| <Link id="m-userstatsreceived" /><code>{"private Callback<UserStatsReceived_t> userStatsReceived"}</code> |  |
| <Link id="m-userstatsstored" /><code>{"private Callback<UserStatsStored_t> userStatsStored"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"override void LateUpdate()"}</code> |  |
| <Link id="m-requestupdate" /><code>{"override void RequestUpdate("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> |  |
| <Link id="m-requestupdate-2" /><code>{"override void RequestUpdate("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-statchanged" /><code>{"override void StatChanged("}<Link to="/game-api/types/alta-player/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-unlockachievement" /><code>{"override void UnlockAchievement("}<Link to="/game-api/types/alta-player/achievement">{"Achievement"}</Link>{" achievement)"}</code> |  |
| <Link id="m-achievementstored" /><code>{"private void AchievementStored(UserAchievementStored_t param)"}</code> |  |
| <Link id="m-iscorrectgame" /><code>{"private bool IsCorrectGame(ulong paramGameId)"}</code> |  |
| <Link id="m-statsreceived" /><code>{"private void StatsReceived(UserStatsReceived_t param)"}</code> |  |
| <Link id="m-statsstored" /><code>{"private void StatsStored(UserStatsStored_t param)"}</code> |  |
