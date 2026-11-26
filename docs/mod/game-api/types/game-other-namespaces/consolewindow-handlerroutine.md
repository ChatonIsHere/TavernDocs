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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested in** [`ConsoleWindow`](/mod/game-api/types/game-other-namespaces/consolewindow)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandlerRoutine(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"ConsoleWindow.CtrlType"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"CtrlType"}</Link>{", AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual bool Invoke("}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"ConsoleWindow.CtrlType"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"CtrlType"}</Link>{")"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `HandlerRoutine`:

<div className="api-used-in">

[`ConsoleWindow.SetConsoleCtrlHandler`](/mod/game-api/types/game-other-namespaces/consolewindow#m-setconsolectrlhandler).

</div>
