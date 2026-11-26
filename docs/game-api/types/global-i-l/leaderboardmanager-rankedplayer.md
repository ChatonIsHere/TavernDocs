---
title: "LeaderboardManager.RankedPlayer"
description: "One player in a leaderboard ranking: their user info, id and time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManager.RankedPlayer

A **class** in `Root.Township`, no namespace.

One player in a leaderboard ranking: their user info, id and time.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManager`](/game-api/types/global-i-l/leaderboardmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RankedPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int time)"}</code> |
| <Link id="m-ctor-2" /><code>{"RankedPlayer(int playerID, int time)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; }"}</code> | The player's user id. |
| <Link id="m-time" /><code>{"int Time { get; }"}</code> | The player's time, in seconds. |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" UserInfo { get; }"}</code> | Access to the player's user info, looked up from the id when only that is known. |

## Used in

Members of other types that take, return or hold a `RankedPlayer`:

[`LeaderboardManager.availableLeaderboards`](/game-api/types/global-i-l/leaderboardmanager#m-availableleaderboards), [`LeaderboardManager.ValidateTopPlayers`](/game-api/types/global-i-l/leaderboardmanager#m-validatetopplayers), [`LeaderboardManagerData.Setup`](/game-api/types/global-i-l/leaderboardmanagerdata#m-setup), [`LeaderboardManagerData.LeaderboardEntry.Setup`](/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry#m-setup).
