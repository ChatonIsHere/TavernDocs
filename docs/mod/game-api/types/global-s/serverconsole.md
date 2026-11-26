---
title: "ServerConsole"
description: "Base for the dedicated server's text console (Windows, Linux or a null console)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConsole

An **abstract class** in `Root.Township`, the global namespace.

Base for the dedicated server's text console (Windows, Linux or a null console). Queues typed lines and hands them to listeners on the main thread.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Derived types** [`LinuxServerConsole`](/mod/game-api/types/global-i-l/linuxserverconsole), [`NullConsole`](/mod/game-api/types/global-m-o/nullconsole), [`WindowsServerConsole`](/mod/game-api/types/global-t-x/windowsserverconsole)
- **Documented in** [Logging](/mod/game-api/console-and-utilities/logging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerConsole()"}</code> | Creates a `ServerConsole` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputqueue" /><code>{"private ConcurrentQueue<string> inputQueue"}</code> | Thread-safe queue of commands typed into the console, drained by `ProcessInputQueue`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-textentered" /><code>{"event Action<string> TextEntered"}</code> | Raised from `ProcessInputQueue` with each line typed into the console. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"abstract void HandleLog(string message, LogLevel level)"}</code> | Writes a log message to the console at the given level. |
| <Link id="m-processinputqueue" /><code>{"void ProcessInputQueue()"}</code> | Raises `TextEntered` for each queued line. Call from the main thread; errors are logged. |
| <Link id="m-shutdown" /><code>{"abstract void Shutdown()"}</code> | Closes the console. |
| <Link id="m-ontextentered" /><code>{"protected void OnTextEntered(string command)"}</code> | Called by subclasses with a typed line. Queues it unless empty. |

## Used in

Members of other types that take, return or hold a `ServerConsole`:

[`ServerConsoleManager.console`](/mod/game-api/types/global-s/serverconsolemanager#m-console).
