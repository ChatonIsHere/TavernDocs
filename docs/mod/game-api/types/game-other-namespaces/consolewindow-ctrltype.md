---
title: "ConsoleWindow.CtrlType"
description: "Windows console control signals (Ctrl+C, Ctrl+Break, close, logoff, shutdown) passed to the console control handler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleWindow.CtrlType

An **enum** in `Root.Township`, `WindowsConsole`.

Windows console control signals (Ctrl+C, Ctrl+Break, close, logoff, shutdown) passed to the console control handler.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested in** [`ConsoleWindow`](/mod/game-api/types/game-other-namespaces/consolewindow)

## Values

| Member |
| --- |
| <Link id="m-ctrl-break-event" /><code>{"CTRL_BREAK_EVENT = 1"}</code> |
| <Link id="m-ctrl-c-event" /><code>{"CTRL_C_EVENT = 0"}</code> |
| <Link id="m-ctrl-close-event" /><code>{"CTRL_CLOSE_EVENT = 2"}</code> |
| <Link id="m-ctrl-logoff-event" /><code>{"CTRL_LOGOFF_EVENT = 5"}</code> |
| <Link id="m-ctrl-shutdown-event" /><code>{"CTRL_SHUTDOWN_EVENT = 6"}</code> |

## Used in

Members of other types that take, return or hold a `CtrlType`:

[`ConsoleWindow.ConsoleCtrlCheck`](/mod/game-api/types/game-other-namespaces/consolewindow#m-consolectrlcheck), [`ConsoleWindow.HandlerRoutine.BeginInvoke`](/mod/game-api/types/game-other-namespaces/consolewindow-handlerroutine#m-begininvoke), [`ConsoleWindow.HandlerRoutine.Invoke`](/mod/game-api/types/game-other-namespaces/consolewindow-handlerroutine#m-invoke).
