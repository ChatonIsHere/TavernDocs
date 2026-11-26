---
title: "PortalBasedCullingCamera"
description: "Client: on the camera, hides chunks behind culling portals the camera is facing away from, starting from the chunk the local player is in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PortalBasedCullingCamera

A **class** in `Root.Township`, the global namespace.

Client: on the camera, hides chunks behind culling portals the camera is facing away from, starting from the chunk the local player is in.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PortalBasedCullingCamera()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameraposition" /><code>{"private Vector3 cameraPosition"}</code> | Camera position for this frame. |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | The camera's transform. |
| <Link id="m-initialchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" initialChunk"}</code> | The local player's chunk this frame. |
| <Link id="m-isculling" /><code>{"private static bool isCulling"}</code> | Backing field for `IsCulling`. |
| <Link id="m-mycameraforward" /><code>{"private Vector3 myCameraForward"}</code> | Camera forward for this frame. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isculling-2" /><code>{"static bool IsCulling { get; }"}</code> | Shared on or off flag for portal culling. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cullingchanged" /><code>{"static event Action CullingChanged"}</code> | Fires when `IsCulling` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcesetisculling" /><code>{"static void ForceSetIsCulling(bool value)"}</code> | Sets `IsCulling` and always fires `CullingChanged`. |
| <Link id="m-setisculling" /><code>{"static void SetIsCulling(bool value)"}</code> | Sets `IsCulling` and fires `CullingChanged` if it changed. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateculling" /><code>{"private bool CalculateCulling("}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isLookingAtFrontChunk, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk)"}</code> | Decides if a portal should be culled from its distance and the camera's facing. Portals within 10 m are never culled. |
| <Link id="m-cullportal" /><code>{"private void CullPortal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk, "}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isCullingFrontChunk)"}</code> | Hides the target chunk's terrain and culls that side of the portal. |
| <Link id="m-isfarenoughtousegeneralviewdirection" /><code>{"private bool IsFarEnoughToUseGeneralViewDirection(float distanceSquared)"}</code> | True beyond 20 m, where the portal's facing alone can decide. |
| <Link id="m-islookingawayfromportal" /><code>{"private bool IsLookingAwayFromPortal(float distanceToPortalSquared, float dotProductCameraForwardToPortal)"}</code> | True if the portal is behind the camera or outside a cone around its forward. |
| <Link id="m-istooclosetocalculateculling" /><code>{"private bool IsTooCloseToCalculateCulling(float distanceSquared)"}</code> | True within 10 m. |
| <Link id="m-onprecull" /><code>{"private void OnPreCull()"}</code> | Checks every portal of the local player's chunk before the camera renders. |
| <Link id="m-processportal" /><code>{"private void ProcessPortal("}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isLookingAtFrontChunk)"}</code> | Culls a portal, or shows the chunk's terrain and unculls that side. |

</details>

## Used in

Members of other types that take, return or hold a `PortalBasedCullingCamera`:

[`CullingController.cullingCamera`](/mod/game-api/types/global-c-d/cullingcontroller#m-cullingcamera).
