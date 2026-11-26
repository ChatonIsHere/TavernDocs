---
title: "UnityConsoleLogTarget"
description: "NLog target named UnityConsoleLogTarget that writes log lines to the Unity console logger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityConsoleLogTarget

A **class** in `Root.Township`, `Alta.Logging.Targets`.

NLog target named `UnityConsoleLogTarget` that writes log lines to the Unity console logger.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `TargetWithLayout`
- **Attributes** `Target`
- **Documented in** [Logging](/game-api/console-and-utilities/logging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityConsoleLogTarget()"}</code> | Creates an `UnityConsoleLogTarget` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isloggingineditor" /><code>{"static bool IsLoggingInEditor"}</code> | Turns this target on or off; set from the editor logging settings. |
| <Link id="m-unityconsolelogger" /><code>{"static ILogger unityConsoleLogger"}</code> | The Unity logger written to; set up in `Debug`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-write" /><code>{"protected override void Write(LogEventInfo logEvent)"}</code> | Logs the rendered message to `unityConsoleLogger` at the matching Unity level, using the last log parameter as context if it is a Unity object. |
