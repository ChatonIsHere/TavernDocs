---
title: "SpawnIndex"
description: "class SpawnIndex in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnIndex

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnIndex()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-index" /><code>{"private uint index"}</code> |
| <Link id="m-waslastdespawn" /><code>{"private bool wasLastDespawn"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-despawningindex" /><code>{"uint DespawningIndex { get; }"}</code> |
| <Link id="m-index-2" /><code>{"uint Index { get; set; }"}</code> |
| <Link id="m-spawningindex" /><code>{"uint SpawningIndex { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-serializeindex" /><code>{"static void SerializeIndex("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref uint index)"}</code> |

## Used in

Members of other types that take, return or hold a `SpawnIndex`:

[`INetworkEntity.SpawnIndex`](/game-api/types/alta-networking/inetworkentity#m-spawnindex), [`NetworkEntity.SpawnIndex`](/game-api/types/alta-networking/networkentity#m-spawnindex).
