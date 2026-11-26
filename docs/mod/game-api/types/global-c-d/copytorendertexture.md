---
title: "CopyToRenderTexture"
description: "On a camera, also copies its image into a render texture when it isn't already rendering to one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyToRenderTexture

A **class** in `Root.Township`, the global namespace.

On a camera, also copies its image into a render texture when it isn't already rendering to one.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyToRenderTexture()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | <span className="api-desc">The camera on this object.</span> |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | <span className="api-desc">Texture the image is copied into.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the camera.</span> |
| <Link id="m-onrenderimage" /><code>{"private void OnRenderImage(RenderTexture src, RenderTexture dest)"}</code> | <span className="api-desc">Copies the frame to `renderTexture` if the camera has no target texture, then passes it on.</span> |

</details>
