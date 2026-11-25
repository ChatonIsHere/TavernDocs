---
title: "TexturePacker"
description: "static class TexturePacker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TexturePacker

A **static class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Nested types** [`ExistingBlit`](/game-api/types/alta-customization/texturepacker-existingblit)

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-existing" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-customization/texturepacker-existingblit">{"TexturePacker.ExistingBlit"}</Link>{", Vector4> existing"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-normalrendertextureformat" /><code>{"private const RenderTextureFormat NormalRenderTextureFormat"}</code> |
| <Link id="m-normalsize" /><code>{"private const int NormalSize"}</code> |
| <Link id="m-rendertextureformat" /><code>{"private const RenderTextureFormat renderTextureFormat"}</code> |
| <Link id="m-size" /><code>{"private const int Size"}</code> |
| <Link id="m-step" /><code>{"private const int Step"}</code> |
| <Link id="m-taken" /><code>{"private static int[,] taken"}</code> |
| <Link id="m-takensize" /><code>{"private const int TakenSize"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-pack" /><code>{"static async Task Pack(Dictionary<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{", "}<Link to="/game-api/types/alta-customization/icosmeticmeshpartbase">{"ICosmeticMeshPartBase"}</Link>{"> partMap, IEnumerable<"}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{"> parts, Texture2D defaultNormal, RenderTexture diffuse, RenderTexture normals, bool isSharingAllowed = true, float sizeMultiplier = 1)"}</code> |
| <Link id="m-setuptextures" /><code>{"static void SetupTextures(ref RenderTexture diffuse, ref RenderTexture normals, float sizeMultiplier = 1)"}</code> |
