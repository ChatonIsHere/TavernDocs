---
title: "RuntimeConsole.LogFilter"
description: "Flags for log levels the runtime console hides."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RuntimeConsole.LogFilter

An **private enum** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Flags for log levels the runtime console hides. The check casts the NLog level ordinal to these flags, so the bits don't line up with the names (Trace is always hidden once any flag is set).

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`RuntimeConsole`](/mod/game-api/types/global-q-r/runtimeconsole)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-debug" /><code>{"Debug = 2"}</code> |
| <Link id="m-error" /><code>{"Error = 16"}</code> |
| <Link id="m-info" /><code>{"Info = 4"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-trace" /><code>{"Trace = 1"}</code> |
| <Link id="m-warning" /><code>{"Warning = 8"}</code> |

## Used in

Members of other types that take, return or hold a `LogFilter`:

<div className="api-used-in">

[`RuntimeConsole.logFilter`](/mod/game-api/types/global-q-r/runtimeconsole#m-logfilter).

</div>
