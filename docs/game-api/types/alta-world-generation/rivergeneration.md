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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`ICacheable`](/game-api/types/alta-world/icacheable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RiverGeneration("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, float overgroundVolumeThreshold, float nodeWidthMultiplier, float maxVolume)"}</code> |
| <Link id="m-ctor-2" /><code>{"RiverGeneration("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maxvolume" /><code>{"private float maxVolume"}</code> |
| <Link id="m-nodes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> nodes"}</code> |
| <Link id="m-nodewidthmultiplier" /><code>{"private float nodeWidthMultiplier"}</code> |
| <Link id="m-overground" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> overground"}</code> |
| <Link id="m-overgroundvolumethreshold" /><code>{"private float overgroundVolumeThreshold"}</code> |
| <Link id="m-waterfalls" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{"> waterfalls"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code><Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" Forest { get; }"}</code> | The forest generation it belongs to. |
| <Link id="m-maxvolume-2" /><code>{"float MaxVolume { get; }"}</code> | Largest water volume, probably used to scale river width. |
| <Link id="m-nodes-2" /><code>{"IReadOnlyList<"}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> Nodes { get; }"}</code> | All river nodes. |
| <Link id="m-nodewidthmultiplier-2" /><code>{"float NodeWidthMultiplier { get; }"}</code> | Multiplier from volume to river width, probably. |
| <Link id="m-overground-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> Overground { get; }"}</code> | River paths that run above ground. |
| <Link id="m-overgroundvolumethreshold-2" /><code>{"float OvergroundVolumeThreshold { get; }"}</code> | Volume at which a river comes above ground, probably. |
| <Link id="m-waterfalls-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{"> Waterfalls { get; }"}</code> | Waterfalls along the rivers. |
| <Link id="m-workingnodes" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> WorkingNodes { get; }"}</code> | The node list itself, for generation steps to edit. |
| <Link id="m-workingoverground" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> WorkingOverground { get; }"}</code> | The overground path list itself, for editing. |
| <Link id="m-workingwaterfalls" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{"> WorkingWaterfalls { get; }"}</code> | The waterfall list itself, for editing. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-alta-static-icacheable-version" /><code>{"private uint Alta.Static.ICacheable.Version { get; }"}</code> |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-serializeasync" /><code>{"private Task Alta.Static.ICacheable.SerializeAsync(uint version, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `RiverGeneration`:

[`IRiverVisual.Generate`](/game-api/types/alta-world-generation/irivervisual#m-generate), [`RiverGenerator.Calculate`](/game-api/types/alta-world-generation/rivergenerator#m-calculate), [`RiverGenerator.calculateTask`](/game-api/types/alta-world-generation/rivergenerator#m-calculatetask), [`RiverGenerator.GetGenerationAsync`](/game-api/types/alta-world-generation/rivergenerator#m-getgenerationasync), [`RiverGenerator.TryGetGenerated`](/game-api/types/alta-world-generation/rivergenerator#m-trygetgenerated), [`RiverIntersections.Evaluate`](/game-api/types/alta-world-generation/riverintersections#m-evaluate), [`RiverMeshTest.Generate`](/game-api/types/alta-world-generation/rivermeshtest#m-generate), [`RiverNode.CacheVolume`](/game-api/types/alta-world-generation/rivernode#m-cachevolume), [`WaterfallEffectGenerator.Generate`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-generate).
