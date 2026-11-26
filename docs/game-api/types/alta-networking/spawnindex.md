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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnIndex()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private uint index"}</code> | Backing field for `Index`. |
| <Link id="m-waslastdespawn" /><code>{"private bool wasLastDespawn"}</code> | Set by `DespawningIndex`; makes `SpawningIndex` step the index. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-despawningindex" /><code>{"uint DespawningIndex { get; }"}</code> | Returns the current index and marks that a despawn happened, so the next spawn gets a higher index. |
| <Link id="m-index-2" /><code>{"uint Index { get; set; }"}</code> | The current spawn index. `DestroyMessage` ignores a destroy whose index is lower than this. |
| <Link id="m-spawningindex" /><code>{"uint SpawningIndex { get; }"}</code> | Returns the index for a new spawn, adding one if there was a despawn. The despawn flag is never cleared, so every read after one adds one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializeindex" /><code>{"static void SerializeIndex("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref uint index)"}</code> | Reads or writes an index on the stream in a compact form. |

## Used in

Members of other types that take, return or hold a `SpawnIndex`:

[`INetworkEntity.SpawnIndex`](/game-api/types/alta-networking/inetworkentity#m-spawnindex), [`NetworkEntity.SpawnIndex`](/game-api/types/alta-networking/networkentity#m-spawnindex).
