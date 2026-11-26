---
title: "SimpleStandardBlit"
description: "Internal atlas blitter for the Township Tale/Cheap/SimpleStandard shader."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleStandardBlit

A **internal class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal atlas blitter for the `Township Tale/Cheap/SimpleStandard` shader. `AtlasDefinition` uses it when it bakes texture atlases.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleStandardBlit()"}</code> | Creates a `SimpleStandardBlit` with default values. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bumpmap" /><code>{"private static readonly int BumpMap"}</code> | Cached shader property ID for `_BumpMap`. |
| <Link id="m-bumpscale" /><code>{"private static readonly int BumpScale"}</code> | Cached shader property ID for `_BumpScale`. |
| <Link id="m-color1" /><code>{"private static readonly int Color1"}</code> | Cached shader property ID for `_Color`. |
| <Link id="m-cutoff" /><code>{"private static readonly int Cutoff"}</code> | Cached shader property ID for `_Cutoff`. |
| <Link id="m-diffusetex" /><code>{"private static readonly int DiffuseTex"}</code> | Cached shader property ID for `_DiffuseTex`. |
| <Link id="m-emissioncolor" /><code>{"private static readonly int EmissionColor"}</code> | Cached shader property ID for `_EmissionColor`. |
| <Link id="m-emissionmap" /><code>{"private static readonly int EmissionMap"}</code> | Cached shader property ID for `_EmissionMap`. |
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
| <Link id="m-blit" /><code>{"override void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | Draws the main texture (white if missing) with colour and cutoff into the diffuse atlas, bump and metallic gloss maps into the normal atlas, and the emission map if asked. Copies the alpha test and metallic keywords. |
