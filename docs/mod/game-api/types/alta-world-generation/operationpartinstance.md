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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<OperationPart>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OperationPartInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/operationpart">{"OperationPart"}</Link>{" part)"}</code> | <span className="api-desc">Creates an `OperationPartInstance` from `plugin` and `part`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" a"}</code> | <span className="api-desc">First input plugin; falls back to this part's plugin.</span> |
| <Link id="m-b" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" b"}</code> | <span className="api-desc">Second input plugin; falls back to this part's plugin.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | <span className="api-desc">Writes the operation of layer A and layer B into each cell; logs an error if the target is larger than either input.</span> |
