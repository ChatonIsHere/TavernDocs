---
title: "RoomFixPluginInstance"
description: "Plugin instance for a RoomFixPlugin that keeps the centres of the two biggest rooms found on the layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomFixPluginInstance

A **class** in `Root.Township`, `Alta.Caves`.

Plugin instance for a `RoomFixPlugin` that keeps the centres of the two biggest rooms found on the layer.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PluginInstance`](/mod/game-api/types/alta-world-generation/plugininstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomFixPluginInstance("}<Link to="/mod/game-api/types/alta-world-generation/igenerator">{"IGenerator"}</Link>{" generator, "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" plugin, bool isEnabled)"}</code> | <span className="api-desc">Creates a `RoomFixPluginInstance` from `generator`, `plugin` and `isEnabled`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biggestroomaverage" /><code>{"Vector2 BiggestRoomAverage { get; set; }"}</code> | <span className="api-desc">Centre of the biggest room (with a small random shift); set by `RoomFixesInstance` and used for the entrance from above.</span> |
| <Link id="m-secondbiggestroomaverage" /><code>{"Vector2 SecondBiggestRoomAverage { get; set; }"}</code> | <span className="api-desc">Centre of the second biggest room; used for the passage down to the next layer.</span> |
