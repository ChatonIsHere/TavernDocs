---
title: "LeaderboardManager.RankedPlayer"
description: "One player in a leaderboard ranking: their user info, id and time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManager.RankedPlayer

A **class** in `Root.Township`, the global namespace.

One player in a leaderboard ranking: their user info, id and time.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManager`](/mod/game-api/types/global-i-l/leaderboardmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RankedPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time)"}</code> | <span className="api-desc">Creates a `LeaderboardManager.RankedPlayer` from `playerID` and `time`.</span> |
| <Link id="m-ctor-2" /><code>{"RankedPlayer(int playerID, int time)"}</code> | <span className="api-desc">Creates a `LeaderboardManager.RankedPlayer` from `playerID` and `time`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | <span className="api-desc">The player's user id.</span> |
| <Link id="m-time" /><code>{"int Time { get; }"}</code> | <span className="api-desc">The player's time, in seconds.</span> |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" UserInfo { get; }"}</code> | <span className="api-desc">Access to the player's user info, looked up from the id when only that is known.</span> |

## Used in

Members of other types that take, return or hold a `RankedPlayer`:

<div className="api-used-in">

[`LeaderboardManager.availableLeaderboards`](/mod/game-api/types/global-i-l/leaderboardmanager#m-availableleaderboards), [`LeaderboardManager.ValidateTopPlayers`](/mod/game-api/types/global-i-l/leaderboardmanager#m-validatetopplayers), [`LeaderboardManagerData.Setup`](/mod/game-api/types/global-i-l/leaderboardmanagerdata#m-setup), [`LeaderboardManagerData.LeaderboardEntry.Setup`](/mod/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry#m-setup).

</div>
