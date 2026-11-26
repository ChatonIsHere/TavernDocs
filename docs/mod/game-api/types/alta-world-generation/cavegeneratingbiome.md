---
title: "CaveGeneratingBiome"
description: "Biome generator for one cave layer: adds per-layer attribute growth by depth and applies its section's multipliers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveGeneratingBiome

A **class** in `Root.Township`, `Alta.Caves`.

Biome generator for one cave layer: adds per-layer attribute growth by depth and applies its section's multipliers.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneratingBiome`](/mod/game-api/types/alta-world-generation/generatingbiome)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveGeneratingBiome("}<Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{" section, int layer)"}</code> | <span className="api-desc">Creates a `CaveGeneratingBiome` from `depth`.</span> |
| <Link id="m-ctor-2" /><code>{"CaveGeneratingBiome(int depth)"}</code> | <span className="api-desc">Creates a `CaveGeneratingBiome` from `depth`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-depth" /><code>{"private int depth"}</code> | <span className="api-desc">Absolute layer depth, counting the lengths of earlier sections.</span> |
| <Link id="m-layer" /><code>{"private int layer"}</code> | <span className="api-desc">Layer index within its section.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-section" /><code><Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{" { get; protected set; }"}</code> | <span className="api-desc">The cave section this layer belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateattributes" /><code>{"protected override void GenerateAttributes("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, Random random)"}</code> | <span className="api-desc">Runs the base generation, resets the special Depth attribute to 0, adds each attribute's `ExtraPerLayer` times depth, then applies the section's multipliers.</span> |
