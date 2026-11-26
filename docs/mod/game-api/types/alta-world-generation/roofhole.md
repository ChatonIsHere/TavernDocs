---
title: "RoofHole"
description: "Cave generator part that carves a sloping passage linking a cave layer to the next one, using the shape curves of a RoomFixPlugin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoofHole

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that carves a sloping passage linking a cave layer to the next one, using the shape curves of a `RoomFixPlugin`. Roof holes start at the biggest room, floor holes at the second biggest.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`RoofHoleInstance`](/mod/game-api/types/alta-world-generation/roofholeinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoofHole()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isroof" /><code>{"private bool isRoof"}</code> | <span className="api-desc">Backing field for `IsRoof`.</span> |
| <Link id="m-noisescale" /><code>{"private float noiseScale"}</code> | <span className="api-desc">Backing field for `NoiseScale`.</span> |
| <Link id="m-noisevaluevariation" /><code>{"private float noiseValueVariation"}</code> | <span className="api-desc">Backing field for `NoiseValueVariation`.</span> |
| <Link id="m-roomfixplugin" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/roomfixplugin">{"RoomFixPlugin"}</Link>{" roomFixPlugin"}</code> | <span className="api-desc">Backing field for `RoomFixPlugin`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isroof-2" /><code>{"bool IsRoof { get; }"}</code> | <span className="api-desc">True for a hole in the roof, aimed along the generator's entrance direction. False for a floor hole in a seeded random direction.</span> |
| <Link id="m-noisescale-2" /><code>{"float NoiseScale { get; }"}</code> | <span className="api-desc">Noise scale setting (default 0.1). Not read by `RoofHoleInstance`.</span> |
| <Link id="m-noisevaluevariation-2" /><code>{"float NoiseValueVariation { get; }"}</code> | <span className="api-desc">Noise variation setting (default 0.1). Not read by `RoofHoleInstance`.</span> |
| <Link id="m-roomfixplugin-2" /><code><Link to="/mod/game-api/types/alta-world-generation/roomfixplugin">{"RoomFixPlugin"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/roomfixplugin">{"RoomFixPlugin"}</Link>{" { get; }"}</code> | <span className="api-desc">The room fix plugin that supplies the room positions, step sizes and shape curves.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `RoofHoleInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `RoofHole`:

<div className="api-used-in">

[`RoofHoleInstance.RoofHoleInstance`](/mod/game-api/types/alta-world-generation/roofholeinstance#m-ctor).

</div>
