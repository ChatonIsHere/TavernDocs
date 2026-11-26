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

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's transform, cached. |
| <Link id="m-isreleasingtargetonpull" /><code>{"private bool isReleasingTargetOnPull"}</code> | If true, the target stays released after the pull instead of being forwarded again. |
| <Link id="m-pullcoroutine" /><code>{"private Coroutine pullCoroutine"}</code> | Running `CheckPull`, or null. |
| <Link id="m-pulldirection" /><code>{"private Vector3 pullDirection"}</code> | Local direction the hand must pull in. |
| <Link id="m-pulldistance" /><code>{"private float pullDistance"}</code> | Backing field for `PullDistance`, at least 0.05. |
| <Link id="m-pulledonclient" /><code>{"private "}<Link to="/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnClient"}</code> | Event run on clients when pulled. |
| <Link id="m-pulledonserver" /><code>{"private "}<Link to="/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnServer"}</code> | Event run on the server when pulled. |
| <Link id="m-syncforward" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncForward"}</code> | Method sync for the forward state. |
| <Link id="m-syncpulled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPulled"}</code> | Method sync for the pull. |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetPickup"}</code> | The interactable pulled free (for example a cork or a sword in a stone). While null, this pickup is disabled. |

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

| Member | What it is |
| --- | --- |
| <Link id="m-checkpull" /><code>{"private IEnumerator CheckPull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Server coroutine: while the hand holds this pickup, pulls once the hand has moved `pullDistance` along `pullDirection`. |
| <Link id="m-handleforward" /><code>{"private void HandleForward(bool isSettingForward)"}</code> | Starts or stops forwarding grabs of the target to this pickup. With `isReleasingTargetOnPull`, the server also makes the target save on its own. |
| <Link id="m-offsethandtargetforgrabassist" /><code>{"private static void OffsetHandTargetForGrabAssist("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Offsets the hand target when grab assist picks it up from more than about 0.3 m away. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the pull direction and distance in the editor. |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: starts `CheckPull` when someone grabs this pickup. |
| <Link id="m-syncforward-2" /><code>{"private void SyncForward("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSettingForward)"}</code> | Syncs whether grabs are forwarded; the server relays it to the chunk. |
| <Link id="m-syncpulled-2" /><code>{"private void SyncPulled("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs a pull; the server relays it and runs its event, clients free the target and play the pull event. |

</details>

## Used in

Members of other types that take, return or hold a `PullPickup`:

[`DisposablePickupHolder.pullPickup`](/game-api/types/global-c-d/disposablepickupholder#m-pullpickup), [`SpawnBuried.pullUpPickup`](/game-api/types/global-s/spawnburied#m-pulluppickup).
