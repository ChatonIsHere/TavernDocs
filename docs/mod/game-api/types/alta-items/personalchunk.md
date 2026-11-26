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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PersonalChunk()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">The chunk on this object.</span> |
| <Link id="m-currentlyusing" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> currentlyUsing"}</code> | <span className="api-desc">Players who have a personal chunk loaded, across all instances.</span> |
| <Link id="m-namesuffix" /><code>{"private string nameSuffix"}</code> | <span className="api-desc">Part of the chunk name, so different personal chunks don't share a save. Defaults to `Storage`.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Prefab spawned the first time a player's chunk is empty.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentplayer" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" CurrentPlayer { get; private set; }"}</code> | <span className="api-desc">The player whose storage is loaded, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Gets the chunk and marks it not static.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: renames the chunk to `Personal Chunk` plus suffix and the player's ID, force loads it, and spawns contents once loaded.</span> |
| <Link id="m-unload" /><code>{"void Unload("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: unloads and saves the chunk if this player is the current one.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-removecurrentplayer" /><code>{"private void RemoveCurrentPlayer()"}</code> | <span className="api-desc">Force unloads and saves the chunk and frees the current player.</span> |
| <Link id="m-spawninitialdocks" /><code>{"private void SpawnInitialDocks("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Once loaded, spawns `prefab` if the chunk is empty (else re-parents the first entity), then adds the player to the chunk.</span> |

</details>
