---
title: "LoggingCommandModule"
description: "static class LoggingCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggingCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-printwarningswithstacktrace" /><code>{"static void PrintWarningsWithStacktrace(bool isEnabled = true)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-changeconfig" /><code>{"private static void ChangeConfig(string targetName, string minLevel, string maxLevel = \"fatal\", string loggerNamePattern = \"*\")"}</code> |
| <Link id="m-openlogfile" /><code>{"private static void OpenLogFile()"}</code> |
| <Link id="m-printconfig" /><code>{"private static string PrintConfig(bool isPrintingAll = false)"}</code> |
| <Link id="m-setdestroytrace" /><code>{"private static void SetDestroyTrace(bool isEnabled = true)"}</code> |

</details>
