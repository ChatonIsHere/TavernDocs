---
title: "SerializedGeneratedBiome"
description: "Saved description of a blended biome: two biomes, how far between them and a seed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedGeneratedBiome

A **class** in `Root.Township`, `Alta.Caves`.

Saved description of a blended biome: two biomes, how far between them and a seed. Used by chunk environments and biome presets.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializedGeneratedBiome()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" from"}</code> | Biome at transition 0. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Seed for generating the blend. |
| <Link id="m-to" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" to"}</code> | Biome at transition 1. |
| <Link id="m-transition" /><code>{"private float transition"}</code> | Blend from `from` (0) to `to` (1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getgenerated" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" GetGenerated()"}</code> | Builds the biome by weighting `from` and `to` by the transition and generating with the seed. |

## Used in

Members of other types that take, return or hold a `SerializedGeneratedBiome`:

[`ChunkEnvironment.biome`](/game-api/types/alta-world/chunkenvironment#m-biome), [`BiomePreset.biome`](/game-api/types/global-a-b/biomepreset#m-biome).
