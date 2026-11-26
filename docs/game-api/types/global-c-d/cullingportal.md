---
title: "CullingPortal"
description: "A portal between two chunks (mostly cave layers) that can hide or show the static renderers in a box on either side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingPortal

A **class** in `Root.Township`, no namespace.

A portal between two chunks (mostly cave layers) that can hide or show the static renderers in a box on either side. Registers itself with both chunks' connections.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`CullingSide`](/game-api/types/global-c-d/cullingportal-cullingside)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CullingPortal()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbounds" /><code>{"private Bounds backBounds"}</code> | Local-space box; static renderers of the back streamer inside it are culled with the back side. |
| <Link id="m-backchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" backChunk"}</code> | The location chunk behind the portal. Backing field for `BackChunk`. |
| <Link id="m-backculling" /><code>{"private "}<Link to="/game-api/types/global-c-d/cullingportal-cullingside">{"CullingPortal.CullingSide"}</Link>{" backCulling"}</code> | Handles enabling and disabling the back side's renderers. |
| <Link id="m-backstreamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" backStreamer"}</code> | Cave layer streamer of the back chunk, the source of its static renderers. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | The portal's transform, cached. |
| <Link id="m-center" /><code>{"private Vector3? center"}</code> | Cached world position; refreshed when the transform changes. |
| <Link id="m-direction" /><code>{"private Vector3? direction"}</code> | Cached world up vector of the portal (the facing direction); refreshed when the transform changes. |
| <Link id="m-frontbounds" /><code>{"private Bounds frontBounds"}</code> | Local-space box; static renderers of the front streamer inside it are culled with the front side. |
| <Link id="m-frontchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" frontChunk"}</code> | The location chunk in front of the portal. Backing field for `FrontChunk`. |
| <Link id="m-frontculling" /><code>{"private "}<Link to="/game-api/types/global-c-d/cullingportal-cullingside">{"CullingPortal.CullingSide"}</Link>{" frontCulling"}</code> | Handles enabling and disabling the front side's renderers. |
| <Link id="m-frontstreamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" frontStreamer"}</code> | Cave layer streamer of the front chunk, the source of its static renderers. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backchunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" BackChunk { get; set; }"}</code> | Chunk on the back side, or null if it's missing or disabled (not checked on Android). |
| <Link id="m-center-2" /><code>{"Vector3 Center { get; }"}</code> | World position of the portal. |
| <Link id="m-direction-2" /><code>{"Vector3 Direction { get; }"}</code> | World direction the portal faces (its local up). |
| <Link id="m-frontchunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" FrontChunk { get; set; }"}</code> | Chunk on the front side, or null if it's missing or disabled (not checked on Android). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cullback" /><code>{"void CullBack()"}</code> | Hides the renderers on the back side. |
| <Link id="m-cullfront" /><code>{"void CullFront()"}</code> | Hides the renderers on the front side. |
| <Link id="m-uncullback" /><code>{"void UncullBack()"}</code> | Shows the renderers on the back side, finding them in the cave streamer the first time. |
| <Link id="m-uncullfront" /><code>{"void UncullFront()"}</code> | Shows the renderers on the front side, finding them in the cave streamer the first time. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Removes the portal from both chunks' portal lists. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the front and back bounds as wire cubes in the portal's space. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Adds the portal to both chunks' portal lists and creates the front and back culling sides. |
| <Link id="m-removechunkreference" /><code>{"private void RemoveChunkReference("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Removes this portal from a chunk's portal list. |
| <Link id="m-setchunk" /><code>{"private void SetChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newChunk, ref "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, ref "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer)"}</code> | Swaps the front or back chunk, moving the portal registration and picking up the new chunk's cave streamer. |
| <Link id="m-setupchunkreference" /><code>{"private void SetupChunkReference("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, out "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer)"}</code> | Adds this portal to a chunk's portal list and gets its `CaveLayerStreamer`. |

</details>

## Used in

Members of other types that take, return or hold a `CullingPortal`:

[`CaveLayerStreamer.portal`](/game-api/types/alta-world/cavelayerstreamer#m-portal), [`ChunkConnections.Portals`](/game-api/types/alta-world/chunkconnections#m-portals), [`StaticCaveChunk.portal`](/game-api/types/alta-world/staticcavechunk#m-portal), [`PortalBasedCullingCamera.CalculateCulling`](/game-api/types/global-p/portalbasedcullingcamera#m-calculateculling), [`PortalBasedCullingCamera.CullPortal`](/game-api/types/global-p/portalbasedcullingcamera#m-cullportal), [`PortalBasedCullingCamera.ProcessPortal`](/game-api/types/global-p/portalbasedcullingcamera#m-processportal).
