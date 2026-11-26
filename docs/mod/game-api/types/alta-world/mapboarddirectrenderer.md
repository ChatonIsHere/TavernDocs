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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`MapElement`](/mod/game-api/types/alta-world/mapboarddirectrenderer-mapelement)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapBoardDirectRenderer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dstblend" /><code>{"private static readonly int _DstBlend"}</code> | <span className="api-desc">Shader property ID for `_DstBlend`.</span> |
| <Link id="m-dstblendalpha" /><code>{"private static readonly int _DstBlendAlpha"}</code> | <span className="api-desc">Shader property ID for `_DstBlendAlpha`.</span> |
| <Link id="m-maskcolor" /><code>{"private static readonly int _MaskColor"}</code> | <span className="api-desc">Shader property ID for `_MaskColor`, set to `backgroundColor`.</span> |
| <Link id="m-offsetscale" /><code>{"private static readonly int _OffsetScale"}</code> | <span className="api-desc">Shader property ID for `_OffsetScale`, the position and scale of each blit.</span> |
| <Link id="m-srcblend" /><code>{"private static readonly int _SrcBlend"}</code> | <span className="api-desc">Shader property ID for `_SrcBlend`.</span> |
| <Link id="m-srcblendalpha" /><code>{"private static readonly int _SrcBlendAlpha"}</code> | <span className="api-desc">Shader property ID for `_SrcBlendAlpha`.</span> |
| <Link id="m-backgroundcolor" /><code>{"private Color backgroundColor"}</code> | <span className="api-desc">Colour passed to the shader as the mask colour.</span> |
| <Link id="m-baseshader" /><code>{"private Shader baseShader"}</code> | <span className="api-desc">Shader used for the blit material.</span> |
| <Link id="m-hereicon" /><code>{"private Texture2D hereIcon"}</code> | <span className="api-desc">Texture drawn at the board's own position.</span> |
| <Link id="m-hereiconscale" /><code>{"private float hereIconScale"}</code> | <span className="api-desc">Scale of the you-are-here icon. Default 0.02.</span> |
| <Link id="m-isalwaysrendering" /><code>{"private bool isAlwaysRendering"}</code> | <span className="api-desc">Serialized flag that is never read.</span> |
| <Link id="m-isrenderqueued" /><code>{"private bool isRenderQueued"}</code> | <span className="api-desc">True while a delayed render is pending.</span> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> | <span className="api-desc">Whether `previewRenderer` is currently seen by a camera.</span> |
| <Link id="m-landmarkdisplay" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/maplandmarkdisplay">{"MapLandmarkDisplay"}</Link>{" landmarkDisplay"}</code> | <span className="api-desc">Gives the lists of markers to draw below and above the map mask.</span> |
| <Link id="m-map" /><code>{"private Texture2D map"}</code> | <span className="api-desc">The base map texture.</span> |
| <Link id="m-mapboard" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard"}</code> | <span className="api-desc">The `MapBoard` this draws; gives the offset, scale and active map pieces.</span> |
| <Link id="m-needstorender" /><code>{"private bool needsToRender"}</code> | <span className="api-desc">Set when a change came in while hidden, so it renders when next visible.</span> |
| <Link id="m-previewrenderer" /><code>{"private Renderer previewRenderer"}</code> | <span className="api-desc">Renderer whose material shows the render texture.</span> |
| <Link id="m-rt" /><code>{"private RenderTexture rt"}</code> | <span className="api-desc">The render texture the map is drawn into.</span> |
| <Link id="m-rtsize" /><code>{"private Vector2Int rtSize"}</code> | <span className="api-desc">Size of the render texture. Default 2048 by 2048.</span> |
| <Link id="m-rtsizeandroid" /><code>{"private Vector2Int rtSizeAndroid"}</code> | <span className="api-desc">Serialized size for Android (1024 by 1024). Never read in this build.</span> |
| <Link id="m-wasdestroyed" /><code>{"private bool wasDestroyed"}</code> | <span className="api-desc">Set in `OnDestroy` so a delayed `RenderMap` does nothing.</span> |

</details>

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys itself on headless builds. Otherwise renders once and listens for landmark changes and map piece discoveries.</span> |
| <Link id="m-checkrender" /><code>{"private void CheckRender()"}</code> | <span className="api-desc">Queues a render if the board is visible, otherwise marks that it needs one.</span> |
| <Link id="m-checkrenderdiscover" /><code>{"private void CheckRenderDiscover(int arg1, "}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" arg2)"}</code> | <span className="api-desc">Handler for the map's `PieceDiscovered` event; calls `CheckRender`.</span> |
| <Link id="m-checkrenderlandmark" /><code>{"private void CheckRenderLandmark("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> | <span className="api-desc">Handler for the client landmark manager's `Changed` event; calls `CheckRender`.</span> |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | <span className="api-desc">Marks the board as not visible so renders are put off.</span> |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | <span className="api-desc">Marks the board visible and renders if a change came in while hidden.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Releases the render texture and removes the event listeners.</span> |
| <Link id="m-queuerender" /><code>{"private void QueueRender()"}</code> | <span className="api-desc">Schedules `RenderMap` 0.5 s later, unless one is already queued.</span> |
| <Link id="m-rendermap" /><code>{"private void RenderMap()"}</code> | <span className="api-desc">Redraws the whole map into `rt`, creating it on first use and assigning it to `previewRenderer`.</span> |

</details>
