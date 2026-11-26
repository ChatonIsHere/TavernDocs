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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`ConsoleLogEvents`](/mod/game-api/types/alta-console/consolelogevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogEvent()"}</code> | <span className="api-desc">Creates a `ConsoleLogEvents.LogEvent` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"string logger"}</code> | <span className="api-desc">Name of the logger that wrote the line.</span> |
| <Link id="m-message" /><code>{"string message"}</code> | <span className="api-desc">The log message.</span> |
| <Link id="m-timestamp" /><code>{"DateTime timeStamp"}</code> | <span className="api-desc">When the line was logged.</span> |

## Used in

Members of other types that take, return or hold a `LogEvent`:

<div className="api-used-in">

[`ConsoleLogEvents.LogEvents`](/mod/game-api/types/alta-console/consolelogevents#m-logevents).

</div>
