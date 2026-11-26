---
title: "LeaderboardManagerDataOld.PlayerBestTimes"
description: "Old save format for one player's best leaderboard times, migrated to LeaderboardManagerData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerDataOld.PlayerBestTimes

A **class** in `Root.Township`, the global namespace.

Old save format for one player's best leaderboard times, migrated to `LeaderboardManagerData`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerDataOld`](/mod/game-api/types/global-i-l/leaderboardmanagerdataold)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerBestTimes()"}</code> | <span className="api-desc">Creates a `LeaderboardManagerDataOld.PlayerBestTimes` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code><Link to="/mod/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] definitions"}</code> | <span className="api-desc">Leaderboards the player has a time on.</span> |
| <Link id="m-identifier" /><code>{"int identifier"}</code> | <span className="api-desc">The player's user ID.</span> |
| <Link id="m-times" /><code>{"int[] times"}</code> | <span className="api-desc">Best time for each of `definitions`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code><Link to="/mod/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes">{"LeaderboardManagerData.PlayerBestTimes"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the new format, turning each definition into its data form.</span> |

## Used in

Members of other types that take, return or hold a `PlayerBestTimes`:

<div className="api-used-in">

[`LeaderboardManagerDataOld.players`](/mod/game-api/types/global-i-l/leaderboardmanagerdataold#m-players).

</div>
