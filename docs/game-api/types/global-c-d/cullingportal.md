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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CullingPortal()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-backbounds" /><code>{"private Bounds backBounds"}</code> |
| <Link id="m-backchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" backChunk"}</code> |
| <Link id="m-backculling" /><code>{"private "}<Link to="/game-api/types/global-c-d/cullingportal-cullingside">{"CullingPortal.CullingSide"}</Link>{" backCulling"}</code> |
| <Link id="m-backstreamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" backStreamer"}</code> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-center" /><code>{"private Vector3? center"}</code> |
| <Link id="m-direction" /><code>{"private Vector3? direction"}</code> |
| <Link id="m-frontbounds" /><code>{"private Bounds frontBounds"}</code> |
| <Link id="m-frontchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" frontChunk"}</code> |
| <Link id="m-frontculling" /><code>{"private "}<Link to="/game-api/types/global-c-d/cullingportal-cullingside">{"CullingPortal.CullingSide"}</Link>{" frontCulling"}</code> |
| <Link id="m-frontstreamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" frontStreamer"}</code> |

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

| Member |
| --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |
| <Link id="m-removechunkreference" /><code>{"private void RemoveChunkReference("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |
| <Link id="m-setchunk" /><code>{"private void SetChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newChunk, ref "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, ref "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer)"}</code> |
| <Link id="m-setupchunkreference" /><code>{"private void SetupChunkReference("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, out "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CullingPortal`:

[`CaveLayerStreamer.portal`](/game-api/types/alta-world/cavelayerstreamer#m-portal), [`ChunkConnections.Portals`](/game-api/types/alta-world/chunkconnections#m-portals), [`StaticCaveChunk.portal`](/game-api/types/alta-world/staticcavechunk#m-portal), [`PortalBasedCullingCamera.CalculateCulling`](/game-api/types/global-p/portalbasedcullingcamera#m-calculateculling), [`PortalBasedCullingCamera.CullPortal`](/game-api/types/global-p/portalbasedcullingcamera#m-cullportal), [`PortalBasedCullingCamera.ProcessPortal`](/game-api/types/global-p/portalbasedcullingcamera#m-processportal).
