---
title: "AgonesLogger"
description: "Passes log calls from the Agones SDK (game server hosting) to NLog."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgonesLogger

A **class** in `Root.Township`, the global namespace.

Passes log calls from the Agones SDK (game server hosting) to NLog.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ILogger`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgonesLogger()"}</code> | <span className="api-desc">Creates an `AgonesLogger` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger the messages go to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-prefix" /><code>{"string Prefix { get; set; }"}</code> | <span className="api-desc">Prefix property required by the Agones logger interface. Not used when logging.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-log" /><code>{"void Log(LogLevel level, string message, params object[] args)"}</code> | <span className="api-desc">Logs a message, with an exception in one overload, at the matching NLog level.</span> |
| <Link id="m-log-2" /><code>{"void Log(LogLevel level, Exception exception, string message, params object[] args)"}</code> | <span className="api-desc">Logs a message, with an exception in one overload, at the matching NLog level.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logtonlog" /><code>{"private static void LogToNLog(Exception exception, LogLevel level, string message, object[] args)"}</code> | <span className="api-desc">Maps the Agones log level to NLog (unknown levels become Info) and logs.</span> |

</details>
