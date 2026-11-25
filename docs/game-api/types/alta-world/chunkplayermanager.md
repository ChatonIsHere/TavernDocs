---
title: "ChunkPlayerManager"
description: "class ChunkPlayerManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPlayerManager

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPlayerManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"protected HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> players"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> |  |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-items" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> Items { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-firstitemadded" /><code>{"event Action FirstItemAdded"}</code> |  |
| <Link id="m-itemadded" /><code>{"event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> ItemAdded"}</code> |  |
| <Link id="m-itemremoved" /><code>{"event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> ItemRemoved"}</code> |  |
| <Link id="m-lastitemremoved" /><code>{"event Action LastItemRemoved"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-removeall" /><code>{"void RemoveAll()"}</code> |  |
| <Link id="m-onitemadded" /><code>{"private void OnItemAdded("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onitemremoved" /><code>{"private void OnItemRemoved("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkPlayerManager`:

[`Chunk.Players`](/game-api/types/alta-world/chunk#m-players).
