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
| <Link id="m-ctor" /><code>{"LinuxServerConsole()"}</code> | <span className="api-desc">Creates a `LinuxServerConsole` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isalive" /><code>{"private bool isAlive"}</code> | <span className="api-desc">Keeps the input loop in `RunConsole` running; cleared by `Shutdown`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"override void HandleLog(string message, LogLevel level)"}</code> | <span className="api-desc">Writes a log line to the console, coloured by level (yellow warn, red error, dark red fatal).</span> |
| <Link id="m-shutdown" /><code>{"override void Shutdown()"}</code> | <span className="api-desc">Stops the input thread loop.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleinteruptsignal" /><code>{"private void HandleInteruptSignal(object sender, ConsoleCancelEventArgs e)"}</code> | <span className="api-desc">SIGINT (Ctrl+C) handler: cancels the default kill and asks `ApplicationManager` to quit with an expected shutdown reason.</span> |
| <Link id="m-handleterminatesignal" /><code>{"private void HandleTerminateSignal(object sender, EventArgs e)"}</code> | <span className="api-desc">Process exit (SIGTERM) handler: asks `ApplicationManager` to quit with a `SIGTERM Received` reason.</span> |
| <Link id="m-runconsole" /><code>{"private void RunConsole()"}</code> | <span className="api-desc">Background thread loop that reads lines from standard input and passes each to `OnTextEntered` as a command.</span> |

</details>
