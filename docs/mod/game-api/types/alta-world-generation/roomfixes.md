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
| <Link id="m-ctor" /><code>{"RoomFixes()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-linethreshold" /><code>{"private float lineThreshold"}</code> | Backing field for `LineThreshold`. |
| <Link id="m-manmadelayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" manMadeLayer"}</code> | Backing field for `ManMadeLayer`. |
| <Link id="m-maximumcorridorwidth" /><code>{"private float maximumCorridorWidth"}</code> | Backing field for `MaximumCorridorWidth`. |
| <Link id="m-minimumcorridorwidth" /><code>{"private float minimumCorridorWidth"}</code> | Backing field for `MinimumCorridorWidth`. |
| <Link id="m-minimumroomsize" /><code>{"private int minimumRoomSize"}</code> | Backing field for `MinimumRoomSize`. |
| <Link id="m-room" /><code>{"private int room"}</code> | Backing field for `RoomValue`. |
| <Link id="m-wall" /><code>{"private int wall"}</code> | Backing field for `WallValue`. |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | Backing field for `YIndex`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-linethreshold-2" /><code>{"float LineThreshold { get; }"}</code> | Threshold passed to the corridor line drawing, together with the man-made layer. |
| <Link id="m-manmadelayer-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" ManMadeLayer { get; }"}</code> | Layer plugin passed to corridor drawing, probably to mark corridors as man-made. |
| <Link id="m-maximumcorridorwidth-2" /><code>{"float MaximumCorridorWidth { get; }"}</code> | Largest random corridor width. |
| <Link id="m-minimumcorridorwidth-2" /><code>{"float MinimumCorridorWidth { get; }"}</code> | Smallest random corridor width. |
| <Link id="m-minimumroomsize-2" /><code>{"int MinimumRoomSize { get; }"}</code> | Open areas with fewer cells than this are filled with `WallValue`. |
| <Link id="m-roomvalue" /><code>{"int RoomValue { get; }"}</code> | Value written into cells that are room or corridor. |
| <Link id="m-wallvalue" /><code>{"int WallValue { get; }"}</code> | Value written into cells of rooms that are too small. |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | Which Y slice of the layer is processed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `RoomFixesInstance` that runs this part on a plugin. |

## Used in

Members of other types that take, return or hold a `RoomFixes`:

[`RoomFixesInstance.RoomFixesInstance`](/mod/game-api/types/alta-world-generation/roomfixesinstance#m-ctor).
