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
| <Link id="m-ctor" /><code>{"LeaderboardManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availableleaderboards" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", List<"}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{">> availableLeaderboards"}</code> | <span className="api-desc">Top players for each course.</span> |
| <Link id="m-trackers" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-playertracker">{"LeaderboardManager.PlayerTracker"}</Link>{"> trackers"}</code> | <span className="api-desc">Running start times and best times for each player, by user ID.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager">{"LeaderboardManager"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The manager in the scene.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onbesttimeupdated" /><code>{"static event Action<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> onBestTimeUpdated"}</code> | <span className="api-desc">Raised when a course's top list changes.</span> |
| <Link id="m-onplayertimeupdated" /><code>{"static event "}<Link to="/mod/game-api/types/global-p/playertimeupdate">{"PlayerTimeUpdate"}</Link>{" onPlayerTimeUpdated"}</code> | <span className="api-desc">Raised when a player finishes a course, with the time and whether it's their best.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Wipes all boards and player times. The best time events are meant to fire per board, but the key list is emptied first, so none fire.</span> |
| <Link id="m-getplayers" /><code>{"static async Task GetPlayers("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, List<"}<Link to="/mod/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{"> players)"}</code> | <span className="api-desc">Fills a list with a board's top players, looking up each username.</span> |
| <Link id="m-getplayersbesttime" /><code>{"static int GetPlayersBestTime("}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">A player's best time on a course in seconds, or -1 if none.</span> |
| <Link id="m-markplayer" /><code>{"static void MarkPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, List<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> beginnings, List<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> endings)"}</code> | <span className="api-desc">Server: starts timers for the courses a player begins and finishes timers for those they end, reporting each time. The private overload is empty.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Drops a leaving player's running course timers.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`.</span> |
| <Link id="m-markplayer-2" /><code>{"private static void MarkPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" ending)"}</code> | <span className="api-desc">Server: starts timers for the courses a player begins and finishes timers for those they end, reporting each time. The private overload is empty.</span> |
| <Link id="m-validatetopplayers" /><code>{"private static void ValidateTopPlayers("}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{" rankedPlayer, "}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" leaderboardDefinition)"}</code> | <span className="api-desc">Inserts a player into a board's top list in order. Nothing calls it, so finished runs never reach the top lists in this code.</span> |

</details>
