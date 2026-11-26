---
title: "GameObjectDistribution"
description: "A weighted distribution of GameObjects used by cave generation, with festivity groups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameObjectDistribution

A **class** in `Root.Township`, `Alta.Caves`.

A weighted distribution of GameObjects used by cave generation, with festivity groups. A `Distribution` asset.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Distribution<GameObjectDistribution, GameObject, GameObjectDistribution.Item, GameObjectDistribution.FestivityGroup>`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)
- **Derived types** [`GameObjectDistribution`](/mod/game-api/types/alta-world-generation/gameobjectdistribution), [`GameObjectDistribution.Create`](/mod/game-api/types/alta-world-generation/gameobjectdistribution-create), [`GameObjectDistribution.FestivityGroup`](/mod/game-api/types/alta-world-generation/gameobjectdistribution-festivitygroup), [`GameObjectDistribution.Item`](/mod/game-api/types/alta-world-generation/gameobjectdistribution-item)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/gameobjectdistribution-create), [`FestivityGroup`](/mod/game-api/types/alta-world-generation/gameobjectdistribution-festivitygroup), [`Item`](/mod/game-api/types/alta-world-generation/gameobjectdistribution-item)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameObjectDistribution()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migratetostaticenvironmentpiece" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" MigrateToStaticEnvironmentPiece<TThis, T, TItem, TFestivityGroup>(TThis old, Func<T, "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> migrate)"}</code> | <span className="api-desc">Stub that returns null in this build.</span> |

## Used in

Members of other types that take, return or hold a `GameObjectDistribution`:

<div className="api-used-in">

[`StaticGeneration.options`](/mod/game-api/types/global-s/staticgeneration#m-options), [`StaticPositionSpawner.staticPrefabs`](/mod/game-api/types/global-s/staticpositionspawner#m-staticprefabs).

</div>
