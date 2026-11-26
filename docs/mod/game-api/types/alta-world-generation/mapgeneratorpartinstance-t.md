---
title: "MapGeneratorPartInstance<T>"
description: "Runtime instance of a MapGeneratorPart for one cave generator plugin run."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapGeneratorPartInstance&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of a `MapGeneratorPart` for one cave generator plugin run. It works out the target plugin layer and a seeded identifier, and subclasses change map chunk layers.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`IPartInstance`](/mod/game-api/types/alta-world-generation/ipartinstance)
- **Derived types** [`ApplyElementInstance`](/mod/game-api/types/alta-world-generation/applyelementinstance), [`BlobEdgeInstance`](/mod/game-api/types/alta-world-generation/blobedgeinstance), [`BlurInstance`](/mod/game-api/types/alta-world-generation/blurinstance), [`CellularAutomataInstance`](/mod/game-api/types/alta-world-generation/cellularautomatainstance), [`CircleInstance`](/mod/game-api/types/alta-world-generation/circleinstance), [`CopyPartInstance`](/mod/game-api/types/alta-world-generation/copypartinstance), [`CurveInstance`](/mod/game-api/types/alta-world-generation/curveinstance), [`LogRangeInstance`](/mod/game-api/types/alta-world-generation/lograngeinstance), [`MaskInstance`](/mod/game-api/types/alta-world-generation/maskinstance), [`OperationPartInstance`](/mod/game-api/types/alta-world-generation/operationpartinstance), [`RandomNoiseInstance`](/mod/game-api/types/alta-world-generation/randomnoiseinstance), [`RoofHoleInstance`](/mod/game-api/types/alta-world-generation/roofholeinstance), [`RoomFixesInstance`](/mod/game-api/types/alta-world-generation/roomfixesinstance), [`SimplexNoisePartInstance`](/mod/game-api/types/alta-world-generation/simplexnoisepartinstance), [`StretchInstance`](/mod/game-api/types/alta-world-generation/stretchinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapGeneratorPartInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, T part)"}</code> | <span className="api-desc">Creates a `MapGeneratorPartInstance` from `plugin` and `part`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-part" /><code>{"T Part { get; private set; }"}</code> | <span className="api-desc">The part asset this instance was made from.</span> |
| <Link id="m-partidentifier" /><code>{"int PartIdentifier { get; private set; }"}</code> | <span className="api-desc">Random identifier from the generator's hash function, seeded by the plugin's random identifier and the part's identifier.</span> |
| <Link id="m-plugin" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The plugin asset of the owning plugin instance.</span> |
| <Link id="m-plugininstance" /><code><Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The plugin instance that created this part instance.</span> |
| <Link id="m-target" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" Target { get; private set; }"}</code> | <span className="api-desc">Plugin whose layer this part changes: the part's `OverrideTarget`, or the owning plugin if none.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Changes the target layer of a map chunk. The chunk overload finds the layer and passes on the chunk offsets.</span> |
| <Link id="m-modify-2" /><code>{"abstract void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" target, int offX, int offY)"}</code> | <span className="api-desc">Changes the target layer of a map chunk. The chunk overload finds the layer and passes on the chunk offsets.</span> |
