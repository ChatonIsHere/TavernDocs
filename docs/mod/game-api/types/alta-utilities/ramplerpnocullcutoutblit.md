---
title: "RampLerpNoCullCutoutBlit"
description: "Internal atlas blitter for the Township Tale/RampLerpNoCullCutout shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RampLerpNoCullCutoutBlit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/RampLerpNoCullCutout` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RampLerpNoCullCutoutBlit()"}</code> | Creates a `RampLerpNoCullCutoutBlit` with default values. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static readonly int BumpMap"}</code> | Cached shader property ID for `_BumpMap`. |
| <Link id="m-bumpstrength" /><code>{"private static readonly int BumpStrength"}</code> | Cached shader property ID for `_BumpStrength`. |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | Cached shader property ID for `_Color`. |
| <Link id="m-colora" /><code>{"private static readonly int ColorA"}</code> | Cached shader property ID for `_ColorA`. |
| <Link id="m-cutoff" /><code>{"private static readonly int Cutoff"}</code> | Cached shader property ID for `_Cutoff`. |
| <Link id="m-emission" /><code>{"private static readonly int Emission"}</code> | Cached shader property ID for `_Emission`. |
| <Link id="m-emissioncolor" /><code>{"private static readonly int EmissionColor"}</code> | Cached shader property ID for `_EmissionColor`. |
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
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | Like `RampLerpBlit` but copies the cutoff and turns alpha test on. Logs and throws if `_Sampler` is missing. |
