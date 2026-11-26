---
title: "ObjectPipeline"
description: "A serializable chain that turns an input object (usually a Distribution) into one result, such as picking a random prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectPipeline

A **class** in `Root.Township`, the global namespace.

A serializable chain that turns an input object (usually a `Distribution`) into one result, such as picking a random prefab. Used by cave cluster generators and forest encounters.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectPipeline()"}</code> | Creates an `ObjectPipeline` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cached" /><code>{"private Object cached"}</code> | Result after the first `cacheDepth` steps, kept between calls until `Reset`. |
| <Link id="m-cachedepth" /><code>{"private int cacheDepth"}</code> | How many pipeline steps to run once and cache; later calls to `Get` start from the cached result. |
| <Link id="m-input" /><code>{"private Object input"}</code> | The starting object, usually a distribution. |
| <Link id="m-isrun" /><code>{"private bool isRun"}</code> | True once `Get` has run and the cache is filled. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pipeline" /><code>{"private int[] pipeline"}</code> | Indexes into `Elements`: the steps run on the input, in order. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elements" /><code>{"static "}<Link to="/mod/game-api/types/global-p/pipelineelement">{"PipelineElement"}</Link>{"[] Elements { get; }"}</code> | The available steps: pick from a distribution, and flatten a distribution. |
| <Link id="m-hasinput" /><code>{"bool HasInput { get; }"}</code> | Whether an input object is set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"Object Get("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, string errorName = \"Unknown\")"}</code> | Runs the chain and returns the result. Steps up to the cache depth run once and are reused. |
| <Link id="m-get-2" /><code>{"Object Get(Func<double> random, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData, string errorName = \"Unknown\")"}</code> | Runs the chain and returns the result. Steps up to the cache depth run once and are reused. |
| <Link id="m-getall" /><code>{"IEnumerable<Object> GetAll() (iterator)"}</code> | Lists every result each step could give for the input. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Clears the cache so the next `Get` runs every step again. |

## Used in

Members of other types that take, return or hold a `ObjectPipeline`:

[`ClusterGenerator.prefab`](/mod/game-api/types/alta-world-generation/clustergenerator#m-prefab), [`StaticClusterGenerator.prefab`](/mod/game-api/types/alta-world-generation/staticclustergenerator#m-prefab), [`ForestEncounters.crossRoads`](/mod/game-api/types/alta-world-generation/forestencounters#m-crossroads), [`ForestEncounters.deadEnds`](/mod/game-api/types/alta-world-generation/forestencounters#m-deadends), [`ForestEncounters.largeEncounters`](/mod/game-api/types/alta-world-generation/forestencounters#m-largeencounters), [`ForestEncounters.paths`](/mod/game-api/types/alta-world-generation/forestencounters#m-paths), [`RiverEncounters.exits`](/mod/game-api/types/alta-world-generation/riverencounters#m-exits), [`RiverEncounters.forks`](/mod/game-api/types/alta-world-generation/riverencounters#m-forks), [`RiverEncounters.openings`](/mod/game-api/types/alta-world-generation/riverencounters#m-openings), [`RiverEncounters.paths`](/mod/game-api/types/alta-world-generation/riverencounters#m-paths), [`RiverEncounters.waterfallTops`](/mod/game-api/types/alta-world-generation/riverencounters#m-waterfalltops), [`PresetLootSet.Entry.item`](/mod/game-api/types/alta-world-generation/presetlootset-entry#m-item), [`PresetLootSet.Entry.physicalMaterial`](/mod/game-api/types/alta-world-generation/presetlootset-entry#m-physicalmaterial), [`DynamicPathPart.prefab`](/mod/game-api/types/global-c-d/dynamicpathpart#m-prefab), [`GrowthStage.prefabs`](/mod/game-api/types/global-e-h/growthstage#m-prefabs), [`GrowthStage.Prefabs`](/mod/game-api/types/global-e-h/growthstage#m-prefabs-2), [`PopulationPath.population`](/mod/game-api/types/global-p/populationpath#m-population), [`RockCluster.options`](/mod/game-api/types/global-q-r/rockcluster#m-options), [`SetNetworkPrefabModifier.prefab`](/mod/game-api/types/global-s/setnetworkprefabmodifier#m-prefab), [`SetPrefabModifier.piecePipeline`](/mod/game-api/types/global-s/setprefabmodifier#m-piecepipeline), [`SetPrefabModifier.pipeline`](/mod/game-api/types/global-s/setprefabmodifier#m-pipeline), [`SpawnerPart.prefab`](/mod/game-api/types/global-s/spawnerpart#m-prefab), [`SpawnInCircle.items`](/mod/game-api/types/global-s/spawnincircle#m-items), [`StaticDynamicSpawner.prefab`](/mod/game-api/types/global-s/staticdynamicspawner#m-prefab), [`StaticGeneration.prefab`](/mod/game-api/types/global-s/staticgeneration#m-prefab), [`TerrainSpline.prefab`](/mod/game-api/types/global-t-x/terrainspline#m-prefab).
