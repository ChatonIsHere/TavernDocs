---
title: "LogHandler"
description: "delegate LogHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogHandler

A **delegate** in `Root.Township`, `Alta.Logging.Targets`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(string message, LogLevel level, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(string message, LogLevel level)"}</code> |

## Used in

Members of other types that take, return or hold a `LogHandler`:

[`ConsoleCommandsLogTarget.LogSent`](/game-api/types/alta-console/consolecommandslogtarget#m-logsent), [`ServerConsoleLogTarget.LogSent`](/game-api/types/alta-console/serverconsolelogtarget#m-logsent).
