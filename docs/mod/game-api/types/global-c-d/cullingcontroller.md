---
title: "CullingController"
description: "Client: on the local player, switches between the game's portal-based culling camera and Unity's occlusion culling when PortalBasedCullingCamera.IsCulling..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingController

A **class** in `Root.Township`, the global namespace.

Client: on the local player, switches between the game's portal-based culling camera and Unity's occlusion culling when `PortalBasedCullingCamera.IsCulling` changes.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CullingController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | <span className="api-desc">The local `PlayerController`, whose camera's occlusion culling is toggled.</span> |
| <Link id="m-cullingcamera" /><code>{"private "}<Link to="/mod/game-api/types/global-p/portalbasedcullingcamera">{"PortalBasedCullingCamera"}</Link>{" cullingCamera"}</code> | <span className="api-desc">The `PortalBasedCullingCamera` enabled or disabled.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cullingchanged" /><code>{"private void CullingChanged()"}</code> | <span className="api-desc">Enables the portal culling camera when culling is on and, except on Android, turns Unity occlusion culling off to match.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Stores the player controller, subscribes to `PortalBasedCullingCamera.CullingChanged` and applies the current state.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from `PortalBasedCullingCamera.CullingChanged`.</span> |

</details>
