---
title: "UnityLogHandler"
description: "A Unity ILogHandler that sends Unity's own logs and exceptions into NLog, prefixed as unhandled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityLogHandler

A **class** in `Root.Township`, no namespace.

A Unity `ILogHandler` that sends Unity's own logs and exceptions into NLog, prefixed as unhandled.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `ILogHandler`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UnityLogHandler()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-unhandledlogger" /><code>{"private Logger unhandledLogger"}</code> | NLog logger the messages go to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logexception" /><code>{"void LogException(Exception exception, Object context)"}</code> | Logs the exception and its context to NLog as an error. |
| <Link id="m-logformat" /><code>{"void LogFormat(LogType logType, Object context, string format, params object[] args)"}</code> | Logs a Unity message to NLog at the matching level, prefixed with `Unhandled Unity Log`. |
