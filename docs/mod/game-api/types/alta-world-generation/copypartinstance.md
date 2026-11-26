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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<CopyPart>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyPartInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/copypart">{"CopyPart"}</Link>{" part)"}</code> | <span className="api-desc">Creates a `CopyPartInstance` from `plugin` and `part`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" from"}</code> | <span className="api-desc">Plugin to copy from; falls back to this part's own plugin.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | <span className="api-desc">Copies every cell from the source layer; logs an error and stops if the target is larger.</span> |
