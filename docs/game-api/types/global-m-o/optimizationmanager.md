---
title: "OptimizationManager"
description: "Client singleton that steps graphics quality (LOD bias and shadows) up or down based on frame time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptimizationManager

A **class** in `Root.Township`, no namespace.

Client singleton that steps graphics quality (LOD bias and shadows) up or down based on frame time. It follows the local player, so it only does anything on a client.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Direction`](/game-api/types/global-m-o/optimizationmanager-direction), [`QualitySetting`](/game-api/types/global-m-o/optimizationmanager-qualitysetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptimizationManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-m-o/optimizationmanager">{"OptimizationManager"}</Link>{" instance"}</code> | The single instance, set in `Awake`. |

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustmentdelay" /><code>{"private float adjustmentDelay"}</code> | Seconds to wait after a quality change before measuring again. |
| <Link id="m-coroutine" /><code>{"private Coroutine coroutine"}</code> | The running measuring coroutine, if any. |
| <Link id="m-currentlevel" /><code>{"private int currentLevel"}</code> | Backing field for `CurrentLevel`. |
| <Link id="m-defaultlevel" /><code>{"private int defaultLevel"}</code> | Quality level applied on `Awake`. |
| <Link id="m-framecounttostep" /><code>{"private int frameCountToStep"}</code> | How many slow or fast frames in a row trigger a step. |
| <Link id="m-maxlevel" /><code>{"private int maxLevel"}</code> | Highest quality level index. |
| <Link id="m-qualitylevels" /><code>{"private "}<Link to="/game-api/types/global-m-o/optimizationmanager-qualitysetting">{"OptimizationManager.QualitySetting"}</Link>{"[] qualityLevels"}</code> | The quality presets, from best to cheapest. |
| <Link id="m-stepdirection" /><code>{"private "}<Link to="/game-api/types/global-m-o/optimizationmanager-direction">{"OptimizationManager.Direction"}</Link>{" stepDirection"}</code> | Pending step (performance up, still or graphics up) applied on the next player move. |
| <Link id="m-stepdownfps" /><code>{"private float stepDownFPS"}</code> | FPS below which quality is lowered (60 by default). |
| <Link id="m-stepupfps" /><code>{"private float stepUpFPS"}</code> | FPS above which quality is raised (85 by default). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel-2" /><code>{"int CurrentLevel { get; }"}</code> | Index of the quality level in use. Higher means lower quality. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stepdownfps-2" /><code>{"private float StepDownFPS { get; set; }"}</code> | Frame time in milliseconds above which a frame counts as slow, from `stepDownFPS`. |
| <Link id="m-stepupfps-2" /><code>{"private float StepUpFPS { get; set; }"}</code> | Frame time in milliseconds below which a frame counts as fast, from `stepUpFPS`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run-2" /><code>{"void Run()"}</code> | Restarts the `PerformanceMeasure` coroutine. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Stops the running measuring coroutine. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `instance`, applies the default quality level, and hooks the local player's movement. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the local player events. |
| <Link id="m-performancemeasure" /><code>{"private IEnumerator PerformanceMeasure() (iterator)"}</code> | Coroutine started by `Run`: after enough slow or fast frames in a row it steps quality down or up, then waits. |
| <Link id="m-performancemeasureonposition" /><code>{"private IEnumerator PerformanceMeasureOnPosition() (iterator)"}</code> | Coroutine that watches frame times and nudges `stepDirection`, which is applied the next time the player moves. |
| <Link id="m-run" /><code>{"private void Run("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Restarts the `PerformanceMeasure` coroutine. |
| <Link id="m-updatelocalplayer" /><code>{"private void UpdateLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Hooks the local player's `PositionChanged` so quality steps happen when they move. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller, Vector3 from, Vector3 to, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | On player movement, applies any pending quality step and starts the position-based measuring coroutine. |

</details>
