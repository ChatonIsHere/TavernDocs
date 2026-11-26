---
title: "LeaderboardManagerData.LeaderboardEntry"
description: "Saved ranking for one leaderboard: player IDs and times in rank order."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerData.LeaderboardEntry

A **class** in `Root.Township`, no namespace.

Saved ranking for one leaderboard: player IDs and times in rank order.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerData`](/game-api/types/global-i-l/leaderboardmanagerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardEntry()"}</code> | Creates a `LeaderboardManagerData.LeaderboardEntry` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definition"}</code> | Which leaderboard this is. |
| <Link id="m-players" /><code>{"int[] players"}</code> | Player IDs in rank order. |
| <Link id="m-times" /><code>{"int[] times"}</code> | Each player's time, same order as `players`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(KeyValuePair<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{", List<"}<Link to="/game-api/types/global-i-l/leaderboardmanager-rankedplayer">{"LeaderboardManager.RankedPlayer"}</Link>{">> pair)"}</code> | Fills the entry from a leaderboard and its ranked players. |

## Used in

Members of other types that take, return or hold a `LeaderboardEntry`:

[`LeaderboardManagerData.entries`](/game-api/types/global-i-l/leaderboardmanagerdata#m-entries), [`LeaderboardManagerDataOld.LeaderboardEntry.Migrate`](/game-api/types/global-i-l/leaderboardmanagerdataold-leaderboardentry#m-migrate).
