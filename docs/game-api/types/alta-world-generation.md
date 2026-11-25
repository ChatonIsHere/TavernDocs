---
title: World generation
description: "Types in Alta.Caves, Alta.Forests, Alta.Populations, Alta.Loot and Alta.PAGaC."
sidebar_position: 4
---

# World generation

Types in Alta.Caves, Alta.Forests, Alta.Populations, Alta.Loot and Alta.PAGaC. 339 types, 74 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Caves

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Biome` | class | `HashedGeneralValue<Biome>` | 5 | [Caves](../world/caves.md) |
| `Biome.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<Biome>` | 0 |  |
| `BiomeDoubleValue` | class | `DoubleValue<Biome>` | 0 |  |
| `BiomeResources` | static class |  | 11 |  |
| `BiomeSerializer` | static class |  | 1 |  |
| `BiomeSettings` | class | `CaveSettings<BiomeSettings>` | 4 | [Caves](../world/caves.md) |
| `BiomeSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Settings.ScriptableObject<BiomeSettings>` | 0 |  |
| `BiomeSingleValue` | class | `SingleValue<Biome>` | 2 |  |
| `CaveBiomeGenerator` | static class |  | 3 | [Caves](../world/caves.md) |
| `CaveGeneratingBiome` | class | `GeneratingBiome` | 3 |  |
| `CaveLayerManager` | class | `NetworkEntityBehaviour`, `ISavable<CaveLayerManagerSaveData>`, `ISavableSave<CaveLayerManagerSaveData>`, +1 more | 14 | [Caves](../world/caves.md#cavelayermanager): `Alta.Caves.CaveLayerManager`, a scene `NetworkEntityBehaviour`. `static CaveLayerManager Instance`. Mostly server. |
| `CaveLayerManagerSaveData` | internal class | `NewSaveData<CaveLayerManager, CaveLayerManagerSaveData>` | 6 |  |
| `CaveLayerManagerSaveData3` | internal class | `OldSaveData` | 4 |  |
| `CaveLayerManagerSaveDataOld` | internal class | `OldSaveData` | 2 |  |
| `CaveLayerManagerSaveDataOld2` | internal class | `OldSaveData` | 3 |  |
| `CaveSettings<T>` | abstract class | `GeneralValue` | 1 | [Caves](../world/caves.md) |
| `CaveTeleportConnection` | class |  | 13 | [Caves](../world/caves.md) |
| `CaveTeleporter` | class | `NetworkEntityBehaviour`, `ISavable<CaveTeleporterData>`, `ISavableSave<CaveTeleporterData>`, +1 more | 11 |  |
| `CaveTeleporterData` | class | `NewSaveData<CaveTeleporter, CaveTeleporterData>` | 1 |  |
| `CaveTeleporterManager` | class | `NetworkEntityBehaviour`, `ISavable<CaveTeleporterManagerData>`, `ISavableSave<CaveTeleporterManagerData>`, +1 more | 12 | [Caves](../world/caves.md) |
| `CaveTeleporterManagerData` | class | `NewSaveData<CaveTeleporterManager, CaveTeleporterManagerData>` | 1 |  |
| `CaveTeleporterPip` | class | `MonoBehaviour` | 2 |  |
| `CaveTeleporterProxy` | class |  | 8 |  |
| `CaveTeleporterProxyData` | class |  | 4 |  |
| `CaveTeleportSettings` | class | `GlobalSettings<CaveTeleportSettings>` | 10 | [Caves](../world/caves.md) |
| `ChunkThread` | class |  | 5 | [Caves](../world/caves.md) |
| `ConstrainedSpawnerDisplay` | class | `MapChunkDisplay` | 2 |  |
| `Distribution` | class | `Distribution<Distribution, UnityEngine.Object, Distribution.Item, Distribution.FestivityGroup>` | 2 | [Caves](../world/caves.md): A weighted list (of prefabs, materials) whose weights depend on biome attributes. `GetRandomAs<T>(AttributeSet)`. Populations and material parts use it. |
| `Distribution.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<Distribution>` | 0 |  |
| `Distribution.FestivityGroup` | class | `BaseFestivityGroup` | 0 |  |
| `Distribution.Item` | class | `BaseItem` | 0 |  |
| `Distribution<TThis, T, TItem, TFestivityGroup>` | class | `HashedGeneralValue<TThis>`, `IDistribution<T>` | 10 | [Caves](../world/caves.md): A weighted list (of prefabs, materials) whose weights depend on biome attributes. `GetRandomAs<T>(AttributeSet)`. Populations and material parts use it. |
| `Distribution<TThis, T, TItem, TFestivityGroup>.BaseFestivityGroup` | class |  | 3 |  |
| `Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem` | class | `IDistributionItem<T>` | 3 |  |
| `DockedDissolver` | class | `MonoBehaviour` | 0 |  |
| `Element` | class | `GeneralValue`, `ISerializationCallbackReceiver` | 3 |  |
| `Element.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.ScriptableObject<Element>` | 0 |  |
| `Element.SerializedVariable` | class |  | 2 |  |
| `ElementDoubleValue` | class | `DoubleValue<Element>` | 0 |  |
| `ElementSingleValue` | class | `SingleValue<Element>` | 0 |  |
| `EveryXLayersConstrain` | class | `SpawnConstrain` | 1 |  |
| `GameObjectDistribution` | class | `Distribution<GameObjectDistribution, GameObject, GameObjectDistribution.Item, GameObjectDistribution.FestivityGroup>` | 1 |  |
| `GameObjectDistribution.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<GameObjectDistribution>` | 0 |  |
| `GameObjectDistribution.FestivityGroup` | class | `BaseFestivityGroup` | 0 |  |
| `GameObjectDistribution.Item` | class | `BaseItem` | 0 |  |
| `GeneralSettings` | class | `CaveSettings<GeneralSettings>` | 6 | [Caves](../world/caves.md) |
| `GeneralSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Settings.ScriptableObject<GeneralSettings>` | 0 |  |
| `GeneratedBiome` | class |  | 11 | [Caves](../world/caves.md) |
| `GeneratingBiome` | class |  | 3 |  |
| `GeneratingBiome.Range` | class |  | 4 |  |
| `GenerationBase` | class | `NetworkEntityBehaviour`, `IGenerator` | 26 |  |
| `GenerationStage` | enum |  | 9 |  |
| `IBiomeValues` | interface |  | 3 |  |
| `IDistribution<out T>` | interface |  | 2 |  |
| `IDistributionItem<out T>` | interface |  | 2 |  |
| `IDistributionValue` | interface |  | 1 |  |
| `IGenerator` | interface |  | 15 |  |
| `LevelSelectCaveTeleporter` | class | `CaveTeleporter` | 3 | [Caves](../world/caves.md) |
| `LevelSelector` | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IBuildRendererPostBake`, +1 more | 8 |  |
| `MapChunk` | class | `MonoBehaviour` | 15 | [Caves](../world/caves.md) |
| `MapChunkDisplay` | abstract class | `MonoBehaviour` | 4 |  |
| `MapChunkLayer` | class | `IDisposable` | 12 | [Caves](../world/caves.md) |
| `MapChunkLayer.Value` | struct |  | 4 |  |
| `MarchingCubesChunkDisplay` | class | `MapChunkDisplay` | 2 |  |
| `MarchingCubesPlugin` | class | `Plugin` | 2 |  |
| `MarchingCubesPlugin.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Plugins.ScriptableObject<MarchingCubesPlugin>` | 0 |  |
| `MarchingCubesPlugin.GeneratedMesh` | class |  | 3 |  |
| `Plugin` | class | `GeneralValue` | 13 | [Caves](../world/caves.md) |
| `PluginInstance` | class |  | 9 | [Caves](../world/caves.md) |
| `PluginList` | class | `ScriptableObject` | 1 |  |
| `PluginList.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.ScriptableObject<PluginList>` | 0 |  |
| `PregeneratedCave` | class | `ScriptableObject` | 3 | [Caves](../world/caves.md): Fixed layers in an asset. |
| `PregeneratedCave.Layer` | class |  | 1 |  |
| `RoomFixPlugin` | class | `Plugin` | 15 |  |
| `RoomFixPlugin.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Plugins.ScriptableObject<RoomFixPlugin>` | 0 |  |
| `RoomFixPlugin.Tunnel` | class |  | 6 |  |
| `RoomFixPluginInstance` | class | `PluginInstance` | 3 |  |
| `Section` | class | `GeneralValue` | 3 |  |
| `Section.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.ScriptableObject<Section>` | 0 |  |
| `SerializedGeneratedBiome` | class |  | 1 |  |
| `SpawnConstrain` | abstract class | `ScriptableObject` | 1 |  |
| `StreamingSettings` | class | `CaveSettings<StreamingSettings>` | 10 | [Caves](../world/caves.md) |
| `StreamingSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Settings.ScriptableObject<StreamingSettings>` | 0 |  |
| `StreamingSettings.SpecialLayer` | class |  | 2 |  |
| `TeleportCostStructure` | class | `ScriptableObject` | 1 |  |
| `TeleportEffectArgument` | struct |  | 4 |  |

## Alta.Caves.Displays

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BasicObjectDisplay` | abstract class | `MapChunkDisplay` | 1 |  |
| `ClusterGenerator` | class | `GeneratedNetworkEntityBehaviour` | 0 |  |
| `ClusterSettings` | class |  | 15 |  |
| `EmergePoint` | class | `MonoBehaviour` | 0 |  |
| `GameObjectDisplay` | class | `BasicObjectDisplay` | 1 |  |
| `PixelMapChunkDisplay` | class | `MapChunkDisplay` | 2 |  |
| `PolygonChunkDisplay` | class | `MapChunkDisplay` | 3 |  |
| `StaticClusterGenerator` | class | `MonoBehaviour`, `IStaticGeneration` | 0 |  |
| `WallAlignedDisplay` | class | `BasicObjectDisplay` | 1 |  |

## Alta.Caves.PluginParts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ApplyElement` | class | `MapGeneratorPart` | 3 |  |
| `ApplyElementInstance` | class | `MapGeneratorPartInstance<ApplyElement>` | 2 |  |
| `BlobEdge` | class | `MapGeneratorPart` | 12 |  |
| `BlobEdgeInstance` | class | `MapGeneratorPartInstance<BlobEdge>` | 2 |  |
| `Blur` | class | `MapGeneratorPart` | 2 |  |
| `BlurInstance` | class | `MapGeneratorPartInstance<Blur>` | 2 |  |
| `CellularAutomata` | class | `MapGeneratorPart` | 6 |  |
| `CellularAutomataInstance` | class | `MapGeneratorPartInstance<CellularAutomata>` | 2 |  |
| `Circle` | class | `MapGeneratorPart` | 6 |  |
| `CircleInstance` | class | `MapGeneratorPartInstance<Circle>` | 2 |  |
| `CopyPart` | class | `MapGeneratorPart` | 2 |  |
| `CopyPartInstance` | class | `MapGeneratorPartInstance<CopyPart>` | 2 |  |
| `Curve` | class | `MapGeneratorPart` | 2 |  |
| `CurveInstance` | class | `MapGeneratorPartInstance<Curve>` | 2 |  |
| `IPartInstance` | interface |  | 1 |  |
| `LineDraw` | static class |  | 2 |  |
| `LogRange` | class | `MapGeneratorPart` | 1 |  |
| `LogRangeInstance` | class | `MapGeneratorPartInstance<LogRange>` | 2 |  |
| `MapGeneratorPart` | abstract class | `GeneralValue` | 4 |  |
| `MapGeneratorPartInstance<T>` | abstract class | `IPartInstance` | 8 |  |
| `Mask` | class | `MapGeneratorPart` | 5 |  |
| `MaskInstance` | class | `MapGeneratorPartInstance<Mask>` | 2 |  |
| `OperationPart` | class | `MapGeneratorPart` | 4 |  |
| `OperationPartInstance` | class | `MapGeneratorPartInstance<OperationPart>` | 2 |  |
| `Point` | internal class |  | 3 |  |
| `RandomNoise` | class | `MapGeneratorPart` | 6 |  |
| `RandomNoiseInstance` | class | `MapGeneratorPartInstance<RandomNoise>` | 2 |  |
| `RoofHole` | class | `MapGeneratorPart` | 5 |  |
| `RoofHoleInstance` | class | `MapGeneratorPartInstance<RoofHole>` | 2 |  |
| `RoomFixes` | class | `MapGeneratorPart` | 9 |  |
| `RoomFixes.Room` | class |  | 6 |  |
| `RoomFixesInstance` | class | `MapGeneratorPartInstance<RoomFixes>` | 2 |  |
| `SimplexNoisePart` | class | `MapGeneratorPart` | 4 |  |
| `SimplexNoisePartInstance` | class | `MapGeneratorPartInstance<SimplexNoisePart>` | 2 |  |
| `Stretch` | class | `MapGeneratorPart` | 9 |  |
| `StretchInstance` | class | `MapGeneratorPartInstance<Stretch>` | 2 |  |

## Alta.Forests

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Array2dGenerationHelper` | static class |  | 4 |  |
| `Array2dGenerationHelper.ThreadRowsAction` | delegate |  | 0 |  |
| `Array2dGenerationHelper.ThreadRowsAction<T, TData>` | delegate |  | 0 |  |
| `Array2dGenerationHelper.ThreadRowsAction<TContext, T, TData>` | delegate |  | 0 |  |
| `Array2dGenerationHelper.ThreadRowsAction<TContext>` | delegate |  | 0 |  |
| `CliffFill` | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| `CliffFill.RaycastRequest` | struct |  | 2 |  |
| `CutoutPathEdgeFill` | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| `CutoutPathModifier` | class | `NodeMapModifier`, `ITerrainModifier` | 4 |  |
| `Edge` | class |  | 14 | [Forest](../world/forest.md) |
| `EdgeType` | enum |  | 3 |  |
| `FillSet` | abstract class | `ScriptableObject`, `IFillSet` | 3 |  |
| `ForestAttributeEvaluator` | class | `NodeMapModifier` | 1 |  |
| `ForestBridges` | class | `MonoBehaviour`, `IForestGeneration` | 2 | [Forest](../world/forest.md) |
| `ForestCliffEvaluator` | class | `NodeMapModifier` | 3 |  |
| `ForestCliffEvaluator.CliffPoint` | struct |  | 6 |  |
| `ForestConnectivityIncreaser` | class | `NodeMapModifier` | 1 | [Forest](../world/forest.md) |
| `ForestConverter` | class | `TypeConverter` | 2 |  |
| `ForestEncounters` | class | `MonoBehaviour`, `IForestGeneration` | 1 | [Forest](../world/forest.md): Places encounters along the paths. |
| `ForestFill` | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| `ForestFillCore` | abstract class | `MonoBehaviour`, `IForestGeneration` | 8 |  |
| `ForestFillCore.Setup` | class |  | 4 |  |
| `ForestFillSet` | class | `FillSet` | 1 |  |
| `ForestFillSet.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<ForestFillSet>` | 0 |  |
| `ForestGCoreInstruction` | class | `Instruction` | 7 | [Forest](../world/forest.md) |
| `ForestGeneration` | class | `ICacheable` | 42 | [Forest](../world/forest.md#forestgeneration): `Alta.Forests.ForestGeneration`, the layout. It's an `ICacheable`, so it's stored in the cache. |
| `ForestGenerator` | class | `NetworkEntityBehaviour`, `ISavable<ForestGeneratorSaveData>`, `ISavableSave<ForestGeneratorSaveData>`, +1 more | 23 | [Forest](../world/forest.md#forestgenerator), [Arguments and results](../console-and-utilities/arguments-and-results.md): `Alta.Forests.ForestGenerator`, a `NetworkEntityBehaviour` placed in the scene. One per forest; `ForestGenerator.All` lists them. |
| `ForestGenerator.NearestInfo` | struct |  | 3 |  |
| `ForestGeneratorSaveData` | class | `NewSaveData<ForestGenerator, ForestGeneratorSaveData>` | 1 |  |
| `ForestPathAttributeLerper` | class | `NodeMapModifier` | 1 |  |
| `ForestPopulationArea` | class | `NetworkEntityBehaviour`, `IPointNormalEvaluator` | 1 | [Forest](../world/forest.md) |
| `ForestPopulationCreator` | class | `MonoBehaviour` | 0 | [Forest](../world/forest.md) |
| `ForestSpaceEvaluator` | class | `NodeMapModifier` | 1 |  |
| `IFillSet` | interface |  | 3 |  |
| `IForestGeneration` | interface |  | 6 | [Forest](../world/forest.md): A forest part: `GenerateGlobal`, `GenerateStatic` (adds instructions), `GenerateDynamic`, `ClearStatic`, `ClearDynamic`. |
| `IRiverDecorationSegment` | interface |  | 5 |  |
| `IRiverVisual` | interface |  | 1 |  |
| `ISplatPainter` | interface |  | 1 |  |
| `ITerrainModifier` | interface |  | 2 |  |
| `LakeGenerator` | class | `MonoBehaviour` | 0 | [Forest](../world/forest.md) |
| `LandBridgeModifier` | class | `NodeMapModifier` | 1 | [Forest](../world/forest.md) |
| `Node` | class | `Node<Node, Path>` | 3 | [Forest](../world/forest.md) |
| `Node<TNode, TPath>` | class | `IAStarNode<TNode, TPath>` | 15 | [Forest](../world/forest.md) |
| `NodeMapModifier` | abstract class | `MonoBehaviour` | 3 |  |
| `PaintModifiers` | class | `SpawnModifiers` | 1 |  |
| `Path` | class | `Path<Node, Path>` | 14 | [Forest](../world/forest.md) |
| `Path<TNode, TPath>` | class | `IAStarConnection<TNode, TPath>` | 7 | [Forest](../world/forest.md) |
| `PerChunkForestSpawner` | class | `MonoBehaviour` | 0 | [Forest](../world/forest.md) |
| `PointEdge` | struct |  | 7 |  |
| `PointNormal` | struct |  | 11 |  |
| `RectExtensions` | static class |  | 1 |  |
| `RiverAudio` | class | `MonoBehaviour` | 1 |  |
| `RiverCenterFill` | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| `RiverCollision` | class | `MonoBehaviour`, `IForestGeneration` | 0 |  |
| `RiverDecorationArc` | class | `IRiverDecorationSegment` | 6 |  |
| `RiverDecorationLine` | class | `IRiverDecorationSegment` | 6 |  |
| `RiverEdgeFill` | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| `RiverEncounters` | class | `MonoBehaviour`, `IForestGeneration` | 1 |  |
| `RiverGCoreInstruction` | class | `Instruction` | 3 |  |
| `RiverGeneration` | class | `ICacheable` | 12 |  |
| `RiverGenerator` | class | `MonoBehaviour`, `ISplatPainter` | 11 | [Forest](../world/forest.md) |
| `RiverIntersections` | class |  | 2 |  |
| `RiverIntersections.Intersection` | class |  | 4 |  |
| `RiverMeshTest` | class | `MonoBehaviour`, `IRiverVisual` | 1 |  |
| `RiverNode` | class | `Node<RiverNode, RiverPath>` | 19 |  |
| `RiverPath` | class | `Path<RiverNode, RiverPath>` | 16 |  |
| `RiverPathType` | enum |  | 3 |  |
| `Space` | class |  | 11 | [Forest](../world/forest.md) |
| `SpaceType` | enum |  | 3 |  |
| `SpawnModifiers` | class |  | 5 |  |
| `SpawnParameters` | struct |  | 7 |  |
| `SplatData` | struct |  | 11 |  |
| `SplatPainter` | class | `MonoBehaviour`, `ISplatPainter` | 1 |  |
| `SplatPaintSet` | class | `FillSet` | 2 |  |
| `SplatPaintSet.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SplatPaintSet>` | 0 |  |
| `SplineInstruction` | class | `Instruction` | 3 | [Forest](../world/forest.md) |
| `Waterfall` | class |  | 8 |  |
| `WaterfallEffect` | class | `PooledObject` | 3 |  |
| `WaterfallEffectGenerator` | class | `MonoBehaviour`, `IRiverVisual` | 1 | [Forest](../world/forest.md) |

## Alta.Loot

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Category` | class | `GeneralValue` | 2 |  |
| `Category.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<Category>` | 0 |  |
| `DebugPackage` | class | `ScriptableObject` | 1 |  |
| `DebugPackage.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Debug.ScriptableObject<DebugPackage>` | 0 |  |
| `DebugPackage.PrefabQuantity` | class |  | 4 |  |
| `DebugPackageManager` | class | `MonoBehaviour` | 0 |  |
| `GeneratedLoot` | class | `DockArray`, `ISavable<GeneratedLootSaveData>`, `ISavableSave<GeneratedLootSaveData>`, +1 more | 2 |  |
| `GeneratedLootSaveData` | internal class | `NewSaveData<GeneratedLoot, GeneratedLootSaveData>` | 3 |  |
| `GeneratedLootSaveData1` | internal class | `OldSaveData` | 4 |  |
| `LootHelper` | static class |  | 1 |  |
| `LootModule` | class | `NetworkEntityBehaviour`, `ISavable<LootModuleSaveData>`, `ISavableSave<LootModuleSaveData>`, +1 more | 3 | [Loot](../world/loot.md#lootmodule): `Alta.Loot.LootModule`, a `NetworkEntityBehaviour` on containers. |
| `LootModuleSaveData` | internal class | `NewSaveData<LootModule, LootModuleSaveData>` | 6 |  |
| `LootModuleSaveData1` | internal class | `OldSaveData` | 6 |  |
| `LootModuleSaveData2` | internal class | `OldSaveData` | 6 |  |
| `LootModuleSaveData3` | internal class | `OldSaveData` | 7 |  |
| `LootModuleSaveData4` | internal class | `OldSaveData` | 8 |  |
| `LootTable` | class | `GeneralValue` | 3 |  |
| `LootTable.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<LootTable>` | 0 |  |
| `LootTable.Entry` | class |  | 4 |  |
| `LootTable.FestivityList` | class |  | 2 |  |
| `LootTable.RarityList` | class |  | 3 |  |
| `Origin` | class | `GeneralValue` | 2 |  |
| `Origin.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<Origin>` | 0 |  |
| `OriginSingleValue` | class | `SingleValue<Origin>` | 2 |  |
| `PackageManager` | static class |  | 2 |  |
| `PresetLootModule` | class | `NetworkEntityBehaviour`, `ISavable<PresetLootModuleSaveData>`, `ISavableSave<PresetLootModuleSaveData>`, +1 more | 2 |  |
| `PresetLootModuleSaveData` | class | `NewSaveData<PresetLootModule, PresetLootModuleSaveData>` | 2 |  |
| `PresetLootSet` | class | `HashedGeneralValue<PresetLootSet>` | 1 |  |
| `PresetLootSet.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PresetLootSet>` | 0 |  |
| `PresetLootSet.Entry` | class |  | 3 |  |
| `Rarity` | class | `GeneralValue` | 3 |  |
| `Rarity.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<Rarity>` | 0 |  |

## Alta.PAGaC

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ApplyGenerationRule` | class | `GenerationStep` | 1 |  |
| `BuildingRooms` | class | `GenerationStep` | 4 |  |
| `BuildingRooms.NodeRange` | class |  | 3 |  |
| `Constructor` | class |  | 4 |  |
| `Decay` | class | `GenerationStep` | 1 |  |
| `GenerationBase` | class | `MonoBehaviour` | 6 |  |
| `GenerationRule` | class | `RuleBase`, `ISerializationCallbackReceiver` | 5 |  |
| `GenerationRule.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.PAGaC.ScriptableObject<GenerationRule>` | 0 |  |
| `GenerationRule.Step` | enum |  | 3 |  |
| `GenerationStep` | abstract class | `MonoBehaviour` | 1 |  |
| `Generator` | class |  | 8 |  |
| `LockMode` | enum |  | 5 |  |
| `Node` | class |  | 6 |  |
| `NodeCollection` | class |  | 15 |  |
| `NodeExtensions` | static class |  | 1 |  |
| `OptionSet` | class | `GeneralValue` | 3 |  |
| `OptionSetChance` | class |  | 2 |  |
| `Part` | class | `GeneralValue` | 5 |  |
| `PartChance` | class |  | 2 |  |
| `Rule` | class | `RuleBase`, `ISerializationCallbackReceiver` | 6 |  |
| `Rule.RotationOverlap` | enum |  | 5 |  |
| `RuleBase` | abstract class | `GeneralValue` | 6 |  |
| `RuleOptionSet` | class | `GeneralValue` | 4 |  |
| `RuleOptionSetChance` | class |  | 2 |  |
| `Tag` | class | `HashedGeneralValue<Tag>` | 1 |  |
| `Test` | class | `GeneralValue`, `ISerializationCallbackReceiver` | 6 |  |

## Alta.Populations

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AttributeImpact` | class |  | 1 |  |
| `BasicEcosystem` | class | `NetworkEntityBehaviour` | 3 | [Populations and spawners](../world/populations.md) |
| `BasicPopulation` | class |  | 15 | [Populations and spawners](../world/populations.md) |
| `BasicPopulation.PopulationEventHandler` | delegate |  | 0 |  |
| `BasicPopulationFolder` | class | `NetworkEntityBehaviour`, `IPopulationFolder`, `ISavable<BasicPopulationFolderSaveData>`, +2 more | 9 |  |
| `BasicPopulationFolderSaveData` | class | `NewSaveData<BasicPopulationFolder, BasicPopulationFolderSaveData>` | 4 |  |
| `BasicPopulationItem` | class | `MonoBehaviour`, `IPopulationItem` | 7 |  |
| `BasicPopulationItem.PopulationItemEventHandler` | delegate |  | 0 |  |
| `BasicPopulationManager` | class | `IPopulationManager` | 2 | [Populations and spawners](../world/populations.md) |
| `BoundsPopulationItem` | class | `PopulationItem` | 2 |  |
| `CavePopulationSpawnInformation` | class | `PopulationSpawnInformation` | 3 |  |
| `CircularSpawnPointGenerator` | class | `SpawnAreaBase` | 1 | [Populations and spawners](../world/populations.md) |
| `DayNightOnlyTimerDefinition` | class | `PopulationTimerDefinition` | 4 | [Populations and spawners](../world/populations.md) |
| `Ecosystem` | class | `NetworkEntityBehaviour`, `ISpawnSystem`, `ISavable<EcosystemSaveData>`, +2 more | 7 | [Populations and spawners](../world/populations.md): A chunk's (or cave layer's) set of populations, with spawn points worked out from the ground. |
| `Ecosystem.PopulationApplication` | class |  | 4 |  |
| `EcosystemSaveData` | class | `NewSaveData<Ecosystem, EcosystemSaveData>` | 1 |  |
| `EcosystemSaveData.Entry` | class |  | 3 |  |
| `ElementDestroy` | delegate |  | 0 |  |
| `FrequencyTimerDefinition` | class | `PopulationTimerDefinition` | 4 | [Populations and spawners](../world/populations.md) |
| `GlobalPopulationDefinition` | class | `HashedGeneralValue<GlobalPopulationDefinition>` | 8 | [Arguments and results](../console-and-utilities/arguments-and-results.md), [Populations and spawners](../world/populations.md) |
| `GlobalPopulationDefinition.PopulationInfo` | class |  | 5 |  |
| `GlobalPopulationsManager` | class | `NetworkEntityBehaviour`, `ISavable<GlobalPopulationsManagerSaveData>`, `ISavableSave<GlobalPopulationsManagerSaveData>`, +1 more | 1 | [Populations and spawners](../world/populations.md) |
| `GlobalPopulationsManagerSaveData` | class | `NewSaveData<GlobalPopulationsManager, GlobalPopulationsManagerSaveData>` | 2 |  |
| `IPointNormalEvaluator` | interface |  | 1 |  |
| `IPopulationFolder` | interface |  | 8 |  |
| `IPopulationFolderSaveDataBase` | interface |  | 6 |  |
| `IPopulationItem` | interface |  | 1 |  |
| `IPopulationManager` | interface |  | 1 |  |
| `IPopulationRemovalMethod` | interface |  | 1 | [Populations and spawners](../world/populations.md): A component on a spawned thing that tells its population when the thing should stop counting. |
| `ISpawnSystem` | interface |  | 3 |  |
| `ObjectHistory` | class | `MonoBehaviour` | 1 |  |
| `ObjectHistory.ObjectTrackingSettings` | class |  | 5 |  |
| `PointsPopulationValue` | class | `PopulationSpawnInformation` | 7 |  |
| `PopulationAction` | enum |  | 4 |  |
| `PopulationAnalytics` | static class |  | 2 | [Populations and spawners](../world/populations.md): Sends population records to analytics (Alta's API is gone). |
| `PopulationDefinition` | class | `HashedGeneralValue<PopulationDefinition>` | 20 | [Populations and spawners](../world/populations.md#populationdefinition), [Arguments and results](../console-and-utilities/arguments-and-results.md): `Alta.Populations.PopulationDefinition`, a `HashedGeneralValue` asset. |
| `PopulationDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<PopulationDefinition>` | 0 |  |
| `PopulationDefinitionManager` | class | `MonoBehaviour`, `ISavable<PopulationDefinitionManagerData>`, `ISavableSave<PopulationDefinitionManagerData>`, +1 more | 4 | [Populations and spawners](../world/populations.md): Saved per-definition overrides of the respawn time. |
| `PopulationDefinitionManagerData` | class | `NewSaveData<PopulationDefinitionManager, PopulationDefinitionManagerData>` | 2 |  |
| `PopulationDelegate` | delegate |  | 0 |  |
| `PopulationEvent` | class | `AltaEvent<PopulationSample, PopulationUnityEvent>` | 0 |  |
| `PopulationEventData` | class |  | 6 | [Console events](../console-and-utilities/console-events.md) |
| `PopulationFolder` | class | `PopulationFolder<PopulationFolder, PopulationFolderSaveData>` | 0 | [Populations and spawners](../world/populations.md) |
| `PopulationFolder<TThis, TData>` | class | `PopulationFolderBase`, `ISavable<TData>`, `ISavableSave<TData>`, +1 more | 0 | [Populations and spawners](../world/populations.md) |
| `PopulationFolderBase` | class | `NetworkEntityBehaviour` | 6 | [Populations and spawners](../world/populations.md) |
| `PopulationFolderSaveData` | class | `NewSaveData<PopulationFolder, PopulationFolderSaveData>`, `IPopulationFolderSaveDataBase` | 12 |  |
| `PopulationFolderSaveData1` | class | `OldSaveData` | 7 |  |
| `PopulationItem` | class | `MonoBehaviour`, `IPopulationItem` | 5 | [Spawning and despawning](../creatures/spawning-and-despawning.md#populationitem), [Populations and spawners](../world/populations.md): A component the population adds to everything it spawns. |
| `PopulationItemSpawnHandler` | delegate |  | 0 | [Populations and spawners](../world/populations.md) |
| `PopulationRaycast` | class | `HashedGeneralValue<PopulationRaycast>` | 1 |  |
| `PopulationRaycast.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Populations.ScriptableObject<PopulationRaycast>` | 0 |  |
| `PopulationSample` | class |  | 26 | [Spawning and despawning](../creatures/spawning-and-despawning.md#populationsample), [Populations and spawners](../world/populations.md#populationsample): One population of one `PopulationDefinition` in one chunk: a count, a maximum, and the entities it has spawned. |
| `PopulationSaveDataChild` | class |  | 2 |  |
| `PopulationSetup` | class | `HashedGeneralValue<PopulationSetup>`, `IFillSet` | 6 |  |
| `PopulationSetup.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Populations.ScriptableObject<PopulationSetup>` | 0 |  |
| `PopulationSpawnArea` | class | `PopulationFolder<PopulationSpawnArea, PopulationSpawnAreaSaveData>`, `ISpawnSystem` | 9 | [Populations and spawners](../world/populations.md#populationspawnarea): `Alta.Populations.PopulationSpawnArea`, a `PopulationFolder` entity behaviour. |
| `PopulationSpawnAreaSaveData` | class | `NewSaveData<PopulationSpawnArea, PopulationSpawnAreaSaveData>`, `IPopulationFolderSaveDataBase` | 15 |  |
| `PopulationSpawnAreaSaveData1` | class | `OldSaveData` | 10 |  |
| `PopulationSpawnInformation` | abstract class |  | 7 | [Populations and spawners](../world/populations.md): Where a population can spawn: `PointsPopulationValue` (a list of points), `SimplePopulationValue` (asks an `ISpawnPositions`), `CavePopulationSpawnInformation`. |
| `PopulationTimerDefinition` | abstract class | `ScriptableObject` | 4 | [Populations and spawners](../world/populations.md) |
| `PopulationUnityEvent` | class | `UnityEvent<PopulationSample>` | 0 |  |
| `RadialPopulationArea` | class | `MonoBehaviour`, `IPointNormalEvaluator` | 1 | [Populations and spawners](../world/populations.md) |
| `RadialPopulationItem` | class | `PopulationItem` | 2 |  |
| `SimplePopulationValue` | class | `PopulationSpawnInformation` | 4 |  |
| `SpawnAreaBase` | abstract class | `MonoBehaviour` | 1 | [Populations and spawners](../world/populations.md) |
| `SpawnAreaDisplay` | class | `MapChunkDisplay` | 3 |  |
| `SpawnedElement` | class |  | 4 |  |
| `SpawnPoint` | class |  | 6 | [Populations and spawners](../world/populations.md): One place, with `Position`, `Rotation` and `IsFree`. |
| `SpawnPointsDisplay` | class | `MapChunkDisplay` | 2 |  |
| `SpawnRate` | class | `GeneralValue` | 5 | [Populations and spawners](../world/populations.md) |
| `SpawnRate.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Populations.ScriptableObject<SpawnRate>` | 0 |  |
