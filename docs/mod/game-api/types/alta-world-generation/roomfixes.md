---
title: "RoomFixes"
description: "Cave map generator part that tidies open areas: fills rooms below a minimum size with wall, then joins the rest with corridors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomFixes

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave map generator part that tidies open areas: fills rooms below a minimum size with wall, then joins the rest with corridors. Settings only; the work is done in `RoomFixesInstance`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`RoomFixesInstance`](/mod/game-api/types/alta-world-generation/roomfixesinstance)
- **Nested types** [`Room`](/mod/game-api/types/alta-world-generation/roomfixes-room)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomFixes()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linethreshold" /><code>{"private float lineThreshold"}</code> | <span className="api-desc">Backing field for `LineThreshold`.</span> |
| <Link id="m-manmadelayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" manMadeLayer"}</code> | <span className="api-desc">Backing field for `ManMadeLayer`.</span> |
| <Link id="m-maximumcorridorwidth" /><code>{"private float maximumCorridorWidth"}</code> | <span className="api-desc">Backing field for `MaximumCorridorWidth`.</span> |
| <Link id="m-minimumcorridorwidth" /><code>{"private float minimumCorridorWidth"}</code> | <span className="api-desc">Backing field for `MinimumCorridorWidth`.</span> |
| <Link id="m-minimumroomsize" /><code>{"private int minimumRoomSize"}</code> | <span className="api-desc">Backing field for `MinimumRoomSize`.</span> |
| <Link id="m-room" /><code>{"private int room"}</code> | <span className="api-desc">Backing field for `RoomValue`.</span> |
| <Link id="m-wall" /><code>{"private int wall"}</code> | <span className="api-desc">Backing field for `WallValue`.</span> |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | <span className="api-desc">Backing field for `YIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-linethreshold-2" /><code>{"float LineThreshold { get; }"}</code> | <span className="api-desc">Threshold passed to the corridor line drawing, together with the man-made layer.</span> |
| <Link id="m-manmadelayer-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" ManMadeLayer { get; }"}</code> | <span className="api-desc">Layer plugin passed to corridor drawing, probably to mark corridors as man-made.</span> |
| <Link id="m-maximumcorridorwidth-2" /><code>{"float MaximumCorridorWidth { get; }"}</code> | <span className="api-desc">Largest random corridor width.</span> |
| <Link id="m-minimumcorridorwidth-2" /><code>{"float MinimumCorridorWidth { get; }"}</code> | <span className="api-desc">Smallest random corridor width.</span> |
| <Link id="m-minimumroomsize-2" /><code>{"int MinimumRoomSize { get; }"}</code> | <span className="api-desc">Open areas with fewer cells than this are filled with `WallValue`.</span> |
| <Link id="m-roomvalue" /><code>{"int RoomValue { get; }"}</code> | <span className="api-desc">Value written into cells that are room or corridor.</span> |
| <Link id="m-wallvalue" /><code>{"int WallValue { get; }"}</code> | <span className="api-desc">Value written into cells of rooms that are too small.</span> |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | <span className="api-desc">Which Y slice of the layer is processed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `RoomFixesInstance` that runs this part on a plugin.</span> |

## Used in

Members of other types that take, return or hold a `RoomFixes`:

<div className="api-used-in">

[`RoomFixesInstance.RoomFixesInstance`](/mod/game-api/types/alta-world-generation/roomfixesinstance#m-ctor).

</div>
