---
title: "CurveOutput"
description: "A networked looping timer that runs a value along an AnimationCurve and sends it to a FloatUnityEvent every frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveOutput

A **class** in `Root.Township`, no namespace.

A networked looping timer that runs a value along an `AnimationCurve` and sends it to a `FloatUnityEvent` every frame. The server owns start, stop and reset and resyncs clients now and then; progress and running state are saved.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CurveOutputSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CurveOutputSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CurveOutputSaveData`](/game-api/types/global-c-d/curveoutputsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveOutput()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> | The running `UpdateTime` coroutine. |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Curve sampled with progress from 0 to 1. |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/global-c-d/curveoutputsavedata">{"CurveOutputSaveData"}</Link>{" data"}</code> | Saved state: progress and whether it is running. |
| <Link id="m-magnitude" /><code>{"private float magnitude"}</code> | Multiplier on the curve value. |
| <Link id="m-output" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" output"}</code> | Event that receives the value each frame. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Loops per second. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Start sync (also used for periodic resync). |
| <Link id="m-syncinterval" /><code>{"private float syncInterval"}</code> | Server: seconds between resyncs (60 by default). |
| <Link id="m-syncreset" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReset"}</code> | Reset sync. |
| <Link id="m-syncstop" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStop"}</code> | Stop sync. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the start, stop and reset syncs; on clients it turns periodic resync off. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: restarts the timer if the save says it was running. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player a start or stop sync with the current progress. |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> | Server: if running, stops, sets progress to 0, outputs the start value and tells clients to reset. |
| <Link id="m-setrunning" /><code>{"void SetRunning(bool isRunning)"}</code> | Calls `StartRunning` or `StopRunning`. Handy as a UnityEvent target. |
| <Link id="m-startrunning" /><code>{"void StartRunning()"}</code> | Server: starts the timer if it isn't running and tells clients. |
| <Link id="m-stoprunning" /><code>{"void StopRunning()"}</code> | Server: stops the timer if it is running and sends clients the progress it stopped at. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncreset-2" /><code>{"private void SyncReset("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: stops the timer, sets progress to 0 and outputs the start value. |
| <Link id="m-syncstart" /><code>{"private void SyncStart("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: reads the server's progress and restarts the timer from it. |
| <Link id="m-syncstop-2" /><code>{"private void SyncStop("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: reads the server's progress, stops the timer and outputs that value. |
| <Link id="m-updatetime" /><code>{"private IEnumerator UpdateTime() (iterator)"}</code> | Coroutine that outputs the curve value times `magnitude` each frame, advances progress by `speed` (wrapping at 1) and resyncs every `syncInterval`. |

</details>
