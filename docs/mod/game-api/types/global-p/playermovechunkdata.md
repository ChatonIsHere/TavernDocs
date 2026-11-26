---
title: "PlayerMoveChunkData"
description: "Payload for the ConsoleEvents.PlayerMovedChunk console event, sent when a player crosses into another chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerMoveChunkData

A **class** in `Root.Township`, the global namespace.

Payload for the `ConsoleEvents.PlayerMovedChunk` console event, sent when a player crosses into another chunk. Server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerMoveChunkData("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" oldChunk, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> | Creates a `PlayerMoveChunkData` from `player`, `oldChunk` and `newChunk`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-newchunk" /><code>{"string newChunk"}</code> | Identifier of the chunk the player moved into, or the text `null`. |
| <Link id="m-oldchunk" /><code>{"string oldChunk"}</code> | Identifier of the chunk the player left, or the text `null`. |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" player"}</code> | The player's user info. |

## Used in

Members of other types that take, return or hold a `PlayerMoveChunkData`:

[`ConsoleEvents.PlayerMovedChunk`](/mod/game-api/types/alta-console/consoleevents#m-playermovedchunk).
