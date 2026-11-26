---
title: "LeaderboardManagerDataOld.LeaderboardEntry"
description: "Old save format for one leaderboard, kept so saves can be migrated to LeaderboardManagerData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerDataOld.LeaderboardEntry

A **class** in `Root.Township`, no namespace.

Old save format for one leaderboard, kept so saves can be migrated to `LeaderboardManagerData`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerDataOld`](/game-api/types/global-i-l/leaderboardmanagerdataold)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LeaderboardEntry()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{" definition"}</code> | The leaderboard's definition asset. |
| <Link id="m-players" /><code>{"int[] players"}</code> | Player IDs on the board. |
| <Link id="m-times" /><code>{"int[] times"}</code> | Times matching `players`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code><Link to="/game-api/types/global-i-l/leaderboardmanagerdata-leaderboardentry">{"LeaderboardManagerData.LeaderboardEntry"}</Link>{" Migrate()"}</code> | Converts to the new entry, turning the definition into its data form. |

## Used in

Members of other types that take, return or hold a `LeaderboardEntry`:

[`LeaderboardManagerDataOld.entries`](/game-api/types/global-i-l/leaderboardmanagerdataold#m-entries).
