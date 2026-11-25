---
title: "MapGeneratorPartInstance<T>"
description: "Runtime instance of a MapGeneratorPart for one cave generator plugin run. It works out the target plugin layer and a seeded identifier, and subclasses"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapGeneratorPartInstance&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of a `MapGeneratorPart` for one cave generator plugin run. It works out the target plugin layer and a seeded identifier, and subclasses change map chunk layers.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`IPartInstance`](/game-api/types/alta-world-generation/ipartinstance)
- **Derived types** [`ApplyElementInstance`](/game-api/types/alta-world-generation/applyelementinstance), [`BlobEdgeInstance`](/game-api/types/alta-world-generation/blobedgeinstance), [`BlurInstance`](/game-api/types/alta-world-generation/blurinstance), [`CellularAutomataInstance`](/game-api/types/alta-world-generation/cellularautomatainstance), [`CircleInstance`](/game-api/types/alta-world-generation/circleinstance), [`CopyPartInstance`](/game-api/types/alta-world-generation/copypartinstance), [`CurveInstance`](/game-api/types/alta-world-generation/curveinstance), [`LogRangeInstance`](/game-api/types/alta-world-generation/lograngeinstance), [`MaskInstance`](/game-api/types/alta-world-generation/maskinstance), [`OperationPartInstance`](/game-api/types/alta-world-generation/operationpartinstance), [`RandomNoiseInstance`](/game-api/types/alta-world-generation/randomnoiseinstance), [`RoofHoleInstance`](/game-api/types/alta-world-generation/roofholeinstance), [`RoomFixesInstance`](/game-api/types/alta-world-generation/roomfixesinstance), [`SimplexNoisePartInstance`](/game-api/types/alta-world-generation/simplexnoisepartinstance), [`StretchInstance`](/game-api/types/alta-world-generation/stretchinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapGeneratorPartInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, T part)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-part" /><code>{"T Part { get; private set; }"}</code> | The part asset this instance was made from. |
| <Link id="m-partidentifier" /><code>{"int PartIdentifier { get; private set; }"}</code> | Random identifier from the generator's hash function, seeded by the plugin's random identifier and the part's identifier. |
| <Link id="m-plugin" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" { get; private set; }"}</code> | The plugin asset of the owning plugin instance. |
| <Link id="m-plugininstance" /><code><Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" { get; private set; }"}</code> | The plugin instance that created this part instance. |
| <Link id="m-target" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" Target { get; private set; }"}</code> | Plugin whose layer this part changes: the part's `OverrideTarget`, or the owning plugin if none. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | Changes the target layer of a map chunk. The chunk overload finds the layer and passes on the chunk offsets. |
| <Link id="m-modify-2" /><code>{"abstract void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" target, int offX, int offY)"}</code> | Changes the target layer of a map chunk. The chunk overload finds the layer and passes on the chunk offsets. |
