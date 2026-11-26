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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpticalZoom()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock the zoom attachment goes into.</span> |
| <Link id="m-emptylist" /><code>{"private static Renderer[] emptyList"}</code> | <span className="api-desc">Shared empty renderer array used when nothing is docked.</span> |
| <Link id="m-originalfov" /><code>{"private float originalFOV"}</code> | <span className="api-desc">The camera's field of view without zoom.</span> |
| <Link id="m-popangularaxis" /><code>{"private Vector3 popAngularAxis"}</code> | <span className="api-desc">Axis of the torque applied when popping, relative to the camera's flattened facing.</span> |
| <Link id="m-popangularstrength" /><code>{"private float popAngularStrength"}</code> | <span className="api-desc">Torque strength when popping.</span> |
| <Link id="m-popstrength" /><code>{"private float popStrength"}</code> | <span className="api-desc">Force strength when popping.</span> |
| <Link id="m-popvelocity" /><code>{"private Vector3 popVelocity"}</code> | <span className="api-desc">Direction of the pop force, relative to the camera's flattened facing.</span> |
| <Link id="m-renderers" /><code>{"private IEnumerable<Renderer> renderers"}</code> | <span className="api-desc">Renderers of the docked attachment that get hidden during renders.</span> |
| <Link id="m-syncpop" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPop"}</code> | <span className="api-desc">Message the server sends so clients pop the attachment too.</span> |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> | <span className="api-desc">The camera whose field of view changes.</span> |
| <Link id="m-zoomedfov" /><code>{"private float zoomedFOV"}</code> | <span className="api-desc">Field of view while the zoom is docked.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the pop effect message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks the parent prefab's pre-destroy event to `EmptyOut`.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: stores the original field of view and hooks the dock's docked and undocked events.</span> |
| <Link id="m-dockzoom" /><code>{"private void DockZoom("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Sets the zoomed field of view and starts hiding the docked attachment's renderers during camera renders.</span> |
| <Link id="m-emptyout" /><code>{"private void EmptyOut("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Server: when the camera prefab is about to be destroyed, undocks the attachment, pops it and tells clients to pop it too.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the camera render events.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor only: draws the pop direction.</span> |
| <Link id="m-popzoom" /><code>{"private void PopZoom("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" zoom)"}</code> | <span className="api-desc">Pushes the attachment away with force and torque along the pop settings. On clients it also blends rigidbody authority.</span> |
| <Link id="m-postrender" /><code>{"private void PostRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Turns the attachment's renderers back on after this camera renders.</span> |
| <Link id="m-prerender" /><code>{"private void PreRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Turns the attachment's renderers off before this camera renders, so the lens does not see itself.</span> |
| <Link id="m-syncpop-2" /><code>{"private void SyncPop("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint entityIdentifier)"}</code> | <span className="api-desc">Message handler. Client: finds the attachment entity by identifier and pops it.</span> |
| <Link id="m-undockzoom" /><code>{"private void UndockZoom("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Restores the original field of view and stops hiding renderers.</span> |

</details>
