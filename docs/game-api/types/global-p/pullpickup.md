---
title: "PullPickup"
description: "class PullPickup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PullPickup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`PullEvent`](/game-api/types/global-p/pullevent), [`PullEventHandler`](/game-api/types/global-p/pulleventhandler)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PullPickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-isreleasingtargetonpull" /><code>{"private bool isReleasingTargetOnPull"}</code> |  |
| <Link id="m-pullcoroutine" /><code>{"private Coroutine pullCoroutine"}</code> |  |
| <Link id="m-pulldirection" /><code>{"private Vector3 pullDirection"}</code> |  |
| <Link id="m-pulldistance" /><code>{"private float pullDistance"}</code> |  |
| <Link id="m-pulledonclient" /><code>{"private "}<Link to="/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnClient"}</code> |  |
| <Link id="m-pulledonserver" /><code>{"private "}<Link to="/game-api/types/global-p/pullevent">{"PullEvent"}</Link>{" pulledOnServer"}</code> |  |
| <Link id="m-syncforward" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncForward"}</code> |  |
| <Link id="m-syncpulled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPulled"}</code> |  |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetPickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-pulldistance-2" /><code>{"float PullDistance { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-pull" /><code>{"void Pull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> |  |
| <Link id="m-settargetpickup" /><code>{"void SetTargetPickup("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetPickup)"}</code> |  |
| <Link id="m-checkpull" /><code>{"private IEnumerator CheckPull("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-handleforward" /><code>{"private void HandleForward(bool isSettingForward)"}</code> |  |
| <Link id="m-offsethandtargetforgrabassist" /><code>{"private static void OffsetHandTargetForGrabAssist("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-syncforward-2" /><code>{"private void SyncForward("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSettingForward)"}</code> |  |
| <Link id="m-syncpulled-2" /><code>{"private void SyncPulled("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PullPickup`:

[`DisposablePickupHolder.pullPickup`](/game-api/types/global-c-d/disposablepickupholder#m-pullpickup), [`SpawnBuried.pullUpPickup`](/game-api/types/global-s/spawnburied#m-pulluppickup).
