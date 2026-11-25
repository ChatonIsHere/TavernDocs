---
title: "SpawnData"
description: "Options passed along when spawning an entity: whether it should run its procedural generation (loot, random contents and so on), the biome it is in, and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnData

A **class** in `Root.Township`, no namespace.

Options passed along when spawning an entity: whether it should run its procedural generation (loot, random contents and so on), the biome it is in, and extra string arguments.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Derived types** [`ForestNodeMapSpawnData`](/game-api/types/global-e-h/forestnodemapspawndata), [`HitSpawnData`](/game-api/types/global-e-h/hitspawndata), [`RiverNodeMapSpawnData`](/game-api/types/global-q-r/rivernodemapspawndata)
- **Documented in** [Spawning](/game-api/world/spawning#spawndata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnData("}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome, bool isGenerating = true, bool isFirstChunkLoad = false)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-empty" /><code>{"private static IEnumerable<string> empty"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"IEnumerable<string> Arguments { get; private set; }"}</code> | Extra string arguments. Loot packages use these to pass arguments on to what they spawn. |
| <Link id="m-attributes" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; protected set; }"}</code> | Biome attribute values the spawn uses. Starts as the biome's set and is copied before any override. |
| <Link id="m-biome" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Biome { get; private set; }"}</code> | The generated biome the object spawns into, if any. |
| <Link id="m-default" /><code>{"static "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" Default { get; }"}</code> | A new instance that generates, with no biome. |
| <Link id="m-dontgenerate" /><code>{"static "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" DontGenerate { get; }"}</code> | A new instance with generation turned off. Use it when spawning something whose contents you set yourself. |
| <Link id="m-isfirstchunkload" /><code>{"bool IsFirstChunkLoad { get; private set; }"}</code> | True when the spawn comes from a chunk's first load. Some components still generate on first load even if `IsGenerating` is false. |
| <Link id="m-isgenerating" /><code>{"bool IsGenerating { get; private set; }"}</code> | Whether the spawned object should generate its contents. True by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createchild" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" CreateChild(bool isGenerating)"}</code> | Makes spawn data for a child object with the same biome and first-load flag, a copy of the attributes and its own generate flag. |
| <Link id="m-overrideattribute" /><code>{"void OverrideAttribute("}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, float value)"}</code> | Sets one biome attribute for this spawn only, copying the attribute set first so the biome is not changed. |
| <Link id="m-shouldgenerate" /><code>{"static bool ShouldGenerate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" data, bool isGeneratingFirstLoad = false)"}</code> | Whether a component should generate. False for null data; when generation is off, true only on first chunk load if the caller asks for that. |
| <Link id="m-withargs" /><code>{"static "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" WithArgs(IEnumerable<string> arguments)"}</code> | Makes generating spawn data with the given string arguments and no biome. |

## Used in

Members of other types that take, return or hold a `SpawnData`:

[`ForgedModel<TB, TA>.InitializeAsServer`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-initializeasserver), [`ForgedPoint.InitializeAsServer`](/game-api/types/alta-crafting/forgedpoint#m-initializeasserver), [`MeltingModel.InitializeAsServer`](/game-api/types/alta-crafting/meltingmodel#m-initializeasserver), [`Recycler.InitializeAsServer`](/game-api/types/alta-crafting/recycler#m-initializeasserver), [`Smelter.InitializeAsServer`](/game-api/types/alta-crafting/smelter#m-initializeasserver), [`ChisellingDeck.InitializeAsServer`](/game-api/types/alta-crafting/chisellingdeck#m-initializeasserver), [`Biome.spawnData`](/game-api/types/alta-world-generation/biome#m-spawndata), [`CaveLayerManager.InitializeAsServer`](/game-api/types/alta-world-generation/cavelayermanager#m-initializeasserver), [`CaveTeleporter.InitializeAsServer`](/game-api/types/alta-world-generation/caveteleporter#m-initializeasserver), [`CaveTeleporterManager.InitializeAsServer`](/game-api/types/alta-world-generation/caveteleportermanager#m-initializeasserver), [`ClusterGenerator.Generate`](/game-api/types/alta-world-generation/clustergenerator#m-generate), [`StaticClusterGenerator.Generate`](/game-api/types/alta-world-generation/staticclustergenerator#m-generate), [`GenerationBase.SpawnData`](/game-api/types/alta-world-generation/generationbase#m-spawndata), [`IGenerator.SpawnData`](/game-api/types/alta-world-generation/igenerator#m-spawndata), [`CaveLayerChunk.InitializeAsServer`](/game-api/types/alta-world/cavelayerchunk#m-initializeasserver), [`Chunk.InitializeAsServer`](/game-api/types/alta-world/chunk#m-initializeasserver), [`Chunk.SpawnData`](/game-api/types/alta-world/chunk#m-spawndata), [`ChunkEnvironment.generationContext`](/game-api/types/alta-world/chunkenvironment#m-generationcontext), [`ChunkEnvironment.SetProcedural`](/game-api/types/alta-world/chunkenvironment#m-setprocedural), [`ChunkEnvironment.SpawnData`](/game-api/types/alta-world/chunkenvironment#m-spawndata), [`ChunkPositionSurface.InitializeAsServer`](/game-api/types/alta-world/chunkpositionsurface#m-initializeasserver), [`LocationChunk.SpawnData`](/game-api/types/alta-world/locationchunk#m-spawndata), [`WorldLandmarkManager.InitializeAsServer`](/game-api/types/alta-world/worldlandmarkmanager#m-initializeasserver), [`Cookable.InitializeAsServer`](/game-api/types/alta-crafting/cookable#m-initializeasserver), [`CookingPot.InitializeAsServer`](/game-api/types/alta-crafting/cookingpot#m-initializeasserver), [`CraftingPart.InitializeAsServer`](/game-api/types/alta-crafting/craftingpart#m-initializeasserver), [`CraftingTester.InitializeAsServer`](/game-api/types/alta-crafting/craftingtester#m-initializeasserver), [`DecraftingDeck.InitializeAsServer`](/game-api/types/alta-crafting/decraftingdeck#m-initializeasserver), [`GenericCraftingStation.InitializeAsServer`](/game-api/types/alta-crafting/genericcraftingstation#m-initializeasserver), [`JointSlot.InitializeAsServer`](/game-api/types/alta-crafting/jointslot#m-initializeasserver), [`Enchantable.InitializeAsServer`](/game-api/types/alta-crafting/enchantable#m-initializeasserver), [`GrassManager.InitializeAsServer`](/game-api/types/alta-world/grassmanager#m-initializeasserver), [`ForestGenerator.InitializeAsServer`](/game-api/types/alta-world-generation/forestgenerator#m-initializeasserver), [`ForestPopulationArea.InitializeAsServer`](/game-api/types/alta-world-generation/forestpopulationarea#m-initializeasserver), [`SpawnParameters.spawnData`](/game-api/types/alta-world-generation/spawnparameters#m-spawndata), [`SpawnParameters.SpawnParameters`](/game-api/types/alta-world-generation/spawnparameters#m-ctor), [`HandShakeOffDetector.InitializeAsServer`](/game-api/types/alta-stats-effects/handshakeoffdetector#m-initializeasserver), [`HeatArea.InitializeAsServer`](/game-api/types/alta-stats-effects/heatarea#m-initializeasserver), [`HeatPoint.InitializeAsServer`](/game-api/types/alta-stats-effects/heatpoint#m-initializeasserver), [`FixedImpactor.InitializeAsServer`](/game-api/types/alta-items/fixedimpactor#m-initializeasserver), [`HitModifierEffect.InitializeAsServer`](/game-api/types/alta-items/hitmodifiereffect#m-initializeasserver), [`ImpactDetector.InitializeAsServer`](/game-api/types/alta-items/impactdetector#m-initializeasserver), [`ImpactModifier.InitializeAsServer`](/game-api/types/alta-items/impactmodifier#m-initializeasserver), [`Agent.InitializeAsServer`](/game-api/types/alta-intelligence/agent#m-initializeasserver), [`IAgent.InitializeAsServer`](/game-api/types/alta-intelligence/iagent#m-initializeasserver), [`Schmeechee.InitializeAsServer`](/game-api/types/alta-intelligence/schmeechee#m-initializeasserver), [`SeedSprayManager.InitializeAsServer`](/game-api/types/alta-intelligence/seedspraymanager#m-initializeasserver), [`CommunalStorage.InitializeAsServer`](/game-api/types/alta-items/communalstorage#m-initializeasserver), [`LockableHinge.InitializeAsServer`](/game-api/types/alta-items/lockablehinge#m-initializeasserver), [`RejectDockArea.InitializeAsServer`](/game-api/types/alta-items/rejectdockarea#m-initializeasserver), [`LiquidContainer.Generate`](/game-api/types/alta-stats-effects/liquidcontainer#m-generate), [`LiquidContainer.InitializeAsServer`](/game-api/types/alta-stats-effects/liquidcontainer#m-initializeasserver), [`LiquidContainerLid.InitializeAsServer`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-initializeasserver), [`GlobalLogicManager.InitializeAsServer`](/game-api/types/alta-items/globallogicmanager#m-initializeasserver), [`LogicFloatRangeReceiver.InitializeAsServer`](/game-api/types/alta-items/logicfloatrangereceiver#m-initializeasserver), [`LogicFloatThresholdReceiver.InitializeAsServer`](/game-api/types/alta-items/logicfloatthresholdreceiver#m-initializeasserver), [`LogicGateReceiver.InitializeAsServer`](/game-api/types/alta-items/logicgatereceiver#m-initializeasserver), [`LogicIntRangeReceiver.InitializeAsServer`](/game-api/types/alta-items/logicintrangereceiver#m-initializeasserver), [`LogicIntThresholdReceiver.InitializeAsServer`](/game-api/types/alta-items/logicintthresholdreceiver#m-initializeasserver), [`LogicSumFloatReceiver.InitializeAsServer`](/game-api/types/alta-items/logicsumfloatreceiver#m-initializeasserver) and 173 more.
