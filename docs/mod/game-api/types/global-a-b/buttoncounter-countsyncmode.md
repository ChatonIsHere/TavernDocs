---
title: "ButtonCounter.CountSyncMode"
description: "When a ButtonCounter syncs its amount: immediately on each change, or after the player stops changing it for a moment (delayed, the default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter.CountSyncMode

An **enum** in `Root.Township`, the global namespace.

When a `ButtonCounter` syncs its amount: immediately on each change, or after the player stops changing it for a moment (delayed, the default).

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`ButtonCounter`](/mod/game-api/types/global-a-b/buttoncounter)

## Values

| Member |
| --- |
| <Link id="m-delayed" /><code>{"Delayed = 1"}</code> |
| <Link id="m-immediate" /><code>{"Immediate = 0"}</code> |

## Used in

Members of other types that take, return or hold a `CountSyncMode`:

[`ButtonCounter.CheckSync`](/mod/game-api/types/global-a-b/buttoncounter#m-checksync), [`ButtonCounter.syncMode`](/mod/game-api/types/global-a-b/buttoncounter#m-syncmode), [`ButtonCounter.SyncMode`](/mod/game-api/types/global-a-b/buttoncounter#m-syncmode-2).
