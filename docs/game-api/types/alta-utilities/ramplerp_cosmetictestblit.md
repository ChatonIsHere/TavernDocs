---
title: "RampLerp_CosmeticTestBlit"
description: "Internal atlas blitter for the Township Tale/RampLerp_CosmeticTest shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RampLerp_CosmeticTestBlit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/RampLerp_CosmeticTest` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RampLerp_CosmeticTestBlit()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static readonly int BumpMap"}</code> | Cached shader property ID for `_BumpMap`. |
| <Link id="m-bumpstrength" /><code>{"private static readonly int BumpStrength"}</code> | Cached shader property ID for `_BumpStrength`. |
| <Link id="m-colora1" /><code>{"private static readonly int ColorA1"}</code> | Cached shader property ID for `_ColorA1`. |
| <Link id="m-colora2" /><code>{"private static readonly int ColorA2"}</code> | Cached shader property ID for `_ColorA2`. |
| <Link id="m-colora3" /><code>{"private static readonly int ColorA3"}</code> | Cached shader property ID for `_ColorA3`. |
| <Link id="m-colorb1" /><code>{"private static readonly int ColorB1"}</code> | Cached shader property ID for `_ColorB1`. |
| <Link id="m-colorb2" /><code>{"private static readonly int ColorB2"}</code> | Cached shader property ID for `_ColorB2`. |
| <Link id="m-colorb3" /><code>{"private static readonly int ColorB3"}</code> | Cached shader property ID for `_ColorB3`. |
| <Link id="m-cutoff" /><code>{"private static readonly int Cutoff"}</code> | Cached shader property ID for `_Cutoff`. |
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
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | Draws the `_Sampler` texture with six colours and cutoff into the diffuse atlas, and bump map, gloss and metallic into the normal atlas. No emission. Throws if `_Sampler` is missing. |
