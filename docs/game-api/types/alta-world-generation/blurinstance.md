---
title: "BlurInstance"
description: "Runtime instance of the Blur plugin part: a 3 by 3 weighted blur on one Y slice of the layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlurInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `Blur` plugin part: a 3 by 3 weighted blur on one Y slice of the layer.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<Blur>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlurInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/blur">{"Blur"}</Link>{" part)"}</code> | Creates a `BlurInstance` from `plugin` and `part`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Blurs the slice at the part's Y index, leaving the outer ring of cells unchanged. |
