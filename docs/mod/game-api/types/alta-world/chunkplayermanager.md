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
| <Link id="m-ctor" /><code>{"ChunkPlayerManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `ChunkPlayerManager` from `chunk`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"protected HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> players"}</code> | <span className="api-desc">The set of players, compared as Unity objects.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | <span className="api-desc">The chunk these players have loaded.</span> |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">How many players have the chunk loaded.</span> |
| <Link id="m-items" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> Items { get; }"}</code> | <span className="api-desc">The players that have the chunk loaded.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-firstitemadded" /><code>{"event Action FirstItemAdded"}</code> | <span className="api-desc">Fired when the first player is added.</span> |
| <Link id="m-itemadded" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> ItemAdded"}</code> | <span className="api-desc">Fired with each player added.</span> |
| <Link id="m-itemremoved" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> ItemRemoved"}</code> | <span className="api-desc">Fired with each player removed.</span> |
| <Link id="m-lastitemremoved" /><code>{"event Action LastItemRemoved"}</code> | <span className="api-desc">Fired when the last player is removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Marks the chunk as loaded for the player and adds them. Returns false if the player already had it in `LoadedChunks`.</span> |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Removes the chunk from the player's `LoadedChunks` and removes them. Returns false if the player didn't have it loaded.</span> |
| <Link id="m-removeall" /><code>{"void RemoveAll()"}</code> | <span className="api-desc">Removes every player.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onitemadded" /><code>{"private void OnItemAdded("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Fires `FirstItemAdded` if this is the first player, then `ItemAdded`.</span> |
| <Link id="m-onitemremoved" /><code>{"private void OnItemRemoved("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Fires `ItemRemoved`, then `LastItemRemoved` if no players are left.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkPlayerManager`:

<div className="api-used-in">

[`Chunk.Players`](/mod/game-api/types/alta-world/chunk#m-players).

</div>
