---
title: "RuntimeConsole.CommandTarget"
description: "Where the in-world runtime console sends typed commands: client or server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimeConsole.CommandTarget

An **private enum** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Where the in-world runtime console sends typed commands: client or server. Picked with the console's lever.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RuntimeConsole`](/mod/game-api/types/global-q-r/runtimeconsole)

## Values

| Member |
| --- |
| <Link id="m-client" /><code>{"Client = 0"}</code> |
| <Link id="m-server" /><code>{"Server = 1"}</code> |

## Used in

Members of other types that take, return or hold a `CommandTarget`:

[`RuntimeConsole.defaultCommandTarget`](/mod/game-api/types/global-q-r/runtimeconsole#m-defaultcommandtarget).
