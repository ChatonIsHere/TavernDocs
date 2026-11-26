---
title: "PlayerUnlockStation.InteractionInfo"
description: "Private message the server sends to a player when they reach a climbing challenge checkpoint or finish it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStation.InteractionInfo

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private message the server sends to a player when they reach a climbing challenge checkpoint or finish it. The client turns it into an analytics event.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerUnlockStation`](/mod/game-api/types/global-p/playerunlockstation)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-completedtower" /><code>{"bool completedTower"}</code> | <span className="api-desc">True when the player finished the challenge, false for a checkpoint.</span> |
| <Link id="m-currentorbcount" /><code>{"int currentOrbCount"}</code> | <span className="api-desc">How many orbs the player holds in their unlock manager (0 to 5).</span> |
| <Link id="m-currentunlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" currentUnlock"}</code> | <span className="api-desc">The player unlock for the challenge.</span> |
| <Link id="m-orbcollected" /><code>{"int orbCollected"}</code> | <span className="api-desc">This station's orb index (0 to 5).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the unlock, orb counts and completed flag.</span> |

## Used in

Members of other types that take, return or hold a `InteractionInfo`:

<div className="api-used-in">

[`PlayerUnlockStation.SendAnalyticsEvent`](/mod/game-api/types/global-p/playerunlockstation#m-sendanalyticsevent), [`PlayerUnlockStation.syncInteractionInfoToClient`](/mod/game-api/types/global-p/playerunlockstation#m-syncinteractioninfotoclient), [`PlayerUnlockStation.SyncInteractionInfoToClient`](/mod/game-api/types/global-p/playerunlockstation#m-syncinteractioninfotoclient-2).

</div>
