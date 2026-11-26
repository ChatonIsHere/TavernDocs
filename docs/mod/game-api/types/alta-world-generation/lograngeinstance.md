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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<LogRange>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogRangeInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/logrange">{"LogRange"}</Link>{" part)"}</code> | <span className="api-desc">Creates a `LogRangeInstance` from `plugin` and `part`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | <span className="api-desc">Logs the chunk position and the layer's min, max and average; does not change the layer.</span> |
