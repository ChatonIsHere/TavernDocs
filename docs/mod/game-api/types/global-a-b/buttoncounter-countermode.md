---
title: "ButtonCounter.CounterMode"
description: "Who owns a ButtonCounter's value: the server, or the single active player's client, whose changes the server accepts and passes on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter.CounterMode

An **enum** in `Root.Township`, the global namespace.

Who owns a `ButtonCounter`'s value: the server, or the single active player's client, whose changes the server accepts and passes on.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`ButtonCounter`](/mod/game-api/types/global-a-b/buttoncounter)

## Values

| Member |
| --- |
| <Link id="m-server" /><code>{"Server = 0"}</code> |
| <Link id="m-singleclient" /><code>{"SingleClient = 1"}</code> |

## Used in

Members of other types that take, return or hold a `CounterMode`:

<div className="api-used-in">

[`ButtonCounter.mode`](/mod/game-api/types/global-a-b/buttoncounter#m-mode), [`ButtonCounter.Mode`](/mod/game-api/types/global-a-b/buttoncounter#m-mode-2).

</div>
