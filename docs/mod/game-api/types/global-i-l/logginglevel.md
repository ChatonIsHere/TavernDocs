---
title: "LoggingLevel"
description: "Log levels from Trace to Fatal, used by the micro tutorial logger to filter its output."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoggingLevel

An **enum** in `Root.Township`, the global namespace.

Log levels from Trace to Fatal, used by the micro tutorial logger to filter its output.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Values

| Member |
| --- |
| <Link id="m-debug" /><code>{"Debug = 1"}</code> |
| <Link id="m-error" /><code>{"Error = 4"}</code> |
| <Link id="m-fatal" /><code>{"Fatal = 5"}</code> |
| <Link id="m-info" /><code>{"Info = 2"}</code> |
| <Link id="m-trace" /><code>{"Trace = 0"}</code> |
| <Link id="m-warn" /><code>{"Warn = 3"}</code> |

## Used in

Members of other types that take, return or hold a `LoggingLevel`:

[`MicroTutorialLogger.IsAboveLogThreshold`](/mod/game-api/types/game-other-namespaces/microtutoriallogger#m-isabovelogthreshold), [`MicroTutorialLogger.LogLevel`](/mod/game-api/types/game-other-namespaces/microtutoriallogger#m-loglevel), [`UnityEditorLoggingSettings.maxLevel`](/mod/game-api/types/global-t-x/unityeditorloggingsettings#m-maxlevel), [`UnityEditorLoggingSettings.MaxLevel`](/mod/game-api/types/global-t-x/unityeditorloggingsettings#m-maxlevel-2), [`UnityEditorLoggingSettings.minLevel`](/mod/game-api/types/global-t-x/unityeditorloggingsettings#m-minlevel), [`UnityEditorLoggingSettings.MinLevel`](/mod/game-api/types/global-t-x/unityeditorloggingsettings#m-minlevel-2), [`UnityLogUtility.ConvertToNLogLevel`](/mod/game-api/types/global-t-x/unitylogutility#m-converttonloglevel-2).
