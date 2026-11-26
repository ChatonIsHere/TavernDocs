---
title: "CopyToRenderTexture"
description: "On a camera, also copies its image into a render texture when it isn't already rendering to one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyToRenderTexture

A **class** in `Root.Township`, no namespace.

On a camera, also copies its image into a render texture when it isn't already rendering to one.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyToRenderTexture()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | The camera on this object. |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | Texture the image is copied into. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Gets the camera. |
| <Link id="m-onrenderimage" /><code>{"private void OnRenderImage(RenderTexture src, RenderTexture dest)"}</code> | Copies the frame to `renderTexture` if the camera has no target texture, then passes it on. |

</details>
