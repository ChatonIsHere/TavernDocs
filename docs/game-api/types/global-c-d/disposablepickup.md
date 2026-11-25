---
title: "DisposablePickup"
description: "class DisposablePickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisposablePickup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDisposablePickup`](/game-api/types/global-i-l/idisposablepickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisposablePickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-delaycoroutine" /><code>{"private Coroutine delayCoroutine"}</code> |  |
| <Link id="m-disposed" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" disposed"}</code> |  |
| <Link id="m-disposeeffectdelay" /><code>{"private float disposeEffectDelay"}</code> |  |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> |  |
| <Link id="m-syncdispose" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDispose"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-idisposablepickup-isdisposed" /><code>{"private bool IDisposablePickup.IsDisposed { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"void Dispose(bool isForced = false)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-delaydispose" /><code>{"private IEnumerator DelayDispose() (iterator)"}</code> |  |
| <Link id="m-dispose" /><code>{"private void Dispose("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-disposedestroy" /><code>{"private void DisposeDestroy()"}</code> |  |
| <Link id="m-networkdispose" /><code>{"private void NetworkDispose("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DisposablePickup`:

[`PotatoSapling.disposable`](/game-api/types/global-p/potatosapling#m-disposable).
