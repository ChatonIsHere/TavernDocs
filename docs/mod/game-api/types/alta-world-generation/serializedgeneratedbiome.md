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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedGeneratedBiome()"}</code> | <span className="api-desc">Creates a `SerializedGeneratedBiome` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" from"}</code> | <span className="api-desc">Biome at transition 0.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Seed for generating the blend.</span> |
| <Link id="m-to" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" to"}</code> | <span className="api-desc">Biome at transition 1.</span> |
| <Link id="m-transition" /><code>{"private float transition"}</code> | <span className="api-desc">Blend from `from` (0) to `to` (1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getgenerated" /><code><Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" GetGenerated()"}</code> | <span className="api-desc">Builds the biome by weighting `from` and `to` by the transition and generating with the seed.</span> |

## Used in

Members of other types that take, return or hold a `SerializedGeneratedBiome`:

<div className="api-used-in">

[`ChunkEnvironment.biome`](/mod/game-api/types/alta-world/chunkenvironment#m-biome), [`BiomePreset.biome`](/mod/game-api/types/global-a-b/biomepreset#m-biome).

</div>
