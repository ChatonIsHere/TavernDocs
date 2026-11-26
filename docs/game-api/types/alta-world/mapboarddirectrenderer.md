---
title: "MapBoardDirectRenderer"
description: "Client: draws a map board straight into a render texture with blits (map, landmarks below the mask, discovered pieces, landmarks above, then a you-are-here..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoardDirectRenderer

A **class** in `Root.Township`, `Alta.Map`.

Client: draws a map board straight into a render texture with blits (map, landmarks below the mask, discovered pieces, landmarks above, then a you-are-here icon). Destroys itself on headless servers.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`MapElement`](/game-api/types/alta-world/mapboarddirectrenderer-mapelement)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapBoardDirectRenderer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dstblend" /><code>{"private static readonly int _DstBlend"}</code> | Shader property ID for `_DstBlend`. |
| <Link id="m-dstblendalpha" /><code>{"private static readonly int _DstBlendAlpha"}</code> | Shader property ID for `_DstBlendAlpha`. |
| <Link id="m-maskcolor" /><code>{"private static readonly int _MaskColor"}</code> | Shader property ID for `_MaskColor`, set to `backgroundColor`. |
| <Link id="m-offsetscale" /><code>{"private static readonly int _OffsetScale"}</code> | Shader property ID for `_OffsetScale`, the position and scale of each blit. |
| <Link id="m-srcblend" /><code>{"private static readonly int _SrcBlend"}</code> | Shader property ID for `_SrcBlend`. |
| <Link id="m-srcblendalpha" /><code>{"private static readonly int _SrcBlendAlpha"}</code> | Shader property ID for `_SrcBlendAlpha`. |
| <Link id="m-backgroundcolor" /><code>{"private Color backgroundColor"}</code> | Colour passed to the shader as the mask colour. |
| <Link id="m-baseshader" /><code>{"private Shader baseShader"}</code> | Shader used for the blit material. |
| <Link id="m-hereicon" /><code>{"private Texture2D hereIcon"}</code> | Texture drawn at the board's own position. |
| <Link id="m-hereiconscale" /><code>{"private float hereIconScale"}</code> | Scale of the you-are-here icon. Default 0.02. |
| <Link id="m-isalwaysrendering" /><code>{"private bool isAlwaysRendering"}</code> | Serialized flag that is never read. |
| <Link id="m-isrenderqueued" /><code>{"private bool isRenderQueued"}</code> | True while a delayed render is pending. |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> | Whether `previewRenderer` is currently seen by a camera. |
| <Link id="m-landmarkdisplay" /><code>{"private "}<Link to="/game-api/types/alta-world/maplandmarkdisplay">{"MapLandmarkDisplay"}</Link>{" landmarkDisplay"}</code> | Gives the lists of markers to draw below and above the map mask. |
| <Link id="m-map" /><code>{"private Texture2D map"}</code> | The base map texture. |
| <Link id="m-mapboard" /><code>{"private "}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard"}</code> | The `MapBoard` this draws; gives the offset, scale and active map pieces. |
| <Link id="m-needstorender" /><code>{"private bool needsToRender"}</code> | Set when a change came in while hidden, so it renders when next visible. |
| <Link id="m-previewrenderer" /><code>{"private Renderer previewRenderer"}</code> | Renderer whose material shows the render texture. |
| <Link id="m-rt" /><code>{"private RenderTexture rt"}</code> | The render texture the map is drawn into. |
| <Link id="m-rtsize" /><code>{"private Vector2Int rtSize"}</code> | Size of the render texture. Default 2048 by 2048. |
| <Link id="m-rtsizeandroid" /><code>{"private Vector2Int rtSizeAndroid"}</code> | Serialized size for Android (1024 by 1024). Never read in this build. |
| <Link id="m-wasdestroyed" /><code>{"private bool wasDestroyed"}</code> | Set in `OnDestroy` so a delayed `RenderMap` does nothing. |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys itself on headless builds. Otherwise renders once and listens for landmark changes and map piece discoveries. |
| <Link id="m-checkrender" /><code>{"private void CheckRender()"}</code> | Queues a render if the board is visible, otherwise marks that it needs one. |
| <Link id="m-checkrenderdiscover" /><code>{"private void CheckRenderDiscover(int arg1, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" arg2)"}</code> | Handler for the map's `PieceDiscovered` event; calls `CheckRender`. |
| <Link id="m-checkrenderlandmark" /><code>{"private void CheckRenderLandmark("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> | Handler for the client landmark manager's `Changed` event; calls `CheckRender`. |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | Marks the board as not visible so renders are put off. |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | Marks the board visible and renders if a change came in while hidden. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Releases the render texture and removes the event listeners. |
| <Link id="m-queuerender" /><code>{"private void QueueRender()"}</code> | Schedules `RenderMap` 0.5 s later, unless one is already queued. |
| <Link id="m-rendermap" /><code>{"private void RenderMap()"}</code> | Redraws the whole map into `rt`, creating it on first use and assigning it to `previewRenderer`. |

</details>
