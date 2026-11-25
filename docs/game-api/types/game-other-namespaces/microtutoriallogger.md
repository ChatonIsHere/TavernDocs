---
title: "MicroTutorialLogger"
description: "Wrapper around a logger for the micro tutorial code that drops messages below a shared level (Warn by default)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialLogger

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Wrapper around a logger for the micro tutorial code that drops messages below a shared level (Warn by default).

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MicroTutorialLogger(ILogger logger)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private readonly ILogger logger"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-loglevel" /><code>{"static "}<Link to="/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" LogLevel { get; set; }"}</code> | Lowest level that gets logged, shared by every tutorial logger. Defaults to Warn. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debug" /><code>{"void Debug(string message)"}</code> | Logs at Debug if `LogLevel` allows it. |
| <Link id="m-error" /><code>{"void Error(string message)"}</code> | Logs an error if `LogLevel` allows it. The exception overload always logs. |
| <Link id="m-error-2" /><code>{"void Error(Exception exception)"}</code> | Logs an error if `LogLevel` allows it. The exception overload always logs. |
| <Link id="m-info" /><code>{"void Info(string message)"}</code> | Logs at Info if `LogLevel` allows it. |
| <Link id="m-warn" /><code>{"void Warn(string message)"}</code> | Logs a warning, but writes it at Error level. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-isabovelogthreshold" /><code>{"private bool IsAboveLogThreshold("}<Link to="/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" level)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `MicroTutorialLogger`:

[`ClientController.logger`](/game-api/types/game-other-namespaces/clientcontroller#m-logger), [`ClientStepInstanceMap.logger`](/game-api/types/game-other-namespaces/clientstepinstancemap#m-logger), [`MicroTutorial.logger`](/game-api/types/game-other-namespaces/microtutorial#m-logger), [`ResultExtensions.LogError`](/game-api/types/game-other-namespaces/resultextensions#m-logerror), [`ServerController.logger`](/game-api/types/game-other-namespaces/servercontroller#m-logger), [`ServerStepInstance.logger`](/game-api/types/game-other-namespaces/serverstepinstance#m-logger), [`StepInstance.logger`](/game-api/types/game-other-namespaces/stepinstance#m-logger), [`SyncController.logger`](/game-api/types/game-other-namespaces/synccontroller#m-logger).
