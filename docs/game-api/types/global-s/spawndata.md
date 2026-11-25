---
title: "SpawnData"
description: "Passed to every InitializeAsServer. It says whether the thing should generate its contents, and which biome it's in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnData

A **class** in `Root.Township`, no namespace.

Passed to every `InitializeAsServer`. It says whether the thing should generate its contents, and which biome it's in.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Derived types** [`ForestNodeMapSpawnData`](/game-api/types/global-e-h/forestnodemapspawndata), [`HitSpawnData`](/game-api/types/global-e-h/hitspawndata), [`RiverNodeMapSpawnData`](/game-api/types/global-q-r/rivernodemapspawndata)
- **Documented in** [Spawning](/game-api/world/spawning#spawndata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnData("}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome, bool isGenerating = true, bool isFirstChunkLoad = false)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-empty" /><code>{"private static IEnumerable<string> empty"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"IEnumerable<string> Arguments { get; private set; }"}</code> |  |
| <Link id="m-attributes" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; protected set; }"}</code> |  |
| <Link id="m-biome" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Biome { get; private set; }"}</code> |  |
| <Link id="m-default" /><code>{"static "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" Default { get; }"}</code> |  |
| <Link id="m-dontgenerate" /><code>{"static "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" DontGenerate { get; }"}</code> |  |
| <Link id="m-isfirstchunkload" /><code>{"bool IsFirstChunkLoad { get; private set; }"}</code> |  |
| <Link id="m-isgenerating" /><code>{"bool IsGenerating { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createchild" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" CreateChild(bool isGenerating)"}</code> |  |
| <Link id="m-overrideattribute" /><code>{"void OverrideAttribute("}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, float value)"}</code> |  |
| <Link id="m-shouldgenerate" /><code>{"static bool ShouldGenerate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data, bool isGeneratingFirstLoad = false)"}</code> |  |
| <Link id="m-withargs" /><code>{"static "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" WithArgs(IEnumerable<string> arguments)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SpawnData`:

[`ForgedModel<TB, TA>.InitializeAsServer`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-initializeasserver), [`ForgedPoint.InitializeAsServer`](/game-api/types/alta-crafting/forgedpoint#m-initializeasserver), [`MeltingModel.InitializeAsServer`](/game-api/types/alta-crafting/meltingmodel#m-initializeasserver), [`Recycler.InitializeAsServer`](/game-api/types/alta-crafting/recycler#m-initializeasserver), [`Smelter.InitializeAsServer`](/game-api/types/alta-crafting/smelter#m-initializeasserver), [`ChisellingDeck.InitializeAsServer`](/game-api/types/alta-crafting/chisellingdeck#m-initializeasserver), [`Biome.spawnData`](/game-api/types/alta-world-generation/biome#m-spawndata), [`CaveLayerManager.InitializeAsServer`](/game-api/types/alta-world-generation/cavelayermanager#m-initializeasserver), [`CaveTeleporter.InitializeAsServer`](/game-api/types/alta-world-generation/caveteleporter#m-initializeasserver), [`CaveTeleporterManager.InitializeAsServer`](/game-api/types/alta-world-generation/caveteleportermanager#m-initializeasserver), [`ClusterGenerator.Generate`](/game-api/types/alta-world-generation/clustergenerator#m-generate), [`StaticClusterGenerator.Generate`](/game-api/types/alta-world-generation/staticclustergenerator#m-generate), [`GenerationBase.SpawnData`](/game-api/types/alta-world-generation/generationbase#m-spawndata), [`IGenerator.SpawnData`](/game-api/types/alta-world-generation/igenerator#m-spawndata), [`CaveLayerChunk.InitializeAsServer`](/game-api/types/alta-world/cavelayerchunk#m-initializeasserver), [`Chunk.InitializeAsServer`](/game-api/types/alta-world/chunk#m-initializeasserver), [`Chunk.SpawnData`](/game-api/types/alta-world/chunk#m-spawndata), [`ChunkEnvironment.generationContext`](/game-api/types/alta-world/chunkenvironment#m-generationcontext), [`ChunkEnvironment.SetProcedural`](/game-api/types/alta-world/chunkenvironment#m-setprocedural), [`ChunkEnvironment.SpawnData`](/game-api/types/alta-world/chunkenvironment#m-spawndata), [`ChunkPositionSurface.InitializeAsServer`](/game-api/types/alta-world/chunkpositionsurface#m-initializeasserver), [`LocationChunk.SpawnData`](/game-api/types/alta-world/locationchunk#m-spawndata), [`WorldLandmarkManager.InitializeAsServer`](/game-api/types/alta-world/worldlandmarkmanager#m-initializeasserver), [`Cookable.InitializeAsServer`](/game-api/types/alta-crafting/cookable#m-initializeasserver), [`CookingPot.InitializeAsServer`](/game-api/types/alta-crafting/cookingpot#m-initializeasserver), [`CraftingPart.InitializeAsServer`](/game-api/types/alta-crafting/craftingpart#m-initializeasserver), [`CraftingTester.InitializeAsServer`](/game-api/types/alta-crafting/craftingtester#m-initializeasserver), [`DecraftingDeck.InitializeAsServer`](/game-api/types/alta-crafting/decraftingdeck#m-initializeasserver), [`GenericCraftingStation.InitializeAsServer`](/game-api/types/alta-crafting/genericcraftingstation#m-initializeasserver), [`JointSlot.InitializeAsServer`](/game-api/types/alta-crafting/jointslot#m-initializeasserver), [`Enchantable.InitializeAsServer`](/game-api/types/alta-crafting/enchantable#m-initializeasserver), [`GrassManager.InitializeAsServer`](/game-api/types/alta-world/grassmanager#m-initializeasserver), [`ForestGenerator.InitializeAsServer`](/game-api/types/alta-world-generation/forestgenerator#m-initializeasserver), [`ForestPopulationArea.InitializeAsServer`](/game-api/types/alta-world-generation/forestpopulationarea#m-initializeasserver), [`SpawnParameters.spawnData`](/game-api/types/alta-world-generation/spawnparameters#m-spawndata), [`SpawnParameters.SpawnParameters`](/game-api/types/alta-world-generation/spawnparameters#m-ctor), [`HandShakeOffDetector.InitializeAsServer`](/game-api/types/alta-stats-effects/handshakeoffdetector#m-initializeasserver), [`HeatArea.InitializeAsServer`](/game-api/types/alta-stats-effects/heatarea#m-initializeasserver), [`HeatPoint.InitializeAsServer`](/game-api/types/alta-stats-effects/heatpoint#m-initializeasserver), [`FixedImpactor.InitializeAsServer`](/game-api/types/alta-items/fixedimpactor#m-initializeasserver), [`HitModifierEffect.InitializeAsServer`](/game-api/types/alta-items/hitmodifiereffect#m-initializeasserver), [`ImpactDetector.InitializeAsServer`](/game-api/types/alta-items/impactdetector#m-initializeasserver), [`ImpactModifier.InitializeAsServer`](/game-api/types/alta-items/impactmodifier#m-initializeasserver), [`Agent.InitializeAsServer`](/game-api/types/alta-intelligence/agent#m-initializeasserver), [`IAgent.InitializeAsServer`](/game-api/types/alta-intelligence/iagent#m-initializeasserver), [`Schmeechee.InitializeAsServer`](/game-api/types/alta-intelligence/schmeechee#m-initializeasserver), [`SeedSprayManager.InitializeAsServer`](/game-api/types/alta-intelligence/seedspraymanager#m-initializeasserver), [`CommunalStorage.InitializeAsServer`](/game-api/types/alta-items/communalstorage#m-initializeasserver), [`LockableHinge.InitializeAsServer`](/game-api/types/alta-items/lockablehinge#m-initializeasserver), [`RejectDockArea.InitializeAsServer`](/game-api/types/alta-items/rejectdockarea#m-initializeasserver), [`LiquidContainer.Generate`](/game-api/types/alta-stats-effects/liquidcontainer#m-generate), [`LiquidContainer.InitializeAsServer`](/game-api/types/alta-stats-effects/liquidcontainer#m-initializeasserver), [`LiquidContainerLid.InitializeAsServer`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-initializeasserver), [`GlobalLogicManager.InitializeAsServer`](/game-api/types/alta-items/globallogicmanager#m-initializeasserver), [`LogicFloatRangeReceiver.InitializeAsServer`](/game-api/types/alta-items/logicfloatrangereceiver#m-initializeasserver), [`LogicFloatThresholdReceiver.InitializeAsServer`](/game-api/types/alta-items/logicfloatthresholdreceiver#m-initializeasserver), [`LogicGateReceiver.InitializeAsServer`](/game-api/types/alta-items/logicgatereceiver#m-initializeasserver), [`LogicIntRangeReceiver.InitializeAsServer`](/game-api/types/alta-items/logicintrangereceiver#m-initializeasserver), [`LogicIntThresholdReceiver.InitializeAsServer`](/game-api/types/alta-items/logicintthresholdreceiver#m-initializeasserver), [`LogicSumFloatReceiver.InitializeAsServer`](/game-api/types/alta-items/logicsumfloatreceiver#m-initializeasserver) and 173 more.
