---
title: "ConsoleWindow"
description: "Opens a native Windows console window for the game process and sends Console output to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleWindow

A **class** in `Root.Township`, `WindowsConsole`.

Opens a native Windows console window for the game process and sends `Console` output to it. `WindowsServerConsole` creates one on its console thread.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Nested types** [`CtrlType`](/game-api/types/game-other-namespaces/consolewindow-ctrltype), [`HandlerRoutine`](/game-api/types/game-other-namespaces/consolewindow-handlerroutine)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleWindow()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isopen" /><code>{"bool IsOpen"}</code> | True until the console is shut down or closed; the console thread loops while it's true. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oldoutput" /><code>{"private TextWriter oldOutput"}</code> | The `Console.Out` writer from before the redirect, restored on shutdown. |
| <Link id="m-std-output-handle" /><code>{"private const int STD_OUTPUT_HANDLE"}</code> | Win32 standard output handle ID (-11). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Creates the console, registers the close handler and points `Console` output at it. |
| <Link id="m-setconsolectrlhandler" /><code>{"static bool SetConsoleCtrlHandler("}<Link to="/game-api/types/game-other-namespaces/consolewindow-handlerroutine">{"ConsoleWindow.HandlerRoutine"}</Link>{" Handler, bool Add)"}</code> | Win32 call that registers a handler for Ctrl+C and close events. |
| <Link id="m-settitle" /><code>{"void SetTitle(string strName)"}</code> | Sets the console window's title. |
| <Link id="m-shutdown" /><code>{"void Shutdown()"}</code> | Restores the old output, frees the console and marks it closed. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allocconsole" /><code>{"private static bool AllocConsole()"}</code> | Win32 call that creates a console window for the process. |
| <Link id="m-attachconsole" /><code>{"private static bool AttachConsole(uint dwProcessId)"}</code> | Win32 call to attach to another process's console. Not called here. |
| <Link id="m-consolectrlcheck" /><code>{"private bool ConsoleCtrlCheck("}<Link to="/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"ConsoleWindow.CtrlType"}</Link>{" ctrlType)"}</code> | On close, logoff or shutdown of the console, marks it closed and quits the game with an expected shutdown reason. |
| <Link id="m-freeconsole" /><code>{"private static bool FreeConsole()"}</code> | Win32 call that detaches the process from its console. |
| <Link id="m-getstdhandle" /><code>{"private static IntPtr GetStdHandle(int nStdHandle)"}</code> | Win32 call that gets a standard handle (here, standard output). |
| <Link id="m-setconsoletitle" /><code>{"private static bool SetConsoleTitle(string lpConsoleTitle)"}</code> | Win32 call that sets the console's title. |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleWindow`:

[`WindowsServerConsole.console`](/game-api/types/global-t-x/windowsserverconsole#m-console).
