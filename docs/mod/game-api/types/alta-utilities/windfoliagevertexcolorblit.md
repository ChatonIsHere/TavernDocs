---
title: "WindFoliageVertexColorBlit"
description: "Internal atlas blitter for the Township Tale/WindFoliageVertexColor shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WindFoliageVertexColorBlit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/WindFoliageVertexColor` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WindFoliageVertexColorBlit()"}</code> | <span className="api-desc">Creates a `WindFoliageVertexColorBlit` with default values.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bending" /><code>{"private static readonly int Bending"}</code> | <span className="api-desc">Cached shader property ID for `_Bending`.</span> |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | <span className="api-desc">Cached shader property ID for `_Color`.</span> |
| <Link id="m-cutoff" /><code>{"private static readonly int Cutoff"}</code> | <span className="api-desc">Cached shader property ID for `_Cutoff`.</span> |
| <Link id="m-glossiness" /><code>{"private static readonly int Glossiness"}</code> | <span className="api-desc">Cached shader property ID for `_Glossiness`.</span> |
| <Link id="m-interiorrect" /><code>{"private static readonly int InteriorRect"}</code> | <span className="api-desc">Cached shader property ID for `_InteriorRect`.</span> |
| <Link id="m-maintex" /><code>{"private static readonly int MainTex"}</code> | <span className="api-desc">Cached shader property ID for `_MainTex`.</span> |
| <Link id="m-rect1" /><code>{"private static readonly int Rect1"}</code> | <span className="api-desc">Cached shader property ID for `_Rect`.</span> |
| <Link id="m-swaystrength" /><code>{"private static readonly int SwayStrength"}</code> | <span className="api-desc">Cached shader property ID for `_SwayStrength`.</span> |
| <Link id="m-tiling" /><code>{"private static readonly int Tiling"}</code> | <span className="api-desc">Cached shader property ID for `_Tiling`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | <span className="api-desc">Draws the main texture with colour and cutoff (alpha test on) into the diffuse atlas, and gloss, sway strength and bending into the normal atlas.</span> |
