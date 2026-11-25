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

- **Listed in** [TavernLib](/tavernlib-api/types/root)
- **Documented in** [TavernLogger](/tavernlib-api/types/root/tavernlogger)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code>{"static void Error(object msg, string callerName = \"\")"}</code> | Logs a red line prefixed `ERROR`, tagged with the calling type and method. |
| <Link id="m-msg" /><code>{"static void Msg(object msg, string callerName = \"\")"}</code> | Logs a green line tagged with the calling type and method. |
| <Link id="m-warn" /><code>{"static void Warn(object msg, string callerName = \"\")"}</code> | Logs an orange line prefixed `WARNING`, tagged with the calling type and method. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-iscompilergeneratedasyncstatemachine" /><code>{"private static bool IsCompilerGeneratedAsyncStateMachine(Type type)"}</code> |
| <Link id="m-log" /><code>{"private static void Log(ColorARGB color, string callerName, object msg, string prefix = \"\")"}</code> |

</details>
