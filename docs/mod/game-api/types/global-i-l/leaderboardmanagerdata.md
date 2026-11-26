---
title: "LeaderboardManagerData"
description: "Save data for LeaderboardManager (version 2): each course's top players and each player's best times."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerData

A **class** in `Root.Township`, the global namespace.

Save data for `LeaderboardManager` (version 2): each course's top players and each player's best times.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NewSaveData<LeaderboardManager, LeaderboardManagerData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LeaderboardManager`](/mod/game-api/types/global-i-l/leaderboardmanager), [`LeaderboardManagerData`](/mod/game-api/types/global-i-l/leaderboardmanagerdata)
- **Nested types** [`LeaderboardEntry`](/mod/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry), [`PlayerBestTimes`](/mod/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardManagerData()"}</code> | <span className="api-desc">Creates a `LeaderboardManagerData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code><Link to="/mod/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry">{"LeaderboardManagerData.LeaderboardEntry"}</Link>{"[] entries"}</code> | <span className="api-desc">One entry per course with player IDs and times.</span> |
| <Link id="m-players" /><code><Link to="/mod/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes">{"LeaderboardManagerData.PlayerBestTimes"}</Link>{"[] players"}</code> | <span className="api-desc">One entry per player with their best time on each course.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(Dictionary<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", List<"}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{">> availableLeaderboards, Dictionary<int, "}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-playertracker">{"LeaderboardManager.PlayerTracker"}</Link>{"> trackers)"}</code> | <span className="api-desc">Fills the save from the manager's boards and player trackers.</span> |
