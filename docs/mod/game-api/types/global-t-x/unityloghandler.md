---
title: "UnityLogHandler"
description: "A Unity ILogHandler that sends Unity's own logs and exceptions into NLog, prefixed as unhandled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityLogHandler

A **class** in `Root.Township`, the global namespace.

A Unity `ILogHandler` that sends Unity's own logs and exceptions into NLog, prefixed as unhandled.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `ILogHandler`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityLogHandler()"}</code> | <span className="api-desc">Creates an `UnityLogHandler` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-unhandledlogger" /><code>{"private Logger unhandledLogger"}</code> | <span className="api-desc">NLog logger the messages go to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logexception" /><code>{"void LogException(Exception exception, Object context)"}</code> | <span className="api-desc">Logs the exception and its context to NLog as an error.</span> |
| <Link id="m-logformat" /><code>{"void LogFormat(LogType logType, Object context, string format, params object[] args)"}</code> | <span className="api-desc">Logs a Unity message to NLog at the matching level, prefixed with `Unhandled Unity Log`.</span> |
