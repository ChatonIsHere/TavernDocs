---
title: "BiomeSerializer"
description: "Stream extension for sending a generated biome over the network as its seed, from and to biomes and transition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSerializer

A **static class** in `Root.Township`, `Alta.Caves`.

Stream extension for sending a generated biome over the network as its seed, from and to biomes and transition.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializebiome" /><code>{"static void SerializeBiome("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome)"}</code> | <span className="api-desc">Writes the biome's seed, from biome, to biome and transition; when reading, regenerates the biome from those values.</span> |
