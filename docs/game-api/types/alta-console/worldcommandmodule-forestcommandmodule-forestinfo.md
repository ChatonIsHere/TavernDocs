---
title: "WorldCommandModule.ForestCommandModule.ForestInfo"
description: "The result of the forest info console command: a forest's layout, biomes and encounters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldCommandModule.ForestCommandModule.ForestInfo

A **private class** in `Root.Township`, `Alta.Console.Commands`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

The result of the `forest info` console command: a forest's layout, biomes and encounters. It is also logged as JSON.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`WorldCommandModule.ForestCommandModule`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule)
- **Nested types** [`Biome`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-biome), [`Edge`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-edge), [`Encounter`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-encounter), [`Node`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-node), [`Space`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-space)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestInfo()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-area" /><code>{"float area"}</code> | The forest's area from its generation. |
| <Link id="m-biomes" /><code>{"List<"}<Link to="/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-biome">{"WorldCommandModule.ForestCommandModule.ForestInfo.Biome"}</Link>{"> biomes"}</code> | The biome spheres in the forest. |
| <Link id="m-bounds" /><code>{"Bounds bounds"}</code> | The forest's bounds. |
| <Link id="m-edges" /><code>{"List<"}<Link to="/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-edge">{"WorldCommandModule.ForestCommandModule.ForestInfo.Edge"}</Link>{"> edges"}</code> | Paths between nodes. |
| <Link id="m-encounters" /><code>{"List<"}<Link to="/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-encounter">{"WorldCommandModule.ForestCommandModule.ForestInfo.Encounter"}</Link>{"> encounters"}</code> | The G-core encounters placed in the forest. |
| <Link id="m-entrances" /><code>{"List<Vector3> entrances"}</code> | Entrance positions. |
| <Link id="m-nodes" /><code>{"List<"}<Link to="/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-node">{"WorldCommandModule.ForestCommandModule.ForestInfo.Node"}</Link>{"> nodes"}</code> | The forest's nodes (clearings), with positions and radii. |
| <Link id="m-outline" /><code>{"List<Vector3> outline"}</code> | Points along the forest's outline. |
| <Link id="m-seed" /><code>{"uint seed"}</code> | The generation seed. |
| <Link id="m-spaces" /><code>{"List<"}<Link to="/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-space">{"WorldCommandModule.ForestCommandModule.ForestInfo.Space"}</Link>{"> spaces"}</code> | Triangles formed by three nodes. |

## Used in

Members of other types that take, return or hold a `ForestInfo`:

[`WorldCommandModule.ForestCommandModule.Info`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-info).
