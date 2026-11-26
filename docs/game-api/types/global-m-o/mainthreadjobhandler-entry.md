---
title: "MainThreadJobHandler.Entry"
description: "Handle for a job queued on MainThreadJobHandler with Schedule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler.Entry

An **abstract class** in `Root.Township`, no namespace.

Handle for a job queued on `MainThreadJobHandler` with `Schedule`. Await it to wait for the job.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MainThreadJobHandler`](/game-api/types/global-m-o/mainthreadjobhandler)
- **Derived types** [`MainThreadJobHandler.InternalEntry`](/game-api/types/global-m-o/mainthreadjobhandler-internalentry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Entry()"}</code> | Creates a `MainThreadJobHandler.Entry` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getawaiter" /><code>{"abstract TaskAwaiter<bool> GetAwaiter()"}</code> | Lets the entry be awaited; the result is a bool from the job's completion. |

## Used in

Members of other types that take, return or hold a `Entry`:

[`MainThreadJobHandler.Schedule`](/game-api/types/global-m-o/mainthreadjobhandler#m-schedule).
