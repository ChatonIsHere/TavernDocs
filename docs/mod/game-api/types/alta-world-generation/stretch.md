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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`StretchInstance`](/mod/game-api/types/alta-world-generation/stretchinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Stretch()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floorvalue" /><code>{"private float floorValue"}</code> | <span className="api-desc">Backing field for `FloorValue`.</span> |
| <Link id="m-heightmaplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" heightMapLayer"}</code> | <span className="api-desc">Backing field for `HeightMapLayer`.</span> |
| <Link id="m-heightmapyindex" /><code>{"private int heightMapYIndex"}</code> | <span className="api-desc">Backing field for `HeightMapYIndex`.</span> |
| <Link id="m-isfromroof" /><code>{"private bool isFromRoof"}</code> | <span className="api-desc">Backing field for `IsFromRoof`.</span> |
| <Link id="m-maximumvalue" /><code>{"private float maximumValue"}</code> | <span className="api-desc">Backing field for `MaximumValue`.</span> |
| <Link id="m-minimumvalue" /><code>{"private float minimumValue"}</code> | <span className="api-desc">Backing field for `MinimumValue`.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |
| <Link id="m-stretchcurve" /><code>{"private AnimationCurve stretchCurve"}</code> | <span className="api-desc">Backing field for `StretchCurve`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-floorvalue-2" /><code>{"float FloorValue { get; }"}</code> | <span className="api-desc">Added to the height map value before it is scaled by the curve.</span> |
| <Link id="m-heightmaplayer-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" HeightMapLayer { get; }"}</code> | <span className="api-desc">Layer plugin read as the height map.</span> |
| <Link id="m-heightmapyindex-2" /><code>{"int HeightMapYIndex { get; }"}</code> | <span className="api-desc">Which Y slice of the height map layer is read.</span> |
| <Link id="m-isfromroof-2" /><code>{"bool IsFromRoof { get; }"}</code> | <span className="api-desc">When true, the curve runs from the top of the layer downward instead of from the bottom.</span> |
| <Link id="m-maximumvalue-2" /><code>{"float MaximumValue { get; }"}</code> | <span className="api-desc">Upper clamp for each written value.</span> |
| <Link id="m-minimumvalue-2" /><code>{"float MinimumValue { get; }"}</code> | <span className="api-desc">Lower clamp for each written value.</span> |
| <Link id="m-operationtype-2" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the curve value combines with the existing layer value.</span> |
| <Link id="m-stretchcurve-2" /><code>{"AnimationCurve StretchCurve { get; }"}</code> | <span className="api-desc">Curve over the layer's height (0 at the start, 1 at the end) that scales the height map value.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `StretchInstance` that runs this part on a plugin.</span> |

## Used in

Members of other types that take, return or hold a `Stretch`:

<div className="api-used-in">

[`StretchInstance.StretchInstance`](/mod/game-api/types/alta-world-generation/stretchinstance#m-ctor).

</div>
