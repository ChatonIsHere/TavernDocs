---
title: "PlayerDataInfo"
description: "Leaderboard row returned by the leaderboard console command: player name and time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDataInfo

A **class** in `Root.Township`, no namespace.

Leaderboard row returned by the leaderboard console command: player name and time. Made from `PlayerData`.

- **Listed in** [No namespace: P](/game-api/types/global-p)

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

[`LeaderboardCommandModule.GetRanking`](/game-api/types/alta-console/leaderboardcommandmodule#m-getranking), [`PlayerData.op_Implicit`](/game-api/types/global-p/playerdata#m-op-implicit).
