---
title: "SpawnIndex"
description: "Per-entity counter that orders spawns and despawns, so clients drop destroy messages that are older than the entity's latest spawn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnIndex

A **class** in `Root.Township`, `Alta.Networking`.

Per-entity counter that orders spawns and despawns, so clients drop destroy messages that are older than the entity's latest spawn.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnIndex()"}</code> | <span className="api-desc">Creates a `SpawnIndex` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private uint index"}</code> | <span className="api-desc">Backing field for `Index`.</span> |
| <Link id="m-waslastdespawn" /><code>{"private bool wasLastDespawn"}</code> | <span className="api-desc">Set by `DespawningIndex`; makes `SpawningIndex` step the index.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-despawningindex" /><code>{"uint DespawningIndex { get; }"}</code> | <span className="api-desc">Returns the current index and marks that a despawn happened, so the next spawn gets a higher index.</span> |
| <Link id="m-index-2" /><code>{"uint Index { get; set; }"}</code> | <span className="api-desc">The current spawn index. `DestroyMessage` ignores a destroy whose index is lower than this.</span> |
| <Link id="m-spawningindex" /><code>{"uint SpawningIndex { get; }"}</code> | <span className="api-desc">Returns the index for a new spawn, adding one if there was a despawn. The despawn flag is never cleared, so every read after one adds one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializeindex" /><code>{"static void SerializeIndex("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref uint index)"}</code> | <span className="api-desc">Reads or writes an index on the stream in a compact form.</span> |

## Used in

Members of other types that take, return or hold a `SpawnIndex`:

<div className="api-used-in">

[`INetworkEntity.SpawnIndex`](/mod/game-api/types/alta-networking/inetworkentity#m-spawnindex), [`NetworkEntity.SpawnIndex`](/mod/game-api/types/alta-networking/networkentity#m-spawnindex).

</div>
