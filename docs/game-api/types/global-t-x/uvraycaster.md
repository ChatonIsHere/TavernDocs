---
title: "UvRaycaster"
description: "class UvRaycaster in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UvRaycaster

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UvRaycaster()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> |
| <Link id="m-copyto" /><code>{"private Texture2D copyTo"}</code> |
| <Link id="m-renderlayer" /><code>{"private int renderLayer"}</code> |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-raycast" /><code>{"Vector3? Raycast(Vector3 position, Vector3 direction, float distance, params Renderer[] renderers)"}</code> |
| <Link id="m-raycast-2" /><code>{"Vector3? Raycast(Vector3 position, Vector3 direction, float distance, IEnumerable<Renderer> renderers, int count)"}</code> |
| <Link id="m-raycastgetclosest" /><code>{"Renderer RaycastGetClosest(Vector3 position, Vector3 direction, float distance, out Vector2 uv, params Renderer[] renderers)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `UvRaycaster`:

[`PaintBrush.uvRaycaster`](/game-api/types/global-p/paintbrush#m-uvraycaster).
