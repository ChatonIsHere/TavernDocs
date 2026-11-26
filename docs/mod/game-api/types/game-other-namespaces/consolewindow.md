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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Nested types** [`CtrlType`](/mod/game-api/types/game-other-namespaces/consolewindow-ctrltype), [`HandlerRoutine`](/mod/game-api/types/game-other-namespaces/consolewindow-handlerroutine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleWindow()"}</code> | <span className="api-desc">Creates a `ConsoleWindow` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isopen" /><code>{"bool IsOpen"}</code> | <span className="api-desc">True until the console is shut down or closed; the console thread loops while it's true.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oldoutput" /><code>{"private TextWriter oldOutput"}</code> | <span className="api-desc">The `Console.Out` writer from before the redirect, restored on shutdown.</span> |
| <Link id="m-std-output-handle" /><code>{"private const int STD_OUTPUT_HANDLE"}</code> | <span className="api-desc">Win32 standard output handle ID (-11).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Creates the console, registers the close handler and points `Console` output at it.</span> |
| <Link id="m-setconsolectrlhandler" /><code>{"static bool SetConsoleCtrlHandler("}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow-handlerroutine">{"ConsoleWindow.HandlerRoutine"}</Link>{" Handler, bool Add)"}</code> | <span className="api-desc">Win32 call that registers a handler for Ctrl+C and close events.</span> |
| <Link id="m-settitle" /><code>{"void SetTitle(string strName)"}</code> | <span className="api-desc">Sets the console window's title.</span> |
| <Link id="m-shutdown" /><code>{"void Shutdown()"}</code> | <span className="api-desc">Restores the old output, frees the console and marks it closed.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allocconsole" /><code>{"private static bool AllocConsole()"}</code> | <span className="api-desc">Win32 call that creates a console window for the process.</span> |
| <Link id="m-attachconsole" /><code>{"private static bool AttachConsole(uint dwProcessId)"}</code> | <span className="api-desc">Win32 call to attach to another process's console. Not called here.</span> |
| <Link id="m-consolectrlcheck" /><code>{"private bool ConsoleCtrlCheck("}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow-ctrltype">{"ConsoleWindow.CtrlType"}</Link>{" ctrlType)"}</code> | <span className="api-desc">On close, logoff or shutdown of the console, marks it closed and quits the game with an expected shutdown reason.</span> |
| <Link id="m-freeconsole" /><code>{"private static bool FreeConsole()"}</code> | <span className="api-desc">Win32 call that detaches the process from its console.</span> |
| <Link id="m-getstdhandle" /><code>{"private static IntPtr GetStdHandle(int nStdHandle)"}</code> | <span className="api-desc">Win32 call that gets a standard handle (here, standard output).</span> |
| <Link id="m-setconsoletitle" /><code>{"private static bool SetConsoleTitle(string lpConsoleTitle)"}</code> | <span className="api-desc">Win32 call that sets the console's title.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleWindow`:

<div className="api-used-in">

[`WindowsServerConsole.console`](/mod/game-api/types/global-t-x/windowsserverconsole#m-console).

</div>
