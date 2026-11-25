---
title: "CurveOutput"
description: "class CurveOutput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveOutput

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CurveOutputSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CurveOutputSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CurveOutputSaveData`](/game-api/types/global-c-d/curveoutputsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveOutput()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" coroutine"}</code> |  |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> |  |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/global-c-d/curveoutputsavedata">{"CurveOutputSaveData"}</Link>{" data"}</code> |  |
| <Link id="m-magnitude" /><code>{"private float magnitude"}</code> |  |
| <Link id="m-output" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" output"}</code> |  |
| <Link id="m-speed" /><code>{"private float speed"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-syncinterval" /><code>{"private float syncInterval"}</code> |  |
| <Link id="m-syncreset" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReset"}</code> |  |
| <Link id="m-syncstop" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStop"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-resetstate" /><code>{"void ResetState()"}</code> |  |
| <Link id="m-setrunning" /><code>{"void SetRunning(bool isRunning)"}</code> |  |
| <Link id="m-startrunning" /><code>{"void StartRunning()"}</code> |  |
| <Link id="m-stoprunning" /><code>{"void StopRunning()"}</code> |  |
| <Link id="m-syncreset-2" /><code>{"private void SyncReset("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstart" /><code>{"private void SyncStart("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstop-2" /><code>{"private void SyncStop("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatetime" /><code>{"private IEnumerator UpdateTime() (iterator)"}</code> |  |
