---
title: "RawLogHandler"
description: "delegate RawLogHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RawLogHandler

A **delegate** in `Root.Township`, `Alta.Logging.Targets`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RawLogHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(LogEventInfo logInfo, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(LogEventInfo logInfo)"}</code> |

## Used in

Members of other types that take, return or hold a `RawLogHandler`:

[`ConsoleCommandsLogTarget.LogSentRaw`](/game-api/types/alta-console/consolecommandslogtarget#m-logsentraw), [`ServerConsoleLogTarget.LogSentRaw`](/game-api/types/alta-console/serverconsolelogtarget#m-logsentraw).
