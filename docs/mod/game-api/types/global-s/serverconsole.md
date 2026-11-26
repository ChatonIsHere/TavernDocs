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
| <Link id="m-ctor" /><code>{"ServerConsole()"}</code> | <span className="api-desc">Creates a `ServerConsole` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputqueue" /><code>{"private ConcurrentQueue<string> inputQueue"}</code> | <span className="api-desc">Thread-safe queue of commands typed into the console, drained by `ProcessInputQueue`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-textentered" /><code>{"event Action<string> TextEntered"}</code> | <span className="api-desc">Raised from `ProcessInputQueue` with each line typed into the console.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"abstract void HandleLog(string message, LogLevel level)"}</code> | <span className="api-desc">Writes a log message to the console at the given level.</span> |
| <Link id="m-processinputqueue" /><code>{"void ProcessInputQueue()"}</code> | <span className="api-desc">Raises `TextEntered` for each queued line. Call from the main thread; errors are logged.</span> |
| <Link id="m-shutdown" /><code>{"abstract void Shutdown()"}</code> | <span className="api-desc">Closes the console.</span> |
| <Link id="m-ontextentered" /><code>{"protected void OnTextEntered(string command)"}</code> | <span className="api-desc">Called by subclasses with a typed line. Queues it unless empty.</span> |

## Used in

Members of other types that take, return or hold a `ServerConsole`:

<div className="api-used-in">

[`ServerConsoleManager.console`](/mod/game-api/types/global-s/serverconsolemanager#m-console).

</div>
