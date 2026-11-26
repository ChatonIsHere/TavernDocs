---
title: "SimplexNoisePartInstance"
description: "Runtime instance of the SimplexNoisePart plugin part: 3D simplex noise remapped by a curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplexNoisePartInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `SimplexNoisePart` plugin part: 3D simplex noise remapped by a curve.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<SimplexNoisePart>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplexNoisePartInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/simplexnoisepart">{"SimplexNoisePart"}</Link>{" part)"}</code> | Creates a `SimplexNoisePartInstance` from `plugin` and `part`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Samples the generator's simplex noise at each cell, runs it through the curve and applies the part's operation. |
