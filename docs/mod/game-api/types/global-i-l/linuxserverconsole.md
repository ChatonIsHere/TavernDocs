---
title: "LinuxServerConsole"
description: "Server console for Linux builds: reads commands from standard input on a background thread, prints coloured log lines, and turns SIGINT and SIGTERM into a..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinuxServerConsole

A **class** in `Root.Township`, the global namespace.

Server console for Linux builds: reads commands from standard input on a background thread, prints coloured log lines, and turns SIGINT and SIGTERM into a clean server shutdown.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`ServerConsole`](/mod/game-api/types/global-s/serverconsole)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinuxServerConsole()"}</code> | Creates a `LinuxServerConsole` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isalive" /><code>{"private bool isAlive"}</code> | Keeps the input loop in `RunConsole` running; cleared by `Shutdown`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> | Writes a log line to the console, coloured by level (yellow warn, red error, dark red fatal). |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> | Stops the input thread loop. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleinteruptsignal" /><code>{"private void HandleInteruptSignal(object sender, ConsoleCancelEventArgs e)"}</code> | SIGINT (Ctrl+C) handler: cancels the default kill and asks `ApplicationManager` to quit with an expected shutdown reason. |
| <Link id="m-handleterminatesignal" /><code>{"private void HandleTerminateSignal(object sender, EventArgs e)"}</code> | Process exit (SIGTERM) handler: asks `ApplicationManager` to quit with a `SIGTERM Received` reason. |
| <Link id="m-runconsole" /><code>{"private void RunConsole()"}</code> | Background thread loop that reads lines from standard input and passes each to `OnTextEntered` as a command. |

</details>
