---
title: "UvRaycaster"
description: "Finds the UV coordinate on a mesh along a ray by rendering one pixel with a special shader from a hidden camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UvRaycaster

A **class** in `Root.Township`, the global namespace.

Finds the UV coordinate on a mesh along a ray by rendering one pixel with a special shader from a hidden camera. Client side; `PaintBrush` uses it to paint on character cosmetics.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UvRaycaster()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | <span className="api-desc">Hidden camera used for the one-pixel render.</span> |
| <Link id="m-copyto" /><code>{"private Texture2D copyTo"}</code> | <span className="api-desc">1 by 1 texture the rendered pixel is read into.</span> |
| <Link id="m-renderlayer" /><code>{"private int renderLayer"}</code> | <span className="api-desc">Layer the target renderers are moved to while rendering.</span> |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | <span className="api-desc">1 by 1 render target for the camera.</span> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | <span className="api-desc">Replacement shader that probably writes UV into red and green and depth into blue.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-raycast" /><code>{"Vector3? Raycast(Vector3 position, Vector3 direction, float distance, params Renderer[] renderers)"}</code> | <span className="api-desc">Moves the given renderers to the render layer, renders along the ray, restores them, and returns the pixel's colour as a vector (null if nothing was hit).</span> |
| <Link id="m-raycast-2" /><code>{"Vector3? Raycast(Vector3 position, Vector3 direction, float distance, IEnumerable<Renderer> renderers, int count)"}</code> | <span className="api-desc">Moves the given renderers to the render layer, renders along the ray, restores them, and returns the pixel's colour as a vector (null if nothing was hit).</span> |
| <Link id="m-raycastgetclosest" /><code>{"Renderer RaycastGetClosest(Vector3 position, Vector3 direction, float distance, out Vector2 uv, params Renderer[] renderers)"}</code> | <span className="api-desc">Checks renderers one by one and returns the closest hit with its UV. Only renders for skinned renderers and doesn't restore their layers.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the camera up to render only the render layer into a 1 by 1 texture, and disables it for manual renders.</span> |

</details>

## Used in

Members of other types that take, return or hold a `UvRaycaster`:

<div className="api-used-in">

[`PaintBrush.uvRaycaster`](/mod/game-api/types/global-p/paintbrush#m-uvraycaster).

</div>
