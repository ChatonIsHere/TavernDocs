---
title: "CircleInstance"
description: "Runtime instance of the Circle plugin part: applies a curve over a circle in one Y slice."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CircleInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `Circle` plugin part: applies a curve over a circle in one Y slice.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<Circle>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CircleInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/circle">{"Circle"}</Link>{" part)"}</code> | Creates a `CircleInstance` from `plugin` and `part`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | If the circle overlaps the chunk, applies the curve by normalised distance from its centre using the part's operation. |
