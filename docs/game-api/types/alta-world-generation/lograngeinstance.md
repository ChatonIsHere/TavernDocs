---
title: "LogRangeInstance"
description: "Runtime instance of the LogRange debug plugin part: logs the minimum, maximum and average of the layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogRangeInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `LogRange` debug plugin part: logs the minimum, maximum and average of the layer.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<LogRange>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogRangeInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/logrange">{"LogRange"}</Link>{" part)"}</code> | Creates a `LogRangeInstance` from `plugin` and `part`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Logs the chunk position and the layer's min, max and average; does not change the layer. |
