---
title: "NoWindFoliageRampLerp3Blit"
description: "Internal atlas blitter for the Township Tale/WindFoliage RampLerp3 LOD1 shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NoWindFoliageRampLerp3Blit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/WindFoliage RampLerp3 LOD1` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NoWindFoliageRampLerp3Blit()"}</code> | <span className="api-desc">Creates a `NoWindFoliageRampLerp3Blit` with default values.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpscale" /><code>{"private static readonly int BumpScale"}</code> | <span className="api-desc">Cached shader property ID for `_BumpScale`.</span> |
| <Link id="m-color0" /><code>{"private static readonly int Color0"}</code> | <span className="api-desc">Cached shader property ID for `_Color0`. Read from the material and written to the blit's `_Color`.</span> |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | <span className="api-desc">Cached shader property ID for `_Color`.</span> |
| <Link id="m-color1position" /><code>{"private static readonly int Color1Position"}</code> | <span className="api-desc">Cached shader property ID for `_Color1Position`.</span> |
| <Link id="m-color2" /><code>{"private static readonly int Color2"}</code> | <span className="api-desc">Cached shader property ID for `_Color1`.</span> |
| <Link id="m-color3" /><code>{"private static readonly int Color3"}</code> | <span className="api-desc">Cached shader property ID for `_Color2`.</span> |
| <Link id="m-glossiness" /><code>{"private static readonly int Glossiness"}</code> | <span className="api-desc">Cached shader property ID for `_Glossiness`.</span> |
| <Link id="m-interiorrect" /><code>{"private static readonly int InteriorRect"}</code> | <span className="api-desc">Cached shader property ID for `_InteriorRect`.</span> |
| <Link id="m-metallic" /><code>{"private static readonly int Metallic"}</code> | <span className="api-desc">Cached shader property ID for `_Metallic`.</span> |
| <Link id="m-rect1" /><code>{"private static readonly int Rect1"}</code> | <span className="api-desc">Cached shader property ID for `_Rect`.</span> |
| <Link id="m-sampler" /><code>{"private static readonly int Sampler"}</code> | <span className="api-desc">Cached shader property ID for `_Sampler`.</span> |
| <Link id="m-tiling" /><code>{"private static readonly int Tiling"}</code> | <span className="api-desc">Cached shader property ID for `_Tiling`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | <span className="api-desc">Draws the `_Sampler` texture with the three ramp colours into the diffuse atlas, and a flat default normal with no gloss or metal. Throws if `_Sampler` is missing.</span> |
