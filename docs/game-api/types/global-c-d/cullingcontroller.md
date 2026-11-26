---
title: "CullingController"
description: "Client: on the local player, switches between the game's portal-based culling camera and Unity's occlusion culling when PortalBasedCullingCamera.IsCulling..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingController

A **class** in `Root.Township`, no namespace.

Client: on the local player, switches between the game's portal-based culling camera and Unity's occlusion culling when `PortalBasedCullingCamera.IsCulling` changes.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CullingController()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | The local `PlayerController`, whose camera's occlusion culling is toggled. |
| <Link id="m-cullingcamera" /><code>{"private "}<Link to="/game-api/types/global-p/portalbasedcullingcamera">{"PortalBasedCullingCamera"}</Link>{" cullingCamera"}</code> | The `PortalBasedCullingCamera` enabled or disabled. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cullingchanged" /><code>{"private void CullingChanged()"}</code> | Enables the portal culling camera when culling is on and, except on Android, turns Unity occlusion culling off to match. |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Stores the player controller, subscribes to `PortalBasedCullingCamera.CullingChanged` and applies the current state. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from `PortalBasedCullingCamera.CullingChanged`. |

</details>
