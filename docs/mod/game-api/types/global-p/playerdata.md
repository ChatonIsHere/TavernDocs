---
title: "PlayerData"
description: "A leaderboard entry: player name and time in seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerData

A **struct** in `Root.Township`, the global namespace.

A leaderboard entry: player name and time in seconds. Converts to `PlayerDataInfo` for display.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-playername" /><code>{"string playerName"}</code> | The player's name. |
| <Link id="m-timeinseconds" /><code>{"int timeInSeconds"}</code> | The time in seconds. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; }"}</code> | The time as `hh:mm:ss`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/global-p/playerdatainfo">{"PlayerDataInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{" data)"}</code> | Converts to `PlayerDataInfo` with the formatted time, name and seconds. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the name and the time (0 to 32767 seconds). |

## Used in

Members of other types that take, return or hold a `PlayerData`:

[`Leaderboard.topPlayers`](/mod/game-api/types/global-i-l/leaderboard#m-topplayers), [`Leaderboard.UpdatePlayerBest`](/mod/game-api/types/global-i-l/leaderboard#m-updateplayerbest-2), [`Leaderboard.PersonalBest.data`](/mod/game-api/types/global-i-l/leaderboard-personalbest#m-data), [`LeaderboardManager.GetPlayers`](/mod/game-api/types/global-i-l/leaderboardmanager#m-getplayers).
