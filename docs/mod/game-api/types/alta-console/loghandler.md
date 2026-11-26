---
title: "LogHandler"
description: "Event handler for a formatted log line and its level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogHandler

A **delegate** in `Root.Township`, `Alta.Logging.Targets`.

Event handler for a formatted log line and its level. Used by `ServerConsoleLogTarget.LogSent` and `ConsoleCommandsLogTarget.LogSent`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(string message, LogLevel level, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(string message, LogLevel level)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `LogHandler`:

<div className="api-used-in">

[`ConsoleCommandsLogTarget.LogSent`](/mod/game-api/types/alta-console/consolecommandslogtarget#m-logsent), [`ServerConsoleLogTarget.LogSent`](/mod/game-api/types/alta-console/serverconsolelogtarget#m-logsent).

</div>
