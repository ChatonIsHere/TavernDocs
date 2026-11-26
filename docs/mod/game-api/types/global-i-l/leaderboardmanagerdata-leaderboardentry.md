---
title: "LeaderboardManagerData.LeaderboardEntry"
description: "Saved ranking for one leaderboard: player IDs and times in rank order."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerData.LeaderboardEntry

A **class** in `Root.Township`, the global namespace.

Saved ranking for one leaderboard: player IDs and times in rank order.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerData`](/mod/game-api/types/global-i-l/leaderboardmanagerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardEntry()"}</code> | <span className="api-desc">Creates a `LeaderboardManagerData.LeaderboardEntry` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition"}</code> | <span className="api-desc">Which leaderboard this is.</span> |
| <Link id="m-players" /><code>{"int[] players"}</code> | <span className="api-desc">Player IDs in rank order.</span> |
| <Link id="m-times" /><code>{"int[] times"}</code> | <span className="api-desc">Each player's time, same order as `players`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(KeyValuePair<"}<Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", List<"}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{">> pair)"}</code> | <span className="api-desc">Fills the entry from a leaderboard and its ranked players.</span> |

## Used in

Members of other types that take, return or hold a `LeaderboardEntry`:

<div className="api-used-in">

[`LeaderboardManagerData.entries`](/mod/game-api/types/global-i-l/leaderboardmanagerdata#m-entries), [`LeaderboardManagerDataOld.LeaderboardEntry.Migrate`](/mod/game-api/types/global-i-l/leaderboardmanagerdataold-leaderboardentry#m-migrate).

</div>
