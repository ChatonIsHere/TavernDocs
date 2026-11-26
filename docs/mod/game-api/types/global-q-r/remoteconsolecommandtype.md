---
title: "RemoteConsoleCommandType"
description: "Kind of remote request ClientCommandHandler handles: a console command or a mod upload."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteConsoleCommandType

An **enum** in `Root.Township`, the global namespace.

Kind of remote request `ClientCommandHandler` handles: a console command or a mod upload.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Values

| Member |
| --- |
| <Link id="m-consolecommand" /><code>{"ConsoleCommand = 0"}</code> |
| <Link id="m-modupload" /><code>{"ModUpload = 1"}</code> |

## Used in

Members of other types that take, return or hold a `RemoteConsoleCommandType`:

[`ClientCommandHandler.AddHandler`](/mod/game-api/types/global-c-d/clientcommandhandler#m-addhandler), [`ClientCommandHandler.commandHandlers`](/mod/game-api/types/global-c-d/clientcommandhandler#m-commandhandlers).
