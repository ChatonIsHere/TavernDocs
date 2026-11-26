---
title: "LoggingCommandModule"
description: "Console module logs: commands that change NLog rules at runtime, print the logging config and open the log folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggingCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `logs`: commands that change NLog rules at runtime, print the logging config and open the log folder.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Module`

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-printwarningswithstacktrace" /><code>{"static void PrintWarningsWithStacktrace(bool isEnabled = true)"}</code> | <span className="api-desc">`logs warn-stack`: sets the `CentralLoggingErrors` target to log from warn level (on) or error level (off).</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeconfig" /><code>{"private static void ChangeConfig(string targetName, string minLevel, string maxLevel = \"fatal\", string loggerNamePattern = \"*\")"}</code> | <span className="api-desc">`logs change-target`: replaces the logging rule for the named target with new min and max levels and a logger name pattern.</span> |
| <Link id="m-openlogfile" /><code>{"private static void OpenLogFile()"}</code> | <span className="api-desc">`logs open`: opens the log folder in the OS file browser.</span> |
| <Link id="m-printconfig" /><code>{"private static string PrintConfig(bool isPrintingAll = false)"}</code> | <span className="api-desc">`logs config`: returns the current logging rules, or the whole NLog config file text when asked for all.</span> |
| <Link id="m-setdestroytrace" /><code>{"private static void SetDestroyTrace(bool isEnabled = true)"}</code> | <span className="api-desc">`logs destroy-trace`: turns on or off error logs with a stack trace whenever an object is destroyed (`ObjectUtility.TraceObjectDestroyWithErrorLogs`).</span> |

</details>
