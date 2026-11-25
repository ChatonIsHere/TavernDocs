---
title: Where is a player?
description: A player's position, chunk, and whether they're in the overworld, the forest or the caves, and how to hear when it changes.
sidebar_position: 10.5
---

# Where is a player?

The pieces are spread over a few types. This page puts them together, in the order you'd use them.

## Their position

A `Player` (see [Player](../networking/player.md)) is the connection. Their body is `player.PlayerController`, and it's null while they're joining, dead or in the character screen, so check it first.

| Member | What it gives you |
| --- | --- |
| `PlayerController.PlayerFeetPosition` | Where their feet are. Use this for "where is the player". |
| `PlayerController.Head` | Their head's `Transform`. Use `Head.position` and `Head.forward` for where they're looking. |

Each player's own game decides where they are and the server follows the synced body. See [the overview](overview.md) for who owns what. Positions are world space, in metres.

## Their chunk

| Way | Side | Notes |
| --- | --- | --- |
| `player.ChunkManager.Chunk` | Server for every player, client for the local player | The chunk the game itself has them in. It's updated every time the body moves. See [Chunk loading and saving](chunk-loading-and-saving.md#which-chunks-load). |
| `LocationChunkHelper.GetBestContaining(position)` | Both | The chunk at any point. Null means outside every chunk, past the edge of the world. See [Chunks](chunks.md). |
| `LocationChunkHelper.IsInOverworldChunk(position)` | Both | Whether the point is in the overworld grid. |

## Forest, caves or overworld

A chunk's `ProceduralStreamer` says what made it:

- **A `CaveLayerStreamer`** is a cave layer. Its `LayerIdentifier` is the layer number, 0 at the top. See [Caves](caves.md).
- **A `ForestChunk`** is a chunk the forest covers. Its box is square and the forest isn't, so check the outline too: `ForestGenerator.GetGenerated(isThrowingError: false)` gives the `ForestGeneration` once it's built, and `Contains(new Vector2(x, z))` tests a point against the outline. See [Forest](forest.md).
- **Anything else** in the overworld grid is the overworld: the town, the fields, the mine's entrance.

The game's own Discord status works out "Exploring the Forest", "Exploring the Caves" or "In the Overworld" this way, in `DiscordController`.

`ForestGenerator.Get(Vector2)` finds the forest containing a point too, but it's async and waits for every forest to finish building, so it's no good in a frame-by-frame check.

## Example

Built against att-stubs' `Root.Township`. Server or client:

```csharp
using System.Linq;
using Alta.Chunks;
using Alta.Forests;
using MelonLoader;
using UnityEngine;

public static class PlayerWhereabouts
{
    // "the forest", "cave layer 3", "the overworld", or why it can't tell.
    public static string Describe(Player player)
    {
        PlayerController body = player.PlayerController;
        if (body == null) return "no body (joining, dead or customising)";

        Vector3 feet = body.PlayerFeetPosition;
        LocationChunk chunk = player.ChunkManager?.Chunk ?? LocationChunkHelper.GetBestContaining(feet);
        if (chunk == null) return "outside every chunk";

        if (chunk.ProceduralStreamer is CaveLayerStreamer cave)
            return $"cave layer {cave.LayerIdentifier}";

        if (chunk.ProceduralStreamer is ForestChunk forestChunk && forestChunk.Forests.Any(forest =>
        {
            ForestGeneration generated = forest.GetGenerated(isThrowingError: false);
            return generated != null && generated.Contains(new Vector2(feet.x, feet.z));
        }))
            return "the forest";

        return LocationChunkHelper.IsInOverworldChunk(feet) ? "the overworld" : $"chunk {chunk.name}";
    }

    // Server: log each player's whereabouts whenever their chunk changes.
    public static void Watch(Player player)
    {
        player.ChunkManager.ChunkChanged += chunk => MelonLogger.Msg($"{player.UserInfo.Username} is in {Describe(player)}");
    }
}
```

## Hearing when it changes

| Hook | Side | When |
| --- | --- | --- |
| `player.ChunkManager.ChunkChanged` | Server, and the local player on a client | Their chunk changed. Gives the new `LocationChunk`. |
| `ConsoleEvents.PlayerMovedChunk` | Server | The same, as a [console event](../console-and-utilities/console-events.md) that console clients can subscribe to. |
| `LocomotionController.PositionChanged` | Both | Every move, so it fires often. Only use it if chunk changes are too coarse. |

The forest outline doesn't follow chunk lines, so a player can walk into the forest without changing chunk. For an exact forest edge, check the position on a timer (once a second is plenty) rather than on chunk changes.

## See also

- [Moving and teleporting](moving-and-teleporting.md), to move a player somewhere.
- [Spawning](spawning.md), which uses the same chunk lookup to place things near a player.
