---
title: "MetalNonForgingBlit"
description: "Internal atlas blitter for the Township Tale/MetalNonForging, Custom/Metal and Township Tale/StaticMetal shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MetalNonForgingBlit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/MetalNonForging`, `Custom/Metal` and `Township Tale/StaticMetal` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MetalNonForgingBlit()"}</code> | <span className="api-desc">Creates a `MetalNonForgingBlit` with default values.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static readonly int BumpMap"}</code> | <span className="api-desc">Cached shader property ID for `_BumpMap`.</span> |
| <Link id="m-colora" /><code>{"private static readonly int ColorA"}</code> | <span className="api-desc">Cached shader property ID for `_ColorA`.</span> |
| <Link id="m-colorb" /><code>{"private static readonly int ColorB"}</code> | <span className="api-desc">Cached shader property ID for `_ColorB`.</span> |
| <Link id="m-glossiness" /><code>{"private static readonly int Glossiness"}</code> | <span className="api-desc">Cached shader property ID for `_Glossiness`.</span> |
| <Link id="m-interiorrect" /><code>{"private static readonly int InteriorRect"}</code> | <span className="api-desc">Cached shader property ID for `_InteriorRect`.</span> |
| <Link id="m-maintex" /><code>{"private static readonly int MainTex"}</code> | <span className="api-desc">Cached shader property ID for `_MainTex`.</span> |
| <Link id="m-metallicstrength" /><code>{"private static readonly int MetallicStrength"}</code> | <span className="api-desc">Cached shader property ID for `_MetallicStrength`.</span> |
| <Link id="m-rect1" /><code>{"private static readonly int Rect1"}</code> | <span className="api-desc">Cached shader property ID for `_Rect`.</span> |
| <Link id="m-tiling" /><code>{"private static readonly int Tiling"}</code> | <span className="api-desc">Cached shader property ID for `_Tiling`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | <span className="api-desc">Draws the main texture tinted by `_ColorA` and `_ColorB` into the diffuse atlas, and gloss and metallic strength into the normal atlas. Throws if there is no main texture.</span> |
