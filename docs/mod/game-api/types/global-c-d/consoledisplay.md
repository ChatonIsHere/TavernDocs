---
title: "ConsoleDisplay"
description: "Shows the latest server console log lines in a UI Text, coloured by log level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleDisplay

A **class** in `Root.Township`, the global namespace.

Shows the latest server console log lines in a UI `Text`, coloured by log level.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Log`](/mod/game-api/types/global-c-d/consoledisplay-log)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logs" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/consoledisplay-log">{"ConsoleDisplay.Log"}</Link>{"> logs"}</code> | <span className="api-desc">Log lines kept for display.</span> |
| <Link id="m-logtypecolors" /><code>{"private static readonly Dictionary<LogLevel, string> logTypeColors"}</code> | <span className="api-desc">Hex colour per log level: red for errors, yellow for warnings, black otherwise.</span> |
| <Link id="m-rows" /><code>{"private int rows"}</code> | <span className="api-desc">Most lines shown.</span> |
| <Link id="m-text" /><code>{"private Text text"}</code> | <span className="api-desc">The UI text that shows the log.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlelog" /><code>{"private void HandleLog(string message, LogLevel logLevel)"}</code> | <span className="api-desc">Adds a log line, drops the oldest past `rows`, and rebuilds the text.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops listening to the server console log.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Gets the `Text` and starts listening to `ServerConsoleLogTarget.LogSent`.</span> |

</details>
