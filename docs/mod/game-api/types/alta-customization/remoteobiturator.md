---
title: "RemoteObiturator"
description: "The hand camera's detachable remote."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteObiturator

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

The hand camera's detachable remote. It sits in a slot on the camera; the owner pulls it out to use as a remote shutter and puts it back by bringing it close. Slot state is synced.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteObiturator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancetodeslotsquared" /><code>{"private float distanceToDeslotSquared"}</code> | <span className="api-desc">Squared hand movement needed to pull the remote out of the slot.</span> |
| <Link id="m-distancetoreslotsquared" /><code>{"private float distanceToReslotSquared"}</code> | <span className="api-desc">Squared distance from the slot at which a held remote snaps back.</span> |
| <Link id="m-fakepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" fakePickup"}</code> | <span className="api-desc">Pickup grabbed while the remote is slotted, used to detect pulling it out.</span> |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | <span className="api-desc">The camera this remote belongs to.</span> |
| <Link id="m-issloted" /><code>{"private bool isSloted"}</code> | <span className="api-desc">True while the remote is in its slot. Synced.</span> |
| <Link id="m-levitator" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/itemlevitator">{"ItemLevitator"}</Link>{" levitator"}</code> | <span className="api-desc">Item levitator for the remote, blocked from hovering while slotted.</span> |
| <Link id="m-maxdistancefromcamerasquared" /><code>{"private float maxDistanceFromCameraSquared"}</code> | <span className="api-desc">Squared distance from the camera beyond which the remote returns to the slot.</span> |
| <Link id="m-movementcheck" /><code>{"private Coroutine movementCheck"}</code> | <span className="api-desc">The running detach or slot check coroutine.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The real remote pickup used once unslotted.</span> |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> | <span className="api-desc">Renderers hidden during hand camera renders.</span> |
| <Link id="m-slot" /><code>{"private Transform slot"}</code> | <span className="api-desc">Transform on the camera where the remote sits.</span> |
| <Link id="m-syncsnap" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSnap"}</code> | <span className="api-desc">Method sync for the slotted flag.</span> |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | <span className="api-desc">Budgeted update registration for `UpdateDistance` while unslotted.</span> |

</details>

## Methods

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks interaction filters, grab and release events, hover check, camera entity init and (off headless) photo render events.</span> |
| <Link id="m-checkdetach" /><code>{"private IEnumerator CheckDetach("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine while the slotted fake pickup is held: once the hand moves far enough, unslots the remote and swaps the grab to the real pickup.</span> |
| <Link id="m-checkhover" /><code>{"private void CheckHover(ref bool isValid)"}</code> | <span className="api-desc">Stops the levitator hovering the remote while it is slotted.</span> |
| <Link id="m-checkslot" /><code>{"private IEnumerator CheckSlot("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine while the real pickup is held: adds the shutter action and snaps back to the slot when the hand nears it.</span> |
| <Link id="m-endcheck" /><code>{"private void EndCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, stops the check coroutine and removes the shutter and long photo haptic hooks.</span> |
| <Link id="m-fakeinteractionfilter" /><code>{"private void FakeInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only lets the camera owner grab the fake pickup, and only while slotted.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Clears the pickup's override parent and creates the slot sync.</span> |
| <Link id="m-interactionfilter" /><code>{"private void InteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only lets the camera owner grab the real pickup, and only while unslotted.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks render events and the distance check.</span> |
| <Link id="m-ontakingphoto" /><code>{"private void OnTakingPhoto("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Hides the remote's renderers before a hand camera renders.</span> |
| <Link id="m-ontookphoto" /><code>{"private void OnTookPhoto("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Shows the remote's renderers again after rendering.</span> |
| <Link id="m-snappickup" /><code>{"private void SnapPickup()"}</code> | <span className="api-desc">Makes the pickup kinematic, parents it to the slot and turns off its colliders.</span> |
| <Link id="m-snaptoslot" /><code>{"private void SnapToSlot()"}</code> | <span className="api-desc">Slots the remote: stops hovering, syncs, force drops the pickup and snaps it on clients.</span> |
| <Link id="m-startdetachcheck" /><code>{"private void StartDetachCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts `CheckDetach` when a local hand grabs the fake pickup.</span> |
| <Link id="m-startslotcheck" /><code>{"private void StartSlotCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts `CheckSlot` and long photo haptics when a local hand grabs the real pickup.</span> |
| <Link id="m-syncsnap-2" /><code>{"private void SyncSnap("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the slotted flag. Receivers snap or free the pickup; the server relays it to the chunk.</span> |
| <Link id="m-togglepickupcolliders" /><code>{"private void TogglePickupColliders(bool isEnabled)"}</code> | <span className="api-desc">Turns the real pickup's colliders on or off.</span> |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | <span className="api-desc">Snaps the remote back to the slot if it gets too far from the camera.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RemoteObiturator`:

<div className="api-used-in">

[`HandCamera.remoteObiturator`](/mod/game-api/types/alta-customization/handcamera#m-remoteobiturator).

</div>
