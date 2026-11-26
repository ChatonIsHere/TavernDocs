---
title: "CaveSeedArguments"
description: "Message the cave generator (GenerationBase) sends to clients so they generate the same cave layer: seed, layer, entrance and the layer's streamer entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveSeedArguments

A **struct** in `Root.Township`, the global namespace.

Message the cave generator (`GenerationBase`) sends to clients so they generate the same cave layer: seed, layer, entrance and the layer's streamer entity.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveSeedArguments("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" layerStreamer, uint seed, uint layer, Vector2 entrance, Vector2 entranceDirection)"}</code> | <span className="api-desc">Creates a `CaveSeedArguments` from `layerStreamer`, `seed`, `layer`, `entrance` and `entranceDirection`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entrance" /><code>{"private Vector2 entrance"}</code> | <span className="api-desc">Backing field for `Entrance`.</span> |
| <Link id="m-entrancedirection" /><code>{"private Vector2 entranceDirection"}</code> | <span className="api-desc">Backing field for `EntranceDirection`.</span> |
| <Link id="m-layer" /><code>{"private uint layer"}</code> | <span className="api-desc">Backing field for `Layer`.</span> |
| <Link id="m-layerstreamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" layerStreamer"}</code> | <span className="api-desc">Backing field for `LayerStreamer`.</span> |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | <span className="api-desc">Backing field for `Seed`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entrance-2" /><code>{"Vector2 Entrance { get; }"}</code> | <span className="api-desc">2D position of the cave entrance.</span> |
| <Link id="m-entrancedirection-2" /><code>{"Vector2 EntranceDirection { get; }"}</code> | <span className="api-desc">2D direction the entrance faces.</span> |
| <Link id="m-layer-2" /><code>{"uint Layer { get; }"}</code> | <span className="api-desc">Cave layer number.</span> |
| <Link id="m-layerstreamer-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LayerStreamer { get; }"}</code> | <span className="api-desc">Network entity that streams this layer.</span> |
| <Link id="m-seed-2" /><code>{"uint Seed { get; }"}</code> | <span className="api-desc">Random seed for generating the layer.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes all fields on the stream.</span> |

## Used in

Members of other types that take, return or hold a `CaveSeedArguments`:

<div className="api-used-in">

[`GenerationBase.clientSpawn`](/mod/game-api/types/alta-world-generation/generationbase#m-clientspawn), [`GenerationBase.ClientSpawn`](/mod/game-api/types/alta-world-generation/generationbase#m-clientspawn-2).

</div>
