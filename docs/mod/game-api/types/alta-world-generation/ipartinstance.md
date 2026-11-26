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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`MapGeneratorPartInstance<T>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Applies the part's changes to a cave map chunk.</span> |

## Used in

Members of other types that take, return or hold a `IPartInstance`:

<div className="api-used-in">

[`MarchingCubesPlugin.Modify`](/mod/game-api/types/alta-world-generation/marchingcubesplugin#m-modify), [`Plugin.Modify`](/mod/game-api/types/alta-world-generation/plugin#m-modify), [`PluginInstance.parts`](/mod/game-api/types/alta-world-generation/plugininstance#m-parts), [`ApplyElement.GetInstance`](/mod/game-api/types/alta-world-generation/applyelement#m-getinstance), [`BlobEdge.GetInstance`](/mod/game-api/types/alta-world-generation/blobedge#m-getinstance), [`Blur.GetInstance`](/mod/game-api/types/alta-world-generation/blur#m-getinstance), [`CellularAutomata.GetInstance`](/mod/game-api/types/alta-world-generation/cellularautomata#m-getinstance), [`Circle.GetInstance`](/mod/game-api/types/alta-world-generation/circle#m-getinstance), [`CopyPart.GetInstance`](/mod/game-api/types/alta-world-generation/copypart#m-getinstance), [`Curve.GetInstance`](/mod/game-api/types/alta-world-generation/curve#m-getinstance), [`LogRange.GetInstance`](/mod/game-api/types/alta-world-generation/logrange#m-getinstance), [`MapGeneratorPart.GetInstance`](/mod/game-api/types/alta-world-generation/mapgeneratorpart#m-getinstance), [`Mask.GetInstance`](/mod/game-api/types/alta-world-generation/mask#m-getinstance), [`OperationPart.GetInstance`](/mod/game-api/types/alta-world-generation/operationpart#m-getinstance), [`RandomNoise.GetInstance`](/mod/game-api/types/alta-world-generation/randomnoise#m-getinstance), [`RoofHole.GetInstance`](/mod/game-api/types/alta-world-generation/roofhole#m-getinstance), [`RoomFixes.GetInstance`](/mod/game-api/types/alta-world-generation/roomfixes#m-getinstance), [`SimplexNoisePart.GetInstance`](/mod/game-api/types/alta-world-generation/simplexnoisepart#m-getinstance), [`Stretch.GetInstance`](/mod/game-api/types/alta-world-generation/stretch#m-getinstance).

</div>
