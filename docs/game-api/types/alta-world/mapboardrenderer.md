---
title: "MapBoardRenderer"
description: "class MapBoardRenderer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoardRenderer

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MapBoardRenderer()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maptexture" /><code>{"private static readonly int _MapTexture"}</code> |
| <Link id="m-isrendering" /><code>{"private bool isRendering"}</code> |
| <Link id="m-isrenderqueued" /><code>{"private bool isRenderQueued"}</code> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> |
| <Link id="m-needtorender" /><code>{"private bool needToRender"}</code> |
| <Link id="m-rendercamera" /><code>{"private static Camera renderCamera"}</code> |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> |
| <Link id="m-targetcanvas" /><code>{"private Canvas targetCanvas"}</code> |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkrender" /><code>{"private void CheckRender("}<Link to="/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-queuerender" /><code>{"private void QueueRender()"}</code> |
| <Link id="m-rendermap" /><code>{"private void RenderMap()"}</code> |

</details>
