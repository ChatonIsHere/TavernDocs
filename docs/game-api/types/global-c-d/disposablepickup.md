---
title: "DisposablePickup"
description: "Networked behaviour for a pickup that is used up: once disposed it is destroyed (after the player lets go) and not saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisposablePickup

A **class** in `Root.Township`, no namespace.

Networked behaviour for a pickup that is used up: once disposed it is destroyed (after the player lets go) and not saved.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IDisposablePickup`](/game-api/types/global-i-l/idisposablepickup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DisposablePickup()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaycoroutine" /><code>{"private Coroutine delayCoroutine"}</code> | The running `DelayDispose` coroutine. |
| <Link id="m-disposed" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" disposed"}</code> | Event fired with the transform when the pickup is disposed, for effects. |
| <Link id="m-disposeeffectdelay" /><code>{"private float disposeEffectDelay"}</code> | Seconds after release before it is destroyed. Defaults to 0.5. |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | Backing field for `IsDisposed`. |
| <Link id="m-syncdispose" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDispose"}</code> | Sync that tells clients to play the dispose effect. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-idisposablepickup-isdisposed" /><code>{"private bool IDisposablePickup.IsDisposed { get; }"}</code> | Whether the pickup has been disposed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"void Dispose(bool isForced = false)"}</code> | Marks the pickup disposed and not saved, then destroys it now or once released. With `isForced`, the server destroys it at once. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the dispose sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: if already disposed, destroys the pickup when its interaction ends. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaydispose" /><code>{"private IEnumerator DelayDispose() (iterator)"}</code> | Waits until nobody holds the pickup, then `disposeEffectDelay` seconds, then destroys it. |
| <Link id="m-dispose" /><code>{"private void Dispose("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Marks the pickup disposed and not saved, then destroys it now or once released. With `isForced`, the server destroys it at once. |
| <Link id="m-disposedestroy" /><code>{"private void DisposeDestroy()"}</code> | Plays the dispose effect, tells clients, and destroys the entity. |
| <Link id="m-networkdispose" /><code>{"private void NetworkDispose("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: plays the dispose effect, facing along the pickup's velocity. |

</details>

## Used in

Members of other types that take, return or hold a `DisposablePickup`:

[`PotatoSapling.disposable`](/game-api/types/global-p/potatosapling#m-disposable).
