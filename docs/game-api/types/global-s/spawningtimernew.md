---
title: "SpawningTimerNew"
description: "Disposable timer for spawning code: wrap work in a using and it logs name, message, milliseconds and start frame to the spawning logger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawningTimerNew

A **class** in `Root.Township`, no namespace.

Disposable timer for spawning code: wrap work in a `using` and it logs name, message, milliseconds and start frame to the spawning logger. Used by `SpawnManager` and `ChunkPrefabPointer`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawningTimerNew(string message, string objectName = null)"}</code> | Creates a `SpawningTimerNew` from `message` and `objectName`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-framenumber" /><code>{"private int frameNumber"}</code> | Frame the timer started on. |
| <Link id="m-message" /><code>{"private string message"}</code> | What is being timed. |
| <Link id="m-stopwatch" /><code>{"private Stopwatch stopwatch"}</code> | The running stopwatch. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-objectname" /><code>{"string ObjectName { get; set; }"}</code> | Name of the object being timed, written first in the log line. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"private void System.IDisposable.Dispose()"}</code> | Stops the timer and writes a trace line to `SpawningLogger`. |

</details>
