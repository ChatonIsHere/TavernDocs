---
title: "RandomNoiseInstance"
description: "Runtime instance of the RandomNoise plugin part: hashed per-cell random values with optional coverage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomNoiseInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `RandomNoise` plugin part: hashed per-cell random values with optional coverage.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<RandomNoise>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RandomNoiseInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/randomnoise">{"RandomNoise"}</Link>{" part)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | For cells within coverage (optionally scaled by another layer), applies a hashed random value in the part's range; others get 0. |
