---
title: "AgonesLogger"
description: "class AgonesLogger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgonesLogger

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ILogger`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AgonesLogger()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-prefix" /><code>{"string Prefix { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-log" /><code>{"void Log(LogLevel level, string message, params object[] args)"}</code> |
| <Link id="m-log-2" /><code>{"void Log(LogLevel level, Exception exception, string message, params object[] args)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-logtonlog" /><code>{"private static void LogToNLog(Exception exception, LogLevel level, string message, object[] args)"}</code> |

</details>
