---
title: "SpawningTimerNew"
description: "Disposable timer for spawning code: wrap work in a using and it logs name, message, milliseconds and start frame to the spawning logger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawningTimerNew

A **class** in `Root.Township`, the global namespace.

Disposable timer for spawning code: wrap work in a `using` and it logs name, message, milliseconds and start frame to the spawning logger. Used by `SpawnManager` and `ChunkPrefabPointer`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawningTimerNew(string message, string objectName = null)"}</code> | <span className="api-desc">Creates a `SpawningTimerNew` from `message` and `objectName`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-framenumber" /><code>{"private int frameNumber"}</code> | <span className="api-desc">Frame the timer started on.</span> |
| <Link id="m-message" /><code>{"private string message"}</code> | <span className="api-desc">What is being timed.</span> |
| <Link id="m-stopwatch" /><code>{"private Stopwatch stopwatch"}</code> | <span className="api-desc">The running stopwatch.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-objectname" /><code>{"string ObjectName { get; set; }"}</code> | <span className="api-desc">Name of the object being timed, written first in the log line.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"private void System.IDisposable.Dispose()"}</code> | <span className="api-desc">Stops the timer and writes a trace line to `SpawningLogger`.</span> |

</details>
