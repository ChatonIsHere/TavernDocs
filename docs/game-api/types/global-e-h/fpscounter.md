---
title: "FPSCounter"
description: "Measures frame rate as a smoothed average each frame and exposes it statically."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FPSCounter

A **class** in `Root.Township`, no namespace.

Measures frame rate as a smoothed average each frame and exposes it statically. Server diagnostics, the frame limiter and physics timing read it.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FPSCounter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-framemodification" /><code>{"private float frameModification"}</code> | Weight of the newest frame in the smoothing (0.1 by default). |
| <Link id="m-stopwatch" /><code>{"private readonly Stopwatch stopwatch"}</code> | Times each frame. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fps" /><code>{"static float FPS { get; private set; }"}</code> | Smoothed frames per second. |
| <Link id="m-fpsrecord" /><code>{"static "}<Link to="/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" FPSRecord { get; }"}</code> | Running average of `FPS` values, reset and read by chunk loading profiling. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts the frame stopwatch. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Blends the latest frame's rate into `FPS` and records it. |

</details>
