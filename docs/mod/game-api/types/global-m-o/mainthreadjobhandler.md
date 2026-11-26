---
title: "MainThreadJobHandler"
description: "Singleton that runs scheduled work on the main thread a bit each frame, within a time budget."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainThreadJobHandler

A **class** in `Root.Township`, the global namespace.

Singleton that runs scheduled work on the main thread a bit each frame, within a time budget. Other threads await the returned `Entry`; world generation uses it for raycasts.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SingletonBehaviour<MainThreadJobHandler>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`MainThreadJobHandler`](/mod/game-api/types/global-m-o/mainthreadjobhandler)
- **Nested types** [`Entry`](/mod/game-api/types/global-m-o/mainthreadjobhandler-entry), [`InternalEntry`](/mod/game-api/types/global-m-o/mainthreadjobhandler-internalentry)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainThreadJobHandler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{" current"}</code> | <span className="api-desc">The job being run, kept across frames when it runs out of time.</span> |
| <Link id="m-entries" /><code>{"private ConcurrentQueue<"}<Link to="/mod/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{"> entries"}</code> | <span className="api-desc">Thread-safe queue of waiting jobs.</span> |
| <Link id="m-millisecondallowance" /><code>{"private float millisecondAllowance"}</code> | <span className="api-desc">Milliseconds of jobs allowed per frame (default 3).</span> |
| <Link id="m-nextindex" /><code>{"private uint nextIndex"}</code> | <span className="api-desc">Counter for job indexes.</span> |
| <Link id="m-pool" /><code>{"private ConcurrentBag<"}<Link to="/mod/game-api/types/global-m-o/mainthreadjobhandler-internalentry">{"MainThreadJobHandler.InternalEntry"}</Link>{"> pool"}</code> | <span className="api-desc">Pool of reusable entries. Nothing returns entries to it, so it stays empty.</span> |
| <Link id="m-remainingcount" /><code>{"private int remainingCount"}</code> | <span className="api-desc">Read-only inspector count that nothing updates.</span> |
| <Link id="m-timer" /><code>{"private Stopwatch timer"}</code> | <span className="api-desc">Stopwatch for the per-frame budget.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-schedule" /><code><Link to="/mod/game-api/types/global-m-o/mainthreadjobhandler-entry">{"MainThreadJobHandler.Entry"}</Link>{" Schedule(Action getTask, CancellationToken cancellationToken = null)"}</code> | <span className="api-desc">Queues an action or a step-by-step `IEnumerable` job and returns an awaitable entry that gives false if cancelled.</span> |
| <Link id="m-schedule-2" /><code><Link to="/mod/game-api/types/global-m-o/mainthreadjobhandler-entry">{"MainThreadJobHandler.Entry"}</Link>{" Schedule(Func<IEnumerable> getTask, CancellationToken cancellationToken = null)"}</code> | <span className="api-desc">Queues an action or a step-by-step `IEnumerable` job and returns an awaitable entry that gives false if cancelled.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Runs queued jobs in order until `millisecondAllowance` is used up, resuming the current job next frame.</span> |
| <Link id="m-wrap" /><code>{"private IEnumerable Wrap(Action task) (iterator)"}</code> | <span className="api-desc">Turns a plain action into a one-step job.</span> |

</details>
