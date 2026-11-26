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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialLogger(ILogger logger)"}</code> | <span className="api-desc">Creates a `MicroTutorialLogger` from `logger`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private readonly ILogger logger"}</code> | <span className="api-desc">The wrapped logger. Note that `Warn` messages are written to it as errors.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-loglevel" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" LogLevel { get; set; }"}</code> | <span className="api-desc">Lowest level that gets logged, shared by every tutorial logger. Defaults to Warn.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debug" /><code>{"void Debug(string message)"}</code> | <span className="api-desc">Logs at Debug if `LogLevel` allows it.</span> |
| <Link id="m-error" /><code>{"void Error(string message)"}</code> | <span className="api-desc">Logs an error if `LogLevel` allows it. The exception overload always logs.</span> |
| <Link id="m-error-2" /><code>{"void Error(Exception exception)"}</code> | <span className="api-desc">Logs an error if `LogLevel` allows it. The exception overload always logs.</span> |
| <Link id="m-info" /><code>{"void Info(string message)"}</code> | <span className="api-desc">Logs at Info if `LogLevel` allows it.</span> |
| <Link id="m-warn" /><code>{"void Warn(string message)"}</code> | <span className="api-desc">Logs a warning, but writes it at Error level.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isabovelogthreshold" /><code>{"private bool IsAboveLogThreshold("}<Link to="/mod/game-api/types/global-i-l/logginglevel">{"LoggingLevel"}</Link>{" level)"}</code> | <span className="api-desc">True when a message of this level should be logged under the static `LogLevel`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MicroTutorialLogger`:

<div className="api-used-in">

[`ClientController.logger`](/mod/game-api/types/game-other-namespaces/clientcontroller#m-logger), [`ClientStepInstanceMap.logger`](/mod/game-api/types/game-other-namespaces/clientstepinstancemap#m-logger), [`MicroTutorial.logger`](/mod/game-api/types/game-other-namespaces/microtutorial#m-logger), [`ResultExtensions.LogError`](/mod/game-api/types/game-other-namespaces/resultextensions#m-logerror), [`ServerController.logger`](/mod/game-api/types/game-other-namespaces/servercontroller#m-logger), [`ServerStepInstance.logger`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-logger), [`StepInstance.logger`](/mod/game-api/types/game-other-namespaces/stepinstance#m-logger), [`SyncController.logger`](/mod/game-api/types/game-other-namespaces/synccontroller#m-logger).

</div>
