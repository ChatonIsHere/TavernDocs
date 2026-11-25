---
title: "RemoteObiturator"
description: "class RemoteObiturator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteObiturator

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RemoteObiturator()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-distancetodeslotsquared" /><code>{"private float distanceToDeslotSquared"}</code> |
| <Link id="m-distancetoreslotsquared" /><code>{"private float distanceToReslotSquared"}</code> |
| <Link id="m-fakepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" fakePickup"}</code> |
| <Link id="m-handcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera"}</code> |
| <Link id="m-issloted" /><code>{"private bool isSloted"}</code> |
| <Link id="m-levitator" /><code>{"private "}<Link to="/game-api/types/alta-player/itemlevitator">{"ItemLevitator"}</Link>{" levitator"}</code> |
| <Link id="m-maxdistancefromcamerasquared" /><code>{"private float maxDistanceFromCameraSquared"}</code> |
| <Link id="m-movementcheck" /><code>{"private Coroutine movementCheck"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-renderergroup" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" rendererGroup"}</code> |
| <Link id="m-slot" /><code>{"private Transform slot"}</code> |
| <Link id="m-syncsnap" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSnap"}</code> |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> |

</details>

## Methods

<details>
<summary>18 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkdetach" /><code>{"private IEnumerator CheckDetach("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |
| <Link id="m-checkhover" /><code>{"private void CheckHover(ref bool isValid)"}</code> |
| <Link id="m-checkslot" /><code>{"private IEnumerator CheckSlot("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |
| <Link id="m-endcheck" /><code>{"private void EndCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-fakeinteractionfilter" /><code>{"private void FakeInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-interactionfilter" /><code>{"private void InteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ontakingphoto" /><code>{"private void OnTakingPhoto("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |
| <Link id="m-ontookphoto" /><code>{"private void OnTookPhoto("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |
| <Link id="m-snappickup" /><code>{"private void SnapPickup()"}</code> |
| <Link id="m-snaptoslot" /><code>{"private void SnapToSlot()"}</code> |
| <Link id="m-startdetachcheck" /><code>{"private void StartDetachCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-startslotcheck" /><code>{"private void StartSlotCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncsnap-2" /><code>{"private void SyncSnap("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-togglepickupcolliders" /><code>{"private void TogglePickupColliders(bool isEnabled)"}</code> |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RemoteObiturator`:

[`HandCamera.remoteObiturator`](/game-api/types/alta-customization/handcamera#m-remoteobiturator).
