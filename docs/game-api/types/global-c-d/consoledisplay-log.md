---
title: "ConsoleDisplay.Log"
description: "One log line kept by ConsoleDisplay for its on-screen server console."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleDisplay.Log

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One log line kept by `ConsoleDisplay` for its on-screen server console.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`ConsoleDisplay`](/game-api/types/global-c-d/consoledisplay)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loglevel" /><code>{"LogLevel logLevel"}</code> | NLog level; picks the colour (red for errors, yellow for warnings). |
| <Link id="m-message" /><code>{"string message"}</code> | The log text. |

## Used in

Members of other types that take, return or hold a `Log`:

[`ConsoleDisplay.logs`](/game-api/types/global-c-d/consoledisplay#m-logs).
