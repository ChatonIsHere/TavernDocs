---
title: "PositionSyncBlocker"
description: "Flags for why an entity's position sync is paused, passed to LockPositionSync and UnlockPositionSync on its prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSyncBlocker

An **enum** in `Root.Township`, `Alta.Networking`.

Flags for why an entity's position sync is paused, passed to `LockPositionSync` and `UnlockPositionSync` on its prefab. The only reason is `Docked`, set while a pickup sits in a dock.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-docked" /><code>{"Docked = 1"}</code> |

## Used in

Members of other types that take, return or hold a `PositionSyncBlocker`:

<div className="api-used-in">

[`NetworkPrefab.LockPositionSync`](/mod/game-api/types/alta-networking/networkprefab#m-lockpositionsync), [`NetworkPrefab.positionSyncLock`](/mod/game-api/types/alta-networking/networkprefab#m-positionsynclock), [`NetworkPrefab.UnlockPositionSync`](/mod/game-api/types/alta-networking/networkprefab#m-unlockpositionsync).

</div>
