---
title: "CullingPortal"
description: "A portal between two chunks (mostly cave layers) that can hide or show the static renderers in a box on either side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CullingPortal

A **class** in `Root.Township`, the global namespace.

A portal between two chunks (mostly cave layers) that can hide or show the static renderers in a box on either side. Registers itself with both chunks' connections.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`CullingSide`](/mod/game-api/types/global-c-d/cullingportal-cullingside)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CullingPortal()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbounds" /><code>{"private Bounds backBounds"}</code> | <span className="api-desc">Local-space box; static renderers of the back streamer inside it are culled with the back side.</span> |
| <Link id="m-backchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" backChunk"}</code> | <span className="api-desc">The location chunk behind the portal. Backing field for `BackChunk`.</span> |
| <Link id="m-backculling" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/cullingportal-cullingside">{"CullingPortal.CullingSide"}</Link>{" backCulling"}</code> | <span className="api-desc">Handles enabling and disabling the back side's renderers.</span> |
| <Link id="m-backstreamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" backStreamer"}</code> | <span className="api-desc">Cave layer streamer of the back chunk, the source of its static renderers.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">The portal's transform, cached.</span> |
| <Link id="m-center" /><code>{"private Vector3? center"}</code> | <span className="api-desc">Cached world position; refreshed when the transform changes.</span> |
| <Link id="m-direction" /><code>{"private Vector3? direction"}</code> | <span className="api-desc">Cached world up vector of the portal (the facing direction); refreshed when the transform changes.</span> |
| <Link id="m-frontbounds" /><code>{"private Bounds frontBounds"}</code> | <span className="api-desc">Local-space box; static renderers of the front streamer inside it are culled with the front side.</span> |
| <Link id="m-frontchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" frontChunk"}</code> | <span className="api-desc">The location chunk in front of the portal. Backing field for `FrontChunk`.</span> |
| <Link id="m-frontculling" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/cullingportal-cullingside">{"CullingPortal.CullingSide"}</Link>{" frontCulling"}</code> | <span className="api-desc">Handles enabling and disabling the front side's renderers.</span> |
| <Link id="m-frontstreamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" frontStreamer"}</code> | <span className="api-desc">Cave layer streamer of the front chunk, the source of its static renderers.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backchunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" BackChunk { get; set; }"}</code> | <span className="api-desc">Chunk on the back side, or null if it's missing or disabled (not checked on Android).</span> |
| <Link id="m-center-2" /><code>{"Vector3 Center { get; }"}</code> | <span className="api-desc">World position of the portal.</span> |
| <Link id="m-direction-2" /><code>{"Vector3 Direction { get; }"}</code> | <span className="api-desc">World direction the portal faces (its local up).</span> |
| <Link id="m-frontchunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" FrontChunk { get; set; }"}</code> | <span className="api-desc">Chunk on the front side, or null if it's missing or disabled (not checked on Android).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cullback" /><code>{"void CullBack()"}</code> | <span className="api-desc">Hides the renderers on the back side.</span> |
| <Link id="m-cullfront" /><code>{"void CullFront()"}</code> | <span className="api-desc">Hides the renderers on the front side.</span> |
| <Link id="m-uncullback" /><code>{"void UncullBack()"}</code> | <span className="api-desc">Shows the renderers on the back side, finding them in the cave streamer the first time.</span> |
| <Link id="m-uncullfront" /><code>{"void UncullFront()"}</code> | <span className="api-desc">Shows the renderers on the front side, finding them in the cave streamer the first time.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Removes the portal from both chunks' portal lists.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the front and back bounds as wire cubes in the portal's space.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Adds the portal to both chunks' portal lists and creates the front and back culling sides.</span> |
| <Link id="m-removechunkreference" /><code>{"private void RemoveChunkReference("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Removes this portal from a chunk's portal list.</span> |
| <Link id="m-setchunk" /><code>{"private void SetChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newChunk, ref "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, ref "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer)"}</code> | <span className="api-desc">Swaps the front or back chunk, moving the portal registration and picking up the new chunk's cave streamer.</span> |
| <Link id="m-setupchunkreference" /><code>{"private void SetupChunkReference("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, out "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer)"}</code> | <span className="api-desc">Adds this portal to a chunk's portal list and gets its `CaveLayerStreamer`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CullingPortal`:

<div className="api-used-in">

[`CaveLayerStreamer.portal`](/mod/game-api/types/alta-world/cavelayerstreamer#m-portal), [`ChunkConnections.Portals`](/mod/game-api/types/alta-world/chunkconnections#m-portals), [`StaticCaveChunk.portal`](/mod/game-api/types/alta-world/staticcavechunk#m-portal), [`PortalBasedCullingCamera.CalculateCulling`](/mod/game-api/types/global-p/portalbasedcullingcamera#m-calculateculling), [`PortalBasedCullingCamera.CullPortal`](/mod/game-api/types/global-p/portalbasedcullingcamera#m-cullportal), [`PortalBasedCullingCamera.ProcessPortal`](/mod/game-api/types/global-p/portalbasedcullingcamera#m-processportal).

</div>
