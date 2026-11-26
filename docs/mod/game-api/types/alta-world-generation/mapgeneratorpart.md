---
title: "MapGeneratorPart"
description: "Base asset for one part of a cave generator plugin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapGeneratorPart

An **abstract class** in `Root.Township`, `Alta.Caves.PluginParts`.

Base asset for one part of a cave generator plugin. It makes a `MapGeneratorPartInstance` for each plugin run.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`ApplyElement`](/mod/game-api/types/alta-world-generation/applyelement), [`BlobEdge`](/mod/game-api/types/alta-world-generation/blobedge), [`Blur`](/mod/game-api/types/alta-world-generation/blur), [`CellularAutomata`](/mod/game-api/types/alta-world-generation/cellularautomata), [`Circle`](/mod/game-api/types/alta-world-generation/circle), [`CopyPart`](/mod/game-api/types/alta-world-generation/copypart), [`Curve`](/mod/game-api/types/alta-world-generation/curve), [`LogRange`](/mod/game-api/types/alta-world-generation/logrange), [`Mask`](/mod/game-api/types/alta-world-generation/mask), [`OperationPart`](/mod/game-api/types/alta-world-generation/operationpart), [`RandomNoise`](/mod/game-api/types/alta-world-generation/randomnoise), [`RoofHole`](/mod/game-api/types/alta-world-generation/roofhole), [`RoomFixes`](/mod/game-api/types/alta-world-generation/roomfixes), [`SimplexNoisePart`](/mod/game-api/types/alta-world-generation/simplexnoisepart), [`Stretch`](/mod/game-api/types/alta-world-generation/stretch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MapGeneratorPart()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-overridetarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" overrideTarget"}</code> | Backing field for `OverrideTarget`, the plugin the part works on instead of its own plugin. Null means its own. |
| <Link id="m-partidentifier" /><code>{"private int partIdentifier"}</code> | Backing field for `PartIdentifier`, hashed into the instance's seed. Set from the asset's instance id when negative. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overridetarget-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" OverrideTarget { get; }"}</code> | Plugin whose layer this part writes to instead of its own plugin. Null means the owning plugin. |
| <Link id="m-partidentifier-2" /><code>{"int PartIdentifier { get; }"}</code> | Seed value for the part. Generated from the instance ID when missing. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the runtime instance of this part for a plugin instance. |
| <Link id="m-regenerateidentifier" /><code>{"void RegenerateIdentifier()"}</code> | Sets the identifier from the asset's instance ID. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: gives the part an identifier if it has none. |

</details>

## Used in

Members of other types that take, return or hold a `MapGeneratorPart`:

[`Plugin.parts`](/mod/game-api/types/alta-world-generation/plugin#m-parts), [`Plugin.Parts`](/mod/game-api/types/alta-world-generation/plugin#m-parts-2).
