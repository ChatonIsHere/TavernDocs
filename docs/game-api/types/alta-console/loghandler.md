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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(string message, LogLevel level, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(string message, LogLevel level)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `LogHandler`:

[`ConsoleCommandsLogTarget.LogSent`](/game-api/types/alta-console/consolecommandslogtarget#m-logsent), [`ServerConsoleLogTarget.LogSent`](/game-api/types/alta-console/serverconsolelogtarget#m-logsent).
