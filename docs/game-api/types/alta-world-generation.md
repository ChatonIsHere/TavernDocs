---
title: World generation
description: "Types in Alta.Caves, Alta.Forests, Alta.Populations, Alta.Loot and Alta.PAGaC."
sidebar_position: 4
---

# World generation

Types in Alta.Caves, Alta.Forests, Alta.Populations, Alta.Loot and Alta.PAGaC. 339 types, 74 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Caves

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Biome`](/game-api/types/alta-world-generation/biome) | class | `HashedGeneralValue<Biome>` | 5 | [Caves](../world/caves.md) |
| [`Biome.Create`](/game-api/types/alta-world-generation/biome-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<Biome>` | 0 |  |
| [`BiomeDoubleValue`](/game-api/types/alta-world-generation/biomedoublevalue) | class | `DoubleValue<Biome>` | 0 |  |
| [`BiomeResources`](/game-api/types/alta-world-generation/biomeresources) | static class |  | 11 |  |
| [`BiomeSerializer`](/game-api/types/alta-world-generation/biomeserializer) | static class |  | 1 |  |
| [`BiomeSettings`](/game-api/types/alta-world-generation/biomesettings) | class | `CaveSettings<BiomeSettings>` | 4 | [Caves](../world/caves.md) |
| [`BiomeSettings.Create`](/game-api/types/alta-world-generation/biomesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Settings.ScriptableObject<BiomeSettings>` | 0 |  |
| [`BiomeSingleValue`](/game-api/types/alta-world-generation/biomesinglevalue) | class | `SingleValue<Biome>` | 2 |  |
| [`CaveBiomeGenerator`](/game-api/types/alta-world-generation/cavebiomegenerator) | static class |  | 3 | [Caves](../world/caves.md) |
| [`CaveGeneratingBiome`](/game-api/types/alta-world-generation/cavegeneratingbiome) | class | `GeneratingBiome` | 3 |  |
| [`CaveLayerManager`](/game-api/types/alta-world-generation/cavelayermanager) | class | `NetworkEntityBehaviour`, `ISavable<CaveLayerManagerSaveData>`, `ISavableSave<CaveLayerManagerSaveData>`, +1 more | 14 | [Caves](../world/caves.md#cavelayermanager): `Alta.Caves.CaveLayerManager`, a scene `NetworkEntityBehaviour`. `static CaveLayerManager Instance`. Mostly server. |
| [`CaveLayerManagerSaveData`](/game-api/types/alta-world-generation/cavelayermanagersavedata) | internal class | `NewSaveData<CaveLayerManager, CaveLayerManagerSaveData>` | 6 |  |
| [`CaveLayerManagerSaveData3`](/game-api/types/alta-world-generation/cavelayermanagersavedata3) | internal class | `OldSaveData` | 4 |  |
| [`CaveLayerManagerSaveDataOld`](/game-api/types/alta-world-generation/cavelayermanagersavedataold) | internal class | `OldSaveData` | 2 |  |
| [`CaveLayerManagerSaveDataOld2`](/game-api/types/alta-world-generation/cavelayermanagersavedataold2) | internal class | `OldSaveData` | 3 |  |
| [`CaveSettings<T>`](/game-api/types/alta-world-generation/cavesettings-t) | abstract class | `GeneralValue` | 1 | [Caves](../world/caves.md) |
| [`CaveTeleportConnection`](/game-api/types/alta-world-generation/caveteleportconnection) | class |  | 13 | [Caves](../world/caves.md) |
| [`CaveTeleporter`](/game-api/types/alta-world-generation/caveteleporter) | class | `NetworkEntityBehaviour`, `ISavable<CaveTeleporterData>`, `ISavableSave<CaveTeleporterData>`, +1 more | 11 | A fuelled teleporter in the caves that sends a player to another layer (the surface by default) through `CaveTeleporterManager`. Its layer is saved and synced; the teleport runs on the server. |
| [`CaveTeleporterData`](/game-api/types/alta-world-generation/caveteleporterdata) | class | `NewSaveData<CaveTeleporter, CaveTeleporterData>` | 1 |  |
| [`CaveTeleporterManager`](/game-api/types/alta-world-generation/caveteleportermanager) | class | `NetworkEntityBehaviour`, `ISavable<CaveTeleporterManagerData>`, `ISavableSave<CaveTeleporterManagerData>`, +1 more | 12 | [Caves](../world/caves.md) |
| [`CaveTeleporterManagerData`](/game-api/types/alta-world-generation/caveteleportermanagerdata) | class | `NewSaveData<CaveTeleporterManager, CaveTeleporterManagerData>` | 1 |  |
| [`CaveTeleporterPip`](/game-api/types/alta-world-generation/caveteleporterpip) | class | `MonoBehaviour` | 2 |  |
| [`CaveTeleporterProxy`](/game-api/types/alta-world-generation/caveteleporterproxy) | class |  | 8 |  |
| [`CaveTeleporterProxyData`](/game-api/types/alta-world-generation/caveteleporterproxydata) | class |  | 4 | Light record of one cave teleporter: its cave layer, position and fuel. Used by `CaveTeleportConnection` and `CaveTeleporterManager`. |
| [`CaveTeleportSettings`](/game-api/types/alta-world-generation/caveteleportsettings) | class | `GlobalSettings<CaveTeleportSettings>` | 10 | [Caves](../world/caves.md) |
| [`ChunkThread`](/game-api/types/alta-world-generation/chunkthread) | class |  | 5 | [Caves](../world/caves.md) |
| [`ConstrainedSpawnerDisplay`](/game-api/types/alta-world-generation/constrainedspawnerdisplay) | class | `MapChunkDisplay` | 2 |  |
| [`Distribution`](/game-api/types/alta-world-generation/distribution) | class | `Distribution<Distribution, UnityEngine.Object, Distribution.Item, Distribution.FestivityGroup>` | 2 | [Caves](../world/caves.md): A weighted list (of prefabs, materials) whose weights depend on biome attributes. `GetRandomAs<T>(AttributeSet)`. Populations and material parts use it. |
| [`Distribution.Create`](/game-api/types/alta-world-generation/distribution-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<Distribution>` | 0 |  |
| [`Distribution.FestivityGroup`](/game-api/types/alta-world-generation/distribution-festivitygroup) | class | `BaseFestivityGroup` | 0 |  |
| [`Distribution.Item`](/game-api/types/alta-world-generation/distribution-item) | class | `BaseItem` | 0 |  |
| [`Distribution<TThis, T, TItem, TFestivityGroup>`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup) | class | `HashedGeneralValue<TThis>`, `IDistribution<T>` | 10 | [Caves](../world/caves.md): A weighted list (of prefabs, materials) whose weights depend on biome attributes. `GetRandomAs<T>(AttributeSet)`. Populations and material parts use it. |
| [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseFestivityGroup`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-basefestivitygroup) | class |  | 3 |  |
| [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-baseitem) | class | `IDistributionItem<T>` | 3 |  |
| [`DockedDissolver`](/game-api/types/alta-world-generation/dockeddissolver) | class | `MonoBehaviour` | 0 |  |
| [`Element`](/game-api/types/alta-world-generation/element) | class | `GeneralValue`, `ISerializationCallbackReceiver` | 3 | A cave generation element asset: a map chunk display prefab chosen by how well it suits a set of attributes, plus named variables. |
| [`Element.Create`](/game-api/types/alta-world-generation/element-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.ScriptableObject<Element>` | 0 |  |
| [`Element.SerializedVariable`](/game-api/types/alta-world-generation/element-serializedvariable) | class |  | 2 |  |
| [`ElementDoubleValue`](/game-api/types/alta-world-generation/elementdoublevalue) | class | `DoubleValue<Element>` | 0 |  |
| [`ElementSingleValue`](/game-api/types/alta-world-generation/elementsinglevalue) | class | `SingleValue<Element>` | 0 |  |
| [`EveryXLayersConstrain`](/game-api/types/alta-world-generation/everyxlayersconstrain) | class | `SpawnConstrain` | 1 |  |
| [`GameObjectDistribution`](/game-api/types/alta-world-generation/gameobjectdistribution) | class | `Distribution<GameObjectDistribution, GameObject, GameObjectDistribution.Item, GameObjectDistribution.FestivityGroup>` | 1 | A weighted distribution of GameObjects used by cave generation, with festivity groups. A `Distribution` asset. |
| [`GameObjectDistribution.Create`](/game-api/types/alta-world-generation/gameobjectdistribution-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<GameObjectDistribution>` | 0 |  |
| [`GameObjectDistribution.FestivityGroup`](/game-api/types/alta-world-generation/gameobjectdistribution-festivitygroup) | class | `BaseFestivityGroup` | 0 |  |
| [`GameObjectDistribution.Item`](/game-api/types/alta-world-generation/gameobjectdistribution-item) | class | `BaseItem` | 0 |  |
| [`GeneralSettings`](/game-api/types/alta-world-generation/generalsettings) | class | `CaveSettings<GeneralSettings>` | 6 | [Caves](../world/caves.md) |
| [`GeneralSettings.Create`](/game-api/types/alta-world-generation/generalsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Settings.ScriptableObject<GeneralSettings>` | 0 |  |
| [`GeneratedBiome`](/game-api/types/alta-world-generation/generatedbiome) | class |  | 11 | [Caves](../world/caves.md) |
| [`GeneratingBiome`](/game-api/types/alta-world-generation/generatingbiome) | class |  | 3 |  |
| [`GeneratingBiome.Range`](/game-api/types/alta-world-generation/generatingbiome-range) | class |  | 4 |  |
| [`GenerationBase`](/game-api/types/alta-world-generation/generationbase) | class | `NetworkEntityBehaviour`, `IGenerator` | 26 | Generates one procedural cave layer from a seed: splits it into map chunks and runs each generation plugin on them, spread over frames. The server picks the seed and sends it so clients build the same cave. |
| [`GenerationStage`](/game-api/types/alta-world-generation/generationstage) | enum |  | 9 |  |
| [`IBiomeValues`](/game-api/types/alta-world-generation/ibiomevalues) | interface |  | 3 |  |
| [`IDistribution<out T>`](/game-api/types/alta-world-generation/idistribution-outt) | interface |  | 2 |  |
| [`IDistributionItem<out T>`](/game-api/types/alta-world-generation/idistributionitem-outt) | interface |  | 2 |  |
| [`IDistributionValue`](/game-api/types/alta-world-generation/idistributionvalue) | interface |  | 1 |  |
| [`IGenerator`](/game-api/types/alta-world-generation/igenerator) | interface |  | 15 | What a cave layer's generator exposes to its plugins while building the layer: seed, noise, entrance, chunk size and the plugin list. `GenerationBase` implements it. |
| [`LevelSelectCaveTeleporter`](/game-api/types/alta-world-generation/levelselectcaveteleporter) | class | `CaveTeleporter` | 3 | [Caves](../world/caves.md) |
| [`LevelSelector`](/game-api/types/alta-world-generation/levelselector) | class | `NetworkEntityBehaviour`, `INetworkSerialized`, `IBuildRendererPostBake`, +1 more | 8 |  |
| [`MapChunk`](/game-api/types/alta-world-generation/mapchunk) | class | `MonoBehaviour` | 15 | [Caves](../world/caves.md) |
| [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay) | abstract class | `MonoBehaviour` | 4 | Base for a component that draws one cave generation plugin's output in one map chunk. Subclasses implement `Initialize` and the `Render` coroutine. |
| [`MapChunkLayer`](/game-api/types/alta-world-generation/mapchunklayer) | class | `IDisposable` | 12 | [Caves](../world/caves.md) |
| [`MapChunkLayer.Value`](/game-api/types/alta-world-generation/mapchunklayer-value) | struct |  | 4 |  |
| [`MarchingCubesChunkDisplay`](/game-api/types/alta-world-generation/marchingcubeschunkdisplay) | class | `MapChunkDisplay` | 2 |  |
| [`MarchingCubesPlugin`](/game-api/types/alta-world-generation/marchingcubesplugin) | class | `Plugin` | 2 |  |
| [`MarchingCubesPlugin.Create`](/game-api/types/alta-world-generation/marchingcubesplugin-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Plugins.ScriptableObject<MarchingCubesPlugin>` | 0 |  |
| [`MarchingCubesPlugin.GeneratedMesh`](/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh) | class |  | 3 |  |
| [`Plugin`](/game-api/types/alta-world-generation/plugin) | class | `GeneralValue` | 13 | [Caves](../world/caves.md) |
| [`PluginInstance`](/game-api/types/alta-world-generation/plugininstance) | class |  | 9 | [Caves](../world/caves.md) |
| [`PluginList`](/game-api/types/alta-world-generation/pluginlist) | class | `ScriptableObject` | 1 |  |
| [`PluginList.Create`](/game-api/types/alta-world-generation/pluginlist-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.ScriptableObject<PluginList>` | 0 |  |
| [`PregeneratedCave`](/game-api/types/alta-world-generation/pregeneratedcave) | class | `ScriptableObject` | 3 | [Caves](../world/caves.md): Fixed layers in an asset. |
| [`PregeneratedCave.Layer`](/game-api/types/alta-world-generation/pregeneratedcave-layer) | class |  | 1 |  |
| [`RoomFixPlugin`](/game-api/types/alta-world-generation/roomfixplugin) | class | `Plugin` | 15 | Cave generation plugin that lines the cave up so its biggest room sits behind the entrance, places the exit near the second biggest room, and shapes the hole between cave layers. |
| [`RoomFixPlugin.Create`](/game-api/types/alta-world-generation/roomfixplugin-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Plugins.ScriptableObject<RoomFixPlugin>` | 0 |  |
| [`RoomFixPlugin.Tunnel`](/game-api/types/alta-world-generation/roomfixplugin-tunnel) | class |  | 6 |  |
| [`RoomFixPluginInstance`](/game-api/types/alta-world-generation/roomfixplugininstance) | class | `PluginInstance` | 3 |  |
| [`Section`](/game-api/types/alta-world-generation/section) | class | `GeneralValue` | 3 |  |
| [`Section.Create`](/game-api/types/alta-world-generation/section-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.ScriptableObject<Section>` | 0 |  |
| [`SerializedGeneratedBiome`](/game-api/types/alta-world-generation/serializedgeneratedbiome) | class |  | 1 |  |
| [`SpawnConstrain`](/game-api/types/alta-world-generation/spawnconstrain) | abstract class | `ScriptableObject` | 1 |  |
| [`StreamingSettings`](/game-api/types/alta-world-generation/streamingsettings) | class | `CaveSettings<StreamingSettings>` | 10 | [Caves](../world/caves.md) |
| [`StreamingSettings.Create`](/game-api/types/alta-world-generation/streamingsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Caves.Settings.ScriptableObject<StreamingSettings>` | 0 |  |
| [`StreamingSettings.SpecialLayer`](/game-api/types/alta-world-generation/streamingsettings-speciallayer) | class |  | 2 |  |
| [`TeleportCostStructure`](/game-api/types/alta-world-generation/teleportcoststructure) | class | `ScriptableObject` | 1 |  |
| [`TeleportEffectArgument`](/game-api/types/alta-world-generation/teleporteffectargument) | struct |  | 4 |  |

## Alta.Caves.Displays

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BasicObjectDisplay`](/game-api/types/alta-world-generation/basicobjectdisplay) | abstract class | `MapChunkDisplay` | 1 | Base for cave chunk displays that place objects at each non-zero cell of a layer, either as network prefabs or as static unnetworked pieces. |
| [`ClusterGenerator`](/game-api/types/alta-world-generation/clustergenerator) | class | `GeneratedNetworkEntityBehaviour` | 0 |  |
| [`ClusterSettings`](/game-api/types/alta-world-generation/clustersettings) | class |  | 15 | How a cluster generator scatters child objects (such as crystals or mushrooms) around a point in a cave: how many, how they are rotated, offset and scaled, and whether they snap down onto a surface. |
| [`EmergePoint`](/game-api/types/alta-world-generation/emergepoint) | class | `MonoBehaviour` | 0 |  |
| [`GameObjectDisplay`](/game-api/types/alta-world-generation/gameobjectdisplay) | class | `BasicObjectDisplay` | 1 |  |
| [`PixelMapChunkDisplay`](/game-api/types/alta-world-generation/pixelmapchunkdisplay) | class | `MapChunkDisplay` | 2 |  |
| [`PolygonChunkDisplay`](/game-api/types/alta-world-generation/polygonchunkdisplay) | class | `MapChunkDisplay` | 3 |  |
| [`StaticClusterGenerator`](/game-api/types/alta-world-generation/staticclustergenerator) | class | `MonoBehaviour`, `IStaticGeneration` | 0 |  |
| [`WallAlignedDisplay`](/game-api/types/alta-world-generation/wallaligneddisplay) | class | `BasicObjectDisplay` | 1 |  |

## Alta.Caves.PluginParts

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApplyElement`](/game-api/types/alta-world-generation/applyelement) | class | `MapGeneratorPart` | 3 |  |
| [`ApplyElementInstance`](/game-api/types/alta-world-generation/applyelementinstance) | class | `MapGeneratorPartInstance<ApplyElement>` | 2 |  |
| [`BlobEdge`](/game-api/types/alta-world-generation/blobedge) | class | `MapGeneratorPart` | 12 | A cave map generator part that stamps a blob (a centre circle plus smaller circles around it) into one layer of the cave map, combined with the existing values by an operation. |
| [`BlobEdgeInstance`](/game-api/types/alta-world-generation/blobedgeinstance) | class | `MapGeneratorPartInstance<BlobEdge>` | 2 |  |
| [`Blur`](/game-api/types/alta-world-generation/blur) | class | `MapGeneratorPart` | 2 |  |
| [`BlurInstance`](/game-api/types/alta-world-generation/blurinstance) | class | `MapGeneratorPartInstance<Blur>` | 2 |  |
| [`CellularAutomata`](/game-api/types/alta-world-generation/cellularautomata) | class | `MapGeneratorPart` | 6 |  |
| [`CellularAutomataInstance`](/game-api/types/alta-world-generation/cellularautomatainstance) | class | `MapGeneratorPartInstance<CellularAutomata>` | 2 |  |
| [`Circle`](/game-api/types/alta-world-generation/circle) | class | `MapGeneratorPart` | 6 |  |
| [`CircleInstance`](/game-api/types/alta-world-generation/circleinstance) | class | `MapGeneratorPartInstance<Circle>` | 2 |  |
| [`CopyPart`](/game-api/types/alta-world-generation/copypart) | class | `MapGeneratorPart` | 2 |  |
| [`CopyPartInstance`](/game-api/types/alta-world-generation/copypartinstance) | class | `MapGeneratorPartInstance<CopyPart>` | 2 |  |
| [`Curve`](/game-api/types/alta-world-generation/curve) | class | `MapGeneratorPart` | 2 |  |
| [`CurveInstance`](/game-api/types/alta-world-generation/curveinstance) | class | `MapGeneratorPartInstance<Curve>` | 2 |  |
| [`IPartInstance`](/game-api/types/alta-world-generation/ipartinstance) | interface |  | 1 | An instance of a cave generation plugin part that changes a map chunk. |
| [`LineDraw`](/game-api/types/alta-world-generation/linedraw) | static class |  | 2 |  |
| [`LogRange`](/game-api/types/alta-world-generation/logrange) | class | `MapGeneratorPart` | 1 |  |
| [`LogRangeInstance`](/game-api/types/alta-world-generation/lograngeinstance) | class | `MapGeneratorPartInstance<LogRange>` | 2 |  |
| [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart) | abstract class | `GeneralValue` | 4 | Base asset for one part of a cave generator plugin. It makes a `MapGeneratorPartInstance` for each plugin run. |
| [`MapGeneratorPartInstance<T>`](/game-api/types/alta-world-generation/mapgeneratorpartinstance-t) | abstract class | `IPartInstance` | 8 | Runtime instance of a `MapGeneratorPart` for one cave generator plugin run. It works out the target plugin layer and a seeded identifier, and subclasses change map chunk layers. |
| [`Mask`](/game-api/types/alta-world-generation/mask) | class | `MapGeneratorPart` | 5 |  |
| [`MaskInstance`](/game-api/types/alta-world-generation/maskinstance) | class | `MapGeneratorPartInstance<Mask>` | 2 |  |
| [`OperationPart`](/game-api/types/alta-world-generation/operationpart) | class | `MapGeneratorPart` | 4 |  |
| [`OperationPartInstance`](/game-api/types/alta-world-generation/operationpartinstance) | class | `MapGeneratorPartInstance<OperationPart>` | 2 |  |
| [`Point`](/game-api/types/alta-world-generation/point) | internal class |  | 3 |  |
| [`RandomNoise`](/game-api/types/alta-world-generation/randomnoise) | class | `MapGeneratorPart` | 6 | Cave generator part that fills a map layer with hashed random values, combined with the existing values using `OperationType`. |
| [`RandomNoiseInstance`](/game-api/types/alta-world-generation/randomnoiseinstance) | class | `MapGeneratorPartInstance<RandomNoise>` | 2 |  |
| [`RoofHole`](/game-api/types/alta-world-generation/roofhole) | class | `MapGeneratorPart` | 5 |  |
| [`RoofHoleInstance`](/game-api/types/alta-world-generation/roofholeinstance) | class | `MapGeneratorPartInstance<RoofHole>` | 2 |  |
| [`RoomFixes`](/game-api/types/alta-world-generation/roomfixes) | class | `MapGeneratorPart` | 9 | Cave map generator part that tidies open areas: fills rooms below a minimum size with wall, then joins the rest with corridors. Settings only; the work is done in `RoomFixesInstance`. |
| [`RoomFixes.Room`](/game-api/types/alta-world-generation/roomfixes-room) | class |  | 6 |  |
| [`RoomFixesInstance`](/game-api/types/alta-world-generation/roomfixesinstance) | class | `MapGeneratorPartInstance<RoomFixes>` | 2 |  |
| [`SimplexNoisePart`](/game-api/types/alta-world-generation/simplexnoisepart) | class | `MapGeneratorPart` | 4 |  |
| [`SimplexNoisePartInstance`](/game-api/types/alta-world-generation/simplexnoisepartinstance) | class | `MapGeneratorPartInstance<SimplexNoisePart>` | 2 |  |
| [`Stretch`](/game-api/types/alta-world-generation/stretch) | class | `MapGeneratorPart` | 9 | Cave map generator part that shapes a layer vertically from a height map, using a curve from floor (or roof) upward. Settings only; the work is done in `StretchInstance`. |
| [`StretchInstance`](/game-api/types/alta-world-generation/stretchinstance) | class | `MapGeneratorPartInstance<Stretch>` | 2 |  |

## Alta.Forests

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Array2dGenerationHelper`](/game-api/types/alta-world-generation/array2dgenerationhelper) | static class |  | 4 |  |
| [`Array2dGenerationHelper.ThreadRowsAction`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction) | delegate |  | 0 |  |
| [`Array2dGenerationHelper.ThreadRowsAction<T, TData>`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-t-tdata) | delegate |  | 0 |  |
| [`Array2dGenerationHelper.ThreadRowsAction<TContext, T, TData>`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-tcontext-t-tdata) | delegate |  | 0 |  |
| [`Array2dGenerationHelper.ThreadRowsAction<TContext>`](/game-api/types/alta-world-generation/array2dgenerationhelper-threadrowsaction-tcontext) | delegate |  | 0 |  |
| [`CliffFill`](/game-api/types/alta-world-generation/clifffill) | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| [`CliffFill.RaycastRequest`](/game-api/types/alta-world-generation/clifffill-raycastrequest) | struct |  | 2 |  |
| [`CutoutPathEdgeFill`](/game-api/types/alta-world-generation/cutoutpathedgefill) | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| [`CutoutPathModifier`](/game-api/types/alta-world-generation/cutoutpathmodifier) | class | `NodeMapModifier`, `ITerrainModifier` | 4 |  |
| [`Edge`](/game-api/types/alta-world-generation/edge) | class |  | 14 | [Forest](../world/forest.md) |
| [`EdgeType`](/game-api/types/alta-world-generation/edgetype) | enum |  | 3 |  |
| [`FillSet`](/game-api/types/alta-world-generation/fillset) | abstract class | `ScriptableObject`, `IFillSet` | 3 |  |
| [`ForestAttributeEvaluator`](/game-api/types/alta-world-generation/forestattributeevaluator) | class | `NodeMapModifier` | 1 |  |
| [`ForestBridges`](/game-api/types/alta-world-generation/forestbridges) | class | `MonoBehaviour`, `IForestGeneration` | 2 | [Forest](../world/forest.md) |
| [`ForestCliffEvaluator`](/game-api/types/alta-world-generation/forestcliffevaluator) | class | `NodeMapModifier` | 3 |  |
| [`ForestCliffEvaluator.CliffPoint`](/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint) | struct |  | 6 |  |
| [`ForestConnectivityIncreaser`](/game-api/types/alta-world-generation/forestconnectivityincreaser) | class | `NodeMapModifier` | 1 | [Forest](../world/forest.md) |
| [`ForestConverter`](/game-api/types/alta-world-generation/forestconverter) | class | `TypeConverter` | 2 |  |
| [`ForestEncounters`](/game-api/types/alta-world-generation/forestencounters) | class | `MonoBehaviour`, `IForestGeneration` | 1 | [Forest](../world/forest.md): Places encounters along the paths. |
| [`ForestFill`](/game-api/types/alta-world-generation/forestfill) | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| [`ForestFillCore`](/game-api/types/alta-world-generation/forestfillcore) | abstract class | `MonoBehaviour`, `IForestGeneration` | 8 | Base for a forest fill step that places static environment pieces (trees, rocks) in a location chunk during world generation. Subclasses do the placing in `GenerateInternal`. |
| [`ForestFillCore.Setup`](/game-api/types/alta-world-generation/forestfillcore-setup) | class |  | 4 | Per-row state handed to forest fill code: the forest layout, a seeded random and the spawn modifiers in use. |
| [`ForestFillSet`](/game-api/types/alta-world-generation/forestfillset) | class | `FillSet` | 1 |  |
| [`ForestFillSet.Create`](/game-api/types/alta-world-generation/forestfillset-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<ForestFillSet>` | 0 |  |
| [`ForestGCoreInstruction`](/game-api/types/alta-world-generation/forestgcoreinstruction) | class | `Instruction` | 7 | [Forest](../world/forest.md) |
| [`ForestGeneration`](/game-api/types/alta-world-generation/forestgeneration) | class | `ICacheable` | 42 | [Forest](../world/forest.md#forestgeneration): `Alta.Forests.ForestGeneration`, the layout. It's an `ICacheable`, so it's stored in the cache. |
| [`ForestGenerator`](/game-api/types/alta-world-generation/forestgenerator) | class | `NetworkEntityBehaviour`, `ISavable<ForestGeneratorSaveData>`, `ISavableSave<ForestGeneratorSaveData>`, +1 more | 23 | [Forest](../world/forest.md#forestgenerator), [Arguments and results](../console-and-utilities/arguments-and-results.md): `Alta.Forests.ForestGenerator`, a `NetworkEntityBehaviour` placed in the scene. One per forest; `ForestGenerator.All` lists them. |
| [`ForestGenerator.NearestInfo`](/game-api/types/alta-world-generation/forestgenerator-nearestinfo) | struct |  | 3 |  |
| [`ForestGeneratorSaveData`](/game-api/types/alta-world-generation/forestgeneratorsavedata) | class | `NewSaveData<ForestGenerator, ForestGeneratorSaveData>` | 1 |  |
| [`ForestPathAttributeLerper`](/game-api/types/alta-world-generation/forestpathattributelerper) | class | `NodeMapModifier` | 1 |  |
| [`ForestPopulationArea`](/game-api/types/alta-world-generation/forestpopulationarea) | class | `NetworkEntityBehaviour`, `IPointNormalEvaluator` | 1 | [Forest](../world/forest.md) |
| [`ForestPopulationCreator`](/game-api/types/alta-world-generation/forestpopulationcreator) | class | `MonoBehaviour` | 0 | [Forest](../world/forest.md) |
| [`ForestSpaceEvaluator`](/game-api/types/alta-world-generation/forestspaceevaluator) | class | `NodeMapModifier` | 1 |  |
| [`IFillSet`](/game-api/types/alta-world-generation/ifillset) | interface |  | 3 |  |
| [`IForestGeneration`](/game-api/types/alta-world-generation/iforestgeneration) | interface |  | 6 | [Forest](../world/forest.md): A forest part: `GenerateGlobal`, `GenerateStatic` (adds instructions), `GenerateDynamic`, `ClearStatic`, `ClearDynamic`. |
| [`IRiverDecorationSegment`](/game-api/types/alta-world-generation/iriverdecorationsegment) | interface |  | 5 | One piece of a river's path (a straight line or a bend) that the river generator places bank decorations along. |
| [`IRiverVisual`](/game-api/types/alta-world-generation/irivervisual) | interface |  | 1 |  |
| [`ISplatPainter`](/game-api/types/alta-world-generation/isplatpainter) | interface |  | 1 |  |
| [`ITerrainModifier`](/game-api/types/alta-world-generation/iterrainmodifier) | interface |  | 2 |  |
| [`LakeGenerator`](/game-api/types/alta-world-generation/lakegenerator) | class | `MonoBehaviour` | 0 | [Forest](../world/forest.md) |
| [`LandBridgeModifier`](/game-api/types/alta-world-generation/landbridgemodifier) | class | `NodeMapModifier` | 1 | [Forest](../world/forest.md) |
| [`Node`](/game-api/types/alta-world-generation/node) | class | `Node<Node, Path>` | 3 | [Forest](../world/forest.md) |
| [`Node<TNode, TPath>`](/game-api/types/alta-world-generation/node-tnode-tpath) | class | `IAStarNode<TNode, TPath>` | 15 | [Forest](../world/forest.md) |
| [`NodeMapModifier`](/game-api/types/alta-world-generation/nodemapmodifier) | abstract class | `MonoBehaviour` | 3 | Base for a component that changes the forest generator's node map before it is used. |
| [`PaintModifiers`](/game-api/types/alta-world-generation/paintmodifiers) | class | `SpawnModifiers` | 1 |  |
| [`Path`](/game-api/types/alta-world-generation/path) | class | `Path<Node, Path>` | 14 | [Forest](../world/forest.md) |
| [`Path<TNode, TPath>`](/game-api/types/alta-world-generation/path-tnode-tpath) | class | `IAStarConnection<TNode, TPath>` | 7 | [Forest](../world/forest.md) |
| [`PerChunkForestSpawner`](/game-api/types/alta-world-generation/perchunkforestspawner) | class | `MonoBehaviour` | 0 | [Forest](../world/forest.md) |
| [`PointEdge`](/game-api/types/alta-world-generation/pointedge) | struct |  | 7 | A 2D point in forest generation with its nearest path edge, worked out lazily and cached. |
| [`PointNormal`](/game-api/types/alta-world-generation/pointnormal) | struct |  | 11 | A point on the ground with its normal, plus cached info about the nearest forest edge and biome. Passed through forest spawning and spawn modifiers. |
| [`RectExtensions`](/game-api/types/alta-world-generation/rectextensions) | static class |  | 1 |  |
| [`RiverAudio`](/game-api/types/alta-world-generation/riveraudio) | class | `MonoBehaviour` | 1 |  |
| [`RiverCenterFill`](/game-api/types/alta-world-generation/rivercenterfill) | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| [`RiverCollision`](/game-api/types/alta-world-generation/rivercollision) | class | `MonoBehaviour`, `IForestGeneration` | 0 |  |
| [`RiverDecorationArc`](/game-api/types/alta-world-generation/riverdecorationarc) | class | `IRiverDecorationSegment` | 6 |  |
| [`RiverDecorationLine`](/game-api/types/alta-world-generation/riverdecorationline) | class | `IRiverDecorationSegment` | 6 |  |
| [`RiverEdgeFill`](/game-api/types/alta-world-generation/riveredgefill) | class | `ForestFillCore` | 0 | [Forest](../world/forest.md) |
| [`RiverEncounters`](/game-api/types/alta-world-generation/riverencounters) | class | `MonoBehaviour`, `IForestGeneration` | 1 |  |
| [`RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction) | class | `Instruction` | 3 |  |
| [`RiverGeneration`](/game-api/types/alta-world-generation/rivergeneration) | class | `ICacheable` | 12 | The river network for a forest: nodes, the overground paths and waterfalls. It can be cached and rebuilt from the cache. |
| [`RiverGenerator`](/game-api/types/alta-world-generation/rivergenerator) | class | `MonoBehaviour`, `ISplatPainter` | 11 | [Forest](../world/forest.md) |
| [`RiverIntersections`](/game-api/types/alta-world-generation/riverintersections) | class |  | 2 |  |
| [`RiverIntersections.Intersection`](/game-api/types/alta-world-generation/riverintersections-intersection) | class |  | 4 |  |
| [`RiverMeshTest`](/game-api/types/alta-world-generation/rivermeshtest) | class | `MonoBehaviour`, `IRiverVisual` | 1 |  |
| [`RiverNode`](/game-api/types/alta-world-generation/rivernode) | class | `Node<RiverNode, RiverPath>` | 19 | A point in the forest's river network. Water volume flows down its outgoing path, and its width comes from the volume. Used while generating rivers and their edge decorations. |
| [`RiverPath`](/game-api/types/alta-world-generation/riverpath) | class | `Path<RiverNode, RiverPath>` | 16 | A river segment between two `RiverNode`s in the forest generator, with its spline mesh, any waterfall and its neighbouring segments at each end. |
| [`RiverPathType`](/game-api/types/alta-world-generation/riverpathtype) | enum |  | 3 |  |
| [`Space`](/game-api/types/alta-world-generation/space) | class |  | 11 | [Forest](../world/forest.md) |
| [`SpaceType`](/game-api/types/alta-world-generation/spacetype) | enum |  | 3 |  |
| [`SpawnModifiers`](/game-api/types/alta-world-generation/spawnmodifiers) | class |  | 5 | Lists of modifiers that forest fill runs on a spawn candidate at each stage (point, point with normal, spawn parameters, spawned entity). Each can adjust the candidate and lower its score. |
| [`SpawnParameters`](/game-api/types/alta-world-generation/spawnparameters) | struct |  | 7 | Where and what to spawn during forest generation. The constructor fills the spawn data with location attributes: elevation, slope, distance from path and from the forest border. |
| [`SplatData`](/game-api/types/alta-world-generation/splatdata) | struct |  | 11 | Terrain texture blend for one point: two layer indices and how far to blend from the first to the second. Stored in a colour (red, green, blue). |
| [`SplatPainter`](/game-api/types/alta-world-generation/splatpainter) | class | `MonoBehaviour`, `ISplatPainter` | 1 |  |
| [`SplatPaintSet`](/game-api/types/alta-world-generation/splatpaintset) | class | `FillSet` | 2 |  |
| [`SplatPaintSet.Create`](/game-api/types/alta-world-generation/splatpaintset-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.ScriptableObject<SplatPaintSet>` | 0 |  |
| [`SplineInstruction`](/game-api/types/alta-world-generation/splineinstruction) | class | `Instruction` | 3 | [Forest](../world/forest.md) |
| [`Waterfall`](/game-api/types/alta-world-generation/waterfall) | class |  | 8 | A waterfall in river generation, from a top river node to a bottom one, with the river paths that pass through it. |
| [`WaterfallEffect`](/game-api/types/alta-world-generation/waterfalleffect) | class | `PooledObject` | 3 |  |
| [`WaterfallEffectGenerator`](/game-api/types/alta-world-generation/waterfalleffectgenerator) | class | `MonoBehaviour`, `IRiverVisual` | 1 | [Forest](../world/forest.md) |

## Alta.Loot

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Category`](/game-api/types/alta-world-generation/category) | class | `GeneralValue` | 2 |  |
| [`Category.Create`](/game-api/types/alta-world-generation/category-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<Category>` | 0 |  |
| [`DebugPackage`](/game-api/types/alta-world-generation/debugpackage) | class | `ScriptableObject` | 1 |  |
| [`DebugPackage.Create`](/game-api/types/alta-world-generation/debugpackage-create) | class | `AltaMenuItemBase.Assets.Create.Township.Debug.ScriptableObject<DebugPackage>` | 0 |  |
| [`DebugPackage.PrefabQuantity`](/game-api/types/alta-world-generation/debugpackage-prefabquantity) | class |  | 4 |  |
| [`DebugPackageManager`](/game-api/types/alta-world-generation/debugpackagemanager) | class | `MonoBehaviour` | 0 |  |
| [`GeneratedLoot`](/game-api/types/alta-world-generation/generatedloot) | class | `DockArray`, `ISavable<GeneratedLootSaveData>`, `ISavableSave<GeneratedLootSaveData>`, +1 more | 2 |  |
| [`GeneratedLootSaveData`](/game-api/types/alta-world-generation/generatedlootsavedata) | internal class | `NewSaveData<GeneratedLoot, GeneratedLootSaveData>` | 3 |  |
| [`GeneratedLootSaveData1`](/game-api/types/alta-world-generation/generatedlootsavedata1) | internal class | `OldSaveData` | 4 |  |
| [`LootHelper`](/game-api/types/alta-world-generation/loothelper) | static class |  | 1 |  |
| [`LootModule`](/game-api/types/alta-world-generation/lootmodule) | class | `NetworkEntityBehaviour`, `ISavable<LootModuleSaveData>`, `ISavableSave<LootModuleSaveData>`, +1 more | 3 | [Loot](../world/loot.md#lootmodule): `Alta.Loot.LootModule`, a `NetworkEntityBehaviour` on containers. |
| [`LootModuleSaveData`](/game-api/types/alta-world-generation/lootmodulesavedata) | internal class | `NewSaveData<LootModule, LootModuleSaveData>` | 6 |  |
| [`LootModuleSaveData1`](/game-api/types/alta-world-generation/lootmodulesavedata1) | internal class | `OldSaveData` | 6 |  |
| [`LootModuleSaveData2`](/game-api/types/alta-world-generation/lootmodulesavedata2) | internal class | `OldSaveData` | 6 |  |
| [`LootModuleSaveData3`](/game-api/types/alta-world-generation/lootmodulesavedata3) | internal class | `OldSaveData` | 7 |  |
| [`LootModuleSaveData4`](/game-api/types/alta-world-generation/lootmodulesavedata4) | internal class | `OldSaveData` | 8 |  |
| [`LootTable`](/game-api/types/alta-world-generation/loottable) | class | `GeneralValue` | 3 | A loot table asset: item entries grouped by rarity, with extra entries for festivals. `GetLoot` rolls an item for a dock. |
| [`LootTable.Create`](/game-api/types/alta-world-generation/loottable-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<LootTable>` | 0 |  |
| [`LootTable.Entry`](/game-api/types/alta-world-generation/loottable-entry) | class |  | 4 | One item in a loot table with a count range. |
| [`LootTable.FestivityList`](/game-api/types/alta-world-generation/loottable-festivitylist) | class |  | 2 |  |
| [`LootTable.RarityList`](/game-api/types/alta-world-generation/loottable-raritylist) | class |  | 3 |  |
| [`Origin`](/game-api/types/alta-world-generation/origin) | class | `GeneralValue` | 2 |  |
| [`Origin.Create`](/game-api/types/alta-world-generation/origin-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<Origin>` | 0 |  |
| [`OriginSingleValue`](/game-api/types/alta-world-generation/originsinglevalue) | class | `SingleValue<Origin>` | 2 |  |
| [`PackageManager`](/game-api/types/alta-world-generation/packagemanager) | static class |  | 2 |  |
| [`PresetLootModule`](/game-api/types/alta-world-generation/presetlootmodule) | class | `NetworkEntityBehaviour`, `ISavable<PresetLootModuleSaveData>`, `ISavableSave<PresetLootModuleSaveData>`, +1 more | 2 |  |
| [`PresetLootModuleSaveData`](/game-api/types/alta-world-generation/presetlootmodulesavedata) | class | `NewSaveData<PresetLootModule, PresetLootModuleSaveData>` | 2 |  |
| [`PresetLootSet`](/game-api/types/alta-world-generation/presetlootset) | class | `HashedGeneralValue<PresetLootSet>` | 1 |  |
| [`PresetLootSet.Create`](/game-api/types/alta-world-generation/presetlootset-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PresetLootSet>` | 0 |  |
| [`PresetLootSet.Entry`](/game-api/types/alta-world-generation/presetlootset-entry) | class |  | 3 |  |
| [`Rarity`](/game-api/types/alta-world-generation/rarity) | class | `GeneralValue` | 3 | A loot rarity asset with a weighting. All rarities load from Resources/Items/Rarities, and loot tables pick one at random. |
| [`Rarity.Create`](/game-api/types/alta-world-generation/rarity-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Loot.ScriptableObject<Rarity>` | 0 |  |

## Alta.PAGaC

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApplyGenerationRule`](/game-api/types/alta-world-generation/applygenerationrule) | class | `GenerationStep` | 1 |  |
| [`BuildingRooms`](/game-api/types/alta-world-generation/buildingrooms) | class | `GenerationStep` | 4 |  |
| [`BuildingRooms.NodeRange`](/game-api/types/alta-world-generation/buildingrooms-noderange) | class |  | 3 |  |
| [`Constructor`](/game-api/types/alta-world-generation/constructor) | class |  | 4 |  |
| [`Decay`](/game-api/types/alta-world-generation/decay) | class | `GenerationStep` | 1 |  |
| [`GenerationBase`](/game-api/types/alta-world-generation/generationbase-alta-pagac) | class | `MonoBehaviour` | 6 |  |
| [`GenerationRule`](/game-api/types/alta-world-generation/generationrule) | class | `RuleBase`, `ISerializationCallbackReceiver` | 5 |  |
| [`GenerationRule.Create`](/game-api/types/alta-world-generation/generationrule-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.PAGaC.ScriptableObject<GenerationRule>` | 0 |  |
| [`GenerationRule.Step`](/game-api/types/alta-world-generation/generationrule-step) | enum |  | 3 |  |
| [`GenerationStep`](/game-api/types/alta-world-generation/generationstep) | abstract class | `MonoBehaviour` | 1 |  |
| [`Generator`](/game-api/types/alta-world-generation/generator) | class |  | 8 | A 3D grid of tagged nodes for procedural construction, all set to the air tag at first. |
| [`LockMode`](/game-api/types/alta-world-generation/lockmode) | enum |  | 5 |  |
| [`Node`](/game-api/types/alta-world-generation/node-alta-pagac) | class |  | 6 | One cell in a PAGaC generation grid: its position and the tag it currently holds. |
| [`NodeCollection`](/game-api/types/alta-world-generation/nodecollection) | class |  | 15 | A set of grid nodes from the PAGaC procedural generator, with a running bounding box. The bounds code has slips (max Y and Z are only updated when X grows, and recalculated maxes use the minimum), so treat the bounds as rough. |
| [`NodeExtensions`](/game-api/types/alta-world-generation/nodeextensions) | static class |  | 1 |  |
| [`OptionSet`](/game-api/types/alta-world-generation/optionset) | class | `GeneralValue` | 3 |  |
| [`OptionSetChance`](/game-api/types/alta-world-generation/optionsetchance) | class |  | 2 |  |
| [`Part`](/game-api/types/alta-world-generation/part) | class | `GeneralValue` | 5 |  |
| [`PartChance`](/game-api/types/alta-world-generation/partchance) | class |  | 2 |  |
| [`Rule`](/game-api/types/alta-world-generation/rule) | class | `RuleBase`, `ISerializationCallbackReceiver` | 6 |  |
| [`Rule.RotationOverlap`](/game-api/types/alta-world-generation/rule-rotationoverlap) | enum |  | 5 |  |
| [`RuleBase`](/game-api/types/alta-world-generation/rulebase) | abstract class | `GeneralValue` | 6 | Base asset for a PAGaC (procedural generation) rule: a 3D grid of tag lists, with one grid per configuration (probably rotations or variants). |
| [`RuleOptionSet`](/game-api/types/alta-world-generation/ruleoptionset) | class | `GeneralValue` | 4 |  |
| [`RuleOptionSetChance`](/game-api/types/alta-world-generation/ruleoptionsetchance) | class |  | 2 |  |
| [`Tag`](/game-api/types/alta-world-generation/tag) | class | `HashedGeneralValue<Tag>` | 1 | A tag asset for the PAGaC construction system (under `PAGaC/Construction/Tags`), with a colour for display. |
| [`Test`](/game-api/types/alta-world-generation/test) | class | `GeneralValue`, `ISerializationCallbackReceiver` | 6 |  |

## Alta.Populations

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AttributeImpact`](/game-api/types/alta-world-generation/attributeimpact) | class |  | 1 |  |
| [`BasicEcosystem`](/game-api/types/alta-world-generation/basicecosystem) | class | `NetworkEntityBehaviour` | 3 | [Populations and spawners](../world/populations.md) |
| [`BasicPopulation`](/game-api/types/alta-world-generation/basicpopulation) | class |  | 15 | [Populations and spawners](../world/populations.md) |
| [`BasicPopulation.PopulationEventHandler`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler) | delegate |  | 0 |  |
| [`BasicPopulationFolder`](/game-api/types/alta-world-generation/basicpopulationfolder) | class | `NetworkEntityBehaviour`, `IPopulationFolder`, `ISavable<BasicPopulationFolderSaveData>`, +2 more | 9 | Server-side population holder for an area, such as a forest chunk. Spawns from a `PopulationSetup` with density from its area, and can join its chunk's ecosystem. |
| [`BasicPopulationFolderSaveData`](/game-api/types/alta-world-generation/basicpopulationfoldersavedata) | class | `NewSaveData<BasicPopulationFolder, BasicPopulationFolderSaveData>` | 4 |  |
| [`BasicPopulationItem`](/game-api/types/alta-world-generation/basicpopulationitem) | class | `MonoBehaviour`, `IPopulationItem` | 7 | Added to a spawned population entity (such as an animal) to tie it to its `BasicPopulation`. Moving ones follow chunk changes and switch population. Server side. |
| [`BasicPopulationItem.PopulationItemEventHandler`](/game-api/types/alta-world-generation/basicpopulationitem-populationitemeventhandler) | delegate |  | 0 |  |
| [`BasicPopulationManager`](/game-api/types/alta-world-generation/basicpopulationmanager) | class | `IPopulationManager` | 2 | [Populations and spawners](../world/populations.md) |
| [`BoundsPopulationItem`](/game-api/types/alta-world-generation/boundspopulationitem) | class | `PopulationItem` | 2 |  |
| [`CavePopulationSpawnInformation`](/game-api/types/alta-world-generation/cavepopulationspawninformation) | class | `PopulationSpawnInformation` | 3 |  |
| [`CircularSpawnPointGenerator`](/game-api/types/alta-world-generation/circularspawnpointgenerator) | class | `SpawnAreaBase` | 1 | [Populations and spawners](../world/populations.md) |
| [`DayNightOnlyTimerDefinition`](/game-api/types/alta-world-generation/daynightonlytimerdefinition) | class | `PopulationTimerDefinition` | 4 | [Populations and spawners](../world/populations.md) |
| [`Ecosystem`](/game-api/types/alta-world-generation/ecosystem) | class | `NetworkEntityBehaviour`, `ISpawnSystem`, `ISavable<EcosystemSaveData>`, +2 more | 7 | [Populations and spawners](../world/populations.md): A chunk's (or cave layer's) set of populations, with spawn points worked out from the ground. |
| [`Ecosystem.PopulationApplication`](/game-api/types/alta-world-generation/ecosystem-populationapplication) | class |  | 4 |  |
| [`EcosystemSaveData`](/game-api/types/alta-world-generation/ecosystemsavedata) | class | `NewSaveData<Ecosystem, EcosystemSaveData>` | 1 |  |
| [`EcosystemSaveData.Entry`](/game-api/types/alta-world-generation/ecosystemsavedata-entry) | class |  | 3 |  |
| [`ElementDestroy`](/game-api/types/alta-world-generation/elementdestroy) | delegate |  | 0 |  |
| [`FrequencyTimerDefinition`](/game-api/types/alta-world-generation/frequencytimerdefinition) | class | `PopulationTimerDefinition` | 4 | [Populations and spawners](../world/populations.md) |
| [`GlobalPopulationDefinition`](/game-api/types/alta-world-generation/globalpopulationdefinition) | class | `HashedGeneralValue<GlobalPopulationDefinition>` | 8 | [Arguments and results](../console-and-utilities/arguments-and-results.md), [Populations and spawners](../world/populations.md) |
| [`GlobalPopulationDefinition.PopulationInfo`](/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo) | class |  | 5 |  |
| [`GlobalPopulationsManager`](/game-api/types/alta-world-generation/globalpopulationsmanager) | class | `NetworkEntityBehaviour`, `ISavable<GlobalPopulationsManagerSaveData>`, `ISavableSave<GlobalPopulationsManagerSaveData>`, +1 more | 1 | [Populations and spawners](../world/populations.md) |
| [`GlobalPopulationsManagerSaveData`](/game-api/types/alta-world-generation/globalpopulationsmanagersavedata) | class | `NewSaveData<GlobalPopulationsManager, GlobalPopulationsManagerSaveData>` | 2 |  |
| [`IPointNormalEvaluator`](/game-api/types/alta-world-generation/ipointnormalevaluator) | interface |  | 1 | Picks spawn points for a population folder. The population manager asks it for a point when spawning. |
| [`IPopulationFolder`](/game-api/types/alta-world-generation/ipopulationfolder) | interface |  | 8 | A saved area that holds one population: its size, density and spawn point picker. `BasicPopulationFolder` is the main implementation. |
| [`IPopulationFolderSaveDataBase`](/game-api/types/alta-world-generation/ipopulationfoldersavedatabase) | interface |  | 6 | Saved state of one population in a chunk: its counts, next check time and spawned children. |
| [`IPopulationItem`](/game-api/types/alta-world-generation/ipopulationitem) | interface |  | 1 |  |
| [`IPopulationManager`](/game-api/types/alta-world-generation/ipopulationmanager) | interface |  | 1 |  |
| [`IPopulationRemovalMethod`](/game-api/types/alta-world-generation/ipopulationremovalmethod) | interface |  | 1 | [Populations and spawners](../world/populations.md): A component on a spawned thing that tells its population when the thing should stop counting. |
| [`ISpawnSystem`](/game-api/types/alta-world-generation/ispawnsystem) | interface |  | 3 | Something populations spawn through, implemented by `PopulationSpawnArea`. |
| [`ObjectHistory`](/game-api/types/alta-world-generation/objecthistory) | class | `MonoBehaviour` | 1 |  |
| [`ObjectHistory.ObjectTrackingSettings`](/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings) | class |  | 5 |  |
| [`PointsPopulationValue`](/game-api/types/alta-world-generation/pointspopulationvalue) | class | `PopulationSpawnInformation` | 7 |  |
| [`PopulationAction`](/game-api/types/alta-world-generation/populationaction) | enum |  | 4 |  |
| [`PopulationAnalytics`](/game-api/types/alta-world-generation/populationanalytics) | static class |  | 2 | [Populations and spawners](../world/populations.md): Sends population records to analytics (Alta's API is gone). |
| [`PopulationDefinition`](/game-api/types/alta-world-generation/populationdefinition) | class | `HashedGeneralValue<PopulationDefinition>` | 20 | [Populations and spawners](../world/populations.md#populationdefinition), [Arguments and results](../console-and-utilities/arguments-and-results.md): `Alta.Populations.PopulationDefinition`, a `HashedGeneralValue` asset. |
| [`PopulationDefinition.Create`](/game-api/types/alta-world-generation/populationdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<PopulationDefinition>` | 0 |  |
| [`PopulationDefinitionManager`](/game-api/types/alta-world-generation/populationdefinitionmanager) | class | `MonoBehaviour`, `ISavable<PopulationDefinitionManagerData>`, `ISavableSave<PopulationDefinitionManagerData>`, +1 more | 4 | [Populations and spawners](../world/populations.md): Saved per-definition overrides of the respawn time. |
| [`PopulationDefinitionManagerData`](/game-api/types/alta-world-generation/populationdefinitionmanagerdata) | class | `NewSaveData<PopulationDefinitionManager, PopulationDefinitionManagerData>` | 2 |  |
| [`PopulationDelegate`](/game-api/types/alta-world-generation/populationdelegate) | delegate |  | 0 |  |
| [`PopulationEvent`](/game-api/types/alta-world-generation/populationevent) | class | `AltaEvent<PopulationSample, PopulationUnityEvent>` | 0 |  |
| [`PopulationEventData`](/game-api/types/alta-world-generation/populationeventdata) | class |  | 6 | [Console events](../console-and-utilities/console-events.md) |
| [`PopulationFolder`](/game-api/types/alta-world-generation/populationfolder) | class | `PopulationFolder<PopulationFolder, PopulationFolderSaveData>` | 0 | [Populations and spawners](../world/populations.md) |
| [`PopulationFolder<TThis, TData>`](/game-api/types/alta-world-generation/populationfolder-tthis-tdata) | class | `PopulationFolderBase`, `ISavable<TData>`, `ISavableSave<TData>`, +1 more | 0 | [Populations and spawners](../world/populations.md) |
| [`PopulationFolderBase`](/game-api/types/alta-world-generation/populationfolderbase) | class | `NetworkEntityBehaviour` | 6 | [Populations and spawners](../world/populations.md) |
| [`PopulationFolderSaveData`](/game-api/types/alta-world-generation/populationfoldersavedata) | class | `NewSaveData<PopulationFolder, PopulationFolderSaveData>`, `IPopulationFolderSaveDataBase` | 12 | Save data (version 2) for a `PopulationFolder`: its population definition, counts, timer and saved children. |
| [`PopulationFolderSaveData1`](/game-api/types/alta-world-generation/populationfoldersavedata1) | class | `OldSaveData` | 7 |  |
| [`PopulationItem`](/game-api/types/alta-world-generation/populationitem) | class | `MonoBehaviour`, `IPopulationItem` | 5 | [Spawning and despawning](../creatures/spawning-and-despawning.md#populationitem), [Populations and spawners](../world/populations.md): A component the population adds to everything it spawns. |
| [`PopulationItemSpawnHandler`](/game-api/types/alta-world-generation/populationitemspawnhandler) | delegate |  | 0 | [Populations and spawners](../world/populations.md) |
| [`PopulationRaycast`](/game-api/types/alta-world-generation/populationraycast) | class | `HashedGeneralValue<PopulationRaycast>` | 1 |  |
| [`PopulationRaycast.Create`](/game-api/types/alta-world-generation/populationraycast-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Populations.ScriptableObject<PopulationRaycast>` | 0 |  |
| [`PopulationSample`](/game-api/types/alta-world-generation/populationsample) | class |  | 26 | [Spawning and despawning](../creatures/spawning-and-despawning.md#populationsample), [Populations and spawners](../world/populations.md#populationsample): One population of one `PopulationDefinition` in one chunk: a count, a maximum, and the entities it has spawned. |
| [`PopulationSaveDataChild`](/game-api/types/alta-world-generation/populationsavedatachild) | class |  | 2 |  |
| [`PopulationSetup`](/game-api/types/alta-world-generation/populationsetup) | class | `HashedGeneralValue<PopulationSetup>`, `IFillSet` | 6 | Asset defining a population: how fast it spawns and where its members may be placed. Looked up by hash; also used as a fill set when placing members. |
| [`PopulationSetup.Create`](/game-api/types/alta-world-generation/populationsetup-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Populations.ScriptableObject<PopulationSetup>` | 0 |  |
| [`PopulationSpawnArea`](/game-api/types/alta-world-generation/populationspawnarea) | class | `PopulationFolder<PopulationSpawnArea, PopulationSpawnAreaSaveData>`, `ISpawnSystem` | 9 | [Populations and spawners](../world/populations.md#populationspawnarea): `Alta.Populations.PopulationSpawnArea`, a `PopulationFolder` entity behaviour. |
| [`PopulationSpawnAreaSaveData`](/game-api/types/alta-world-generation/populationspawnareasavedata) | class | `NewSaveData<PopulationSpawnArea, PopulationSpawnAreaSaveData>`, `IPopulationFolderSaveDataBase` | 15 | Save data for a `PopulationSpawnArea`: which population it holds, its counts, spawn timer and children. |
| [`PopulationSpawnAreaSaveData1`](/game-api/types/alta-world-generation/populationspawnareasavedata1) | class | `OldSaveData` | 10 |  |
| [`PopulationSpawnInformation`](/game-api/types/alta-world-generation/populationspawninformation) | abstract class |  | 7 | [Populations and spawners](../world/populations.md): Where a population can spawn: `PointsPopulationValue` (a list of points), `SimplePopulationValue` (asks an `ISpawnPositions`), `CavePopulationSpawnInformation`. |
| [`PopulationTimerDefinition`](/game-api/types/alta-world-generation/populationtimerdefinition) | abstract class | `ScriptableObject` | 4 | [Populations and spawners](../world/populations.md) |
| [`PopulationUnityEvent`](/game-api/types/alta-world-generation/populationunityevent) | class | `UnityEvent<PopulationSample>` | 0 |  |
| [`RadialPopulationArea`](/game-api/types/alta-world-generation/radialpopulationarea) | class | `MonoBehaviour`, `IPointNormalEvaluator` | 1 | [Populations and spawners](../world/populations.md) |
| [`RadialPopulationItem`](/game-api/types/alta-world-generation/radialpopulationitem) | class | `PopulationItem` | 2 |  |
| [`SimplePopulationValue`](/game-api/types/alta-world-generation/simplepopulationvalue) | class | `PopulationSpawnInformation` | 4 |  |
| [`SpawnAreaBase`](/game-api/types/alta-world-generation/spawnareabase) | abstract class | `MonoBehaviour` | 1 | [Populations and spawners](../world/populations.md) |
| [`SpawnAreaDisplay`](/game-api/types/alta-world-generation/spawnareadisplay) | class | `MapChunkDisplay` | 3 |  |
| [`SpawnedElement`](/game-api/types/alta-world-generation/spawnedelement) | class |  | 4 |  |
| [`SpawnPoint`](/game-api/types/alta-world-generation/spawnpoint) | class |  | 6 | [Populations and spawners](../world/populations.md): One place, with `Position`, `Rotation` and `IsFree`. |
| [`SpawnPointsDisplay`](/game-api/types/alta-world-generation/spawnpointsdisplay) | class | `MapChunkDisplay` | 2 |  |
| [`SpawnRate`](/game-api/types/alta-world-generation/spawnrate) | class | `GeneralValue` | 5 | [Populations and spawners](../world/populations.md) |
| [`SpawnRate.Create`](/game-api/types/alta-world-generation/spawnrate-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Populations.ScriptableObject<SpawnRate>` | 0 |  |
