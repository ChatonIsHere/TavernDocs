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
| <Link id="m-ctor" /><code>{"WindowsServerConsole()"}</code> | <span className="api-desc">Creates a `WindowsServerConsole` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-console" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/consolewindow">{"ConsoleWindow"}</Link>{" console"}</code> | <span className="api-desc">The console window.</span> |
| <Link id="m-consolethread" /><code>{"private Thread consoleThread"}</code> | <span className="api-desc">The thread running `ConsoleThread`.</span> |
| <Link id="m-entryqueue" /><code>{"private ConcurrentQueue<"}<Link to="/mod/game-api/types/global-t-x/windowsserverconsole-consolelogentry">{"WindowsServerConsole.ConsoleLogEntry"}</Link>{"> entryQueue"}</code> | <span className="api-desc">Log lines waiting to be printed.</span> |
| <Link id="m-input" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/consoleinput">{"ConsoleInput"}</Link>{" input"}</code> | <span className="api-desc">Reads and redraws the input line.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> | <span className="api-desc">Queues a log line for the console thread; drops it when more than 5000 are waiting.</span> |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> | <span className="api-desc">Closes the console window.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeconsoletitle" /><code>{"private void ChangeConsoleTitle()"}</code> | <span className="api-desc">Retitles the window "A Township Tale SERVER" once the server starts.</span> |
| <Link id="m-consolethread-2" /><code>{"private void ConsoleThread()"}</code> | <span className="api-desc">Thread body: opens the window, then every 50 ms prints queued log lines (yellow for warnings, red above) and reads input until closed.</span> |

</details>
