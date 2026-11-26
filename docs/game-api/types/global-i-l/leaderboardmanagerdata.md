---
title: "LeaderboardManagerData"
description: "Save data for LeaderboardManager (version 2): each course's top players and each player's best times."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerData

A **class** in `Root.Township`, no namespace.

Save data for `LeaderboardManager` (version 2): each course's top players and each player's best times.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NewSaveData<LeaderboardManager, LeaderboardManagerData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LeaderboardManager`](/game-api/types/global-i-l/leaderboardmanager), [`LeaderboardManagerData`](/game-api/types/global-i-l/leaderboardmanagerdata)
- **Nested types** [`LeaderboardEntry`](/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry), [`PlayerBestTimes`](/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LeaderboardManagerData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code><Link to="/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry">{"LeaderboardManagerData.LeaderboardEntry"}</Link>{"[] entries"}</code> | One entry per course with player IDs and times. |
| <Link id="m-players" /><code><Link to="/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes">{"LeaderboardManagerData.PlayerBestTimes"}</Link>{"[] players"}</code> | One entry per player with their best time on each course. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Dictionary<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", List<"}<Link to="/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{">> availableLeaderboards, Dictionary<int, "}<Link to="/game-api/types/global-i-l/leaderboardmanager-playertracker">{"LeaderboardManager.PlayerTracker"}</Link>{"> trackers)"}</code> | Fills the save from the manager's boards and player trackers. |
