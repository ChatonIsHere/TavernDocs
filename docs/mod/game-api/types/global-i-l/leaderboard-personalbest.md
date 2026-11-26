---
title: "Leaderboard.PersonalBest"
description: "Message payload a Leaderboard sends to clients with a player's time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Leaderboard.PersonalBest

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message payload a `Leaderboard` sends to clients with a player's time.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`Leaderboard`](/mod/game-api/types/global-i-l/leaderboard)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{" data"}</code> | The player's name and time. |
| <Link id="m-isbesttime" /><code>{"bool isBestTime"}</code> | Whether this time is the player's new best. |

## Used in

Members of other types that take, return or hold a `PersonalBest`:

[`Leaderboard.syncPersonalBest`](/mod/game-api/types/global-i-l/leaderboard#m-syncpersonalbest), [`Leaderboard.SyncPersonalBest`](/mod/game-api/types/global-i-l/leaderboard#m-syncpersonalbest-2), [`Leaderboard.syncSetup`](/mod/game-api/types/global-i-l/leaderboard#m-syncsetup), [`Leaderboard.SyncSetup`](/mod/game-api/types/global-i-l/leaderboard#m-syncsetup-2).
