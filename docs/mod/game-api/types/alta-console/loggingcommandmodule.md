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

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-printwarningswithstacktrace" /><code>{"static void PrintWarningsWithStacktrace(bool isEnabled = true)"}</code> | `logs warn-stack`: sets the `CentralLoggingErrors` target to log from warn level (on) or error level (off). |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeconfig" /><code>{"private static void ChangeConfig(string targetName, string minLevel, string maxLevel = \"fatal\", string loggerNamePattern = \"*\")"}</code> | `logs change-target`: replaces the logging rule for the named target with new min and max levels and a logger name pattern. |
| <Link id="m-openlogfile" /><code>{"private static void OpenLogFile()"}</code> | `logs open`: opens the log folder in the OS file browser. |
| <Link id="m-printconfig" /><code>{"private static string PrintConfig(bool isPrintingAll = false)"}</code> | `logs config`: returns the current logging rules, or the whole NLog config file text when asked for all. |
| <Link id="m-setdestroytrace" /><code>{"private static void SetDestroyTrace(bool isEnabled = true)"}</code> | `logs destroy-trace`: turns on or off error logs with a stack trace whenever an object is destroyed (`ObjectUtility.TraceObjectDestroyWithErrorLogs`). |

</details>
