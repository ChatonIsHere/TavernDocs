---
title: "Distribution"
description: "Weighted random table of assets (prefabs, presets, liquids) under the hashed path Distributions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Distribution

A **class** in `Root.Township`, `Alta.Caves`.

Weighted random table of assets (prefabs, presets, liquids) under the hashed path `Distributions`. Item weights can depend on spawn attributes, and festivity groups add items while a festivity is active.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Distribution<Distribution, Object, Distribution.Item, Distribution.FestivityGroup>`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)
- **Derived types** [`Distribution`](/game-api/types/alta-world-generation/distribution), [`Distribution.Create`](/game-api/types/alta-world-generation/distribution-create), [`Distribution.FestivityGroup`](/game-api/types/alta-world-generation/distribution-festivitygroup), [`Distribution.Item`](/game-api/types/alta-world-generation/distribution-item)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/distribution-create), [`FestivityGroup`](/game-api/types/alta-world-generation/distribution-festivitygroup), [`Item`](/game-api/types/alta-world-generation/distribution-item)
- **Attributes** `HashedPath`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Distribution()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomas" /><code>{"T GetRandomAs<T>("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | Picks a random entry, weighted by the given attributes, and casts it. Null on the null chance, no match or wrong type. |
| <Link id="m-getrandomas-2" /><code>{"T GetRandomAs<T>(Func<double> randomValue, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | Picks a random entry, weighted by the given attributes, and casts it. Null on the null chance, no match or wrong type. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Logs errors for empty entries and empty festivity groups. |

## Used in

Members of other types that take, return or hold a `Distribution`:

[`GameObjectDistribution.MigrateToStaticEnvironmentPiece`](/game-api/types/alta-world-generation/gameobjectdistribution#m-migratetostaticenvironmentpiece), [`LiquidContainer.liquidDistribution`](/game-api/types/alta-stats-effects/liquidcontainer#m-liquiddistribution), [`PopulationDefinition.distribution`](/game-api/types/alta-world-generation/populationdefinition#m-distribution), [`TreeSpecies.stick`](/game-api/types/alta-crafting/treespecies#m-stick), [`TreeSpecies.Stick`](/game-api/types/alta-crafting/treespecies#m-stick-2), [`TreeSpecies.wedge`](/game-api/types/alta-crafting/treespecies#m-wedge), [`TreeSpecies.Wedge`](/game-api/types/alta-crafting/treespecies#m-wedge-2), [`WoodcutTree.spawnDistribution`](/game-api/types/alta-crafting/woodcuttree#m-spawndistribution), [`BiomeSphereGenerator.distribution`](/game-api/types/global-a-b/biomespheregenerator#m-distribution), [`MultipleSpawner.SimpleSpawner.distribution`](/game-api/types/global-m-o/multiplespawner-simplespawner#m-distribution), [`MultipleSpawner.SimpleSpawner.Distribution`](/game-api/types/global-m-o/multiplespawner-simplespawner#m-distribution-2), [`MultiSpawner.distributions`](/game-api/types/global-m-o/multispawner#m-distributions), [`MultiSpawner.Distributions`](/game-api/types/global-m-o/multispawner#m-distributions-2), [`MultiSpawner.SpawnDistribution`](/game-api/types/global-m-o/multispawner#m-spawndistribution), [`PhysicalMaterialPart.materialDistribution`](/game-api/types/global-p/physicalmaterialpart#m-materialdistribution), [`PostboxSender.giftPrefabDistribution`](/game-api/types/global-p/postboxsender#m-giftprefabdistribution), [`PouchSpawner.distribution`](/game-api/types/global-p/pouchspawner#m-distribution), [`RandomSpawnRectangle.distribution`](/game-api/types/global-q-r/randomspawnrectangle#m-distribution), [`RandomSpawnRectangleSaveData.distribution`](/game-api/types/global-q-r/randomspawnrectanglesavedata#m-distribution), [`SpawnBuried.spawnDistribution`](/game-api/types/global-s/spawnburied#m-spawndistribution), [`SpawnBuriedSaveData.distribution`](/game-api/types/global-s/spawnburiedsavedata#m-distribution), [`Spawner.distribution`](/game-api/types/global-s/spawner#m-distribution).
