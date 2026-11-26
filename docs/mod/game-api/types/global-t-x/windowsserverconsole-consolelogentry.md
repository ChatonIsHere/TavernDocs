---
title: "WindowsServerConsole.ConsoleLogEntry"
description: "A log line queued for the Windows console thread, with its level (used for the colour)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindowsServerConsole.ConsoleLogEntry

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A log line queued for the Windows console thread, with its level (used for the colour).

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`WindowsServerConsole`](/mod/game-api/types/global-t-x/windowsserverconsole)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loglevel" /><code>{"LogLevel logLevel"}</code> | <span className="api-desc">NLog level: warnings print yellow, errors and above red, the rest white.</span> |
| <Link id="m-message" /><code>{"string message"}</code> | <span className="api-desc">The log text.</span> |

## Used in

Members of other types that take, return or hold a `ConsoleLogEntry`:

<div className="api-used-in">

[`WindowsServerConsole.entryQueue`](/mod/game-api/types/global-t-x/windowsserverconsole#m-entryqueue).

</div>
