---
title: "CellularAutomataInstance"
description: "Runtime instance of the CellularAutomata plugin part: sets each cell to one of two values by summing its neighbours."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CellularAutomataInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `CellularAutomata` plugin part: sets each cell to one of two values by summing its neighbours.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<CellularAutomata>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CellularAutomataInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/cellularautomata">{"CellularAutomata"}</Link>{" part)"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offY)"}</code> | Sets each cell to `ValueIfTrue` if the sum within the capture radius reaches the threshold, else `ValueIfFalse`. |
