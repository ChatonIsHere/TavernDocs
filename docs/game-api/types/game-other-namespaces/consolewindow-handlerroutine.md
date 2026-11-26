---
title: "ConsoleWindow.HandlerRoutine"
description: "Callback type for Win32 console control events (Ctrl+C, close, logoff, shutdown)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleWindow.HandlerRoutine

A **delegate** in `Root.Township`, `WindowsConsole`.

Callback type for Win32 console control events (Ctrl+C, close, logoff, shutdown). Return true to mark the event handled.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Nested in** [`ConsoleWindow`](/game-api/types/game-other-namespaces/consolewindow)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandlerRoutine(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"ConsoleWindow.CtrlType"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"CtrlType"}</Link>{", AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual bool Invoke("}<Link to="/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"ConsoleWindow.CtrlType"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"CtrlType"}</Link>{")"}</code> |

## Used in

Members of other types that take, return or hold a `HandlerRoutine`:

[`ConsoleWindow.SetConsoleCtrlHandler`](/game-api/types/game-other-namespaces/consolewindow#m-setconsolectrlhandler).
