---
title: "OptimizationManager"
description: "Client singleton that steps graphics quality (LOD bias and shadows) up or down based on frame time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptimizationManager

A **class** in `Root.Township`, the global namespace.

Client singleton that steps graphics quality (LOD bias and shadows) up or down based on frame time. It follows the local player, so it only does anything on a client.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Direction`](/mod/game-api/types/global-m-o/optimizationmanager-direction), [`QualitySetting`](/mod/game-api/types/global-m-o/optimizationmanager-qualitysetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptimizationManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/optimizationmanager">{"OptimizationManager"}</Link>{" instance"}</code> | <span className="api-desc">The single instance, set in `Awake`.</span> |

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adjustmentdelay" /><code>{"private float adjustmentDelay"}</code> | <span className="api-desc">Seconds to wait after a quality change before measuring again.</span> |
| <Link id="m-coroutine" /><code>{"private Coroutine coroutine"}</code> | <span className="api-desc">The running measuring coroutine, if any.</span> |
| <Link id="m-currentlevel" /><code>{"private int currentLevel"}</code> | <span className="api-desc">Backing field for `CurrentLevel`.</span> |
| <Link id="m-defaultlevel" /><code>{"private int defaultLevel"}</code> | <span className="api-desc">Quality level applied on `Awake`.</span> |
| <Link id="m-framecounttostep" /><code>{"private int frameCountToStep"}</code> | <span className="api-desc">How many slow or fast frames in a row trigger a step.</span> |
| <Link id="m-maxlevel" /><code>{"private int maxLevel"}</code> | <span className="api-desc">Highest quality level index.</span> |
| <Link id="m-qualitylevels" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/optimizationmanager-qualitysetting">{"OptimizationManager.QualitySetting"}</Link>{"[] qualityLevels"}</code> | <span className="api-desc">The quality presets, from best to cheapest.</span> |
| <Link id="m-stepdirection" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/optimizationmanager-direction">{"OptimizationManager.Direction"}</Link>{" stepDirection"}</code> | <span className="api-desc">Pending step (performance up, still or graphics up) applied on the next player move.</span> |
| <Link id="m-stepdownfps" /><code>{"private float stepDownFPS"}</code> | <span className="api-desc">FPS below which quality is lowered (60 by default).</span> |
| <Link id="m-stepupfps" /><code>{"private float stepUpFPS"}</code> | <span className="api-desc">FPS above which quality is raised (85 by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel-2" /><code>{"int CurrentLevel { get; }"}</code> | <span className="api-desc">Index of the quality level in use. Higher means lower quality.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stepdownfps-2" /><code>{"private float StepDownFPS { get; set; }"}</code> | <span className="api-desc">Frame time in milliseconds above which a frame counts as slow, from `stepDownFPS`.</span> |
| <Link id="m-stepupfps-2" /><code>{"private float StepUpFPS { get; set; }"}</code> | <span className="api-desc">Frame time in milliseconds below which a frame counts as fast, from `stepUpFPS`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run-2" /><code>{"void Run()"}</code> | <span className="api-desc">Restarts the `PerformanceMeasure` coroutine.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Stops the running measuring coroutine.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `instance`, applies the default quality level, and hooks the local player's movement.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the local player events.</span> |
| <Link id="m-performancemeasure" /><code>{"private IEnumerator PerformanceMeasure() (iterator)"}</code> | <span className="api-desc">Coroutine started by `Run`: after enough slow or fast frames in a row it steps quality down or up, then waits.</span> |
| <Link id="m-performancemeasureonposition" /><code>{"private IEnumerator PerformanceMeasureOnPosition() (iterator)"}</code> | <span className="api-desc">Coroutine that watches frame times and nudges `stepDirection`, which is applied the next time the player moves.</span> |
| <Link id="m-run" /><code>{"private void Run("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Restarts the `PerformanceMeasure` coroutine.</span> |
| <Link id="m-updatelocalplayer" /><code>{"private void UpdateLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Hooks the local player's `PositionChanged` so quality steps happen when they move.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller, Vector3 from, Vector3 to, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">On player movement, applies any pending quality step and starts the position-based measuring coroutine.</span> |

</details>
