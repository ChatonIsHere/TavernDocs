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
| <Link id="m-ctor" /><code>{"GenerationStartSaveData()"}</code> | <span className="api-desc">Creates a `GenerationStartSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-generatedbiome" /><code><Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" generatedBiome"}</code> | <span className="api-desc">The biome that was generated.</span> |
| <Link id="m-lastloadid" /><code>{"uint lastLoadId"}</code> | <span className="api-desc">Runtime ID of the session that saved it, to tell a reload in the same run from a fresh start.</span> |
| <Link id="m-preset" /><code><Link to="/mod/game-api/types/global-a-b/biomepreset">{"BiomePreset"}</Link>{" preset"}</code> | <span className="api-desc">Biome preset used.</span> |
| <Link id="m-seed" /><code>{"int seed"}</code> | <span className="api-desc">Random seed for generation.</span> |
| <Link id="m-terrainmodificationid" /><code>{"uint terrainModificationId"}</code> | <span className="api-desc">Terrain modification ID, kept only within the same run.</span> |
