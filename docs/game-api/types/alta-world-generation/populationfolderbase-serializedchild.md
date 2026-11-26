---
title: "PopulationFolderBase.SerializedChild"
description: "A loaded population child waiting to be re-added to its population, with the spawn point it was at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationFolderBase.SerializedChild

A **protected class** in `Root.Township`, `Alta.Populations`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A loaded population child waiting to be re-added to its population, with the spawn point it was at. Used between load and `Initialize`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`PopulationFolderBase`](/game-api/types/alta-world-generation/populationfolderbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedChild(int spawnPointIndex)"}</code> | Creates a `PopulationFolderBase.SerializedChild` from `spawnPointIndex`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-child" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Child { get; set; }"}</code> | The loaded entity, set once it is spawned. |
| <Link id="m-spawnpointindex" /><code>{"int SpawnPointIndex { get; }"}</code> | Index of the spawn point the child was saved at. |

## Used in

Members of other types that take, return or hold a `SerializedChild`:

[`PopulationFolderBase.serializedentitiesSpawnPoint`](/game-api/types/alta-world-generation/populationfolderbase#m-serializedentitiesspawnpoint).
