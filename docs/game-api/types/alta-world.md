---
title: "World, chunks and saving"
description: "Types in Alta.Chunks, Alta.Static, Alta.Saving, Alta.Map and the environment namespaces of Root.Township."
sidebar_position: 3
---

# World, chunks and saving

Types in Alta.Chunks, Alta.Static, Alta.Saving, Alta.Map and the environment namespaces of Root.Township. 172 types, 25 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Chunks

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CaveLayerChunk` | class | `LocationChunk` | 6 | [Chunks](../world/chunks.md): A `LocationChunk` for one cave layer. See Caves. |
| `CaveLayerStaticObject` | class | `NetworkEntityBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| `CaveLayerStreamer` | class | `NetworkEntityBehaviour`, `ISavable<CaveLayerStreamerSaveData>`, `ISavableSave<CaveLayerStreamerSaveData>`, +4 more | 32 | [Caves](../world/caves.md#cavelayerstreamer): `Alta.Chunks.CaveLayerStreamer`, on the streamer prefab. It's the layer's `ICaveLayer` and its chunk's `IProceduralGenerationStreamer`. |
| `CaveLayerStreamerSaveData` | internal class | `NewSaveData<CaveLayerStreamer, CaveLayerStreamerSaveData>` | 1 |  |
| `Chunk` | class | `NetworkEntityBehaviour` | 42 | [Chunks](../world/chunks.md#chunk), [Arguments and results](../console-and-utilities/arguments-and-results.md): Both sides, but most of it only does anything on the server. |
| `ChunkAdjacencyConfiguration` | class |  | 4 |  |
| `ChunkConnections` | class |  | 5 |  |
| `ChunkContentManager` | abstract class |  | 13 |  |
| `ChunkEffect` | abstract class | `ScriptableObject` | 1 |  |
| `ChunkEntityManager` | class |  | 13 |  |
| `ChunkEnvironment` | class |  | 11 |  |
| `ChunkFileHelper` | static class |  | 5 |  |
| `ChunkMatrix` | class |  | 4 |  |
| `ChunkPlayerManager` | class |  | 11 |  |
| `ChunkPositions` | class |  | 3 |  |
| `ChunkPositionSurface` | class | `NetworkEntityBehaviour` | 3 |  |
| `ChunkPrefabPointer` | class | `ScriptableObject` | 11 |  |
| `ChunkPrefabPointer.PointerInstance` | class |  | 10 |  |
| `ChunkReference` | class |  | 5 |  |
| `ChunkSaveVersion` | enum |  | 10 |  |
| `ChunkSync` | internal class |  | 7 |  |
| `ClientChunkContentManager` | class | `ChunkContentManager` | 2 |  |
| `ClusterStreamer` | class | `MonoBehaviour` | 0 |  |
| `ContentState` | enum |  | 2 |  |
| `CylindricalBoundsSurface` | class | `PositionSurfaceDefinition`, `ISavable<CylindricalBoundsSurfaceSaveData>`, `ISavableSave<CylindricalBoundsSurfaceSaveData>`, +1 more | 3 |  |
| `CylindricalBoundsSurfaceSaveData` | class | `NewSaveData<CylindricalBoundsSurface, CylindricalBoundsSurfaceSaveData>` | 5 |  |
| `DirectionalBoundsSurface` | class | `PositionSurfaceDefinition`, `ISavable<DirectionalBoundsSurfaceSave>`, `ISavableSave<DirectionalBoundsSurfaceSave>`, +1 more | 2 |  |
| `DirectionalBoundsSurfaceSave` | class | `NewSaveData<DirectionalBoundsSurface, DirectionalBoundsSurfaceSave>` | 1 |  |
| `DynamicChunkContentManager` | class | `ChunkContentManager` | 9 | [Chunk loading and saving](../world/chunk-loading-and-saving.md): The chunk's save file, procedural content, then its entities. |
| `EmptyChunkContentManager` | class | `ChunkContentManager` | 1 |  |
| `FastChunkLookup` | class |  | 15 |  |
| `ICaveLayer` | interface | `IPortalApplier` | 13 |  |
| `IClusterSerialized` | interface |  | 1 |  |
| `IPortalApplier` | interface |  | 2 |  |
| `IProceduralGenerationStreamer` | interface |  | 5 |  |
| `ISavableFull` | interface |  | 1 |  |
| `ISavableFull<T>` | interface | `ISavable<T>`, `ISavableSave<T>`, `ISavableSaveBase`, +1 more | 0 |  |
| `LandmarkBakingMarker` | class | `MonoBehaviour` | 0 |  |
| `LandmarkDebugger` | class | `QuickAccessMenuAction` | 3 |  |
| `LocationChunk` | class | `Chunk` | 34 | [Chunks](../world/chunks.md#locationchunk): `Alta.Chunks.LocationChunk`, derives from `Chunk`. |
| `LocationChunkHelper` | static class |  | 17 |  |
| `MasterTerrainChunkEffectData` | class | `ChunkEffect` | 1 |  |
| `MembershipCheck` | class | `MonoBehaviour` | 0 |  |
| `ModifiableLandmarkSelector` | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 4 |  |
| `NormalPrefabPointer` | class | `ChunkPrefabPointer` | 0 |  |
| `OcclusionChunkEffectData` | class | `ChunkEffect` | 1 |  |
| `OcclusionMode` | enum |  | 3 |  |
| `OverworldChunk` | class | `LocationChunk` | 5 | [Chunks](../world/chunks.md): A `LocationChunk` in the square grid that covers the outdoor map. Named `"Chunk <x>-<z>"`. |
| `PlayerEntitySync` | class |  | 1 |  |
| `PlayerEntitySyncServer` | class | `PlayerEntitySync` | 5 |  |
| `PointerReference` | class | `MonoBehaviour` | 1 |  |
| `PositionSurfaceDefinition` | abstract class | `MonoBehaviour`, `ISpawnPositions`, `IPointNormalEvaluator` | 4 |  |
| `PositionSurfaceDefinition.RotationMode` | enum |  | 3 |  |
| `PrefabLoadManager` | static class |  | 5 |  |
| `ResourceRequestExtensions` | static class |  | 1 |  |
| `SavableSavedDynamicObject` | class |  | 7 |  |
| `SavedDynamicObject` | class | `IDisposable` | 14 |  |
| `SavingInfoAttribute` | class | `Attribute` | 5 |  |
| `SceneWidgetsAction` | class | `QuickAccessMenuAction` | 4 |  |
| `ServerChunkContentManager` | class | `ChunkContentManager` | 7 |  |
| `SphericalSurface` | class | `PositionSurfaceDefinition`, `ISavable<SphericalSurfaceSaveData>`, `ISavableSave<SphericalSurfaceSaveData>`, +1 more | 2 |  |
| `SphericalSurfaceSaveData` | class | `NewSaveData<SphericalSurface, SphericalSurfaceSaveData>` | 2 |  |
| `StaticCaveChunk` | class | `NetworkEntityBehaviour`, `ICaveLayer`, `IPortalApplier`, +1 more | 17 |  |
| `StaticChunkContentManager` | class | `ChunkContentManager` | 4 | [Chunk loading and saving](../world/chunk-loading-and-saving.md): The chunk's static scenery pointers. Servers load the collider-only version. |
| `StreamerHelper` | static class |  | 6 |  |
| `UnloadAllLandmarks` | class | `ChunkEffect` | 1 |  |
| `WorldLandmark` | class | `ScriptableObject` | 12 |  |
| `WorldLandmarkManager` | class | `NetworkEntityBehaviour` | 5 |  |

## Alta.Environmental.Atmosphere

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AmbienceArea` | class | `MonoBehaviour` | 0 |  |
| `AmbienceSpacePoint` | class | `SpacePoint` | 2 |  |
| `AtmosphereColor` | class | `LerpingValue<Color>` | 1 |  |
| `AtmosphereManager` | class | `NetworkEntityBehaviour` | 23 | [Time and environment](../world/time-and-environment.md): Scene behaviour, `static AtmosphereManager instance`. Blends `AtmospherePlugin`s into the ambient colour, fog colour and density and ambience audio. |
| `AtmosphereManager.ResolveAtmosphere` | delegate |  | 0 |  |
| `AtmospherePlugin` | abstract class | `MonoBehaviour` | 18 |  |
| `AtmosphereSet` | class | `ScriptableObject` | 6 | [Time and environment](../world/time-and-environment.md): A set of colours, fog and audio. A chunk's `Environment.OverrideSet` can force one. |
| `AtmosphereSet.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<AtmosphereSet>` | 0 |  |
| `AtmosphereShaderVariables` | internal static class |  | 0 |  |
| `BorderDefinedAtmosphere` | class | `MonoBehaviour` | 0 | [Time and environment](../world/time-and-environment.md) |
| `CaveAmbience` | class | `AtmospherePlugin` | 4 | [Time and environment](../world/time-and-environment.md) |
| `CycleAttribute` | abstract class | `PropertyAttribute` | 0 |  |
| `DayTimeEffect` | class | `MonoBehaviour` | 0 |  |
| `DayTimeManager` | class | `AtmospherePlugin` | 15 | [Time and environment](../world/time-and-environment.md): The sun and moon from `GameTimeManager`'s day and month progress, and the day's ambience and fog. Handles `FixedDaytime`. |
| `DayTimeManager.ChangedState` | delegate |  | 0 |  |
| `ForestAmbience` | class | `AtmospherePlugin` | 4 | [Time and environment](../world/time-and-environment.md) |
| `ForestDefinedAtmosphere` | class | `NetworkEntityBehaviour` | 1 | [Time and environment](../world/time-and-environment.md) |
| `FullCycle` | class | `CycleAttribute` | 0 |  |
| `HalfCycle` | class | `CycleAttribute` | 0 |  |
| `LerpDelegate` | delegate |  | 0 |  |
| `Notification` | delegate |  | 0 |  |
| `PrefabSceneDayTimeManager` | class | `MonoBehaviour` | 0 | [Time and environment](../world/time-and-environment.md) |
| `PrefabSceneSettings` | class | `ScriptableObject` | 27 | [Time and environment](../world/time-and-environment.md) |
| `PrefabSceneSettings.Prefab_Scene_Settings` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<PrefabSceneSettings>` | 0 |  |
| `QuarterCycle` | class | `CycleAttribute` | 0 |  |
| `SpaceAtmosphereTrigger` | class | `MonoBehaviour` | 0 |  |
| `SpaceDefinedAtmosphere` | class | `SpaceDefinedAttribute<AmbienceSpacePoint>` | 1 | [Time and environment](../world/time-and-environment.md) |

## Alta.Environmental.Vegetation

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClumpSpawner` | class | `MonoBehaviour` | 0 |  |
| `ClumpSpawner.ClumpLOD` | class |  | 4 |  |
| `GrassBlade` | class | `MonoBehaviour` | 4 |  |
| `GrassBladeLODMarker` | class | `MonoBehaviour` | 1 |  |
| `GrassBladeMesh` | class | `ScriptableObject` | 5 |  |
| `GrassBladeMesh.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Grass.ScriptableObject<GrassBladeMesh>` | 0 |  |
| `GrassClump` | class | `MonoBehaviour` | 1 |  |
| `GrassClumpHolder` | class | `MonoBehaviour` | 4 |  |
| `GrassEditorHolder` | class | `MonoBehaviour` | 8 |  |
| `GrassManager` | class | `NetworkEntityBehaviour` | 9 |  |
| `LocalWindManager` | class | `MonoBehaviour` | 5 |  |
| `ProceduralBladeTemplate` | class | `ScriptableObject` | 5 |  |
| `WindShaderVariables` | internal static class |  | 0 |  |

## Alta.Lighting

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AndroidLightsController` | class | `BaseLightsController` | 0 |  |
| `BaseLightsController` | abstract class |  | 3 |  |
| `ISortedLight` | internal interface |  | 3 |  |
| `LightSorter<T>` | internal class |  | 5 |  |
| `PCLightsController` | class | `BaseLightsController` | 2 |  |
| `PlatformLight` | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 13 |  |
| `PlatformLightsAndroidUtilities` | static class |  | 3 |  |

## Alta.Map

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClientLandmarkManager` | class |  | 4 |  |
| `ClientLandmarkManager.MarkerEvent` | delegate |  | 0 |  |
| `DiscoveryState` | enum |  | 3 |  |
| `InfoBoard` | class | `NetworkEntityBehaviour`, `ISavable<InfoBoardSaveData>`, `ISavableSave<InfoBoardSaveData>`, +1 more | 4 |  |
| `InfoBoardSaveData` | class | `NewSaveData<InfoBoard, InfoBoardSaveData>` | 1 |  |
| `Landmark` | class | `NetworkEntityBehaviour`, `ISavable<LandmarkSaveData>`, `ISavableSave<LandmarkSaveData>`, +1 more | 14 |  |
| `LandmarkDiscoverZone` | class | `NetworkEntityBehaviour`, `ISavable<LandmarkDiscoverZoneSaveData>`, `ISavableSave<LandmarkDiscoverZoneSaveData>`, +1 more | 1 |  |
| `LandmarkDiscoverZoneSaveData` | class | `NewSaveData<LandmarkDiscoverZone, LandmarkDiscoverZoneSaveData>` | 1 |  |
| `LandmarkIcon` | class | `HashedGeneralValue<LandmarkIcon>` | 2 |  |
| `LandmarkManager` | class | `SingletonBehaviour<LandmarkManager>`, `INetworkEntityBehaviour`, `ISavable<LandmarkManagerSaveData>`, +2 more | 9 |  |
| `LandmarkManagerSaveData` | class | `NewSaveData<LandmarkManager, LandmarkManagerSaveData>` | 1 |  |
| `LandmarkSaveData` | class | `NewSaveData<Landmark, LandmarkSaveData>` | 7 |  |
| `LandmarkSaveFormat` | class | `IAltaFileFormat` | 6 |  |
| `Map` | class | `HashedGeneralValue<Map>` | 7 | [Map and landmarks](../world/map-and-landmarks.md): The map is a set of pieces players uncover as they explore, plus landmarks (icons) they become aware of and then discover. |
| `MapBoard` | class | `NetworkEntityBehaviour`, `ISavable<MapBoardSaveData1>`, `ISavableSave<MapBoardSaveData1>`, +1 more | 10 |  |
| `MapBoardDirectRenderer` | class | `MonoBehaviour` | 0 |  |
| `MapBoardRenderer` | class | `MonoBehaviour` | 0 |  |
| `MapBoardSaveData1` | class | `NewSaveData<MapBoard, MapBoardSaveData1>` | 4 |  |
| `MapLandmarkDisplay` | class | `NetworkEntityBehaviour` | 3 |  |
| `MapManager` | class | `NetworkEntityBehaviour` | 8 | [Map and landmarks](../world/map-and-landmarks.md): Scene behaviour, `static MapManager Instance`. Holds each player's `PlayerMapManager`, or one shared one if `IsUsingSharedMap`. |
| `MapPiece` | class | `HashedGeneralValue<MapPiece>` | 2 | [Map and landmarks](../world/map-and-landmarks.md): One piece: a `Sprite` and an `Offset`. |
| `MapSaveFormat` | class | `IAltaFileFormat` | 5 |  |
| `MarkerInfo` | class |  | 8 |  |
| `MovingLandmark` | class | `Landmark` | 0 |  |
| `OldLandmarkSaveData1` | class | `OldSaveData` | 7 |  |
| `PlayerDataFileHelper<T>` | class |  | 5 |  |
| `PlayerLandmark` | class | `MovingLandmark` | 1 |  |
| `PlayerLandmarkMode` | enum |  | 3 |  |
| `PlayerMapManager` | class |  | 7 | [Map and landmarks](../world/map-and-landmarks.md): One player's discovered pieces. `IsThisMapPieceDiscovered(Map, int)`, `GetUndiscoveredMapPieces(Map)`, `DiscoverPiece(Map, int)`. |
| `ServerClientLandmarkManager` | class |  | 10 |  |
| `ServerLandmarkManager` | class |  | 13 |  |
| `StaticAchievementTrigger` | class | `MonoBehaviour` | 0 |  |

## Alta.Saving

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BasicSaveDataWrapper<TData>` | class |  | 6 |  |
| `BasicSaveFile<T>` | class | `IAltaFileFormat` | 8 |  |
| `ChunkVersioning` | class |  | 15 |  |
| `ISavableSave<out T>` | interface | `ISavableSaveBase` | 1 |  |
| `ISavableSaveBase` | interface |  | 1 |  |
| `SavableCache` | static class |  | 3 |  |
| `SaveData` | abstract class |  | 2 |  |
| `SavingSystem` | static class |  | 11 |  |
| `SavingSystem.Reinitialize_Saving` | class | `AltaMenuItemBase.Tools.Reboot` | 0 |  |
| `SavingSystem.SavingSetup` | class |  | 13 |  |
| `SavingSystem.VersionSetup` | class |  | 4 |  |

## Alta.Static

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CacheFileFormat` | class | `IAltaFileFormat` | 11 |  |
| `CacheManager` | abstract class |  | 6 | [Static objects](../world/static-objects.md): Generates or loads cached data by name (`GetCache`). |
| `ClientCacheManager` | class | `CacheManager` | 5 |  |
| `ICacheable` | interface |  | 2 |  |
| `IInstructionResult` | interface |  | 1 |  |
| `IndexedScriptableObject` | abstract class | `ScriptableObject` | 2 |  |
| `Instruction` | abstract class |  | 5 | [Static objects](../world/static-objects.md): Subclasses include `SpawnInstruction` (place a `StaticEnvironmentPiece` at a position, rotation and scale) and the forest's own instructions. |
| `Instruction.Type` | enum |  | 4 |  |
| `InstructionSet` | class | `ICacheable` | 8 | [Static objects](../world/static-objects.md): A list of `Instruction`s and the results of running them. Cached on disk. |
| `IStaticEnvironmentPiecePool` | interface |  | 1 |  |
| `SpawnInstruction` | class | `Instruction` | 3 |  |
| `StaticEnvironmentPiece` | class | `IndexedScriptableObject`, `ICollisionStandard`, `IStaticEnvironmentPiecePool` | 5 | [Static objects](../world/static-objects.md): A `ScriptableObject` with an index, a surface material and a `StaticEnvironmentPieceInstance` prefab. `Spawn(position, rotation, scale)` makes one. |
| `StaticEnvironmentPiece.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Environmental.ScriptableObject<StaticEnvironmentPiece>` | 0 |  |
| `StaticEnvironmentPieceInstance` | class | `MonoBehaviour`, `ICollisionStandard`, `IInstructionResult`, +1 more | 7 |  |
