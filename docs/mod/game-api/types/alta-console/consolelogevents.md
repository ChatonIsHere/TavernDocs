---
title: "ConsoleLogEvents"
description: "Publishes server log lines as console events (TraceLog to FatalLog) so websocket console clients can subscribe to them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleLogEvents

A **static class** in `Root.Township`, `Alta.Console`.

Publishes server log lines as console events (`TraceLog` to `FatalLog`) so websocket console clients can subscribe to them.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`LogEvent`](/mod/game-api/types/alta-console/consolelogevents-logevent)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logevents" /><code>{"private static "}<Link to="/mod/game-api/types/alta-console/consoleevent-t">{"ConsoleEvent"}</Link>{"<"}<Link to="/mod/game-api/types/alta-console/consolelogevents-logevent">{"ConsoleLogEvents.LogEvent"}</Link>{">[] LogEvents"}</code> | <span className="api-desc">One console event per log level, indexed by NLog level ordinal.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"static void Initialize()"}</code> | <span className="api-desc">Hooks `HandleLog` onto `ServerConsoleLogTarget.LogSentRaw`. Called from `ConsoleEventProcessor`'s static constructor.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"private static void HandleLog(LogEventInfo logInfo)"}</code> | <span className="api-desc">Raises the console event for the log line's level with its message, time and logger name.</span> |

</details>
