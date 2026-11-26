---
title: "PlayerUnlockStation.NetworkEffect"
description: "Effect a player unlock station plays on clients: unlock given, challenge complete, or unlock cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStation.NetworkEffect

An **enum** in `Root.Township`, the global namespace.

Effect a player unlock station plays on clients: unlock given, challenge complete, or unlock cancelled.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerUnlockStation`](/mod/game-api/types/global-p/playerunlockstation)

## Values

| Member |
| --- |
| <Link id="m-cancelled" /><code>{"Cancelled = 2"}</code> |
| <Link id="m-complete" /><code>{"Complete = 1"}</code> |
| <Link id="m-unlock" /><code>{"Unlock = 0"}</code> |

## Used in

Members of other types that take, return or hold a `NetworkEffect`:

<div className="api-used-in">

[`PlayerUnlockStation.CancelUnlock`](/mod/game-api/types/global-p/playerunlockstation#m-cancelunlock), [`PlayerUnlockStation.syncEffect`](/mod/game-api/types/global-p/playerunlockstation#m-synceffect), [`PlayerUnlockStation.SyncEffect`](/mod/game-api/types/global-p/playerunlockstation#m-synceffect-2).

</div>
