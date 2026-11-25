---
title: "PullPickup"
description: "A stand-in pickup that forwards grabs to a target item and hands it over when pulled far enough in a set direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullPickup

A **class** in `Root.Township`, no namespace.

A stand-in pickup that forwards grabs to a target item and hands it over when pulled far enough in a set direction. Used for buried items when digging. The server checks the pull.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`PullEvent`](/game-api/types/global-p/pullevent), [`PullEventHandler`](/game-api/types/global-p/pulleventhandler)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PullPickup()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-isreleasingtargetonpull" /><code>{"private bool isReleasingTargetOnPull"}</code> |
| <Link id="m-pullcoroutine" /><code>{"private Coroutine pullCoroutine"}</code> |
| <Link id="m-pulldirection" /><code>{"private Vector3 pullDirection"}</code> |
| <Link id="m-pulldistance" /><code>{"private float pullDistance"}</code> |
| <Link id="m-pulledonclient" /><code>{"private "}<Link to="/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnClient"}</code> |
| <Link id="m-pulledonserver" /><code>{"private "}<Link to="/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnServer"}</code> |
| <Link id="m-syncforward" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncForward"}</code> |
| <Link id="m-syncpulled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPulled"}</code> |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetPickup"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | This entity's `Pickup`. |
| <Link id="m-pulldistance-2" /><code>{"float PullDistance { get; set; }"}</code> | How far (local units) the hand has to move along the pull direction. Minimum 0.05. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up forwarding to the target (or disables the pickup with no target) and the sync messages. |
| <Link id="m-pull" /><code>{"void Pull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> | Releases the target: swaps the interactor's grab to it, or with no interactor pops it up and makes it physical. Then fires the pulled events. |
| <Link id="m-settargetpickup" /><code>{"void SetTargetPickup("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetPickup)"}</code> | Sets the target if none is set yet and starts forwarding its grabs to this pickup. |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkpull" /><code>{"private IEnumerator CheckPull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |
| <Link id="m-handleforward" /><code>{"private void HandleForward(bool isSettingForward)"}</code> |
| <Link id="m-offsethandtargetforgrabassist" /><code>{"private static void OffsetHandTargetForGrabAssist("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncforward-2" /><code>{"private void SyncForward("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSettingForward)"}</code> |
| <Link id="m-syncpulled-2" /><code>{"private void SyncPulled("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PullPickup`:

[`DisposablePickupHolder.pullPickup`](/game-api/types/global-c-d/disposablepickupholder#m-pullpickup), [`SpawnBuried.pullUpPickup`](/game-api/types/global-s/spawnburied#m-pulluppickup).
