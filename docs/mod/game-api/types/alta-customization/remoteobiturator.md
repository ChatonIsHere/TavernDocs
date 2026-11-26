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
| <Link id="m-ctor" /><code>{"RemoteObiturator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancetodeslotsquared" /><code>{"private float distanceToDeslotSquared"}</code> | Squared hand movement needed to pull the remote out of the slot. |
| <Link id="m-distancetoreslotsquared" /><code>{"private float distanceToReslotSquared"}</code> | Squared distance from the slot at which a held remote snaps back. |
| <Link id="m-fakepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" fakePickup"}</code> | Pickup grabbed while the remote is slotted, used to detect pulling it out. |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> | The camera this remote belongs to. |
| <Link id="m-issloted" /><code>{"private bool isSloted"}</code> | True while the remote is in its slot. Synced. |
| <Link id="m-levitator" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/itemlevitator">{"ItemLevitator"}</Link>{" levitator"}</code> | Item levitator for the remote, blocked from hovering while slotted. |
| <Link id="m-maxdistancefromcamerasquared" /><code>{"private float maxDistanceFromCameraSquared"}</code> | Squared distance from the camera beyond which the remote returns to the slot. |
| <Link id="m-movementcheck" /><code>{"private Coroutine movementCheck"}</code> | The running detach or slot check coroutine. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The real remote pickup used once unslotted. |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> | Renderers hidden during hand camera renders. |
| <Link id="m-slot" /><code>{"private Transform slot"}</code> | Transform on the camera where the remote sits. |
| <Link id="m-syncsnap" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSnap"}</code> | Method sync for the slotted flag. |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | Budgeted update registration for `UpdateDistance` while unslotted. |

</details>

## Methods

<details>
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks interaction filters, grab and release events, hover check, camera entity init and (off headless) photo render events. |
| <Link id="m-checkdetach" /><code>{"private IEnumerator CheckDetach("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine while the slotted fake pickup is held: once the hand moves far enough, unslots the remote and swaps the grab to the real pickup. |
| <Link id="m-checkhover" /><code>{"private void CheckHover(ref bool isValid)"}</code> | Stops the levitator hovering the remote while it is slotted. |
| <Link id="m-checkslot" /><code>{"private IEnumerator CheckSlot("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine while the real pickup is held: adds the shutter action and snaps back to the slot when the hand nears it. |
| <Link id="m-endcheck" /><code>{"private void EndCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, stops the check coroutine and removes the shutter and long photo haptic hooks. |
| <Link id="m-fakeinteractionfilter" /><code>{"private void FakeInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only lets the camera owner grab the fake pickup, and only while slotted. |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Clears the pickup's override parent and creates the slot sync. |
| <Link id="m-interactionfilter" /><code>{"private void InteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only lets the camera owner grab the real pickup, and only while unslotted. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks render events and the distance check. |
| <Link id="m-ontakingphoto" /><code>{"private void OnTakingPhoto("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Hides the remote's renderers before a hand camera renders. |
| <Link id="m-ontookphoto" /><code>{"private void OnTookPhoto("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Shows the remote's renderers again after rendering. |
| <Link id="m-snappickup" /><code>{"private void SnapPickup()"}</code> | Makes the pickup kinematic, parents it to the slot and turns off its colliders. |
| <Link id="m-snaptoslot" /><code>{"private void SnapToSlot()"}</code> | Slots the remote: stops hovering, syncs, force drops the pickup and snaps it on clients. |
| <Link id="m-startdetachcheck" /><code>{"private void StartDetachCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts `CheckDetach` when a local hand grabs the fake pickup. |
| <Link id="m-startslotcheck" /><code>{"private void StartSlotCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts `CheckSlot` and long photo haptics when a local hand grabs the real pickup. |
| <Link id="m-syncsnap-2" /><code>{"private void SyncSnap("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the slotted flag. Receivers snap or free the pickup; the server relays it to the chunk. |
| <Link id="m-togglepickupcolliders" /><code>{"private void TogglePickupColliders(bool isEnabled)"}</code> | Turns the real pickup's colliders on or off. |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | Snaps the remote back to the slot if it gets too far from the camera. |

</details>

## Used in

Members of other types that take, return or hold a `RemoteObiturator`:

[`HandCamera.remoteObiturator`](/mod/game-api/types/alta-customization/handcamera#m-remoteobiturator).
