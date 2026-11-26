---
title: "SpiritModeDoorway.UnlockModificationPair"
description: "Private message payload for a SpiritModeDoorway: which player unlock to give, or that the current one should be cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritModeDoorway.UnlockModificationPair

A **private struct** in `Root.Township`, `Features.Gameplay.ClimbingTower`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private message payload for a `SpiritModeDoorway`: which player unlock to give, or that the current one should be cancelled.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested in** [`SpiritModeDoorway`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isgivingunlock" /><code>{"bool IsGivingUnlock"}</code> | True to give `NewUnlock` and set a checkpoint, false to cancel the player's current unlock. |
| <Link id="m-newunlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" NewUnlock"}</code> | The player unlock involved. The server ignores the message if it is null. |

## Used in

Members of other types that take, return or hold a `UnlockModificationPair`:

[`SpiritModeDoorway.CanSyncDoorModification`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway#m-cansyncdoormodification), [`SpiritModeDoorway.syncPlayerUnlockDoorModification`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway#m-syncplayerunlockdoormodification), [`SpiritModeDoorway.SyncPlayerUnlockDoorModification`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway#m-syncplayerunlockdoormodification-2).
