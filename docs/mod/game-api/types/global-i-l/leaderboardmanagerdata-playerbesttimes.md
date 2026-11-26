---
title: "LeaderboardManagerData.PlayerBestTimes"
description: "Saved best times for one player across leaderboards."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerData.PlayerBestTimes

A **class** in `Root.Township`, the global namespace.

Saved best times for one player across leaderboards.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerData`](/mod/game-api/types/global-i-l/leaderboardmanagerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerBestTimes()"}</code> | <span className="api-desc">Creates a `LeaderboardManagerData.PlayerBestTimes` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code><Link to="/mod/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] definitions"}</code> | <span className="api-desc">Leaderboards the player has a time on.</span> |
| <Link id="m-identifier" /><code>{"int identifier"}</code> | <span className="api-desc">The player's ID.</span> |
| <Link id="m-times" /><code>{"int[] times"}</code> | <span className="api-desc">Best time for each leaderboard, same order as `definitions`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(KeyValuePair<int, "}<Link to="/mod/game-api/types/global-i-l/leaderboardmanager-playertracker">{"LeaderboardManager.PlayerTracker"}</Link>{"> tracker)"}</code> | <span className="api-desc">Fills the record from a player's tracker.</span> |

## Used in

Members of other types that take, return or hold a `PlayerBestTimes`:

<div className="api-used-in">

[`LeaderboardManagerData.players`](/mod/game-api/types/global-i-l/leaderboardmanagerdata#m-players), [`LeaderboardManagerDataOld.PlayerBestTimes.Migrate`](/mod/game-api/types/global-i-l/leaderboardmanagerdataold-playerbesttimes#m-migrate).

</div>
