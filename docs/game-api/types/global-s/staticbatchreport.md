---
title: "StaticBatchReport"
description: "Collects a text log of warnings and errors during static batching and build baking, for reading back as one report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBatchReport

A **static class** in `Root.Township`, no namespace.

Collects a text log of warnings and errors during static batching and build baking, for reading back as one report.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-session" /><code>{"private static StringBuilder session"}</code> | The report text being built. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearsession" /><code>{"static void ClearSession()"}</code> | Starts a new empty report. |
| <Link id="m-error" /><code>{"static void Error(Type context, string error)"}</code> | Adds an error line tagged with the context type's name. |
| <Link id="m-exception" /><code>{"static void Exception(Type context, Exception exception)"}</code> | Adds an exception line tagged with the context type's name. |
| <Link id="m-getsession" /><code>{"static string GetSession()"}</code> | Returns the report text so far. |
| <Link id="m-log" /><code>{"static void Log(Type context, string log)"}</code> | Adds a log line tagged with the context type's name. |
| <Link id="m-warning" /><code>{"static void Warning(Type context, string warning)"}</code> | Adds a warning line tagged with the context type's name. |
