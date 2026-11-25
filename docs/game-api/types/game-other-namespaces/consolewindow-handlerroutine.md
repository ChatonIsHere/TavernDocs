---
title: "ConsoleWindow.HandlerRoutine"
description: "delegate ConsoleWindow.HandlerRoutine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleWindow.HandlerRoutine

A **delegate** in `Root.Township`, `WindowsConsole`.

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
