---
title: "ChunkPlayerManager"
description: "Server: the players that have a chunk loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPlayerManager

A **class** in `Root.Township`, `Alta.Chunks`.

Server: the players that have a chunk loaded. Each `Chunk` has one as `Players`, and the chunk loads or unloads when the first player is added or the last removed.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPlayerManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Creates a `ChunkPlayerManager` from `chunk`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"protected HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> players"}</code> | The set of players, compared as Unity objects. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | The chunk these players have loaded. |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | How many players have the chunk loaded. |
| <Link id="m-items" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> Items { get; }"}</code> | The players that have the chunk loaded. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-firstitemadded" /><code>{"event Action FirstItemAdded"}</code> | Fired when the first player is added. |
| <Link id="m-itemadded" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> ItemAdded"}</code> | Fired with each player added. |
| <Link id="m-itemremoved" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> ItemRemoved"}</code> | Fired with each player removed. |
| <Link id="m-lastitemremoved" /><code>{"event Action LastItemRemoved"}</code> | Fired when the last player is removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Marks the chunk as loaded for the player and adds them. Returns false if the player already had it in `LoadedChunks`. |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Removes the chunk from the player's `LoadedChunks` and removes them. Returns false if the player didn't have it loaded. |
| <Link id="m-removeall" /><code>{"void RemoveAll()"}</code> | Removes every player. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onitemadded" /><code>{"private void OnItemAdded("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Fires `FirstItemAdded` if this is the first player, then `ItemAdded`. |
| <Link id="m-onitemremoved" /><code>{"private void OnItemRemoved("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Fires `ItemRemoved`, then `LastItemRemoved` if no players are left. |

</details>

## Used in

Members of other types that take, return or hold a `ChunkPlayerManager`:

[`Chunk.Players`](/mod/game-api/types/alta-world/chunk#m-players).
