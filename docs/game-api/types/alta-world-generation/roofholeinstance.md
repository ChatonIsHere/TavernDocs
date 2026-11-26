---
title: "RoofHoleInstance"
description: "Runtime instance of the RoofHole plugin part: carves the sloped passage that links a cave layer to the one above or below, from the room found by room fixing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoofHoleInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `RoofHole` plugin part: carves the sloped passage that links a cave layer to the one above or below, from the room found by room fixing.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<RoofHole>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoofHoleInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/roofhole">{"RoofHole"}</Link>{" part)"}</code> | Creates a `RoofHoleInstance` from `plugin` and `part`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Carves floor, open space and roof along a path from the biggest (roof) or second biggest room, using the room fix plugin's width and height curves. |
