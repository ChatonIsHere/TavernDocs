---
title: "MenuSettings.AfterStartActionType"
description: "What the menu does after start-up: nothing, start a local test, start a local server, or join a local server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuSettings.AfterStartActionType

An **enum** in `Root.Township`, the global namespace.

What the menu does after start-up: nothing, start a local test, start a local server, or join a local server.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MenuSettings`](/mod/game-api/types/global-m-o/menusettings)

## Values

| Member |
| --- |
| <Link id="m-joinlocalserver" /><code>{"JoinLocalServer = 3"}</code> |
| <Link id="m-localserver" /><code>{"LocalServer = 2"}</code> |
| <Link id="m-localtest" /><code>{"LocalTest = 1"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |

## Used in

Members of other types that take, return or hold a `AfterStartActionType`:

<div className="api-used-in">

[`MenuSettings.afterStartAction`](/mod/game-api/types/global-m-o/menusettings#m-afterstartaction), [`MenuSettings.AfterStartAction`](/mod/game-api/types/global-m-o/menusettings#m-afterstartaction-2).

</div>
