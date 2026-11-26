---
title: "CurveInstance"
description: "Runtime instance of the Curve plugin part: remaps every cell through an animation curve."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `Curve` plugin part: remaps every cell through an animation curve.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<Curve>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/curve">{"Curve"}</Link>{" part)"}</code> | Creates a `CurveInstance` from `plugin` and `part`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Replaces each cell with the curve evaluated at its value. |
