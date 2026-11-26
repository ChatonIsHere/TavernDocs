---
title: "MaskInstance"
description: "Runtime instance of the Mask plugin part: sets cells to a fail value where another plugin's layer is on the wrong side of a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaskInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `Mask` plugin part: sets cells to a fail value where another plugin's layer is on the wrong side of a threshold.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<Mask>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaskInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/mask">{"Mask"}</Link>{" part)"}</code> | Creates a `MaskInstance` from `plugin` and `part`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Sets each cell to `Fail` when the mask layer is below the threshold (or at or above it, depending on `IsMoreThan`). |
