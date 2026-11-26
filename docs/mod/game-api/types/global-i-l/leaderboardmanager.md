---
title: "LeaderboardManager"
description: "Server-side store of course times."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManager

A **class** in `Root.Township`, the global namespace.

Server-side store of course times. Checkpoints report when a player starts and finishes a course, and it keeps each player's best and each board's top players. Get it through `Instance`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LeaderboardManagerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LeaderboardManagerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LeaderboardManagerData`](/mod/game-api/types/global-i-l/leaderboardmanagerdata)
- **Nested types** [`PlayerTracker`](/mod/game-api/types/global-i-l/leaderboardmanager-playertracker), [`RankedPlayer`](/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availableleaderboards" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", List<"}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{">> availableLeaderboards"}</code> | Top players for each course. |
| <Link id="m-trackers" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-playertracker">{"LeaderboardManager.PlayerTracker"}</Link>{"> trackers"}</code> | Running start times and best times for each player, by user ID. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager">{"LeaderboardManager"}</Link>{" Instance { get; private set; }"}</code> | The manager in the scene. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onbesttimeupdated" /><code>{"static event Action<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> onBestTimeUpdated"}</code> | Raised when a course's top list changes. |
| <Link id="m-onplayertimeupdated" /><code>{"static event "}<Link to="/mod/game-api/types/global-p/playertimeupdate">{"PlayerTimeUpdate"}</Link>{" onPlayerTimeUpdated"}</code> | Raised when a player finishes a course, with the time and whether it's their best. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Wipes all boards and player times. The best time events are meant to fire per board, but the key list is emptied first, so none fire. |
| <Link id="m-getplayers" /><code>{"static async Task GetPlayers("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, List<"}<Link to="/mod/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{"> players)"}</code> | Fills a list with a board's top players, looking up each username. |
| <Link id="m-getplayersbesttime" /><code>{"static int GetPlayersBestTime("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | A player's best time on a course in seconds, or -1 if none. |
| <Link id="m-markplayer" /><code>{"static void MarkPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, List<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> beginnings, List<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> endings)"}</code> | Server: starts timers for the courses a player begins and finishes timers for those they end, reporting each time. The private overload is empty. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Drops a leaving player's running course timers. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`. |
| <Link id="m-markplayer-2" /><code>{"private static void MarkPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" ending)"}</code> | Server: starts timers for the courses a player begins and finishes timers for those they end, reporting each time. The private overload is empty. |
| <Link id="m-validatetopplayers" /><code>{"private static void ValidateTopPlayers("}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{" rankedPlayer, "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" leaderboardDefinition)"}</code> | Inserts a player into a board's top list in order. Nothing calls it, so finished runs never reach the top lists in this code. |

</details>
