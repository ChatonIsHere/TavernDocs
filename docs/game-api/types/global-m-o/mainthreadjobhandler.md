---
title: "MainThreadJobHandler"
description: "Singleton that runs scheduled work on the main thread a bit each frame, within a time budget."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler

A **class** in `Root.Township`, no namespace.

Singleton that runs scheduled work on the main thread a bit each frame, within a time budget. Other threads await the returned `Entry`; world generation uses it for raycasts.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`SingletonBehaviour<MainThreadJobHandler>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`MainThreadJobHandler`](/game-api/types/global-m-o/mainthreadjobhandler)
- **Nested types** [`Entry`](/game-api/types/global-m-o/mainthreadjobhandler-entry), [`InternalEntry`](/game-api/types/global-m-o/mainthreadjobhandler-internalentry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainThreadJobHandler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private "}<Link to="/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{" current"}</code> | The job being run, kept across frames when it runs out of time. |
| <Link id="m-entries" /><code>{"private ConcurrentQueue<"}<Link to="/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{"> entries"}</code> | Thread-safe queue of waiting jobs. |
| <Link id="m-millisecondallowance" /><code>{"private float millisecondAllowance"}</code> | Milliseconds of jobs allowed per frame (default 3). |
| <Link id="m-nextindex" /><code>{"private uint nextIndex"}</code> | Counter for job indexes. |
| <Link id="m-pool" /><code>{"private ConcurrentBag<"}<Link to="/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{"> pool"}</code> | Pool of reusable entries. Nothing returns entries to it, so it stays empty. |
| <Link id="m-remainingcount" /><code>{"private int remainingCount"}</code> | Read-only inspector count that nothing updates. |
| <Link id="m-timer" /><code>{"private Stopwatch timer"}</code> | Stopwatch for the per-frame budget. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-schedule" /><code><Link to="/game-api/types/global-m-o/mainthreadjobhandler-entry">{"MainThreadJobHandler.Entry"}</Link>{" Schedule(Action getTask, CancellationToken cancellationToken = null)"}</code> | Queues an action or a step-by-step `IEnumerable` job and returns an awaitable entry that gives false if cancelled. |
| <Link id="m-schedule-2" /><code><Link to="/game-api/types/global-m-o/mainthreadjobhandler-entry">{"MainThreadJobHandler.Entry"}</Link>{" Schedule(Func<IEnumerable> getTask, CancellationToken cancellationToken = null)"}</code> | Queues an action or a step-by-step `IEnumerable` job and returns an awaitable entry that gives false if cancelled. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Runs queued jobs in order until `millisecondAllowance` is used up, resuming the current job next frame. |
| <Link id="m-wrap" /><code>{"private IEnumerable Wrap(Action task) (iterator)"}</code> | Turns a plain action into a one-step job. |

</details>
