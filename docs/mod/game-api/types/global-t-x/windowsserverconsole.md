---
title: "WindowsServerConsole"
description: "The local console window opened by ServerConsoleManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsServerConsole

A **class** in `Root.Township`, the global namespace.

The local console window opened by `ServerConsoleManager`. It runs on its own thread, prints queued log lines coloured by level and passes typed lines back as commands.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ServerConsole`](/mod/game-api/types/global-s/serverconsole)
- **Nested types** [`ConsoleLogEntry`](/mod/game-api/types/global-t-x/windowsserverconsole-consolelogentry)
- **Documented in** [Remote console](/mod/game-api/console-and-utilities/remote-console)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindowsServerConsole()"}</code> | Creates a `WindowsServerConsole` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-console" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow">{"ConsoleWindow"}</Link>{" console"}</code> | The console window. |
| <Link id="m-consolethread" /><code>{"private Thread consoleThread"}</code> | The thread running `ConsoleThread`. |
| <Link id="m-entryqueue" /><code>{"private ConcurrentQueue<"}<Link to="/mod/game-api/types/global-t-x/windowsserverconsole-consolelogentry">{"WindowsServerConsole.ConsoleLogEntry"}</Link>{"> entryQueue"}</code> | Log lines waiting to be printed. |
| <Link id="m-input" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/consoleinput">{"ConsoleInput"}</Link>{" input"}</code> | Reads and redraws the input line. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> | Queues a log line for the console thread; drops it when more than 5000 are waiting. |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> | Closes the console window. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeconsoletitle" /><code>{"private void ChangeConsoleTitle()"}</code> | Retitles the window "A Township Tale SERVER" once the server starts. |
| <Link id="m-consolethread-2" /><code>{"private void ConsoleThread()"}</code> | Thread body: opens the window, then every 50 ms prints queued log lines (yellow for warnings, red above) and reads input until closed. |

</details>
