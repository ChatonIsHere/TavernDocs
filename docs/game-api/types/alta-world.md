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
| [`CaveLayerChunk`](/game-api/types/alta-world/cavelayerchunk) | class | `LocationChunk` | 6 | [Chunks](../world/chunks.md): A `LocationChunk` for one cave layer. See Caves. |
| [`CaveLayerStaticObject`](/game-api/types/alta-world/cavelayerstaticobject) | class | `NetworkEntityBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 1 |  |
| [`CaveLayerStreamer`](/game-api/types/alta-world/cavelayerstreamer) | class | `NetworkEntityBehaviour`, `ISavable<CaveLayerStreamerSaveData>`, `ISavableSave<CaveLayerStreamerSaveData>`, +4 more | 32 | [Caves](../world/caves.md#cavelayerstreamer): `Alta.Chunks.CaveLayerStreamer`, on the streamer prefab. It's the layer's `ICaveLayer` and its chunk's `IProceduralGenerationStreamer`. |
| [`CaveLayerStreamerSaveData`](/game-api/types/alta-world/cavelayerstreamersavedata) | internal class | `NewSaveData<CaveLayerStreamer, CaveLayerStreamerSaveData>` | 1 |  |
| [`Chunk`](/game-api/types/alta-world/chunk) | class | `NetworkEntityBehaviour` | 42 | [Chunks](../world/chunks.md#chunk), [Arguments and results](../console-and-utilities/arguments-and-results.md): Both sides, but most of it only does anything on the server. |
| [`ChunkAdjacencyConfiguration`](/game-api/types/alta-world/chunkadjacencyconfiguration) | class |  | 4 |  |
| [`ChunkConnections`](/game-api/types/alta-world/chunkconnections) | class |  | 5 |  |
| [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager) | abstract class |  | 13 |  |
| [`ChunkEffect`](/game-api/types/alta-world/chunkeffect) | abstract class | `ScriptableObject` | 1 |  |
| [`ChunkEntityManager`](/game-api/types/alta-world/chunkentitymanager) | class |  | 13 |  |
| [`ChunkEnvironment`](/game-api/types/alta-world/chunkenvironment) | class |  | 11 |  |
| [`ChunkFileHelper`](/game-api/types/alta-world/chunkfilehelper) | static class |  | 5 |  |
| [`ChunkMatrix`](/game-api/types/alta-world/chunkmatrix) | class |  | 4 |  |
| [`ChunkPlayerManager`](/game-api/types/alta-world/chunkplayermanager) | class |  | 11 |  |
| [`ChunkPositions`](/game-api/types/alta-world/chunkpositions) | class |  | 3 |  |
| [`ChunkPositionSurface`](/game-api/types/alta-world/chunkpositionsurface) | class | `NetworkEntityBehaviour` | 3 |  |
| [`ChunkPrefabPointer`](/game-api/types/alta-world/chunkprefabpointer) | class | `ScriptableObject` | 11 |  |
| [`ChunkPrefabPointer.PointerInstance`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance) | class |  | 10 |  |
| [`ChunkReference`](/game-api/types/alta-world/chunkreference) | class |  | 5 |  |
| [`ChunkSaveVersion`](/game-api/types/alta-world/chunksaveversion) | enum |  | 10 |  |
| [`ChunkSync`](/game-api/types/alta-world/chunksync) | internal class |  | 7 |  |
| [`ClientChunkContentManager`](/game-api/types/alta-world/clientchunkcontentmanager) | class | `ChunkContentManager` | 2 |  |
| [`ClusterStreamer`](/game-api/types/alta-world/clusterstreamer) | class | `MonoBehaviour` | 0 |  |
| [`ContentState`](/game-api/types/alta-world/contentstate) | enum |  | 2 |  |
| [`CylindricalBoundsSurface`](/game-api/types/alta-world/cylindricalboundssurface) | class | `PositionSurfaceDefinition`, `ISavable<CylindricalBoundsSurfaceSaveData>`, `ISavableSave<CylindricalBoundsSurfaceSaveData>`, +1 more | 3 |  |
| [`CylindricalBoundsSurfaceSaveData`](/game-api/types/alta-world/cylindricalboundssurfacesavedata) | class | `NewSaveData<CylindricalBoundsSurface, CylindricalBoundsSurfaceSaveData>` | 5 |  |
| [`DirectionalBoundsSurface`](/game-api/types/alta-world/directionalboundssurface) | class | `PositionSurfaceDefinition`, `ISavable<DirectionalBoundsSurfaceSave>`, `ISavableSave<DirectionalBoundsSurfaceSave>`, +1 more | 2 |  |
| [`DirectionalBoundsSurfaceSave`](/game-api/types/alta-world/directionalboundssurfacesave) | class | `NewSaveData<DirectionalBoundsSurface, DirectionalBoundsSurfaceSave>` | 1 |  |
| [`DynamicChunkContentManager`](/game-api/types/alta-world/dynamicchunkcontentmanager) | class | `ChunkContentManager` | 9 | [Chunk loading and saving](../world/chunk-loading-and-saving.md): The chunk's save file, procedural content, then its entities. |
| [`EmptyChunkContentManager`](/game-api/types/alta-world/emptychunkcontentmanager) | class | `ChunkContentManager` | 1 |  |
| [`FastChunkLookup`](/game-api/types/alta-world/fastchunklookup) | class |  | 15 |  |
| [`ICaveLayer`](/game-api/types/alta-world/icavelayer) | interface | `IPortalApplier` | 13 |  |
| [`IClusterSerialized`](/game-api/types/alta-world/iclusterserialized) | interface |  | 1 |  |
| [`IPortalApplier`](/game-api/types/alta-world/iportalapplier) | interface |  | 2 |  |
| [`IProceduralGenerationStreamer`](/game-api/types/alta-world/iproceduralgenerationstreamer) | interface |  | 5 |  |
| [`ISavableFull`](/game-api/types/alta-world/isavablefull) | interface |  | 1 |  |
| [`ISavableFull<T>`](/game-api/types/alta-world/isavablefull-t) | interface | `ISavable<T>`, `ISavableSave<T>`, `ISavableSaveBase`, +1 more | 0 |  |
| [`LandmarkBakingMarker`](/game-api/types/alta-world/landmarkbakingmarker) | class | `MonoBehaviour` | 0 |  |
| [`LandmarkDebugger`](/game-api/types/alta-world/landmarkdebugger) | class | `QuickAccessMenuAction` | 3 |  |
| [`LocationChunk`](/game-api/types/alta-world/locationchunk) | class | `Chunk` | 34 | [Chunks](../world/chunks.md#locationchunk): `Alta.Chunks.LocationChunk`, derives from `Chunk`. |
| [`LocationChunkHelper`](/game-api/types/alta-world/locationchunkhelper) | static class |  | 17 |  |
| [`MasterTerrainChunkEffectData`](/game-api/types/alta-world/masterterrainchunkeffectdata) | class | `ChunkEffect` | 1 |  |
| [`MembershipCheck`](/game-api/types/alta-world/membershipcheck) | class | `MonoBehaviour` | 0 |  |
| [`ModifiableLandmarkSelector`](/game-api/types/alta-world/modifiablelandmarkselector) | class | `MonoBehaviour`, `IIgnoreForStaticFlatten`, `IDontSplit` | 4 |  |
| [`NormalPrefabPointer`](/game-api/types/alta-world/normalprefabpointer) | class | `ChunkPrefabPointer` | 0 |  |
| [`OcclusionChunkEffectData`](/game-api/types/alta-world/occlusionchunkeffectdata) | class | `ChunkEffect` | 1 |  |
| [`OcclusionMode`](/game-api/types/alta-world/occlusionmode) | enum |  | 3 |  |
| [`OverworldChunk`](/game-api/types/alta-world/overworldchunk) | class | `LocationChunk` | 5 | [Chunks](../world/chunks.md): A `LocationChunk` in the square grid that covers the outdoor map. Named `"Chunk <x>-<z>"`. |
| [`PlayerEntitySync`](/game-api/types/alta-world/playerentitysync) | class |  | 1 |  |
| [`PlayerEntitySyncServer`](/game-api/types/alta-world/playerentitysyncserver) | class | `PlayerEntitySync` | 5 |  |
| [`PointerReference`](/game-api/types/alta-world/pointerreference) | class | `MonoBehaviour` | 1 |  |
| [`PositionSurfaceDefinition`](/game-api/types/alta-world/positionsurfacedefinition) | abstract class | `MonoBehaviour`, `ISpawnPositions`, `IPointNormalEvaluator` | 4 |  |
| [`PositionSurfaceDefinition.RotationMode`](/game-api/types/alta-world/positionsurfacedefinition-rotationmode) | enum |  | 3 |  |
| [`PrefabLoadManager`](/game-api/types/alta-world/prefabloadmanager) | static class |  | 5 |  |
| [`ResourceRequestExtensions`](/game-api/types/alta-world/resourcerequestextensions) | static class |  | 1 |  |
| [`SavableSavedDynamicObject`](/game-api/types/alta-world/savablesaveddynamicobject) | class |  | 7 |  |
| [`SavedDynamicObject`](/game-api/types/alta-world/saveddynamicobject) | class | `IDisposable` | 14 |  |
| [`SavingInfoAttribute`](/game-api/types/alta-world/savinginfoattribute) | class | `Attribute` | 5 |  |
| [`SceneWidgetsAction`](/game-api/types/alta-world/scenewidgetsaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`ServerChunkContentManager`](/game-api/types/alta-world/serverchunkcontentmanager) | class | `ChunkContentManager` | 7 |  |
| [`SphericalSurface`](/game-api/types/alta-world/sphericalsurface) | class | `PositionSurfaceDefinition`, `ISavable<SphericalSurfaceSaveData>`, `ISavableSave<SphericalSurfaceSaveData>`, +1 more | 2 |  |
| [`SphericalSurfaceSaveData`](/game-api/types/alta-world/sphericalsurfacesavedata) | class | `NewSaveData<SphericalSurface, SphericalSurfaceSaveData>` | 2 |  |
| [`StaticCaveChunk`](/game-api/types/alta-world/staticcavechunk) | class | `NetworkEntityBehaviour`, `ICaveLayer`, `IPortalApplier`, +1 more | 17 |  |
| [`StaticChunkContentManager`](/game-api/types/alta-world/staticchunkcontentmanager) | class | `ChunkContentManager` | 4 | [Chunk loading and saving](../world/chunk-loading-and-saving.md): The chunk's static scenery pointers. Servers load the collider-only version. |
| [`StreamerHelper`](/game-api/types/alta-world/streamerhelper) | static class |  | 6 |  |
| [`UnloadAllLandmarks`](/game-api/types/alta-world/unloadalllandmarks) | class | `ChunkEffect` | 1 |  |
| [`WorldLandmark`](/game-api/types/alta-world/worldlandmark) | class | `ScriptableObject` | 12 |  |
| [`WorldLandmarkManager`](/game-api/types/alta-world/worldlandmarkmanager) | class | `NetworkEntityBehaviour` | 5 |  |

## Alta.Environmental.Atmosphere

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AmbienceArea`](/game-api/types/alta-world/ambiencearea) | class | `MonoBehaviour` | 0 |  |
| [`AmbienceSpacePoint`](/game-api/types/alta-world/ambiencespacepoint) | class | `SpacePoint` | 2 |  |
| [`AtmosphereColor`](/game-api/types/alta-world/atmospherecolor) | class | `LerpingValue<Color>` | 1 |  |
| [`AtmosphereManager`](/game-api/types/alta-world/atmospheremanager) | class | `NetworkEntityBehaviour` | 23 | [Time and environment](../world/time-and-environment.md): Scene behaviour, `static AtmosphereManager instance`. Blends `AtmospherePlugin`s into the ambient colour, fog colour and density and ambience audio. |
| [`AtmosphereManager.ResolveAtmosphere`](/game-api/types/alta-world/atmospheremanager-resolveatmosphere) | delegate |  | 0 |  |
| [`AtmospherePlugin`](/game-api/types/alta-world/atmosphereplugin) | abstract class | `MonoBehaviour` | 18 |  |
| [`AtmosphereSet`](/game-api/types/alta-world/atmosphereset) | class | `ScriptableObject` | 6 | [Time and environment](../world/time-and-environment.md): A set of colours, fog and audio. A chunk's `Environment.OverrideSet` can force one. |
| [`AtmosphereSet.Create`](/game-api/types/alta-world/atmosphereset-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<AtmosphereSet>` | 0 |  |
| [`AtmosphereShaderVariables`](/game-api/types/alta-world/atmosphereshadervariables) | internal static class |  | 0 |  |
| [`BorderDefinedAtmosphere`](/game-api/types/alta-world/borderdefinedatmosphere) | class | `MonoBehaviour` | 0 | [Time and environment](../world/time-and-environment.md) |
| [`CaveAmbience`](/game-api/types/alta-world/caveambience) | class | `AtmospherePlugin` | 4 | [Time and environment](../world/time-and-environment.md) |
| [`CycleAttribute`](/game-api/types/alta-world/cycleattribute) | abstract class | `PropertyAttribute` | 0 |  |
| [`DayTimeEffect`](/game-api/types/alta-world/daytimeeffect) | class | `MonoBehaviour` | 0 |  |
| [`DayTimeManager`](/game-api/types/alta-world/daytimemanager) | class | `AtmospherePlugin` | 15 | [Time and environment](../world/time-and-environment.md): The sun and moon from `GameTimeManager`'s day and month progress, and the day's ambience and fog. Handles `FixedDaytime`. |
| [`DayTimeManager.ChangedState`](/game-api/types/alta-world/daytimemanager-changedstate) | delegate |  | 0 |  |
| [`ForestAmbience`](/game-api/types/alta-world/forestambience) | class | `AtmospherePlugin` | 4 | [Time and environment](../world/time-and-environment.md) |
| [`ForestDefinedAtmosphere`](/game-api/types/alta-world/forestdefinedatmosphere) | class | `NetworkEntityBehaviour` | 1 | [Time and environment](../world/time-and-environment.md) |
| [`FullCycle`](/game-api/types/alta-world/fullcycle) | class | `CycleAttribute` | 0 |  |
| [`HalfCycle`](/game-api/types/alta-world/halfcycle) | class | `CycleAttribute` | 0 |  |
| [`LerpDelegate`](/game-api/types/alta-world/lerpdelegate) | delegate |  | 0 |  |
| [`Notification`](/game-api/types/alta-world/notification) | delegate |  | 0 |  |
| [`PrefabSceneDayTimeManager`](/game-api/types/alta-world/prefabscenedaytimemanager) | class | `MonoBehaviour` | 0 | [Time and environment](../world/time-and-environment.md) |
| [`PrefabSceneSettings`](/game-api/types/alta-world/prefabscenesettings) | class | `ScriptableObject` | 27 | [Time and environment](../world/time-and-environment.md) |
| [`PrefabSceneSettings.Prefab_Scene_Settings`](/game-api/types/alta-world/prefabscenesettings-prefab_scene_settings) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<PrefabSceneSettings>` | 0 |  |
| [`QuarterCycle`](/game-api/types/alta-world/quartercycle) | class | `CycleAttribute` | 0 |  |
| [`SpaceAtmosphereTrigger`](/game-api/types/alta-world/spaceatmospheretrigger) | class | `MonoBehaviour` | 0 |  |
| [`SpaceDefinedAtmosphere`](/game-api/types/alta-world/spacedefinedatmosphere) | class | `SpaceDefinedAttribute<AmbienceSpacePoint>` | 1 | [Time and environment](../world/time-and-environment.md) |

## Alta.Environmental.Vegetation

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClumpSpawner`](/game-api/types/alta-world/clumpspawner) | class | `MonoBehaviour` | 0 |  |
| [`ClumpSpawner.ClumpLOD`](/game-api/types/alta-world/clumpspawner-clumplod) | class |  | 4 |  |
| [`GrassBlade`](/game-api/types/alta-world/grassblade) | class | `MonoBehaviour` | 4 |  |
| [`GrassBladeLODMarker`](/game-api/types/alta-world/grassbladelodmarker) | class | `MonoBehaviour` | 1 |  |
| [`GrassBladeMesh`](/game-api/types/alta-world/grassblademesh) | class | `ScriptableObject` | 5 |  |
| [`GrassBladeMesh.Create`](/game-api/types/alta-world/grassblademesh-create) | class | `AltaMenuItemBase.Assets.Create.Township.Generation.Grass.ScriptableObject<GrassBladeMesh>` | 0 |  |
| [`GrassClump`](/game-api/types/alta-world/grassclump) | class | `MonoBehaviour` | 1 |  |
| [`GrassClumpHolder`](/game-api/types/alta-world/grassclumpholder) | class | `MonoBehaviour` | 4 |  |
| [`GrassEditorHolder`](/game-api/types/alta-world/grasseditorholder) | class | `MonoBehaviour` | 8 |  |
| [`GrassManager`](/game-api/types/alta-world/grassmanager) | class | `NetworkEntityBehaviour` | 9 |  |
| [`LocalWindManager`](/game-api/types/alta-world/localwindmanager) | class | `MonoBehaviour` | 5 |  |
| [`ProceduralBladeTemplate`](/game-api/types/alta-world/proceduralbladetemplate) | class | `ScriptableObject` | 5 |  |
| [`WindShaderVariables`](/game-api/types/alta-world/windshadervariables) | internal static class |  | 0 |  |

## Alta.Lighting

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AndroidLightsController`](/game-api/types/alta-world/androidlightscontroller) | class | `BaseLightsController` | 0 |  |
| [`BaseLightsController`](/game-api/types/alta-world/baselightscontroller) | abstract class |  | 3 |  |
| [`ISortedLight`](/game-api/types/alta-world/isortedlight) | internal interface |  | 3 |  |
| [`LightSorter<T>`](/game-api/types/alta-world/lightsorter-t) | internal class |  | 5 |  |
| [`PCLightsController`](/game-api/types/alta-world/pclightscontroller) | class | `BaseLightsController` | 2 |  |
| [`PlatformLight`](/game-api/types/alta-world/platformlight) | class | `MonoBehaviour`, `IBuildRendererPostBake`, `IBuildBakeable` | 13 |  |
| [`PlatformLightsAndroidUtilities`](/game-api/types/alta-world/platformlightsandroidutilities) | static class |  | 3 |  |

## Alta.Map

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClientLandmarkManager`](/game-api/types/alta-world/clientlandmarkmanager) | class |  | 4 |  |
| [`ClientLandmarkManager.MarkerEvent`](/game-api/types/alta-world/clientlandmarkmanager-markerevent) | delegate |  | 0 |  |
| [`DiscoveryState`](/game-api/types/alta-world/discoverystate) | enum |  | 3 |  |
| [`InfoBoard`](/game-api/types/alta-world/infoboard) | class | `NetworkEntityBehaviour`, `ISavable<InfoBoardSaveData>`, `ISavableSave<InfoBoardSaveData>`, +1 more | 4 |  |
| [`InfoBoardSaveData`](/game-api/types/alta-world/infoboardsavedata) | class | `NewSaveData<InfoBoard, InfoBoardSaveData>` | 1 |  |
| [`Landmark`](/game-api/types/alta-world/landmark) | class | `NetworkEntityBehaviour`, `ISavable<LandmarkSaveData>`, `ISavableSave<LandmarkSaveData>`, +1 more | 14 |  |
| [`LandmarkDiscoverZone`](/game-api/types/alta-world/landmarkdiscoverzone) | class | `NetworkEntityBehaviour`, `ISavable<LandmarkDiscoverZoneSaveData>`, `ISavableSave<LandmarkDiscoverZoneSaveData>`, +1 more | 1 |  |
| [`LandmarkDiscoverZoneSaveData`](/game-api/types/alta-world/landmarkdiscoverzonesavedata) | class | `NewSaveData<LandmarkDiscoverZone, LandmarkDiscoverZoneSaveData>` | 1 |  |
| [`LandmarkIcon`](/game-api/types/alta-world/landmarkicon) | class | `HashedGeneralValue<LandmarkIcon>` | 2 |  |
| [`LandmarkManager`](/game-api/types/alta-world/landmarkmanager) | class | `SingletonBehaviour<LandmarkManager>`, `INetworkEntityBehaviour`, `ISavable<LandmarkManagerSaveData>`, +2 more | 9 |  |
| [`LandmarkManagerSaveData`](/game-api/types/alta-world/landmarkmanagersavedata) | class | `NewSaveData<LandmarkManager, LandmarkManagerSaveData>` | 1 |  |
| [`LandmarkSaveData`](/game-api/types/alta-world/landmarksavedata) | class | `NewSaveData<Landmark, LandmarkSaveData>` | 7 |  |
| [`LandmarkSaveFormat`](/game-api/types/alta-world/landmarksaveformat) | class | `IAltaFileFormat` | 6 |  |
| [`Map`](/game-api/types/alta-world/map) | class | `HashedGeneralValue<Map>` | 7 | [Map and landmarks](../world/map-and-landmarks.md): The map is a set of pieces players uncover as they explore, plus landmarks (icons) they become aware of and then discover. |
| [`MapBoard`](/game-api/types/alta-world/mapboard) | class | `NetworkEntityBehaviour`, `ISavable<MapBoardSaveData1>`, `ISavableSave<MapBoardSaveData1>`, +1 more | 10 |  |
| [`MapBoardDirectRenderer`](/game-api/types/alta-world/mapboarddirectrenderer) | class | `MonoBehaviour` | 0 |  |
| [`MapBoardRenderer`](/game-api/types/alta-world/mapboardrenderer) | class | `MonoBehaviour` | 0 |  |
| [`MapBoardSaveData1`](/game-api/types/alta-world/mapboardsavedata1) | class | `NewSaveData<MapBoard, MapBoardSaveData1>` | 4 |  |
| [`MapLandmarkDisplay`](/game-api/types/alta-world/maplandmarkdisplay) | class | `NetworkEntityBehaviour` | 3 |  |
| [`MapManager`](/game-api/types/alta-world/mapmanager) | class | `NetworkEntityBehaviour` | 8 | [Map and landmarks](../world/map-and-landmarks.md): Scene behaviour, `static MapManager Instance`. Holds each player's `PlayerMapManager`, or one shared one if `IsUsingSharedMap`. |
| [`MapPiece`](/game-api/types/alta-world/mappiece) | class | `HashedGeneralValue<MapPiece>` | 2 | [Map and landmarks](../world/map-and-landmarks.md): One piece: a `Sprite` and an `Offset`. |
| [`MapSaveFormat`](/game-api/types/alta-world/mapsaveformat) | class | `IAltaFileFormat` | 5 |  |
| [`MarkerInfo`](/game-api/types/alta-world/markerinfo) | class |  | 8 |  |
| [`MovingLandmark`](/game-api/types/alta-world/movinglandmark) | class | `Landmark` | 0 |  |
| [`OldLandmarkSaveData1`](/game-api/types/alta-world/oldlandmarksavedata1) | class | `OldSaveData` | 7 |  |
| [`PlayerDataFileHelper<T>`](/game-api/types/alta-world/playerdatafilehelper-t) | class |  | 5 |  |
| [`PlayerLandmark`](/game-api/types/alta-world/playerlandmark) | class | `MovingLandmark` | 1 |  |
| [`PlayerLandmarkMode`](/game-api/types/alta-world/playerlandmarkmode) | enum |  | 3 |  |
| [`PlayerMapManager`](/game-api/types/alta-world/playermapmanager) | class |  | 7 | [Map and landmarks](../world/map-and-landmarks.md): One player's discovered pieces. `IsThisMapPieceDiscovered(Map, int)`, `GetUndiscoveredMapPieces(Map)`, `DiscoverPiece(Map, int)`. |
| [`ServerClientLandmarkManager`](/game-api/types/alta-world/serverclientlandmarkmanager) | class |  | 10 |  |
| [`ServerLandmarkManager`](/game-api/types/alta-world/serverlandmarkmanager) | class |  | 13 |  |
| [`StaticAchievementTrigger`](/game-api/types/alta-world/staticachievementtrigger) | class | `MonoBehaviour` | 0 |  |

## Alta.Saving

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BasicSaveDataWrapper<TData>`](/game-api/types/alta-world/basicsavedatawrapper-tdata) | class |  | 6 |  |
| [`BasicSaveFile<T>`](/game-api/types/alta-world/basicsavefile-t) | class | `IAltaFileFormat` | 8 |  |
| [`ChunkVersioning`](/game-api/types/alta-world/chunkversioning) | class |  | 15 |  |
| [`ISavableSave<out T>`](/game-api/types/alta-world/isavablesave-outt) | interface | `ISavableSaveBase` | 1 |  |
| [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase) | interface |  | 1 |  |
| [`SavableCache`](/game-api/types/alta-world/savablecache) | static class |  | 3 |  |
| [`SaveData`](/game-api/types/alta-world/savedata) | abstract class |  | 2 |  |
| [`SavingSystem`](/game-api/types/alta-world/savingsystem) | static class |  | 11 |  |
| [`SavingSystem.Reinitialize_Saving`](/game-api/types/alta-world/savingsystem-reinitialize_saving) | class | `AltaMenuItemBase.Tools.Reboot` | 0 |  |
| [`SavingSystem.SavingSetup`](/game-api/types/alta-world/savingsystem-savingsetup) | class |  | 13 |  |
| [`SavingSystem.VersionSetup`](/game-api/types/alta-world/savingsystem-versionsetup) | class |  | 4 |  |

## Alta.Static

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CacheFileFormat`](/game-api/types/alta-world/cachefileformat) | class | `IAltaFileFormat` | 11 |  |
| [`CacheManager`](/game-api/types/alta-world/cachemanager) | abstract class |  | 6 | [Static objects](../world/static-objects.md): Generates or loads cached data by name (`GetCache`). |
| [`ClientCacheManager`](/game-api/types/alta-world/clientcachemanager) | class | `CacheManager` | 5 |  |
| [`ICacheable`](/game-api/types/alta-world/icacheable) | interface |  | 2 |  |
| [`IInstructionResult`](/game-api/types/alta-world/iinstructionresult) | interface |  | 1 |  |
| [`IndexedScriptableObject`](/game-api/types/alta-world/indexedscriptableobject) | abstract class | `ScriptableObject` | 2 |  |
| [`Instruction`](/game-api/types/alta-world/instruction) | abstract class |  | 5 | [Static objects](../world/static-objects.md): Subclasses include `SpawnInstruction` (place a `StaticEnvironmentPiece` at a position, rotation and scale) and the forest's own instructions. |
| [`Instruction.Type`](/game-api/types/alta-world/instruction-type) | enum |  | 4 |  |
| [`InstructionSet`](/game-api/types/alta-world/instructionset) | class | `ICacheable` | 8 | [Static objects](../world/static-objects.md): A list of `Instruction`s and the results of running them. Cached on disk. |
| [`IStaticEnvironmentPiecePool`](/game-api/types/alta-world/istaticenvironmentpiecepool) | interface |  | 1 |  |
| [`SpawnInstruction`](/game-api/types/alta-world/spawninstruction) | class | `Instruction` | 3 |  |
| [`StaticEnvironmentPiece`](/game-api/types/alta-world/staticenvironmentpiece) | class | `IndexedScriptableObject`, `ICollisionStandard`, `IStaticEnvironmentPiecePool` | 5 | [Static objects](../world/static-objects.md): A `ScriptableObject` with an index, a surface material and a `StaticEnvironmentPieceInstance` prefab. `Spawn(position, rotation, scale)` makes one. |
| [`StaticEnvironmentPiece.Create`](/game-api/types/alta-world/staticenvironmentpiece-create) | class | `AltaMenuItemBase.Assets.Create.Township.Environmental.ScriptableObject<StaticEnvironmentPiece>` | 0 |  |
| [`StaticEnvironmentPieceInstance`](/game-api/types/alta-world/staticenvironmentpieceinstance) | class | `MonoBehaviour`, `ICollisionStandard`, `IInstructionResult`, +1 more | 7 |  |
