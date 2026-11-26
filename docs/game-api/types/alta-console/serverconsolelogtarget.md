---
title: "ServerConsoleLogTarget"
description: "NLog target ServerConsoleTarget that raises static events for each log line."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerConsoleLogTarget

A **class** in `Root.Township`, `Alta.Logging.Targets`.

NLog target `ServerConsoleTarget` that raises static events for each log line. The console display, runtime console, console log events and client log sender listen to it.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `TargetWithLayout`
- **Attributes** `Target`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerConsoleLogTarget()"}</code> | Creates a `ServerConsoleLogTarget` with default values. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-logsent" /><code>{"static event "}<Link to="/game-api/types/alta-console/loghandler">{"LogHandler"}</Link>{" LogSent"}</code> | Raised with the rendered message and level. Used by the on-screen consoles. |
| <Link id="m-logsentraw" /><code>{"static event "}<Link to="/game-api/types/alta-console/rawloghandler">{"RawLogHandler"}</Link>{" LogSentRaw"}</code> | Raised with the raw log event. Used by `ConsoleLogEvents` and `ClientLogSender`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-write" /><code>{"protected override void Write(LogEventInfo logEvent)"}</code> | Raises `LogSent`, then `LogSentRaw`. |
