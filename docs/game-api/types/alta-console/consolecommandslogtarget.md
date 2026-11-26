---
title: "ConsoleCommandsLogTarget"
description: "NLog target ConsoleCommandsTarget that raises static events for each log line."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleCommandsLogTarget

A **class** in `Root.Township`, `Alta.Logging.Targets`.

NLog target `ConsoleCommandsTarget` that raises static events for each log line. Remote console connections listen to it to send logs to their client.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `TargetWithLayout`
- **Attributes** `Target`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleCommandsLogTarget()"}</code> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-logsent" /><code>{"static event "}<Link to="/game-api/types/alta-console/loghandler">{"LogHandler"}</Link>{" LogSent"}</code> | Raised with the rendered message and level. |
| <Link id="m-logsentraw" /><code>{"static event "}<Link to="/game-api/types/alta-console/rawloghandler">{"RawLogHandler"}</Link>{" LogSentRaw"}</code> | Raised with the raw log event. Each `ClientCommandHandler` listens to send it over the remote console. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-write" /><code>{"protected override void Write(LogEventInfo logEvent)"}</code> | Raises `LogSentRaw`, then `LogSent`. |
