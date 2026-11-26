---
title: "RawLogHandler"
description: "Event handler for a raw NLog event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RawLogHandler

A **delegate** in `Root.Township`, `Alta.Logging.Targets`.

Event handler for a raw NLog event. Used by the `LogSentRaw` events on `ServerConsoleLogTarget` and `ConsoleCommandsLogTarget`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RawLogHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(LogEventInfo logInfo, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(LogEventInfo logInfo)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `RawLogHandler`:

[`ConsoleCommandsLogTarget.LogSentRaw`](/mod/game-api/types/alta-console/consolecommandslogtarget#m-logsentraw), [`ServerConsoleLogTarget.LogSentRaw`](/mod/game-api/types/alta-console/serverconsolelogtarget#m-logsentraw).
