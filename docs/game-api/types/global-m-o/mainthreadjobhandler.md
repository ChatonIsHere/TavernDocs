---
title: "MainThreadJobHandler"
description: "class MainThreadJobHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`SingletonBehaviour<MainThreadJobHandler>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`MainThreadJobHandler`](/game-api/types/global-m-o/mainthreadjobhandler)
- **Nested types** [`Entry`](/game-api/types/global-m-o/mainthreadjobhandler-entry), [`InternalEntry`](/game-api/types/global-m-o/mainthreadjobhandler-internalentry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainThreadJobHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private "}<Link to="/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{" current"}</code> |  |
| <Link id="m-entries" /><code>{"private ConcurrentQueue<"}<Link to="/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{"> entries"}</code> |  |
| <Link id="m-millisecondallowance" /><code>{"private float millisecondAllowance"}</code> |  |
| <Link id="m-nextindex" /><code>{"private uint nextIndex"}</code> |  |
| <Link id="m-pool" /><code>{"private ConcurrentBag<"}<Link to="/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{"> pool"}</code> |  |
| <Link id="m-remainingcount" /><code>{"private int remainingCount"}</code> |  |
| <Link id="m-timer" /><code>{"private Stopwatch timer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-schedule" /><code><Link to="/game-api/types/global-m-o/mainthreadjobhandler-entry">{"MainThreadJobHandler.Entry"}</Link>{" Schedule(Action getTask, CancellationToken cancellationToken = null)"}</code> |  |
| <Link id="m-schedule-2" /><code><Link to="/game-api/types/global-m-o/mainthreadjobhandler-entry">{"MainThreadJobHandler.Entry"}</Link>{" Schedule(Func<IEnumerable> getTask, CancellationToken cancellationToken = null)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-wrap" /><code>{"private IEnumerable Wrap(Action task) (iterator)"}</code> |  |
