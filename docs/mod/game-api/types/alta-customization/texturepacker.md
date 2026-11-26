---
title: "TexturePacker"
description: "Packs every cosmetic part's texture and normal map into the character's 4096 atlas render textures."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TexturePacker

A **static class** in `Root.Township`, `Alta.Customization`.

Packs every cosmetic part's texture and normal map into the character's 4096 atlas render textures. Used by `CosmeticPacker`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested types** [`ExistingBlit`](/mod/game-api/types/alta-customization/texturepacker-existingblit)

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-existing" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-customization/texturepacker-existingblit">{"TexturePacker.ExistingBlit"}</Link>{", Vector4> existing"}</code> | Spots already used per texture and colour pair in this pack. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-normalrendertextureformat" /><code>{"private const RenderTextureFormat NormalRenderTextureFormat"}</code> | Format of the normal atlas (ARGB32). |
| <Link id="m-normalsize" /><code>{"private const int NormalSize"}</code> | Normal atlas size, 4096. Not scaled by the size multiplier. |
| <Link id="m-rendertextureformat" /><code>{"private const RenderTextureFormat renderTextureFormat"}</code> | Format of the diffuse atlas (ARGB32). |
| <Link id="m-size" /><code>{"private const int Size"}</code> | Diffuse atlas size before the multiplier, 4096. |
| <Link id="m-step" /><code>{"private const int Step"}</code> | Grid cell size in pixels, 32. |
| <Link id="m-taken" /><code>{"private static int[,] taken"}</code> | Grid of used cells, cleared each pack. |
| <Link id="m-takensize" /><code>{"private const int TakenSize"}</code> | Cells per side of the grid, 128. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pack" /><code>{"static async Task Pack(Dictionary<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/mod/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{"> partMap, IEnumerable<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> parts, Texture2D defaultNormal, RenderTexture diffuse, RenderTexture normals, bool isSharingAllowed = true, float sizeMultiplier = 1)"}</code> | Places each part's texture in a free spot on a 32 px grid, largest first, and blits diffuse and normals there. Same texture and colours reuse a spot. |
| <Link id="m-setuptextures" /><code>{"static void SetupTextures(ref RenderTexture diffuse, ref RenderTexture normals, float sizeMultiplier = 1)"}</code> | Creates the diffuse (scaled by the multiplier) and normal atlas render textures if they are null. |
