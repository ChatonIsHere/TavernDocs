---
title: "RoomFixesInstance"
description: "Runtime instance of the RoomFixes plugin part: fills in small pockets, joins the remaining rooms with corridors, and records the two biggest rooms for the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomFixesInstance

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Runtime instance of the `RoomFixes` plugin part: fills in small pockets, joins the remaining rooms with corridors, and records the two biggest rooms for the layer links.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPartInstance<RoomFixes>`](/mod/game-api/types/alta-world-generation/mapgeneratorpartinstance-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomFixesInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/roomfixes">{"RoomFixes"}</Link>{" part)"}</code> | <span className="api-desc">Creates a `RoomFixesInstance` from `plugin` and `part`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int offX, int offZ)"}</code> | <span className="api-desc">Repeatedly finds rooms, walls off small ones and draws corridors between nearest groups; stores the biggest rooms and the entrance snap on the generator.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floodfill" /><code>{"private int FloodFill(int x, int z, int maxXZ, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, float value, out int totalX, out int totalZ)"}</code> | <span className="api-desc">Scanline flood fill from a cell, setting matching cells to a value; returns the cell count and coordinate totals.</span> |

</details>
