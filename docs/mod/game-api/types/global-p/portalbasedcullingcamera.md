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
| <Link id="m-ctor" /><code>{"PortalBasedCullingCamera()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cameraposition" /><code>{"private Vector3 cameraPosition"}</code> | <span className="api-desc">Camera position for this frame.</span> |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | <span className="api-desc">The camera's transform.</span> |
| <Link id="m-initialchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" initialChunk"}</code> | <span className="api-desc">The local player's chunk this frame.</span> |
| <Link id="m-isculling" /><code>{"private static bool isCulling"}</code> | <span className="api-desc">Backing field for `IsCulling`.</span> |
| <Link id="m-mycameraforward" /><code>{"private Vector3 myCameraForward"}</code> | <span className="api-desc">Camera forward for this frame.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isculling-2" /><code>{"static bool IsCulling { get; }"}</code> | <span className="api-desc">Shared on or off flag for portal culling.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cullingchanged" /><code>{"static event Action CullingChanged"}</code> | <span className="api-desc">Fires when `IsCulling` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcesetisculling" /><code>{"static void ForceSetIsCulling(bool value)"}</code> | <span className="api-desc">Sets `IsCulling` and always fires `CullingChanged`.</span> |
| <Link id="m-setisculling" /><code>{"static void SetIsCulling(bool value)"}</code> | <span className="api-desc">Sets `IsCulling` and fires `CullingChanged` if it changed.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateculling" /><code>{"private bool CalculateCulling("}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isLookingAtFrontChunk, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk)"}</code> | <span className="api-desc">Decides if a portal should be culled from its distance and the camera's facing. Portals within 10 m are never culled.</span> |
| <Link id="m-cullportal" /><code>{"private void CullPortal("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk, "}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isCullingFrontChunk)"}</code> | <span className="api-desc">Hides the target chunk's terrain and culls that side of the portal.</span> |
| <Link id="m-isfarenoughtousegeneralviewdirection" /><code>{"private bool IsFarEnoughToUseGeneralViewDirection(float distanceSquared)"}</code> | <span className="api-desc">True beyond 20 m, where the portal's facing alone can decide.</span> |
| <Link id="m-islookingawayfromportal" /><code>{"private bool IsLookingAwayFromPortal(float distanceToPortalSquared, float dotProductCameraForwardToPortal)"}</code> | <span className="api-desc">True if the portal is behind the camera or outside a cone around its forward.</span> |
| <Link id="m-istooclosetocalculateculling" /><code>{"private bool IsTooCloseToCalculateCulling(float distanceSquared)"}</code> | <span className="api-desc">True within 10 m.</span> |
| <Link id="m-onprecull" /><code>{"private void OnPreCull()"}</code> | <span className="api-desc">Checks every portal of the local player's chunk before the camera renders.</span> |
| <Link id="m-processportal" /><code>{"private void ProcessPortal("}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isLookingAtFrontChunk)"}</code> | <span className="api-desc">Culls a portal, or shows the chunk's terrain and unculls that side.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PortalBasedCullingCamera`:

<div className="api-used-in">

[`CullingController.cullingCamera`](/mod/game-api/types/global-c-d/cullingcontroller#m-cullingcamera).

</div>
