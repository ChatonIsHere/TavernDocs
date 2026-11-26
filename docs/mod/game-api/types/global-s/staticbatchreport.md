---
title: "StaticBatchReport"
description: "Collects a text log of warnings and errors during static batching and build baking, for reading back as one report."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticBatchReport

A **static class** in `Root.Township`, the global namespace.

Collects a text log of warnings and errors during static batching and build baking, for reading back as one report.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-session" /><code>{"private static StringBuilder session"}</code> | <span className="api-desc">The report text being built.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearsession" /><code>{"static void ClearSession()"}</code> | <span className="api-desc">Starts a new empty report.</span> |
| <Link id="m-error" /><code>{"static void Error(Type context, string error)"}</code> | <span className="api-desc">Adds an error line tagged with the context type's name.</span> |
| <Link id="m-exception" /><code>{"static void Exception(Type context, Exception exception)"}</code> | <span className="api-desc">Adds an exception line tagged with the context type's name.</span> |
| <Link id="m-getsession" /><code>{"static string GetSession()"}</code> | <span className="api-desc">Returns the report text so far.</span> |
| <Link id="m-log" /><code>{"static void Log(Type context, string log)"}</code> | <span className="api-desc">Adds a log line tagged with the context type's name.</span> |
| <Link id="m-warning" /><code>{"static void Warning(Type context, string warning)"}</code> | <span className="api-desc">Adds a warning line tagged with the context type's name.</span> |
