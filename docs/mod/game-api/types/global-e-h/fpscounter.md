---
title: "FPSCounter"
description: "Measures frame rate as a smoothed average each frame and exposes it statically."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FPSCounter

A **class** in `Root.Township`, the global namespace.

Measures frame rate as a smoothed average each frame and exposes it statically. Server diagnostics, the frame limiter and physics timing read it.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FPSCounter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-framemodification" /><code>{"private float frameModification"}</code> | <span className="api-desc">Weight of the newest frame in the smoothing (0.1 by default).</span> |
| <Link id="m-stopwatch" /><code>{"private readonly Stopwatch stopwatch"}</code> | <span className="api-desc">Times each frame.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fps" /><code>{"static float FPS { get; private set; }"}</code> | <span className="api-desc">Smoothed frames per second.</span> |
| <Link id="m-fpsrecord" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/averagenumber">{"AverageNumber"}</Link>{" FPSRecord { get; }"}</code> | <span className="api-desc">Running average of `FPS` values, reset and read by chunk loading profiling.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts the frame stopwatch.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Blends the latest frame's rate into `FPS` and records it.</span> |

</details>
