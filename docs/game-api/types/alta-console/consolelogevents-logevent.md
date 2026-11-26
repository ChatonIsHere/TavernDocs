---
title: "ConsoleLogEvents.LogEvent"
description: "Data sent with the console's log events (TraceLog to FatalLog), one per server log line."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleLogEvents.LogEvent

A **private class** in `Root.Township`, `Alta.Console`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Data sent with the console's log events (`TraceLog` to `FatalLog`), one per server log line.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`ConsoleLogEvents`](/game-api/types/alta-console/consolelogevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogEvent()"}</code> | Creates a `ConsoleLogEvents.LogEvent` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"string logger"}</code> | Name of the logger that wrote the line. |
| <Link id="m-message" /><code>{"string message"}</code> | The log message. |
| <Link id="m-timestamp" /><code>{"DateTime timeStamp"}</code> | When the line was logged. |

## Used in

Members of other types that take, return or hold a `LogEvent`:

[`ConsoleLogEvents.LogEvents`](/game-api/types/alta-console/consolelogevents#m-logevents).
