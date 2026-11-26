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
| <Link id="m-ctor" /><code>{"GarbageCollectTimer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interval" /><code>{"private float interval"}</code> | Seconds between collections (2 by default). |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mode" /><code>{"private GCCollectionMode mode"}</code> | GC collection mode (Optimized by default). |
| <Link id="m-nexttime" /><code>{"private float nextTime"}</code> | Not used. |
| <Link id="m-rungccollect" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" runGcCollect"}</code> | The shared GC coroutine, so only one runs. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rungarbagecollect" /><code>{"private IEnumerator RunGarbageCollect() (iterator)"}</code> | Coroutine that collects all generations every `interval` seconds, forever. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Starts the shared GC loop if running headless and it isn't already running. |

</details>
