---
title: "PersonalChunk"
description: "A chunk that loads one player's personal storage, saved under a name with that player's ID."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PersonalChunk

A **class** in `Root.Township`, `Alta.Inventory`.

A chunk that loads one player's personal storage, saved under a name with that player's ID. Server only; one player at a time, and a player can only use one at a time.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PersonalChunk()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | The chunk on this object. |
| <Link id="m-currentlyusing" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> currentlyUsing"}</code> | Players who have a personal chunk loaded, across all instances. |
| <Link id="m-namesuffix" /><code>{"private string nameSuffix"}</code> | Part of the chunk name, so different personal chunks don't share a save. Defaults to `Storage`. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Prefab spawned the first time a player's chunk is empty. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentplayer" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" CurrentPlayer { get; private set; }"}</code> | The player whose storage is loaded, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Gets the chunk and marks it not static. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: renames the chunk to `Personal Chunk` plus suffix and the player's ID, force loads it, and spawns contents once loaded. |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: unloads and saves the chunk if this player is the current one. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removecurrentplayer" /><code>{"private void RemoveCurrentPlayer()"}</code> | Force unloads and saves the chunk and frees the current player. |
| <Link id="m-spawninitialdocks" /><code>{"private void SpawnInitialDocks("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Once loaded, spawns `prefab` if the chunk is empty (else re-parents the first entity), then adds the player to the chunk. |

</details>
