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
| <Link id="m-ctor" /><code>{"RoofHole()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isroof" /><code>{"private bool isRoof"}</code> | Backing field for `IsRoof`. |
| <Link id="m-noisescale" /><code>{"private float noiseScale"}</code> | Backing field for `NoiseScale`. |
| <Link id="m-noisevaluevariation" /><code>{"private float noiseValueVariation"}</code> | Backing field for `NoiseValueVariation`. |
| <Link id="m-roomfixplugin" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/roomfixplugin">{"RoomFixPlugin"}</Link>{" roomFixPlugin"}</code> | Backing field for `RoomFixPlugin`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isroof-2" /><code>{"bool IsRoof { get; }"}</code> | True for a hole in the roof, aimed along the generator's entrance direction. False for a floor hole in a seeded random direction. |
| <Link id="m-noisescale-2" /><code>{"float NoiseScale { get; }"}</code> | Noise scale setting (default 0.1). Not read by `RoofHoleInstance`. |
| <Link id="m-noisevaluevariation-2" /><code>{"float NoiseValueVariation { get; }"}</code> | Noise variation setting (default 0.1). Not read by `RoofHoleInstance`. |
| <Link id="m-roomfixplugin-2" /><code><Link to="/mod/game-api/types/alta-world-generation/roomfixplugin">{"RoomFixPlugin"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/roomfixplugin">{"RoomFixPlugin"}</Link>{" { get; }"}</code> | The room fix plugin that supplies the room positions, step sizes and shape curves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `RoofHoleInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `RoofHole`:

[`RoofHoleInstance.RoofHoleInstance`](/mod/game-api/types/alta-world-generation/roofholeinstance#m-ctor).
