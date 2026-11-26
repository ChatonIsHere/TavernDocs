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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NoWindFoliageRampLerp3Blit()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpscale" /><code>{"private static readonly int BumpScale"}</code> | Cached shader property ID for `_BumpScale`. |
| <Link id="m-color0" /><code>{"private static readonly int Color0"}</code> | Cached shader property ID for `_Color0`. Read from the material and written to the blit's `_Color`. |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | Cached shader property ID for `_Color`. |
| <Link id="m-color1position" /><code>{"private static readonly int Color1Position"}</code> | Cached shader property ID for `_Color1Position`. |
| <Link id="m-color2" /><code>{"private static readonly int Color2"}</code> | Cached shader property ID for `_Color1`. |
| <Link id="m-color3" /><code>{"private static readonly int Color3"}</code> | Cached shader property ID for `_Color2`. |
| <Link id="m-glossiness" /><code>{"private static readonly int Glossiness"}</code> | Cached shader property ID for `_Glossiness`. |
| <Link id="m-interiorrect" /><code>{"private static readonly int InteriorRect"}</code> | Cached shader property ID for `_InteriorRect`. |
| <Link id="m-metallic" /><code>{"private static readonly int Metallic"}</code> | Cached shader property ID for `_Metallic`. |
| <Link id="m-rect1" /><code>{"private static readonly int Rect1"}</code> | Cached shader property ID for `_Rect`. |
| <Link id="m-sampler" /><code>{"private static readonly int Sampler"}</code> | Cached shader property ID for `_Sampler`. |
| <Link id="m-tiling" /><code>{"private static readonly int Tiling"}</code> | Cached shader property ID for `_Tiling`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | Draws the `_Sampler` texture with the three ramp colours into the diffuse atlas, and a flat default normal with no gloss or metal. Throws if `_Sampler` is missing. |
