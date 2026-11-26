---
title: "DisposablePickup"
description: "Networked behaviour for a pickup that is used up: once disposed it is destroyed (after the player lets go) and not saved."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisposablePickup

A **class** in `Root.Township`, the global namespace.

Networked behaviour for a pickup that is used up: once disposed it is destroyed (after the player lets go) and not saved.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IDisposablePickup`](/mod/game-api/types/global-i-l/idisposablepickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisposablePickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaycoroutine" /><code>{"private Coroutine delayCoroutine"}</code> | <span className="api-desc">The running `DelayDispose` coroutine.</span> |
| <Link id="m-disposed" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" disposed"}</code> | <span className="api-desc">Event fired with the transform when the pickup is disposed, for effects.</span> |
| <Link id="m-disposeeffectdelay" /><code>{"private float disposeEffectDelay"}</code> | <span className="api-desc">Seconds after release before it is destroyed. Defaults to 0.5.</span> |
| <Link id="m-isdisposed" /><code>{"private bool isDisposed"}</code> | <span className="api-desc">Backing field for `IsDisposed`.</span> |
| <Link id="m-syncdispose" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDispose"}</code> | <span className="api-desc">Sync that tells clients to play the dispose effect.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-idisposablepickup-isdisposed" /><code>{"private bool IDisposablePickup.IsDisposed { get; }"}</code> | <span className="api-desc">Whether the pickup has been disposed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose-2" /><code>{"void Dispose(bool isForced = false)"}</code> | <span className="api-desc">Marks the pickup disposed and not saved, then destroys it now or once released. With `isForced`, the server destroys it at once.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the dispose sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: if already disposed, destroys the pickup when its interaction ends.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaydispose" /><code>{"private IEnumerator DelayDispose() (iterator)"}</code> | <span className="api-desc">Waits until nobody holds the pickup, then `disposeEffectDelay` seconds, then destroys it.</span> |
| <Link id="m-dispose" /><code>{"private void Dispose("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Marks the pickup disposed and not saved, then destroys it now or once released. With `isForced`, the server destroys it at once.</span> |
| <Link id="m-disposedestroy" /><code>{"private void DisposeDestroy()"}</code> | <span className="api-desc">Plays the dispose effect, tells clients, and destroys the entity.</span> |
| <Link id="m-networkdispose" /><code>{"private void NetworkDispose("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: plays the dispose effect, facing along the pickup's velocity.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DisposablePickup`:

<div className="api-used-in">

[`PotatoSapling.disposable`](/mod/game-api/types/global-p/potatosapling#m-disposable).

</div>
