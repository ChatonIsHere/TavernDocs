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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Plugin`](/mod/game-api/types/alta-world-generation/plugin)
- **Derived types** [`RoomFixPlugin.Create`](/mod/game-api/types/alta-world-generation/roomfixplugin-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/roomfixplugin-create), [`Tunnel`](/mod/game-api/types/alta-world-generation/roomfixplugin-tunnel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomFixPlugin()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positionoffset" /><code>{"const float PositionOffset"}</code> | <span className="api-desc">Distance (15) used to pull the cave back from the entrance and push the exit out.</span> |

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floorheight" /><code>{"private float floorHeight"}</code> | <span className="api-desc">Height of the floor in the room the passage starts from (7.5 by default).</span> |
| <Link id="m-layerheightunits" /><code>{"private float layerHeightUnits"}</code> | <span className="api-desc">Height drop between one cave layer and the next (15 by default).</span> |
| <Link id="m-progresslerpvalue" /><code>{"private AnimationCurve progressLerpValue"}</code> | <span className="api-desc">Curve along the passage scaling how strongly it carves.</span> |
| <Link id="m-solidfloorend" /><code>{"private AnimationCurve solidFloorEnd"}</code> | <span className="api-desc">Curve along the passage for the top of the solid floor band.</span> |
| <Link id="m-solidfloorstart" /><code>{"private AnimationCurve solidFloorStart"}</code> | <span className="api-desc">Curve along the passage for the bottom of the solid floor band.</span> |
| <Link id="m-solidroofend" /><code>{"private AnimationCurve solidRoofEnd"}</code> | <span className="api-desc">Curve along the passage for the top of the roof band.</span> |
| <Link id="m-solidroofstart" /><code>{"private AnimationCurve solidRoofStart"}</code> | <span className="api-desc">Curve along the passage for the bottom of the roof band.</span> |
| <Link id="m-stepdepth" /><code>{"private float stepDepth"}</code> | <span className="api-desc">Horizontal length of one step in the passage between layers.</span> |
| <Link id="m-steps" /><code>{"private int steps"}</code> | <span className="api-desc">Number of steps in the passage. With `stepDepth` it sets how far the next layer is offset.</span> |
| <Link id="m-tunnels" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/roomfixplugin-tunnel">{"RoomFixPlugin.Tunnel"}</Link>{"[] tunnels"}</code> | <span className="api-desc">Tunnel definitions. Not read anywhere else in this build.</span> |
| <Link id="m-width" /><code>{"private AnimationCurve width"}</code> | <span className="api-desc">Curve along the passage giving its half width.</span> |
| <Link id="m-widthlerpvalue" /><code>{"private AnimationCurve widthLerpValue"}</code> | <span className="api-desc">Curve across the passage width scaling how strongly it carves towards the edges.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-floorheight-2" /><code>{"float FloorHeight { get; }"}</code> | <span className="api-desc">Floor height within a layer, probably.</span> |
| <Link id="m-layerheightunits-2" /><code>{"float LayerHeightUnits { get; }"}</code> | <span className="api-desc">Height of one cave layer.</span> |
| <Link id="m-progresslerpvalue-2" /><code>{"AnimationCurve ProgressLerpValue { get; }"}</code> | <span className="api-desc">Blend curve along the passage, used by the roof hole part.</span> |
| <Link id="m-solidfloorend-2" /><code>{"AnimationCurve SolidFloorEnd { get; }"}</code> | <span className="api-desc">Curve for where the solid floor ends.</span> |
| <Link id="m-solidfloorstart-2" /><code>{"AnimationCurve SolidFloorStart { get; }"}</code> | <span className="api-desc">Curve for where the solid floor starts, used by the roof hole part.</span> |
| <Link id="m-solidroofend-2" /><code>{"AnimationCurve SolidRoofEnd { get; }"}</code> | <span className="api-desc">Curve for where the solid roof ends.</span> |
| <Link id="m-solidroofstart-2" /><code>{"AnimationCurve SolidRoofStart { get; }"}</code> | <span className="api-desc">Curve for where the solid roof starts.</span> |
| <Link id="m-stepdepth-2" /><code>{"float StepDepth { get; }"}</code> | <span className="api-desc">Depth of each step.</span> |
| <Link id="m-steps-2" /><code>{"int Steps { get; }"}</code> | <span className="api-desc">Number of steps from the entrance into the cave.</span> |
| <Link id="m-tunnels-2" /><code><Link to="/mod/game-api/types/alta-world-generation/roomfixplugin-tunnel">{"RoomFixPlugin.Tunnel"}</Link>{"[] Tunnels { get; }"}</code> | <span className="api-desc">Extra tunnel shapes to carve.</span> |
| <Link id="m-width-2" /><code>{"AnimationCurve Width { get; }"}</code> | <span className="api-desc">Width curve of the passage.</span> |
| <Link id="m-widthlerpvalue-2" /><code>{"AnimationCurve WidthLerpValue { get; }"}</code> | <span className="api-desc">Blend curve across the width, used by the roof hole part.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator)"}</code> | <span className="api-desc">Creates the plugin's working instance for a generator.</span> |
| <Link id="m-render" /><code>{"override IEnumerator Render("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" pluginInstance)"}</code> | <span className="api-desc">Moves the cave into place behind the entrance and tells the layer streamer where the exit is.</span> |

## Used in

Members of other types that take, return or hold a `RoomFixPlugin`:

<div className="api-used-in">

[`RoofHole.roomFixPlugin`](/mod/game-api/types/alta-world-generation/roofhole#m-roomfixplugin), [`RoofHole.RoomFixPlugin`](/mod/game-api/types/alta-world-generation/roofhole#m-roomfixplugin-2).

</div>
