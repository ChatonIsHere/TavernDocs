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
| <Link id="m-data" /><code><Link to="/mod/game-api/types/global-p/playerdata">{"PlayerData"}</Link>{" data"}</code> | <span className="api-desc">The player's name and time.</span> |
| <Link id="m-isbesttime" /><code>{"bool isBestTime"}</code> | <span className="api-desc">Whether this time is the player's new best.</span> |

## Used in

Members of other types that take, return or hold a `PersonalBest`:

<div className="api-used-in">

[`Leaderboard.syncPersonalBest`](/mod/game-api/types/global-i-l/leaderboard#m-syncpersonalbest), [`Leaderboard.SyncPersonalBest`](/mod/game-api/types/global-i-l/leaderboard#m-syncpersonalbest-2), [`Leaderboard.syncSetup`](/mod/game-api/types/global-i-l/leaderboard#m-syncsetup), [`Leaderboard.SyncSetup`](/mod/game-api/types/global-i-l/leaderboard#m-syncsetup-2).

</div>
