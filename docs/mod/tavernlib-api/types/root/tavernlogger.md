---
title: "TavernLogger"
description: "TavernLib's internal log helper."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernLogger

A **internal static class** in `TavernLib`, `TavernLib`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

TavernLib's internal log helper. Writes through `Tavern.Logger` as `[Type.Method]: message`, finding the caller from the stack trace.

- **Listed in** [TavernLib](/mod/tavernlib-api/types/root)
- **Documented in** [TavernLogger](/mod/tavernlib-api/types/root/tavernlogger)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"static void Error(object msg, string callerName = \"\")"}</code> | <span className="api-desc">Logs a red line prefixed `ERROR`, tagged with the calling type and method.</span> |
| <Link id="m-msg" /><code>{"static void Msg(object msg, string callerName = \"\")"}</code> | <span className="api-desc">Logs a green line tagged with the calling type and method.</span> |
| <Link id="m-warn" /><code>{"static void Warn(object msg, string callerName = \"\")"}</code> | <span className="api-desc">Logs an orange line prefixed `WARNING`, tagged with the calling type and method.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iscompilergeneratedasyncstatemachine" /><code>{"private static bool IsCompilerGeneratedAsyncStateMachine(Type type)"}</code> | <span className="api-desc">True when a type is the compiler's async state machine, so the log can name the type that owns it instead.</span> |
| <Link id="m-log" /><code>{"private static void Log(ColorARGB color, string callerName, object msg, string prefix = \"\")"}</code> | <span className="api-desc">Writes a coloured MelonLoader log line tagged with the calling type and member name.</span> |

</details>
