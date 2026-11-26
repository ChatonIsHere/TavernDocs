---
title: "ConsoleAuth.LoginPath"
description: "Which console a login came through: the websocket console, or another one."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleAuth.LoginPath

An **enum** in `TavernLib`, `TavernLib.Backend.RemoteConsole`.

Which console a login came through: the websocket console, or another one. Named tokens only work on the websocket console.

- **Listed in** [TavernLib.Backend.RemoteConsole](/mod/tavernlib-api/types/backend-remoteconsole)
- **Nested in** [`ConsoleAuth`](/mod/tavernlib-api/types/backend-remoteconsole/consoleauth)
- **Documented in** [ConsoleAuth.LoginPath](/mod/tavernlib-api/types/backend-remoteconsole/consoleauth-loginpath)

## Values

| Member |
| --- |
| <Link id="m-other" /><code>{"Other = 1"}</code> |
| <Link id="m-websocket" /><code>{"WebSocket = 0"}</code> |

## Used in

Members of other types that take, return or hold a `LoginPath`:

<div className="api-used-in">

[`ConsoleAuth.Check`](/mod/tavernlib-api/types/backend-remoteconsole/consoleauth#m-check), [`ConsoleAuth.Validate`](/mod/tavernlib-api/types/backend-remoteconsole/consoleauth#m-validate).

</div>
