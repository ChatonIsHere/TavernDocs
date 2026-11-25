---
title: "OpticalZoom"
description: "class OpticalZoom in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpticalZoom

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OpticalZoom()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |
| <Link id="m-emptylist" /><code>{"private static Renderer[] emptyList"}</code> |
| <Link id="m-originalfov" /><code>{"private float originalFOV"}</code> |
| <Link id="m-popangularaxis" /><code>{"private Vector3 popAngularAxis"}</code> |
| <Link id="m-popangularstrength" /><code>{"private float popAngularStrength"}</code> |
| <Link id="m-popstrength" /><code>{"private float popStrength"}</code> |
| <Link id="m-popvelocity" /><code>{"private Vector3 popVelocity"}</code> |
| <Link id="m-renderers" /><code>{"private IEnumerable<Renderer> renderers"}</code> |
| <Link id="m-syncpop" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncPop"}</code> |
| <Link id="m-targetcamera" /><code>{"private Camera targetCamera"}</code> |
| <Link id="m-zoomedfov" /><code>{"private float zoomedFOV"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-dockzoom" /><code>{"private void DockZoom("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-emptyout" /><code>{"private void EmptyOut("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-popzoom" /><code>{"private void PopZoom("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" zoom)"}</code> |
| <Link id="m-postrender" /><code>{"private void PostRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |
| <Link id="m-prerender" /><code>{"private void PreRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |
| <Link id="m-syncpop-2" /><code>{"private void SyncPop("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint entityIdentifier)"}</code> |
| <Link id="m-undockzoom" /><code>{"private void UndockZoom("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |

</details>
