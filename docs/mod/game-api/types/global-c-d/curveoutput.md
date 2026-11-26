---
title: "CurveOutput"
description: "A networked looping timer that runs a value along an AnimationCurve and sends it to a FloatUnityEvent every frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveOutput

A **class** in `Root.Township`, the global namespace.

A networked looping timer that runs a value along an `AnimationCurve` and sends it to a `FloatUnityEvent` every frame. The server owns start, stop and reset and resyncs clients now and then; progress and running state are saved.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CurveOutputSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CurveOutputSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CurveOutputSaveData`](/mod/game-api/types/global-c-d/curveoutputsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveOutput()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> | <span className="api-desc">The running `UpdateTime` coroutine.</span> |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Curve sampled with progress from 0 to 1.</span> |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curveoutputsavedata">{"CurveOutputSaveData"}</Link>{" data"}</code> | <span className="api-desc">Saved state: progress and whether it is running.</span> |
| <Link id="m-magnitude" /><code>{"private float magnitude"}</code> | <span className="api-desc">Multiplier on the curve value.</span> |
| <Link id="m-output" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" output"}</code> | <span className="api-desc">Event that receives the value each frame.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Loops per second.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Start sync (also used for periodic resync).</span> |
| <Link id="m-syncinterval" /><code>{"private float syncInterval"}</code> | <span className="api-desc">Server: seconds between resyncs (60 by default).</span> |
| <Link id="m-syncreset" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReset"}</code> | <span className="api-desc">Reset sync.</span> |
| <Link id="m-syncstop" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStop"}</code> | <span className="api-desc">Stop sync.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the start, stop and reset syncs; on clients it turns periodic resync off.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: restarts the timer if the save says it was running.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player a start or stop sync with the current progress.</span> |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> | <span className="api-desc">Server: if running, stops, sets progress to 0, outputs the start value and tells clients to reset.</span> |
| <Link id="m-setrunning" /><code>{"void SetRunning(bool isRunning)"}</code> | <span className="api-desc">Calls `StartRunning` or `StopRunning`. Handy as a UnityEvent target.</span> |
| <Link id="m-startrunning" /><code>{"void StartRunning()"}</code> | <span className="api-desc">Server: starts the timer if it isn't running and tells clients.</span> |
| <Link id="m-stoprunning" /><code>{"void StopRunning()"}</code> | <span className="api-desc">Server: stops the timer if it is running and sends clients the progress it stopped at.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncreset-2" /><code>{"private void SyncReset("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: stops the timer, sets progress to 0 and outputs the start value.</span> |
| <Link id="m-syncstart" /><code>{"private void SyncStart("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: reads the server's progress and restarts the timer from it.</span> |
| <Link id="m-syncstop-2" /><code>{"private void SyncStop("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: reads the server's progress, stops the timer and outputs that value.</span> |
| <Link id="m-updatetime" /><code>{"private IEnumerator UpdateTime() (iterator)"}</code> | <span className="api-desc">Coroutine that outputs the curve value times `magnitude` each frame, advances progress by `speed` (wrapping at 1) and resyncs every `syncInterval`.</span> |

</details>
