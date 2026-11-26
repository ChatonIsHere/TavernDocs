---
title: "StandardHeatBlit"
description: "Internal atlas blitter for the Custom/StandardHeat shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StandardHeatBlit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Custom/StandardHeat` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StandardHeatBlit()"}</code> | Creates a `StandardHeatBlit` with default values. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpscale" /><code>{"private static readonly int BumpScale"}</code> | Cached shader property ID for `_BumpScale`. |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | Cached shader property ID for `_Color`. |
| <Link id="m-glossiness" /><code>{"private static readonly int Glossiness"}</code> | Cached shader property ID for `_Glossiness`. |
| <Link id="m-interiorrect" /><code>{"private static readonly int InteriorRect"}</code> | Cached shader property ID for `_InteriorRect`. |
| <Link id="m-maintex" /><code>{"private static readonly int MainTex"}</code> | Cached shader property ID for `_MainTex`. |
| <Link id="m-metallic" /><code>{"private static readonly int Metallic"}</code> | Cached shader property ID for `_Metallic`. |
| <Link id="m-metallicglossmap" /><code>{"private static readonly int MetallicGlossMap"}</code> | Cached shader property ID for `_MetallicGlossMap`. |
| <Link id="m-rect1" /><code>{"private static readonly int Rect1"}</code> | Cached shader property ID for `_Rect`. |
| <Link id="m-tiling" /><code>{"private static readonly int Tiling"}</code> | Cached shader property ID for `_Tiling`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | Draws the main texture untinted into the diffuse atlas and the metallic gloss map into the normal atlas, with gloss and metal fixed at 1. Throws if there is no main texture. |
