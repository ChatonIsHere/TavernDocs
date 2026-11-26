---
title: "PlayerUnlockStation.InteractionInfo"
description: "Private message the server sends to a player when they reach a climbing challenge checkpoint or finish it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStation.InteractionInfo

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private message the server sends to a player when they reach a climbing challenge checkpoint or finish it. The client turns it into an analytics event.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerUnlockStation`](/game-api/types/global-p/playerunlockstation)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-completedtower" /><code>{"bool completedTower"}</code> | True when the player finished the challenge, false for a checkpoint. |
| <Link id="m-currentorbcount" /><code>{"int currentOrbCount"}</code> | How many orbs the player holds in their unlock manager (0 to 5). |
| <Link id="m-currentunlock" /><code><Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" currentUnlock"}</code> | The player unlock for the challenge. |
| <Link id="m-orbcollected" /><code>{"int orbCollected"}</code> | This station's orb index (0 to 5). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the unlock, orb counts and completed flag. |

## Used in

Members of other types that take, return or hold a `InteractionInfo`:

[`PlayerUnlockStation.SendAnalyticsEvent`](/game-api/types/global-p/playerunlockstation#m-sendanalyticsevent), [`PlayerUnlockStation.syncInteractionInfoToClient`](/game-api/types/global-p/playerunlockstation#m-syncinteractioninfotoclient), [`PlayerUnlockStation.SyncInteractionInfoToClient`](/game-api/types/global-p/playerunlockstation#m-syncinteractioninfotoclient-2).
