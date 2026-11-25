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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`RoomFixesInstance`](/game-api/types/alta-world-generation/roomfixesinstance)
- **Nested types** [`Room`](/game-api/types/alta-world-generation/roomfixes-room)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RoomFixes()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-linethreshold" /><code>{"private float lineThreshold"}</code> |
| <Link id="m-manmadelayer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" manMadeLayer"}</code> |
| <Link id="m-maximumcorridorwidth" /><code>{"private float maximumCorridorWidth"}</code> |
| <Link id="m-minimumcorridorwidth" /><code>{"private float minimumCorridorWidth"}</code> |
| <Link id="m-minimumroomsize" /><code>{"private int minimumRoomSize"}</code> |
| <Link id="m-room" /><code>{"private int room"}</code> |
| <Link id="m-wall" /><code>{"private int wall"}</code> |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-linethreshold-2" /><code>{"float LineThreshold { get; }"}</code> | Threshold passed to the corridor line drawing, together with the man-made layer. |
| <Link id="m-manmadelayer-2" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" ManMadeLayer { get; }"}</code> | Layer plugin passed to corridor drawing, probably to mark corridors as man-made. |
| <Link id="m-maximumcorridorwidth-2" /><code>{"float MaximumCorridorWidth { get; }"}</code> | Largest random corridor width. |
| <Link id="m-minimumcorridorwidth-2" /><code>{"float MinimumCorridorWidth { get; }"}</code> | Smallest random corridor width. |
| <Link id="m-minimumroomsize-2" /><code>{"int MinimumRoomSize { get; }"}</code> | Open areas with fewer cells than this are filled with `WallValue`. |
| <Link id="m-roomvalue" /><code>{"int RoomValue { get; }"}</code> | Value written into cells that are room or corridor. |
| <Link id="m-wallvalue" /><code>{"int WallValue { get; }"}</code> | Value written into cells of rooms that are too small. |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | Which Y slice of the layer is processed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `RoomFixesInstance` that runs this part on a plugin. |

## Used in

Members of other types that take, return or hold a `RoomFixes`:

[`RoomFixesInstance.RoomFixesInstance`](/game-api/types/alta-world-generation/roomfixesinstance#m-ctor).
