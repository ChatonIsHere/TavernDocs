---
title: "ConsoleDisplay"
description: "Shows the latest server console log lines in a UI Text, coloured by log level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleDisplay

A **class** in `Root.Township`, no namespace.

Shows the latest server console log lines in a UI `Text`, coloured by log level.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Log`](/game-api/types/global-c-d/consoledisplay-log)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleDisplay()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logs" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/consoledisplay-log">{"ConsoleDisplay.Log"}</Link>{"> logs"}</code> | Log lines kept for display. |
| <Link id="m-logtypecolors" /><code>{"private static readonly Dictionary<LogLevel, string> logTypeColors"}</code> | Hex colour per log level: red for errors, yellow for warnings, black otherwise. |
| <Link id="m-rows" /><code>{"private int rows"}</code> | Most lines shown. |
| <Link id="m-text" /><code>{"private Text text"}</code> | The UI text that shows the log. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"private void HandleLog(string message, LogLevel logLevel)"}</code> | Adds a log line, drops the oldest past `rows`, and rebuilds the text. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops listening to the server console log. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Gets the `Text` and starts listening to `ServerConsoleLogTarget.LogSent`. |

</details>
