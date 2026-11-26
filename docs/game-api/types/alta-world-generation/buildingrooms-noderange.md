---
title: "BuildingRooms.NodeRange"
description: "A run of nodes from one node to another, used by BuildingRooms to describe a wall section."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingRooms.NodeRange

A **class** in `Root.Township`, `Alta.PAGaC`.

A run of nodes from one node to another, used by `BuildingRooms` to describe a wall section.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`BuildingRooms`](/game-api/types/alta-world-generation/buildingrooms)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NodeRange("}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" start, "}<Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" end)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code><Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" End { get; private set; }"}</code> | Last node of the run. |
| <Link id="m-start" /><code><Link to="/game-api/types/alta-world-generation/node-alta-pagac">{"Node"}</Link>{" Start { get; private set; }"}</code> | First node of the run. |

## Used in

Members of other types that take, return or hold a `NodeRange`:

[`BuildingRooms.GetWalls`](/game-api/types/alta-world-generation/buildingrooms#m-getwalls).
