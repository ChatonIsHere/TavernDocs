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
| <Link id="m-ctor" /><code>{"MapBoardRenderer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maptexture" /><code>{"private static readonly int _MapTexture"}</code> | <span className="api-desc">Shader property ID for `_MainTex`.</span> |
| <Link id="m-isrendering" /><code>{"private bool isRendering"}</code> | <span className="api-desc">Guards against a render starting during another one or after destroy.</span> |
| <Link id="m-isrenderqueued" /><code>{"private bool isRenderQueued"}</code> | <span className="api-desc">True while a delayed render is pending.</span> |
| <Link id="m-isvisible" /><code>{"private bool isVisible"}</code> | <span className="api-desc">Whether the board's renderer is currently seen by a camera.</span> |
| <Link id="m-needtorender" /><code>{"private bool needToRender"}</code> | <span className="api-desc">Set when a change came in while hidden.</span> |
| <Link id="m-rendercamera" /><code>{"private static Camera renderCamera"}</code> | <span className="api-desc">One orthographic camera shared by every map board, created on first use and kept disabled.</span> |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | <span className="api-desc">Temporary render texture sized to the canvas, shown on this object's material.</span> |
| <Link id="m-targetcanvas" /><code>{"private Canvas targetCanvas"}</code> | <span className="api-desc">The UI canvas that is rendered; kept disabled except while rendering.</span> |

</details>

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Destroys itself on headless builds. Otherwise makes the render texture and shared camera, renders once and listens for landmark changes.</span> |
| <Link id="m-checkrender" /><code>{"private void CheckRender("}<Link to="/mod/game-api/types/alta-world/markerinfo">{"MarkerInfo"}</Link>{" marker)"}</code> | <span className="api-desc">On landmark change, queues a render if visible, otherwise marks that one is needed.</span> |
| <Link id="m-onbecameinvisible" /><code>{"private void OnBecameInvisible()"}</code> | <span className="api-desc">Marks the board as not visible so renders are put off.</span> |
| <Link id="m-onbecamevisible" /><code>{"private void OnBecameVisible()"}</code> | <span className="api-desc">Marks the board visible and renders if a change came in while hidden.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Releases the render texture and removes the landmark listener.</span> |
| <Link id="m-queuerender" /><code>{"private void QueueRender()"}</code> | <span className="api-desc">Schedules `RenderMap` 0.5 s later, unless one is already queued.</span> |
| <Link id="m-rendermap" /><code>{"private void RenderMap()"}</code> | <span className="api-desc">Turns the canvas on, renders it with `renderCamera` into the texture, then turns it off again.</span> |

</details>
