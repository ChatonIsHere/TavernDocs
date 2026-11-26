---
title: "RiverGeneration"
description: "The river network for a forest: nodes, the overground paths and waterfalls."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverGeneration

A **class** in `Root.Township`, `Alta.Forests`.

The river network for a forest: nodes, the overground paths and waterfalls. It can be cached and rebuilt from the cache.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`ICacheable`](/mod/game-api/types/alta-world/icacheable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverGeneration("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, float overgroundVolumeThreshold, float nodeWidthMultiplier, float maxVolume)"}</code> | <span className="api-desc">Creates a `RiverGeneration` from `forest`.</span> |
| <Link id="m-ctor-2" /><code>{"RiverGeneration("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Creates a `RiverGeneration` from `forest`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxvolume" /><code>{"private float maxVolume"}</code> | <span className="api-desc">Backing field for `MaxVolume`.</span> |
| <Link id="m-nodes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> nodes"}</code> | <span className="api-desc">Backing list for `Nodes` and `WorkingNodes`.</span> |
| <Link id="m-nodewidthmultiplier" /><code>{"private float nodeWidthMultiplier"}</code> | <span className="api-desc">Backing field for `NodeWidthMultiplier`.</span> |
| <Link id="m-overground" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> overground"}</code> | <span className="api-desc">Backing list for `Overground`: outgoing paths of nodes that aren't underground.</span> |
| <Link id="m-overgroundvolumethreshold" /><code>{"private float overgroundVolumeThreshold"}</code> | <span className="api-desc">Backing field for `OvergroundVolumeThreshold`.</span> |
| <Link id="m-waterfalls" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{"> waterfalls"}</code> | <span className="api-desc">Backing list for `Waterfalls`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code><Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; }"}</code> | <span className="api-desc">The forest generation it belongs to.</span> |
| <Link id="m-maxvolume-2" /><code>{"float MaxVolume { get; }"}</code> | <span className="api-desc">Largest water volume, probably used to scale river width.</span> |
| <Link id="m-nodes-2" /><code>{"IReadOnlyList<"}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> Nodes { get; }"}</code> | <span className="api-desc">All river nodes.</span> |
| <Link id="m-nodewidthmultiplier-2" /><code>{"float NodeWidthMultiplier { get; }"}</code> | <span className="api-desc">Multiplier from volume to river width, probably.</span> |
| <Link id="m-overground-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> Overground { get; }"}</code> | <span className="api-desc">River paths that run above ground.</span> |
| <Link id="m-overgroundvolumethreshold-2" /><code>{"float OvergroundVolumeThreshold { get; }"}</code> | <span className="api-desc">Volume at which a river comes above ground, probably.</span> |
| <Link id="m-waterfalls-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{"> Waterfalls { get; }"}</code> | <span className="api-desc">Waterfalls along the rivers.</span> |
| <Link id="m-workingnodes" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> WorkingNodes { get; }"}</code> | <span className="api-desc">The node list itself, for generation steps to edit.</span> |
| <Link id="m-workingoverground" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> WorkingOverground { get; }"}</code> | <span className="api-desc">The overground path list itself, for editing.</span> |
| <Link id="m-workingwaterfalls" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{"> WorkingWaterfalls { get; }"}</code> | <span className="api-desc">The waterfall list itself, for editing.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-static-icacheable-version" /><code>{"private uint Alta.Static.ICacheable.Version { get; }"}</code> | <span className="api-desc">Cache format version, 1.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializeasync" /><code>{"private Task Alta.Static.ICacheable.SerializeAsync(uint version, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Explicit `ICacheable` implementation: writes or reads river nodes, their outgoing paths and waterfalls, then rebuilds volumes and the overground list.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RiverGeneration`:

<div className="api-used-in">

[`IRiverVisual.Generate`](/mod/game-api/types/alta-world-generation/irivervisual#m-generate), [`RiverGenerator.Calculate`](/mod/game-api/types/alta-world-generation/rivergenerator#m-calculate), [`RiverGenerator.calculateTask`](/mod/game-api/types/alta-world-generation/rivergenerator#m-calculatetask), [`RiverGenerator.GetGenerationAsync`](/mod/game-api/types/alta-world-generation/rivergenerator#m-getgenerationasync), [`RiverGenerator.TryGetGenerated`](/mod/game-api/types/alta-world-generation/rivergenerator#m-trygetgenerated), [`RiverIntersections.Evaluate`](/mod/game-api/types/alta-world-generation/riverintersections#m-evaluate), [`RiverMeshTest.Generate`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-generate), [`RiverNode.CacheVolume`](/mod/game-api/types/alta-world-generation/rivernode#m-cachevolume), [`WaterfallEffectGenerator.Generate`](/mod/game-api/types/alta-world-generation/waterfalleffectgenerator#m-generate).

</div>
