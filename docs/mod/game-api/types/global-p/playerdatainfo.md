---
title: "PlayerDataInfo"
description: "Leaderboard row returned by the leaderboard console command: player name and time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDataInfo

A **class** in `Root.Township`, the global namespace.

Leaderboard row returned by the leaderboard console command: player name and time. Made from `PlayerData`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDataInfo()"}</code> | Creates a `PlayerDataInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"string Player { get; set; }"}</code> | The player's name. |
| <Link id="m-time" /><code>{"string Time { get; set; }"}</code> | The time as text. |
| <Link id="m-timeinseconds" /><code>{"int TimeInSeconds { get; set; }"}</code> | The time in seconds. |

## Used in

Members of other types that take, return or hold a `PlayerDataInfo`:

[`LeaderboardCommandModule.GetRanking`](/mod/game-api/types/alta-console/leaderboardcommandmodule#m-getranking), [`PlayerData.op_Implicit`](/mod/game-api/types/global-p/playerdata#m-op-implicit).
