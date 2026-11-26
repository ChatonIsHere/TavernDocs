---
title: "LeaderboardManagerDataOld"
description: "Version 1 save data for LeaderboardManager, which stored definition assets instead of definition data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LeaderboardManagerDataOld

A **class** in `Root.Township`, no namespace.

Version 1 save data for `LeaderboardManager`, which stored definition assets instead of definition data. Migrates to `LeaderboardManagerData`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Nested types** [`LeaderboardEntry`](/game-api/types/global-i-l/leaderboardmanagerdataold-leaderboardentry), [`PlayerBestTimes`](/game-api/types/global-i-l/leaderboardmanagerdataold-playerbesttimes)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LeaderboardManagerDataOld()"}</code> | Creates a `LeaderboardManagerDataOld` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code><Link to="/game-api/types/global-i-l/leaderboardmanagerdataold-leaderboardentry">{"LeaderboardManagerDataOld.LeaderboardEntry"}</Link>{"[] entries"}</code> | Old per-course top player entries. |
| <Link id="m-players" /><code><Link to="/game-api/types/global-i-l/leaderboardmanagerdataold-playerbesttimes">{"LeaderboardManagerDataOld.PlayerBestTimes"}</Link>{"[] players"}</code> | Old per-player best time entries. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the version 2 save, turning each definition asset into its data. |
