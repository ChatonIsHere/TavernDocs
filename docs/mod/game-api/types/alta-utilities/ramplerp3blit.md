---
title: "RampLerp3Blit"
description: "Internal atlas blitter for the Township Tale/RampLerp3 shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RampLerp3Blit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/RampLerp3` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RampLerp3Blit()"}</code> | <span className="api-desc">Creates a `RampLerp3Blit` with default values.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static readonly int BumpMap"}</code> | <span className="api-desc">Cached shader property ID for `_BumpMap`.</span> |
| <Link id="m-bumpstrength" /><code>{"private static readonly int BumpStrength"}</code> | <span className="api-desc">Cached shader property ID for `_BumpStrength`.</span> |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | <span className="api-desc">Cached shader property ID for `_Color`.</span> |
| <Link id="m-color1position" /><code>{"private static readonly int Color1Position"}</code> | <span className="api-desc">Cached shader property ID for `_Color1Position`.</span> |
| <Link id="m-color2" /><code>{"private static readonly int Color2"}</code> | <span className="api-desc">Cached shader property ID for `_Color2`.</span> |
| <Link id="m-color3" /><code>{"private static readonly int Color3"}</code> | <span className="api-desc">Cached shader property ID for `_Color1`.</span> |
| <Link id="m-emission" /><code>{"private static readonly int Emission"}</code> | <span className="api-desc">Cached shader property ID for `_Emission`.</span> |
| <Link id="m-emissioncolor" /><code>{"private static readonly int EmissionColor"}</code> | <span className="api-desc">Cached shader property ID for `_EmissionColor`.</span> |
| <Link id="m-glossiness" /><code>{"private static readonly int Glossiness"}</code> | <span className="api-desc">Cached shader property ID for `_Glossiness`.</span> |
| <Link id="m-interiorrect" /><code>{"private static readonly int InteriorRect"}</code> | <span className="api-desc">Cached shader property ID for `_InteriorRect`.</span> |
| <Link id="m-metallic" /><code>{"private static readonly int Metallic"}</code> | <span className="api-desc">Cached shader property ID for `_Metallic`.</span> |
| <Link id="m-rect" /><code>{"private static readonly int Rect"}</code> | <span className="api-desc">Cached shader property ID for `_Rect`.</span> |
| <Link id="m-sampler" /><code>{"private static readonly int Sampler"}</code> | <span className="api-desc">Cached shader property ID for `_Sampler`.</span> |
| <Link id="m-tiling" /><code>{"private static readonly int Tiling"}</code> | <span className="api-desc">Cached shader property ID for `_Tiling`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | <span className="api-desc">Draws the `_Sampler` texture with three ramp colours into the diffuse atlas, bump map, gloss and metallic into the normal atlas, and emission if asked. Throws if `_Sampler` is missing.</span> |
