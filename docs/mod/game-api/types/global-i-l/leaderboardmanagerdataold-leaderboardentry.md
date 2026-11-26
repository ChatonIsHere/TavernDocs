---
title: "LeaderboardManagerDataOld.LeaderboardEntry"
description: "Old save format for one leaderboard, kept so saves can be migrated to LeaderboardManagerData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerDataOld.LeaderboardEntry

A **class** in `Root.Township`, the global namespace.

Old save format for one leaderboard, kept so saves can be migrated to `LeaderboardManagerData`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerDataOld`](/mod/game-api/types/global-i-l/leaderboardmanagerdataold)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardEntry()"}</code> | <span className="api-desc">Creates a `LeaderboardManagerDataOld.LeaderboardEntry` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The leaderboard's definition asset.</span> |
| <Link id="m-players" /><code>{"int[] players"}</code> | <span className="api-desc">Player IDs on the board.</span> |
| <Link id="m-times" /><code>{"int[] times"}</code> | <span className="api-desc">Times matching `players`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code><Link to="/mod/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry">{"LeaderboardManagerData.LeaderboardEntry"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the new entry, turning the definition into its data form.</span> |

## Used in

Members of other types that take, return or hold a `LeaderboardEntry`:

<div className="api-used-in">

[`LeaderboardManagerDataOld.entries`](/mod/game-api/types/global-i-l/leaderboardmanagerdataold#m-entries).

</div>
