---
title: "LeaderboardManager.PlayerTracker"
description: "Server side timing state for one player, keyed by user id in LeaderboardManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManager.PlayerTracker

A **class** in `Root.Township`, the global namespace.

Server side timing state for one player, keyed by user id in `LeaderboardManager`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManager`](/mod/game-api/types/global-i-l/leaderboardmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTracker()"}</code> | <span className="api-desc">Creates a `LeaderboardManager.PlayerTracker` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beginnings" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", int> Beginnings"}</code> | <span className="api-desc">Start time (seconds since startup) for each leaderboard the player has started but not finished. Cleared on disconnect.</span> |
| <Link id="m-besttimes" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", int> BestTimes"}</code> | <span className="api-desc">The player's best time in seconds for each leaderboard this session.</span> |

## Used in

Members of other types that take, return or hold a `PlayerTracker`:

<div className="api-used-in">

[`LeaderboardManager.trackers`](/mod/game-api/types/global-i-l/leaderboardmanager#m-trackers), [`LeaderboardManagerData.Setup`](/mod/game-api/types/global-i-l/leaderboardmanagerdata#m-setup), [`LeaderboardManagerData.PlayerBestTimes.Setup`](/mod/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes#m-setup).

</div>
