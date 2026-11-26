---
title: "GarbageCollectTimer"
description: "Headless server only: runs a non-blocking garbage collection every few seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GarbageCollectTimer

A **class** in `Root.Township`, the global namespace.

Headless server only: runs a non-blocking garbage collection every few seconds. Only the first instance starts the loop.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Server lifecycle](/mod/game-api/networking/server-lifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GarbageCollectTimer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interval" /><code>{"private float interval"}</code> | <span className="api-desc">Seconds between collections (2 by default).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mode" /><code>{"private GCCollectionMode mode"}</code> | <span className="api-desc">GC collection mode (Optimized by default).</span> |
| <Link id="m-nexttime" /><code>{"private float nextTime"}</code> | <span className="api-desc">Not used.</span> |
| <Link id="m-rungccollect" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" runGcCollect"}</code> | <span className="api-desc">The shared GC coroutine, so only one runs.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rungarbagecollect" /><code>{"private IEnumerator RunGarbageCollect() (iterator)"}</code> | <span className="api-desc">Coroutine that collects all generations every `interval` seconds, forever.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Starts the shared GC loop if running headless and it isn't already running.</span> |

</details>
