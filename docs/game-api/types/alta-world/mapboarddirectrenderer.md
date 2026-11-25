---
title: "MapBoardDirectRenderer"
description: "class MapBoardDirectRenderer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoardDirectRenderer

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`MapElement`](/game-api/types/alta-world/mapboarddirectrenderer-mapelement)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MapBoardDirectRenderer()"}</code> |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dstblend" /><code>{"private static readonly int _DstBlend"}</code> |
| <Link id="m-dstblendalpha" /><code>{"private static readonly int _DstBlendAlpha"}</code> |
| <Link id="m-maskcolor" /><code>{"private static readonly int _MaskColor"}</code> |
| <Link id="m-offsetscale" /><code>{"private static readonly int _OffsetScale"}</code> |
| <Link id="m-srcblend" /><code>{"private static readonly int _SrcBlend"}</code> |
| <Link id="m-srcblendalpha" /><code>{"private static readonly int _SrcBlendAlpha"}</code> |
| <Link id="m-backgroundcolor" /><code>{"private Color backgroundColor"}</code> |
| <Link id="m-baseshader" /><code>{"private Shader baseShader"}</code> |
| <Link id="m-hereicon" /><code>{"private Texture2D hereIcon"}</code> |
| <Link id="m-hereiconscale" /><code>{"private float hereIconScale"}</code> |
| <Link id="m-isalwaysrendering" /><code>{"private bool isAlwaysRendering"}</code> |
| <Link id="m-isrenderqueued" /><code>{"private bool isRenderQueued"}</code> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> |
| <Link id="m-landmarkdisplay" /><code>{"private "}<Link to="/game-api/types/alta-world/maplandmarkdisplay">{"MapLandmarkDisplay"}</Link>{" landmarkDisplay"}</code> |
| <Link id="m-map" /><code>{"private Texture2D map"}</code> |
| <Link id="m-mapboard" /><code>{"private "}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{" mapBoard"}</code> |
| <Link id="m-needstorender" /><code>{"private bool needsToRender"}</code> |
| <Link id="m-previewrenderer" /><code>{"private Renderer previewRenderer"}</code> |
| <Link id="m-rt" /><code>{"private RenderTexture rt"}</code> |
| <Link id="m-rtsize" /><code>{"private Vector2Int rtSize"}</code> |
| <Link id="m-rtsizeandroid" /><code>{"private Vector2Int rtSizeAndroid"}</code> |
| <Link id="m-wasdestroyed" /><code>{"private bool wasDestroyed"}</code> |

</details>

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkrender" /><code>{"private void CheckRender()"}</code> |
| <Link id="m-checkrenderdiscover" /><code>{"private void CheckRenderDiscover(int arg1, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" arg2)"}</code> |
| <Link id="m-checkrenderlandmark" /><code>{"private void CheckRenderLandmark("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-queuerender" /><code>{"private void QueueRender()"}</code> |
| <Link id="m-rendermap" /><code>{"private void RenderMap()"}</code> |

</details>
