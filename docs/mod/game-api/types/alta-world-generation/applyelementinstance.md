---
title: "ApplyElementInstance"
description: "Runtime instance of the ApplyElement plugin part: combines every cell of the layer with the current biome's chance for an element."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplyElementInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `ApplyElement` plugin part: combines every cell of the layer with the current biome's chance for an element.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<ApplyElement>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplyElementInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/applyelement">{"ApplyElement"}</Link>{" part)"}</code> | Creates an `ApplyElementInstance` from `plugin` and `part`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-element" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" element"}</code> | The element whose chance is applied; falls back to the plugin's element if the part has none. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Applies the part's operation between each cell and the biome's chance for `element`. |
