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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Distribution<Distribution, Object, Distribution.Item, Distribution.FestivityGroup>`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)
- **Derived types** [`Distribution`](/mod/game-api/types/alta-world-generation/distribution), [`Distribution.Create`](/mod/game-api/types/alta-world-generation/distribution-create), [`Distribution.FestivityGroup`](/mod/game-api/types/alta-world-generation/distribution-festivitygroup), [`Distribution.Item`](/mod/game-api/types/alta-world-generation/distribution-item)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/distribution-create), [`FestivityGroup`](/mod/game-api/types/alta-world-generation/distribution-festivitygroup), [`Item`](/mod/game-api/types/alta-world-generation/distribution-item)
- **Attributes** `HashedPath`
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Distribution()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomas" /><code>{"T GetRandomAs<T>("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | <span className="api-desc">Picks a random entry, weighted by the given attributes, and casts it. Null on the null chance, no match or wrong type.</span> |
| <Link id="m-getrandomas-2" /><code>{"T GetRandomAs<T>(Func<double> randomValue, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | <span className="api-desc">Picks a random entry, weighted by the given attributes, and casts it. Null on the null chance, no match or wrong type.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Logs errors for empty entries and empty festivity groups.</span> |

## Used in

Members of other types that take, return or hold a `Distribution`:

<div className="api-used-in">

[`GameObjectDistribution.MigrateToStaticEnvironmentPiece`](/mod/game-api/types/alta-world-generation/gameobjectdistribution#m-migratetostaticenvironmentpiece), [`LiquidContainer.liquidDistribution`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-liquiddistribution), [`PopulationDefinition.distribution`](/mod/game-api/types/alta-world-generation/populationdefinition#m-distribution), [`TreeSpecies.stick`](/mod/game-api/types/alta-crafting/treespecies#m-stick), [`TreeSpecies.Stick`](/mod/game-api/types/alta-crafting/treespecies#m-stick-2), [`TreeSpecies.wedge`](/mod/game-api/types/alta-crafting/treespecies#m-wedge), [`TreeSpecies.Wedge`](/mod/game-api/types/alta-crafting/treespecies#m-wedge-2), [`WoodcutTree.spawnDistribution`](/mod/game-api/types/alta-crafting/woodcuttree#m-spawndistribution), [`BiomeSphereGenerator.distribution`](/mod/game-api/types/global-a-b/biomespheregenerator#m-distribution), [`MultipleSpawner.SimpleSpawner.distribution`](/mod/game-api/types/global-m-o/multiplespawner-simplespawner#m-distribution), [`MultipleSpawner.SimpleSpawner.Distribution`](/mod/game-api/types/global-m-o/multiplespawner-simplespawner#m-distribution-2), [`MultiSpawner.distributions`](/mod/game-api/types/global-m-o/multispawner#m-distributions), [`MultiSpawner.Distributions`](/mod/game-api/types/global-m-o/multispawner#m-distributions-2), [`MultiSpawner.SpawnDistribution`](/mod/game-api/types/global-m-o/multispawner#m-spawndistribution), [`PhysicalMaterialPart.materialDistribution`](/mod/game-api/types/global-p/physicalmaterialpart#m-materialdistribution), [`PostboxSender.giftPrefabDistribution`](/mod/game-api/types/global-p/postboxsender#m-giftprefabdistribution), [`PouchSpawner.distribution`](/mod/game-api/types/global-p/pouchspawner#m-distribution), [`RandomSpawnRectangle.distribution`](/mod/game-api/types/global-q-r/randomspawnrectangle#m-distribution), [`RandomSpawnRectangleSaveData.distribution`](/mod/game-api/types/global-q-r/randomspawnrectanglesavedata#m-distribution), [`SpawnBuried.spawnDistribution`](/mod/game-api/types/global-s/spawnburied#m-spawndistribution), [`SpawnBuriedSaveData.distribution`](/mod/game-api/types/global-s/spawnburiedsavedata#m-distribution), [`Spawner.distribution`](/mod/game-api/types/global-s/spawner#m-distribution).

</div>
