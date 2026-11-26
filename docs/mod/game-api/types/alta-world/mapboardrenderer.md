---
title: "MapBoardRenderer"
description: "Client: renders a map board's UI canvas into a render texture with a shared hidden camera, re-rendering when landmarks change."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoardRenderer

A **class** in `Root.Township`, `Alta.Map`.

Client: renders a map board's UI canvas into a render texture with a shared hidden camera, re-rendering when landmarks change. Destroys itself on headless servers.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapBoardRenderer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maptexture" /><code>{"private static readonly int _MapTexture"}</code> | Shader property ID for `_MainTex`. |
| <Link id="m-isrendering" /><code>{"private bool isRendering"}</code> | Guards against a render starting during another one or after destroy. |
| <Link id="m-isrenderqueued" /><code>{"private bool isRenderQueued"}</code> | True while a delayed render is pending. |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> | Whether the board's renderer is currently seen by a camera. |
| <Link id="m-needtorender" /><code>{"private bool needToRender"}</code> | Set when a change came in while hidden. |
| <Link id="m-rendercamera" /><code>{"private static Camera renderCamera"}</code> | One orthographic camera shared by every map board, created on first use and kept disabled. |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | Temporary render texture sized to the canvas, shown on this object's material. |
| <Link id="m-targetcanvas" /><code>{"private Canvas targetCanvas"}</code> | The UI canvas that is rendered; kept disabled except while rendering. |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Destroys itself on headless builds. Otherwise makes the render texture and shared camera, renders once and listens for landmark changes. |
| <Link id="m-checkrender" /><code>{"private void CheckRender("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> | On landmark change, queues a render if visible, otherwise marks that one is needed. |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | Marks the board as not visible so renders are put off. |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | Marks the board visible and renders if a change came in while hidden. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Releases the render texture and removes the landmark listener. |
| <Link id="m-queuerender" /><code>{"private void QueueRender()"}</code> | Schedules `RenderMap` 0.5 s later, unless one is already queued. |
| <Link id="m-rendermap" /><code>{"private void RenderMap()"}</code> | Turns the canvas on, renders it with `renderCamera` into the texture, then turns it off again. |

</details>
