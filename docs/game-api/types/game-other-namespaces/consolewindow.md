---
title: "ConsoleWindow"
description: "class ConsoleWindow in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleWindow

A **class** in `Root.Township`, `WindowsConsole`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Nested types** [`CtrlType`](/game-api/types/game-other-namespaces/consolewindow-ctrltype), [`HandlerRoutine`](/game-api/types/game-other-namespaces/consolewindow-handlerroutine)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleWindow()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-isopen" /><code>{"bool IsOpen"}</code> |

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-oldoutput" /><code>{"private TextWriter oldOutput"}</code> |
| <Link id="m-std-output-handle" /><code>{"private const int STD_OUTPUT_HANDLE"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |
| <Link id="m-setconsolectrlhandler" /><code>{"static bool SetConsoleCtrlHandler("}<Link to="/game-api/types/game-other-namespaces/consolewindow-handlerroutine">{"ConsoleWindow.HandlerRoutine"}</Link>{" Handler, bool Add)"}</code> |
| <Link id="m-settitle" /><code>{"void SetTitle(string strName)"}</code> |
| <Link id="m-shutdown" /><code>{"void Shutdown()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-allocconsole" /><code>{"private static bool AllocConsole()"}</code> |
| <Link id="m-attachconsole" /><code>{"private static bool AttachConsole(uint dwProcessId)"}</code> |
| <Link id="m-consolectrlcheck" /><code>{"private bool ConsoleCtrlCheck("}<Link to="/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"ConsoleWindow.CtrlType"}</Link>{" ctrlType)"}</code> |
| <Link id="m-freeconsole" /><code>{"private static bool FreeConsole()"}</code> |
| <Link id="m-getstdhandle" /><code>{"private static IntPtr GetStdHandle(int nStdHandle)"}</code> |
| <Link id="m-setconsoletitle" /><code>{"private static bool SetConsoleTitle(string lpConsoleTitle)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleWindow`:

[`WindowsServerConsole.console`](/game-api/types/global-t-x/windowsserverconsole#m-console).
