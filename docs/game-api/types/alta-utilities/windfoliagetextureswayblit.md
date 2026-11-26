---
title: "WindFoliageTextureSwayBlit"
description: "Internal atlas blitter for the Township Tale/WindFoliageTextureSway shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindFoliageTextureSwayBlit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/WindFoliageTextureSway` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WindFoliageTextureSwayBlit()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bending" /><code>{"private static readonly int Bending"}</code> | Cached shader property ID for `_Bending`. |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | Cached shader property ID for `_Color`. |
| <Link id="m-cutoff" /><code>{"private static readonly int Cutoff"}</code> | Cached shader property ID for `_Cutoff`. |
| <Link id="m-glossiness" /><code>{"private static readonly int Glossiness"}</code> | Cached shader property ID for `_Glossiness`. |
| <Link id="m-interiorrect" /><code>{"private static readonly int InteriorRect"}</code> | Cached shader property ID for `_InteriorRect`. |
| <Link id="m-maintex" /><code>{"private static readonly int MainTex"}</code> | Cached shader property ID for `_MainTex`. |
| <Link id="m-metallic" /><code>{"private static readonly int Metallic"}</code> | Cached shader property ID for `_Metallic`. |
| <Link id="m-rect1" /><code>{"private static readonly int Rect1"}</code> | Cached shader property ID for `_Rect`. |
| <Link id="m-swaystrength" /><code>{"private static readonly int SwayStrength"}</code> | Cached shader property ID for `_SwayStrength`. |
| <Link id="m-swaytex" /><code>{"private static readonly int SwayTex"}</code> | Cached shader property ID for `_SwayTex`. |
| <Link id="m-tiling" /><code>{"private static readonly int Tiling"}</code> | Cached shader property ID for `_Tiling`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | Draws the main texture with colour and cutoff into the diffuse atlas, and the `_SwayTex` texture with gloss, metallic, sway strength and bending into the normal atlas. |
