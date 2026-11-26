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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`WorldCommandModule.ForestCommandModule`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule)
- **Nested types** [`Biome`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-biome), [`Edge`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-edge), [`Encounter`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-encounter), [`Node`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-node), [`Space`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-space)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestInfo()"}</code> | <span className="api-desc">Creates a `WorldCommandModule.ForestCommandModule.ForestInfo` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-area" /><code>{"float area"}</code> | <span className="api-desc">The forest's area from its generation.</span> |
| <Link id="m-biomes" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-biome">{"WorldCommandModule.ForestCommandModule.ForestInfo.Biome"}</Link>{"> biomes"}</code> | <span className="api-desc">The biome spheres in the forest.</span> |
| <Link id="m-bounds" /><code>{"Bounds bounds"}</code> | <span className="api-desc">The forest's bounds.</span> |
| <Link id="m-edges" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-edge">{"WorldCommandModule.ForestCommandModule.ForestInfo.Edge"}</Link>{"> edges"}</code> | <span className="api-desc">Paths between nodes.</span> |
| <Link id="m-encounters" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-encounter">{"WorldCommandModule.ForestCommandModule.ForestInfo.Encounter"}</Link>{"> encounters"}</code> | <span className="api-desc">The G-core encounters placed in the forest.</span> |
| <Link id="m-entrances" /><code>{"List<Vector3> entrances"}</code> | <span className="api-desc">Entrance positions.</span> |
| <Link id="m-nodes" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-node">{"WorldCommandModule.ForestCommandModule.ForestInfo.Node"}</Link>{"> nodes"}</code> | <span className="api-desc">The forest's nodes (clearings), with positions and radii.</span> |
| <Link id="m-outline" /><code>{"List<Vector3> outline"}</code> | <span className="api-desc">Points along the forest's outline.</span> |
| <Link id="m-seed" /><code>{"uint seed"}</code> | <span className="api-desc">The generation seed.</span> |
| <Link id="m-spaces" /><code>{"List<"}<Link to="/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule-forestinfo-space">{"WorldCommandModule.ForestCommandModule.ForestInfo.Space"}</Link>{"> spaces"}</code> | <span className="api-desc">Triangles formed by three nodes.</span> |

## Used in

Members of other types that take, return or hold a `ForestInfo`:

<div className="api-used-in">

[`WorldCommandModule.ForestCommandModule.Info`](/mod/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-info).

</div>
