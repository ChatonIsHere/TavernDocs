---
title: "CopyPartInstance"
description: "Runtime instance of the CopyPart plugin part: copies another plugin's layer into this one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyPartInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `CopyPart` plugin part: copies another plugin's layer into this one.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<CopyPart>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyPartInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/copypart">{"CopyPart"}</Link>{" part)"}</code> | Creates a `CopyPartInstance` from `plugin` and `part`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" from"}</code> | Plugin to copy from; falls back to this part's own plugin. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Copies every cell from the source layer; logs an error and stops if the target is larger. |
