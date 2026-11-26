---
title: "PullPickup"
description: "A stand-in pickup that forwards grabs to a target item and hands it over when pulled far enough in a set direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullPickup

A **class** in `Root.Township`, the global namespace.

A stand-in pickup that forwards grabs to a target item and hands it over when pulled far enough in a set direction. Used for buried items when digging. The server checks the pull.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`PullEvent`](/mod/game-api/types/global-p/pullevent), [`PullEventHandler`](/mod/game-api/types/global-p/pulleventhandler)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's transform, cached.</span> |
| <Link id="m-isreleasingtargetonpull" /><code>{"private bool isReleasingTargetOnPull"}</code> | <span className="api-desc">If true, the target stays released after the pull instead of being forwarded again.</span> |
| <Link id="m-pullcoroutine" /><code>{"private Coroutine pullCoroutine"}</code> | <span className="api-desc">Running `CheckPull`, or null.</span> |
| <Link id="m-pulldirection" /><code>{"private Vector3 pullDirection"}</code> | <span className="api-desc">Local direction the hand must pull in.</span> |
| <Link id="m-pulldistance" /><code>{"private float pullDistance"}</code> | <span className="api-desc">Backing field for `PullDistance`, at least 0.05.</span> |
| <Link id="m-pulledonclient" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnClient"}</code> | <span className="api-desc">Event run on clients when pulled.</span> |
| <Link id="m-pulledonserver" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnServer"}</code> | <span className="api-desc">Event run on the server when pulled.</span> |
| <Link id="m-syncforward" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncForward"}</code> | <span className="api-desc">Method sync for the forward state.</span> |
| <Link id="m-syncpulled" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPulled"}</code> | <span className="api-desc">Method sync for the pull.</span> |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetPickup"}</code> | <span className="api-desc">The interactable pulled free (for example a cork or a sword in a stone). While null, this pickup is disabled.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">This entity's `Pickup`.</span> |
| <Link id="m-pulldistance-2" /><code>{"float PullDistance { get; set; }"}</code> | <span className="api-desc">How far (local units) the hand has to move along the pull direction. Minimum 0.05.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up forwarding to the target (or disables the pickup with no target) and the sync messages.</span> |
| <Link id="m-pull" /><code>{"void Pull("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> | <span className="api-desc">Releases the target: swaps the interactor's grab to it, or with no interactor pops it up and makes it physical. Then fires the pulled events.</span> |
| <Link id="m-settargetpickup" /><code>{"void SetTargetPickup("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetPickup)"}</code> | <span className="api-desc">Sets the target if none is set yet and starts forwarding its grabs to this pickup.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpull" /><code>{"private IEnumerator CheckPull("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Server coroutine: while the hand holds this pickup, pulls once the hand has moved `pullDistance` along `pullDirection`.</span> |
| <Link id="m-handleforward" /><code>{"private void HandleForward(bool isSettingForward)"}</code> | <span className="api-desc">Starts or stops forwarding grabs of the target to this pickup. With `isReleasingTargetOnPull`, the server also makes the target save on its own.</span> |
| <Link id="m-offsethandtargetforgrabassist" /><code>{"private static void OffsetHandTargetForGrabAssist("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Offsets the hand target when grab assist picks it up from more than about 0.3 m away.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the pull direction and distance in the editor.</span> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: starts `CheckPull` when someone grabs this pickup.</span> |
| <Link id="m-syncforward-2" /><code>{"private void SyncForward("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSettingForward)"}</code> | <span className="api-desc">Syncs whether grabs are forwarded; the server relays it to the chunk.</span> |
| <Link id="m-syncpulled-2" /><code>{"private void SyncPulled("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs a pull; the server relays it and runs its event, clients free the target and play the pull event.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PullPickup`:

<div className="api-used-in">

[`DisposablePickupHolder.pullPickup`](/mod/game-api/types/global-c-d/disposablepickupholder#m-pullpickup), [`SpawnBuried.pullUpPickup`](/mod/game-api/types/global-s/spawnburied#m-pulluppickup).

</div>
