---
title: "IPartInstance"
description: "An instance of a cave generation plugin part that changes a map chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPartInstance

An **interface** in `Root.Township`, `Alta.Caves.PluginParts`.

An instance of a cave generation plugin part that changes a map chunk.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`MapGeneratorPartInstance<T>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | Applies the part's changes to a cave map chunk. |

## Used in

Members of other types that take, return or hold a `IPartInstance`:

[`MarchingCubesPlugin.Modify`](/game-api/types/alta-world-generation/marchingcubesplugin#m-modify), [`Plugin.Modify`](/game-api/types/alta-world-generation/plugin#m-modify), [`PluginInstance.parts`](/game-api/types/alta-world-generation/plugininstance#m-parts), [`ApplyElement.GetInstance`](/game-api/types/alta-world-generation/applyelement#m-getinstance), [`BlobEdge.GetInstance`](/game-api/types/alta-world-generation/blobedge#m-getinstance), [`Blur.GetInstance`](/game-api/types/alta-world-generation/blur#m-getinstance), [`CellularAutomata.GetInstance`](/game-api/types/alta-world-generation/cellularautomata#m-getinstance), [`Circle.GetInstance`](/game-api/types/alta-world-generation/circle#m-getinstance), [`CopyPart.GetInstance`](/game-api/types/alta-world-generation/copypart#m-getinstance), [`Curve.GetInstance`](/game-api/types/alta-world-generation/curve#m-getinstance), [`LogRange.GetInstance`](/game-api/types/alta-world-generation/logrange#m-getinstance), [`MapGeneratorPart.GetInstance`](/game-api/types/alta-world-generation/mapgeneratorpart#m-getinstance), [`Mask.GetInstance`](/game-api/types/alta-world-generation/mask#m-getinstance), [`OperationPart.GetInstance`](/game-api/types/alta-world-generation/operationpart#m-getinstance), [`RandomNoise.GetInstance`](/game-api/types/alta-world-generation/randomnoise#m-getinstance), [`RoofHole.GetInstance`](/game-api/types/alta-world-generation/roofhole#m-getinstance), [`RoomFixes.GetInstance`](/game-api/types/alta-world-generation/roomfixes#m-getinstance), [`SimplexNoisePart.GetInstance`](/game-api/types/alta-world-generation/simplexnoisepart#m-getinstance), [`Stretch.GetInstance`](/game-api/types/alta-world-generation/stretch#m-getinstance).
