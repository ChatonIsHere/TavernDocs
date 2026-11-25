---
title: "LeaderboardManager"
description: "class LeaderboardManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LeaderboardManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LeaderboardManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LeaderboardManagerData`](/game-api/types/global-i-l/leaderboardmanagerdata)
- **Nested types** [`PlayerTracker`](/game-api/types/global-i-l/leaderboardmanager-playertracker), [`RankedPlayer`](/game-api/types/global-i-l/leaderboardmanager-rankedplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-availableleaderboards" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", List<"}<Link to="/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{">> availableLeaderboards"}</code> |  |
| <Link id="m-trackers" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/global-i-l/leaderboardmanager-playertracker">{"LeaderboardManager.PlayerTracker"}</Link>{"> trackers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-i-l/leaderboardmanager">{"LeaderboardManager"}</Link>{" Instance { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onbesttimeupdated" /><code>{"static event Action<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> onBestTimeUpdated"}</code> |  |
| <Link id="m-onplayertimeupdated" /><code>{"static event "}<Link to="/game-api/types/global-p/playertimeupdate">{"PlayerTimeUpdate"}</Link>{" onPlayerTimeUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-getplayers" /><code>{"static async Task GetPlayers("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, List<"}<Link to="/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{"> players)"}</code> |  |
| <Link id="m-getplayersbesttime" /><code>{"static int GetPlayersBestTime("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-markplayer" /><code>{"static void MarkPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> beginnings, List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> endings)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-markplayer-2" /><code>{"private static void MarkPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time, "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" ending)"}</code> |  |
| <Link id="m-validatetopplayers" /><code>{"private static void ValidateTopPlayers("}<Link to="/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{" rankedPlayer, "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" leaderboardDefinition)"}</code> |  |
