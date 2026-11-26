---
title: "CaveBiomeGenerator"
description: "Static helper that picks the biome, or blend of two biomes, for each cave layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveBiomeGenerator

A **static class** in `Root.Township`, `Alta.Caves`.

Static helper that picks the biome, or blend of two biomes, for each cave layer. Called by `CaveLayerManager` when it generates layers.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Generate(int biomeSeed, int layer, "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" previous)"}</code> | Works out a layer's biome from the previous layer's: may start a transition to a new biome, advance one, or finish it. Seeded by `biomeSeed`. |
| <Link id="m-preview" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Preview(int depth, "}<Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" hash, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeFrom, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeTo, float transition)"}</code> | Builds a biome for a layer from a given from/to biome and transition amount, without the layer-to-layer logic. Used for previews. |
| <Link id="m-preview-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Preview("}<Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{" section, int layer, "}<Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" hash, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeFrom, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeTo, float transition)"}</code> | Builds a biome for a layer from a given from/to biome and transition amount, without the layer-to-layer logic. Used for previews. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-preview-3" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Preview(int seed, "}<Link to="/mod/game-api/types/alta-world-generation/generatingbiome">{"GeneratingBiome"}</Link>{" generating, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeFrom, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeTo, float transition)"}</code> | Builds a biome for a layer from a given from/to biome and transition amount, without the layer-to-layer logic. Used for previews. |

</details>
