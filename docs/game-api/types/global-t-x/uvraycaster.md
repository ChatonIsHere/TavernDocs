---
title: "UvRaycaster"
description: "Finds the UV coordinate on a mesh along a ray by rendering one pixel with a special shader from a hidden camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UvRaycaster

A **class** in `Root.Township`, no namespace.

Finds the UV coordinate on a mesh along a ray by rendering one pixel with a special shader from a hidden camera. Client side; `PaintBrush` uses it to paint on character cosmetics.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UvRaycaster()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | Hidden camera used for the one-pixel render. |
| <Link id="m-copyto" /><code>{"private Texture2D copyTo"}</code> | 1 by 1 texture the rendered pixel is read into. |
| <Link id="m-renderlayer" /><code>{"private int renderLayer"}</code> | Layer the target renderers are moved to while rendering. |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | 1 by 1 render target for the camera. |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | Replacement shader that probably writes UV into red and green and depth into blue. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-raycast" /><code>{"Vector3? Raycast(Vector3 position, Vector3 direction, float distance, params Renderer[] renderers)"}</code> | Moves the given renderers to the render layer, renders along the ray, restores them, and returns the pixel's colour as a vector (null if nothing was hit). |
| <Link id="m-raycast-2" /><code>{"Vector3? Raycast(Vector3 position, Vector3 direction, float distance, IEnumerable<Renderer> renderers, int count)"}</code> | Moves the given renderers to the render layer, renders along the ray, restores them, and returns the pixel's colour as a vector (null if nothing was hit). |
| <Link id="m-raycastgetclosest" /><code>{"Renderer RaycastGetClosest(Vector3 position, Vector3 direction, float distance, out Vector2 uv, params Renderer[] renderers)"}</code> | Checks renderers one by one and returns the closest hit with its UV. Only renders for skinned renderers and doesn't restore their layers. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the camera up to render only the render layer into a 1 by 1 texture, and disables it for manual renders. |

</details>

## Used in

Members of other types that take, return or hold a `UvRaycaster`:

[`PaintBrush.uvRaycaster`](/game-api/types/global-p/paintbrush#m-uvraycaster).
