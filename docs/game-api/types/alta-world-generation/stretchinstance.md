---
title: "StretchInstance"
description: "Runtime instance of the Stretch plugin part: extends a height map into the Y axis from the floor or the roof."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StretchInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `Stretch` plugin part: extends a height map into the Y axis from the floor or the roof.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<Stretch>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StretchInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/stretch">{"Stretch"}</Link>{" part)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | For each column, sets the first cell to 0.75 and fills the rest from the height map value times the stretch curve, clamped to the part's range. |
