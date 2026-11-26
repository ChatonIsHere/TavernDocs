---
title: "TriangleVisibilityUtility.RenderingHandler"
description: "GPU check for whether one triangle of a mesh can be seen from a point: renders the mesh black and the triangle white, shrinks the image to one pixel and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriangleVisibilityUtility.RenderingHandler

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

GPU check for whether one triangle of a mesh can be seen from a point: renders the mesh black and the triangle white, shrinks the image to one pixel and reads it. Used by `CalculateOccludedTriangles` when baking.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TriangleVisibilityUtility`](/game-api/types/global-t-x/trianglevisibilityutility)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RenderingHandler(int renderResolution, float distance, Mesh sourceMesh, Mesh triangleMesh)"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bgmaterial" /><code>{"private Material bgMaterial"}</code> | Black material for the whole mesh. |
| <Link id="m-commandbuffer" /><code>{"private CommandBuffer commandBuffer"}</code> | Command buffer used for each render. |
| <Link id="m-downscalematerial" /><code>{"private Material downscaleMaterial"}</code> | Material for the `Hidden/ColorTestDownscale` shader. |
| <Link id="m-downscalingrts" /><code>{"private List<RenderTexture> downscalingRTs"}</code> | Render textures for each halving step, down to 1 by 1. |
| <Link id="m-extraction" /><code>{"private Texture2D extraction"}</code> | 1 by 1 texture the final pixel is read into. |
| <Link id="m-projectionmatrix" /><code>{"private Matrix4x4 projectionMatrix"}</code> | Orthographic projection sized to the mesh. |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | Full resolution render target. |
| <Link id="m-sourcemesh" /><code>{"private Mesh sourceMesh"}</code> | The mesh being tested. |
| <Link id="m-testmaterial" /><code>{"private Material testMaterial"}</code> | White material for the test triangle, slightly offset so it wins depth ties. |
| <Link id="m-trianglemesh" /><code>{"private Mesh triangleMesh"}</code> | One-triangle mesh holding the triangle being tested. |
| <Link id="m-viewmatrix" /><code>{"private Matrix4x4 viewMatrix"}</code> | Fixed view matrix; the mesh is moved instead of the camera. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkvisibility" /><code>{"bool CheckVisibility(float distance, Vector3 center, Vector3 normalDirection)"}</code> | Renders from a point (or a distance out along the normal) looking back, and returns whether the triangle shows. |
| <Link id="m-checkvisibility-2" /><code>{"bool CheckVisibility(Vector3 position, Vector3 normalDirection)"}</code> | Renders from a point (or a distance out along the normal) looking back, and returns whether the triangle shows. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Destroys the materials and textures and releases the render textures and command buffer. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-downscale" /><code>{"private void DownScale()"}</code> | Halves the render repeatedly down to 1 by 1 pixel with the downscale shader. |
| <Link id="m-isvisible" /><code>{"private bool IsVisible()"}</code> | Reads the final pixel; true if its red is over 0.5. |
| <Link id="m-renderintorendertexture" /><code>{"private void RenderIntoRenderTexture(Vector3 position, Vector3 lookAt)"}</code> | Draws the whole mesh in black and the test triangle in white from the given view. |

</details>

## Used in

Members of other types that take, return or hold a `RenderingHandler`:

[`TriangleVisibilityUtility.CheckVisibilityAroundAxis`](/game-api/types/global-t-x/trianglevisibilityutility#m-checkvisibilityaroundaxis).
