---
title: "MainThreadJobHandler.InternalEntry"
description: "class MainThreadJobHandler.InternalEntry in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler.InternalEntry

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MainThreadJobHandler`](/game-api/types/global-m-o/mainthreadjobhandler)
- **Inherits or implements** [`MainThreadJobHandler.Entry`](/game-api/types/global-m-o/mainthreadjobhandler-entry)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InternalEntry()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-cancellationtoken" /><code>{"CancellationToken cancellationToken"}</code> |
| <Link id="m-completionsource" /><code>{"TaskCompletionSource<bool> completionSource"}</code> |
| <Link id="m-gettask" /><code>{"Func<IEnumerable> getTask"}</code> |
| <Link id="m-index" /><code>{"uint index"}</code> |
| <Link id="m-task" /><code>{"IEnumerator task"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getawaiter" /><code>{"override TaskAwaiter<bool> GetAwaiter()"}</code> |
| <Link id="m-initialize" /><code>{"void Initialize(uint index, Func<IEnumerable> getTask, CancellationToken cancellationToken = null)"}</code> |

## Used in

Members of other types that take, return or hold a `InternalEntry`:

[`MainThreadJobHandler.current`](/game-api/types/global-m-o/mainthreadjobhandler#m-current), [`MainThreadJobHandler.entries`](/game-api/types/global-m-o/mainthreadjobhandler#m-entries), [`MainThreadJobHandler.pool`](/game-api/types/global-m-o/mainthreadjobhandler#m-pool).
