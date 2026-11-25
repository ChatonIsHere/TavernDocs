---
title: "PortalBasedCullingCamera"
description: "class PortalBasedCullingCamera in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PortalBasedCullingCamera

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PortalBasedCullingCamera()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cameraposition" /><code>{"private Vector3 cameraPosition"}</code> |  |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> |  |
| <Link id="m-initialchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" initialChunk"}</code> |  |
| <Link id="m-isculling" /><code>{"private static bool isCulling"}</code> |  |
| <Link id="m-mycameraforward" /><code>{"private Vector3 myCameraForward"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isculling-2" /><code>{"static bool IsCulling { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cullingchanged" /><code>{"static event Action CullingChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcesetisculling" /><code>{"static void ForceSetIsCulling(bool value)"}</code> |  |
| <Link id="m-setisculling" /><code>{"static void SetIsCulling(bool value)"}</code> |  |
| <Link id="m-calculateculling" /><code>{"private bool CalculateCulling("}<Link to="/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isLookingAtFrontChunk, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk)"}</code> |  |
| <Link id="m-cullportal" /><code>{"private void CullPortal("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk, "}<Link to="/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isCullingFrontChunk)"}</code> |  |
| <Link id="m-isfarenoughtousegeneralviewdirection" /><code>{"private bool IsFarEnoughToUseGeneralViewDirection(float distanceSquared)"}</code> |  |
| <Link id="m-islookingawayfromportal" /><code>{"private bool IsLookingAwayFromPortal(float distanceToPortalSquared, float dotProductCameraForwardToPortal)"}</code> |  |
| <Link id="m-istooclosetocalculateculling" /><code>{"private bool IsTooCloseToCalculateCulling(float distanceSquared)"}</code> |  |
| <Link id="m-onprecull" /><code>{"private void OnPreCull()"}</code> |  |
| <Link id="m-processportal" /><code>{"private void ProcessPortal("}<Link to="/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{" portal, bool isLookingAtFrontChunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PortalBasedCullingCamera`:

[`CullingController.cullingCamera`](/game-api/types/global-c-d/cullingcontroller#m-cullingcamera).
