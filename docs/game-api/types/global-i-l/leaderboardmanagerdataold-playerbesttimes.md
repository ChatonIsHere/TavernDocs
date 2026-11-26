---
title: "LeaderboardManagerDataOld.PlayerBestTimes"
description: "Old save format for one player's best leaderboard times, migrated to LeaderboardManagerData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerDataOld.PlayerBestTimes

A **class** in `Root.Township`, no namespace.

Old save format for one player's best leaderboard times, migrated to `LeaderboardManagerData`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LeaderboardManagerDataOld`](/game-api/types/global-i-l/leaderboardmanagerdataold)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerBestTimes()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definitions" /><code><Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] definitions"}</code> | Leaderboards the player has a time on. |
| <Link id="m-identifier" /><code>{"int identifier"}</code> | The player's user ID. |
| <Link id="m-times" /><code>{"int[] times"}</code> | Best time for each of `definitions`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code><Link to="/game-api/types/global-i-l/leaderboardmanagerdata-playerbesttimes">{"LeaderboardManagerData.PlayerBestTimes"}</Link>{" Migrate()"}</code> | Converts to the new format, turning each definition into its data form. |

## Used in

Members of other types that take, return or hold a `PlayerBestTimes`:

[`LeaderboardManagerDataOld.players`](/game-api/types/global-i-l/leaderboardmanagerdataold#m-players).
