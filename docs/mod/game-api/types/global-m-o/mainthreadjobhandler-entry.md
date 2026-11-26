---
title: "MainThreadJobHandler.Entry"
description: "Handle for a job queued on MainThreadJobHandler with Schedule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler.Entry

An **abstract class** in `Root.Township`, the global namespace.

Handle for a job queued on `MainThreadJobHandler` with `Schedule`. Await it to wait for the job.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MainThreadJobHandler`](/mod/game-api/types/global-m-o/mainthreadjobhandler)
- **Derived types** [`MainThreadJobHandler.InternalEntry`](/mod/game-api/types/global-m-o/mainthreadjobhandler-internalentry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Entry()"}</code> | <span className="api-desc">Creates a `MainThreadJobHandler.Entry` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getawaiter" /><code>{"abstract TaskAwaiter<bool> GetAwaiter()"}</code> | <span className="api-desc">Lets the entry be awaited; the result is a bool from the job's completion.</span> |

## Used in

Members of other types that take, return or hold a `Entry`:

<div className="api-used-in">

[`MainThreadJobHandler.Schedule`](/mod/game-api/types/global-m-o/mainthreadjobhandler#m-schedule).

</div>
