---
title: "Stretch"
description: "Cave map generator part that shapes a layer vertically from a height map, using a curve from floor (or roof) upward."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Stretch

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave map generator part that shapes a layer vertically from a height map, using a curve from floor (or roof) upward. Settings only; the work is done in `StretchInstance`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`StretchInstance`](/game-api/types/alta-world-generation/stretchinstance)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Stretch()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floorvalue" /><code>{"private float floorValue"}</code> | Backing field for `FloorValue`. |
| <Link id="m-heightmaplayer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" heightMapLayer"}</code> | Backing field for `HeightMapLayer`. |
| <Link id="m-heightmapyindex" /><code>{"private int heightMapYIndex"}</code> | Backing field for `HeightMapYIndex`. |
| <Link id="m-isfromroof" /><code>{"private bool isFromRoof"}</code> | Backing field for `IsFromRoof`. |
| <Link id="m-maximumvalue" /><code>{"private float maximumValue"}</code> | Backing field for `MaximumValue`. |
| <Link id="m-minimumvalue" /><code>{"private float minimumValue"}</code> | Backing field for `MinimumValue`. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | Backing field for `OperationType`. |
| <Link id="m-stretchcurve" /><code>{"private AnimationCurve stretchCurve"}</code> | Backing field for `StretchCurve`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-floorvalue-2" /><code>{"float FloorValue { get; }"}</code> | Added to the height map value before it is scaled by the curve. |
| <Link id="m-heightmaplayer-2" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" HeightMapLayer { get; }"}</code> | Layer plugin read as the height map. |
| <Link id="m-heightmapyindex-2" /><code>{"int HeightMapYIndex { get; }"}</code> | Which Y slice of the height map layer is read. |
| <Link id="m-isfromroof-2" /><code>{"bool IsFromRoof { get; }"}</code> | When true, the curve runs from the top of the layer downward instead of from the bottom. |
| <Link id="m-maximumvalue-2" /><code>{"float MaximumValue { get; }"}</code> | Upper clamp for each written value. |
| <Link id="m-minimumvalue-2" /><code>{"float MinimumValue { get; }"}</code> | Lower clamp for each written value. |
| <Link id="m-operationtype-2" /><code><Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | How the curve value combines with the existing layer value. |
| <Link id="m-stretchcurve-2" /><code>{"AnimationCurve StretchCurve { get; }"}</code> | Curve over the layer's height (0 at the start, 1 at the end) that scales the height map value. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `StretchInstance` that runs this part on a plugin. |

## Used in

Members of other types that take, return or hold a `Stretch`:

[`StretchInstance.StretchInstance`](/game-api/types/alta-world-generation/stretchinstance#m-ctor).
