---
title: "ISpawnPositions"
description: "Something that gives spawn points by index, such as a PositionSurfaceDefinition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISpawnPositions

An **interface** in `Root.Township`, the global namespace.

Something that gives spawn points by index, such as a `PositionSurfaceDefinition`. Used by `PopulationSpawnArea`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PositionSurfaceDefinition`](/mod/game-api/types/alta-world/positionsurfacedefinition), [`SpawnArea`](/mod/game-api/types/global-s/spawnarea), [`SpawnPositions`](/mod/game-api/types/global-s/spawnpositions)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getspawnposition" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetSpawnPosition(int index)"}</code> | Returns the spawn point for an index. |
| <Link id="m-setsize" /><code>{"void SetSize(float size)"}</code> | Resizes the spawn area. Called by the spawn console command. |

## Used in

Members of other types that take, return or hold a `ISpawnPositions`:

[`SimplePopulationValue.Positions`](/mod/game-api/types/alta-world-generation/simplepopulationvalue#m-positions), [`SimplePopulationValue.SimplePopulationValue`](/mod/game-api/types/alta-world-generation/simplepopulationvalue#m-ctor).
