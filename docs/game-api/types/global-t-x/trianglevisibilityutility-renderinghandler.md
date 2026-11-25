---
title: "TriangleVisibilityUtility.RenderingHandler"
description: "class TriangleVisibilityUtility.RenderingHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriangleVisibilityUtility.RenderingHandler

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TriangleVisibilityUtility`](/game-api/types/global-t-x/trianglevisibilityutility)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RenderingHandler(int renderResolution, float distance, Mesh sourceMesh, Mesh triangleMesh)"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bgmaterial" /><code>{"private Material bgMaterial"}</code> |
| <Link id="m-commandbuffer" /><code>{"private CommandBuffer commandBuffer"}</code> |
| <Link id="m-downscalematerial" /><code>{"private Material downscaleMaterial"}</code> |
| <Link id="m-downscalingrts" /><code>{"private List<RenderTexture> downscalingRTs"}</code> |
| <Link id="m-extraction" /><code>{"private Texture2D extraction"}</code> |
| <Link id="m-projectionmatrix" /><code>{"private Matrix4x4 projectionMatrix"}</code> |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> |
| <Link id="m-sourcemesh" /><code>{"private Mesh sourceMesh"}</code> |
| <Link id="m-testmaterial" /><code>{"private Material testMaterial"}</code> |
| <Link id="m-trianglemesh" /><code>{"private Mesh triangleMesh"}</code> |
| <Link id="m-viewmatrix" /><code>{"private Matrix4x4 viewMatrix"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-checkvisibility" /><code>{"bool CheckVisibility(float distance, Vector3 center, Vector3 normalDirection)"}</code> |
| <Link id="m-checkvisibility-2" /><code>{"bool CheckVisibility(Vector3 position, Vector3 normalDirection)"}</code> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-downscale" /><code>{"private void DownScale()"}</code> |
| <Link id="m-isvisible" /><code>{"private bool IsVisible()"}</code> |
| <Link id="m-renderintorendertexture" /><code>{"private void RenderIntoRenderTexture(Vector3 position, Vector3 lookAt)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RenderingHandler`:

[`TriangleVisibilityUtility.CheckVisibilityAroundAxis`](/game-api/types/global-t-x/trianglevisibilityutility#m-checkvisibilityaroundaxis).
