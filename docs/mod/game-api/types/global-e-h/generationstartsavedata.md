---
title: "GenerationStartSaveData"
description: "Save data for a GenerationStarter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationStartSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `GenerationStarter`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<GenerationStarter, GenerationStartSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GenerationStarter`](/mod/game-api/types/global-e-h/generationstarter), [`GenerationStartSaveData`](/mod/game-api/types/global-e-h/generationstartsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationStartSaveData()"}</code> | Creates a `GenerationStartSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-generatedbiome" /><code><Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" generatedBiome"}</code> | The biome that was generated. |
| <Link id="m-lastloadid" /><code>{"uint lastLoadId"}</code> | Runtime ID of the session that saved it, to tell a reload in the same run from a fresh start. |
| <Link id="m-preset" /><code><Link to="/mod/game-api/types/global-a-b/biomepreset">{"BiomePreset"}</Link>{" preset"}</code> | Biome preset used. |
| <Link id="m-seed" /><code>{"int seed"}</code> | Random seed for generation. |
| <Link id="m-terrainmodificationid" /><code>{"uint terrainModificationId"}</code> | Terrain modification ID, kept only within the same run. |
