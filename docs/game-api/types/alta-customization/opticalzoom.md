---
title: "OpticalZoom"
description: "Zoom lens dock on the hand camera: docking a zoom attachment narrows the camera's field of view and hides the attachment from the camera's render."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpticalZoom

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Zoom lens dock on the hand camera: docking a zoom attachment narrows the camera's field of view and hides the attachment from the camera's render. When the camera is destroyed the server pops the attachment off.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OpticalZoom()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock the zoom attachment goes into. |
| <Link id="m-emptylist" /><code>{"private static Renderer[] emptyList"}</code> | Shared empty renderer array used when nothing is docked. |
| <Link id="m-originalfov" /><code>{"private float originalFOV"}</code> | The camera's field of view without zoom. |
| <Link id="m-popangularaxis" /><code>{"private Vector3 popAngularAxis"}</code> | Axis of the torque applied when popping, relative to the camera's flattened facing. |
| <Link id="m-popangularstrength" /><code>{"private float popAngularStrength"}</code> | Torque strength when popping. |
| <Link id="m-popstrength" /><code>{"private float popStrength"}</code> | Force strength when popping. |
| <Link id="m-popvelocity" /><code>{"private Vector3 popVelocity"}</code> | Direction of the pop force, relative to the camera's flattened facing. |
| <Link id="m-renderers" /><code>{"private IEnumerable<Renderer> renderers"}</code> | Renderers of the docked attachment that get hidden during renders. |
| <Link id="m-syncpop" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPop"}</code> | Message the server sends so clients pop the attachment too. |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> | The camera whose field of view changes. |
| <Link id="m-zoomedfov" /><code>{"private float zoomedFOV"}</code> | Field of view while the zoom is docked. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the pop effect message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks the parent prefab's pre-destroy event to `EmptyOut`. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: stores the original field of view and hooks the dock's docked and undocked events. |
| <Link id="m-dockzoom" /><code>{"private void DockZoom("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Sets the zoomed field of view and starts hiding the docked attachment's renderers during camera renders. |
| <Link id="m-emptyout" /><code>{"private void EmptyOut("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Server: when the camera prefab is about to be destroyed, undocks the attachment, pops it and tells clients to pop it too. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the camera render events. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor only: draws the pop direction. |
| <Link id="m-popzoom" /><code>{"private void PopZoom("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" zoom)"}</code> | Pushes the attachment away with force and torque along the pop settings. On clients it also blends rigidbody authority. |
| <Link id="m-postrender" /><code>{"private void PostRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Turns the attachment's renderers back on after this camera renders. |
| <Link id="m-prerender" /><code>{"private void PreRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Turns the attachment's renderers off before this camera renders, so the lens does not see itself. |
| <Link id="m-syncpop-2" /><code>{"private void SyncPop("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint entityIdentifier)"}</code> | Message handler. Client: finds the attachment entity by identifier and pops it. |
| <Link id="m-undockzoom" /><code>{"private void UndockZoom("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Restores the original field of view and stops hiding renderers. |

</details>
