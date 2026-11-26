---
title: "OperationPartInstance"
description: "Runtime instance of the OperationPart plugin part: combines two plugins' layers cell by cell."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OperationPartInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `OperationPart` plugin part: combines two plugins' layers cell by cell.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<OperationPart>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OperationPartInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/operationpart">{"OperationPart"}</Link>{" part)"}</code> | Creates an `OperationPartInstance` from `plugin` and `part`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" a"}</code> | First input plugin; falls back to this part's plugin. |
| <Link id="m-b" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" b"}</code> | Second input plugin; falls back to this part's plugin. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | Writes the operation of layer A and layer B into each cell; logs an error if the target is larger than either input. |
