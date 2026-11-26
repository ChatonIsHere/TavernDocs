---
title: "ShaderBlit"
description: "Internal base for the per-shader atlas blitters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShaderBlit

An **internal abstract class** in `Root.Township`, `Alta.Utilities.Atlas`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal base for the per-shader atlas blitters. `AtlasDefinition` picks a subclass by shader name and calls `Blit` to draw one material into the atlas textures.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`BasicBlit`](/game-api/types/alta-utilities/basicblit), [`MetalNonForgingBlit`](/game-api/types/alta-utilities/metalnonforgingblit), [`NoWindFoliageRampLerp3Blit`](/game-api/types/alta-utilities/nowindfoliageramplerp3blit), [`RampLerp3Blit`](/game-api/types/alta-utilities/ramplerp3blit), [`RampLerp_CosmeticTestBlit`](/game-api/types/alta-utilities/ramplerp_cosmetictestblit), [`RampLerpBlit`](/game-api/types/alta-utilities/ramplerpblit), [`RampLerpNoCullCutoutBlit`](/game-api/types/alta-utilities/ramplerpnocullcutoutblit), [`SimpleStandardBlit`](/game-api/types/alta-utilities/simplestandardblit), [`StandardHeatBlit`](/game-api/types/alta-utilities/standardheatblit), [`WindFoliageBlit`](/game-api/types/alta-utilities/windfoliageblit), [`WindFoliageRampLerp3Blit`](/game-api/types/alta-utilities/windfoliageramplerp3blit), [`WindFoliageTextureSwayBlit`](/game-api/types/alta-utilities/windfoliagetextureswayblit), [`WindFoliageVertexColorBlit`](/game-api/types/alta-utilities/windfoliagevertexcolorblit), [`WindFoliageVertexColorColorRampBlit`](/game-api/types/alta-utilities/windfoliagevertexcolorcolorrampblit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ShaderBlit()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"abstract void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material, Material diffuseBlit, Material normalBlit, Material emissionBlit)"}</code> | Copies the material's textures and settings onto the blit materials and draws them into the diffuse, normal and, if asked, emission atlas at the given rect. |
| <Link id="m-copykeyword" /><code>{"protected void CopyKeyword(Material copyFrom, Material copyTo, string keyword)"}</code> | Turns a shader keyword on or off on the target material to match the source material. |
