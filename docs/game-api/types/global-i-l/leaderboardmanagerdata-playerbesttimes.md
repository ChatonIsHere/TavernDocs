---
title: "LeaderboardManagerData.PlayerBestTimes"
description: "Saved best times for one player across leaderboards."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerData.PlayerBestTimes

A **class** in `Root.Township`, no namespace.

Saved best times for one player across leaderboards.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerData`](/game-api/types/global-i-l/leaderboardmanagerdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerBestTimes()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] definitions"}</code> | Leaderboards the player has a time on. |
| <Link id="m-identifier" /><code>{"int identifier"}</code> | The player's ID. |
| <Link id="m-times" /><code>{"int[] times"}</code> | Best time for each leaderboard, same order as `definitions`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(KeyValuePair<int, "}<Link to="/game-api/types/global-i-l/leaderboardmanager-playertracker">{"LeaderboardManager.PlayerTracker"}</Link>{"> tracker)"}</code> | Fills the record from a player's tracker. |

## Used in

Members of other types that take, return or hold a `PlayerBestTimes`:

[`LeaderboardManagerData.players`](/game-api/types/global-i-l/leaderboardmanagerdata#m-players), [`LeaderboardManagerDataOld.PlayerBestTimes.Migrate`](/game-api/types/global-i-l/leaderboardmanagerdataold-playerbesttimes#m-migrate).
