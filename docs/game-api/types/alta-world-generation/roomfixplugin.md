---
title: "RoomFixPlugin"
description: "Cave generation plugin that lines the cave up so its biggest room sits behind the entrance, places the exit near the second biggest room, and shapes the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomFixPlugin

A **class** in `Root.Township`, `Alta.Caves`.

Cave generation plugin that lines the cave up so its biggest room sits behind the entrance, places the exit near the second biggest room, and shapes the hole between cave layers.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Plugin`](/game-api/types/alta-world-generation/plugin)
- **Derived types** [`RoomFixPlugin.Create`](/game-api/types/alta-world-generation/roomfixplugin-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/roomfixplugin-create), [`Tunnel`](/game-api/types/alta-world-generation/roomfixplugin-tunnel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomFixPlugin()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positionoffset" /><code>{"const float PositionOffset"}</code> | Distance (15) used to pull the cave back from the entrance and push the exit out. |
| <Link id="m-floorheight" /><code>{"private float floorHeight"}</code> |  |
| <Link id="m-layerheightunits" /><code>{"private float layerHeightUnits"}</code> |  |
| <Link id="m-progresslerpvalue" /><code>{"private AnimationCurve progressLerpValue"}</code> |  |
| <Link id="m-solidfloorend" /><code>{"private AnimationCurve solidFloorEnd"}</code> |  |
| <Link id="m-solidfloorstart" /><code>{"private AnimationCurve solidFloorStart"}</code> |  |
| <Link id="m-solidroofend" /><code>{"private AnimationCurve solidRoofEnd"}</code> |  |
| <Link id="m-solidroofstart" /><code>{"private AnimationCurve solidRoofStart"}</code> |  |
| <Link id="m-stepdepth" /><code>{"private float stepDepth"}</code> |  |
| <Link id="m-steps" /><code>{"private int steps"}</code> |  |
| <Link id="m-tunnels" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/roomfixplugin-tunnel">{"RoomFixPlugin.Tunnel"}</Link>{"[] tunnels"}</code> |  |
| <Link id="m-width" /><code>{"private AnimationCurve width"}</code> |  |
| <Link id="m-widthlerpvalue" /><code>{"private AnimationCurve widthLerpValue"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-floorheight-2" /><code>{"float FloorHeight { get; }"}</code> | Floor height within a layer, probably. |
| <Link id="m-layerheightunits-2" /><code>{"float LayerHeightUnits { get; }"}</code> | Height of one cave layer. |
| <Link id="m-progresslerpvalue-2" /><code>{"AnimationCurve ProgressLerpValue { get; }"}</code> | Blend curve along the passage, used by the roof hole part. |
| <Link id="m-solidfloorend-2" /><code>{"AnimationCurve SolidFloorEnd { get; }"}</code> | Curve for where the solid floor ends. |
| <Link id="m-solidfloorstart-2" /><code>{"AnimationCurve SolidFloorStart { get; }"}</code> | Curve for where the solid floor starts, used by the roof hole part. |
| <Link id="m-solidroofend-2" /><code>{"AnimationCurve SolidRoofEnd { get; }"}</code> | Curve for where the solid roof ends. |
| <Link id="m-solidroofstart-2" /><code>{"AnimationCurve SolidRoofStart { get; }"}</code> | Curve for where the solid roof starts. |
| <Link id="m-stepdepth-2" /><code>{"float StepDepth { get; }"}</code> | Depth of each step. |
| <Link id="m-steps-2" /><code>{"int Steps { get; }"}</code> | Number of steps from the entrance into the cave. |
| <Link id="m-tunnels-2" /><code><Link to="/game-api/types/alta-world-generation/roomfixplugin-tunnel">{"RoomFixPlugin.Tunnel"}</Link>{"[] Tunnels { get; }"}</code> | Extra tunnel shapes to carve. |
| <Link id="m-width-2" /><code>{"AnimationCurve Width { get; }"}</code> | Width curve of the passage. |
| <Link id="m-widthlerpvalue-2" /><code>{"AnimationCurve WidthLerpValue { get; }"}</code> | Blend curve across the width, used by the roof hole part. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator)"}</code> | Creates the plugin's working instance for a generator. |
| <Link id="m-render" /><code>{"override IEnumerator Render("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance)"}</code> | Moves the cave into place behind the entrance and tells the layer streamer where the exit is. |

## Used in

Members of other types that take, return or hold a `RoomFixPlugin`:

[`RoofHole.roomFixPlugin`](/game-api/types/alta-world-generation/roofhole#m-roomfixplugin), [`RoofHole.RoomFixPlugin`](/game-api/types/alta-world-generation/roofhole#m-roomfixplugin-2).
