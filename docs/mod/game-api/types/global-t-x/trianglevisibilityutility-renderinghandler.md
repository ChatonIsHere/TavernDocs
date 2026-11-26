---
title: "TriangleVisibilityUtility.RenderingHandler"
description: "GPU check for whether one triangle of a mesh can be seen from a point: renders the mesh black and the triangle white, shrinks the image to one pixel and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriangleVisibilityUtility.RenderingHandler

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

GPU check for whether one triangle of a mesh can be seen from a point: renders the mesh black and the triangle white, shrinks the image to one pixel and reads it. Used by `CalculateOccludedTriangles` when baking.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TriangleVisibilityUtility`](/mod/game-api/types/global-t-x/trianglevisibilityutility)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RenderingHandler(int renderResolution, float distance, Mesh sourceMesh, Mesh triangleMesh)"}</code> | <span className="api-desc">Creates a `TriangleVisibilityUtility.RenderingHandler` from `renderResolution`, `distance`, `sourceMesh` and `triangleMesh`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bgmaterial" /><code>{"private Material bgMaterial"}</code> | <span className="api-desc">Black material for the whole mesh.</span> |
| <Link id="m-commandbuffer" /><code>{"private CommandBuffer commandBuffer"}</code> | <span className="api-desc">Command buffer used for each render.</span> |
| <Link id="m-downscalematerial" /><code>{"private Material downscaleMaterial"}</code> | <span className="api-desc">Material for the `Hidden/ColorTestDownscale` shader.</span> |
| <Link id="m-downscalingrts" /><code>{"private List<RenderTexture> downscalingRTs"}</code> | <span className="api-desc">Render textures for each halving step, down to 1 by 1.</span> |
| <Link id="m-extraction" /><code>{"private Texture2D extraction"}</code> | <span className="api-desc">1 by 1 texture the final pixel is read into.</span> |
| <Link id="m-projectionmatrix" /><code>{"private Matrix4x4 projectionMatrix"}</code> | <span className="api-desc">Orthographic projection sized to the mesh.</span> |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | <span className="api-desc">Full resolution render target.</span> |
| <Link id="m-sourcemesh" /><code>{"private Mesh sourceMesh"}</code> | <span className="api-desc">The mesh being tested.</span> |
| <Link id="m-testmaterial" /><code>{"private Material testMaterial"}</code> | <span className="api-desc">White material for the test triangle, slightly offset so it wins depth ties.</span> |
| <Link id="m-trianglemesh" /><code>{"private Mesh triangleMesh"}</code> | <span className="api-desc">One-triangle mesh holding the triangle being tested.</span> |
| <Link id="m-viewmatrix" /><code>{"private Matrix4x4 viewMatrix"}</code> | <span className="api-desc">Fixed view matrix; the mesh is moved instead of the camera.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkvisibility" /><code>{"bool CheckVisibility(float distance, Vector3 center, Vector3 normalDirection)"}</code> | <span className="api-desc">Renders from a point (or a distance out along the normal) looking back, and returns whether the triangle shows.</span> |
| <Link id="m-checkvisibility-2" /><code>{"bool CheckVisibility(Vector3 position, Vector3 normalDirection)"}</code> | <span className="api-desc">Renders from a point (or a distance out along the normal) looking back, and returns whether the triangle shows.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Destroys the materials and textures and releases the render textures and command buffer.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-downscale" /><code>{"private void DownScale()"}</code> | <span className="api-desc">Halves the render repeatedly down to 1 by 1 pixel with the downscale shader.</span> |
| <Link id="m-isvisible" /><code>{"private bool IsVisible()"}</code> | <span className="api-desc">Reads the final pixel; true if its red is over 0.5.</span> |
| <Link id="m-renderintorendertexture" /><code>{"private void RenderIntoRenderTexture(Vector3 position, Vector3 lookAt)"}</code> | <span className="api-desc">Draws the whole mesh in black and the test triangle in white from the given view.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RenderingHandler`:

<div className="api-used-in">

[`TriangleVisibilityUtility.CheckVisibilityAroundAxis`](/mod/game-api/types/global-t-x/trianglevisibilityutility#m-checkvisibilityaroundaxis).

</div>
