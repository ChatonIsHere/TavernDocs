---
title: "CaveSeedArguments"
description: "Message the cave generator (GenerationBase) sends to clients so they generate the same cave layer: seed, layer, entrance and the layer's streamer entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveSeedArguments

A **struct** in `Root.Township`, no namespace.

Message the cave generator (`GenerationBase`) sends to clients so they generate the same cave layer: seed, layer, entrance and the layer's streamer entity.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveSeedArguments("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" layerStreamer, uint seed, uint layer, Vector2 entrance, Vector2 entranceDirection)"}</code> | Creates a `CaveSeedArguments` from `layerStreamer`, `seed`, `layer`, `entrance` and `entranceDirection`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entrance" /><code>{"private Vector2 entrance"}</code> | Backing field for `Entrance`. |
| <Link id="m-entrancedirection" /><code>{"private Vector2 entranceDirection"}</code> | Backing field for `EntranceDirection`. |
| <Link id="m-layer" /><code>{"private uint layer"}</code> | Backing field for `Layer`. |
| <Link id="m-layerstreamer" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" layerStreamer"}</code> | Backing field for `LayerStreamer`. |
| <Link id="m-seed" /><code>{"private uint seed"}</code> | Backing field for `Seed`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entrance-2" /><code>{"Vector2 Entrance { get; }"}</code> | 2D position of the cave entrance. |
| <Link id="m-entrancedirection-2" /><code>{"Vector2 EntranceDirection { get; }"}</code> | 2D direction the entrance faces. |
| <Link id="m-layer-2" /><code>{"uint Layer { get; }"}</code> | Cave layer number. |
| <Link id="m-layerstreamer-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LayerStreamer { get; }"}</code> | Network entity that streams this layer. |
| <Link id="m-seed-2" /><code>{"uint Seed { get; }"}</code> | Random seed for generating the layer. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes all fields on the stream. |

## Used in

Members of other types that take, return or hold a `CaveSeedArguments`:

[`GenerationBase.clientSpawn`](/game-api/types/alta-world-generation/generationbase#m-clientspawn), [`GenerationBase.ClientSpawn`](/game-api/types/alta-world-generation/generationbase#m-clientspawn-2).
