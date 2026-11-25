---
title: Utilities and other Alta namespaces
description: "Types in Alta, Alta.Utilities and the remaining small Alta namespaces of Root.Township."
sidebar_position: 13
---

# Utilities and other Alta namespaces

Types in Alta, Alta.Utilities and the remaining small Alta namespaces of Root.Township. 206 types, 6 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CurveRange<T>` | class | `DoubleValue<T>` | 4 |  |
| `CurveValue<T>` | class |  | 4 |  |
| `DoubleValue<T>` | class | `SingleValue<T>` | 3 |  |
| `FileDownload` | class |  | 6 |  |
| `ICollisionStandard` | interface |  | 1 |  |
| `IDisableOnSimpleServer` | interface |  | 1 |  |
| `Math2d` | static class |  | 1 |  |
| `MathfOperation` | static class |  | 6 |  |
| `Operation` | delegate |  | 0 |  |
| `OperationType` | enum |  | 7 |  |
| `SerializeHashedObject` | static class |  | 3 |  |
| `SimpleHashedGeneralValue<T>` | abstract class | `HashedGeneralValue<T>`, `IDisableOnSimpleServer` | 2 |  |
| `SingleValue<T>` | class |  | 4 |  |
| `StatDefinitionConverter` | class | `HashedGeneralValueConverter<StatDefinition>` | 0 |  |
| `SurfaceMaterial` | class | `ScriptableObject` | 0 |  |
| `SurfaceMaterial.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Environmental.ScriptableObject<SurfaceMaterial>` | 0 |  |

## Alta.AssetBaking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AssetBakingSettings` | static class |  | 5 |  |
| `CachedDirectory` | class |  | 3 |  |

## Alta.Bezier

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Bezier` | static class |  | 4 |  |
| `BezierSpline` | class | `MonoBehaviour`, `IInstructionResult` | 19 |  |
| `ItemModifier` | abstract class | `SplineDisplayModifier` | 2 |  |
| `Skip` | class | `ItemModifier`, `IIgnoreForStaticFlatten`, `IDontSplit` | 1 |  |
| `SplineChangedHandler` | delegate |  | 0 |  |
| `SplineCylinder` | class | `SplineDisplay` | 0 |  |
| `SplineDecorator` | class | `SplineDisplay` | 1 |  |
| `SplineDecorator.ForwardMode` | enum |  | 2 |  |
| `SplineDecorator.Part` | struct |  | 5 |  |
| `SplineDecorator.RotationMode` | enum |  | 4 |  |
| `SplineDecorator.ScaleMode` | enum |  | 2 |  |
| `SplineDecorator.UpMode` | enum |  | 2 |  |
| `SplineDisplay` | abstract class | `MonoBehaviour`, `IBakeable` | 5 |  |
| `SplineDisplayModifier` | abstract class | `MonoBehaviour`, `IDestroyOnBake` | 0 |  |
| `SplineMesh` | class | `SplineDisplay` | 0 |  |
| `WedgeChooser` | class | `ItemModifier` | 2 |  |
| `WedgeChooser.Wedge` | class |  | 5 |  |

## Alta.Rendering

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `MaterialInstance` | class | `IDisposable` | 4 |  |
| `MaterialInstanceGroup` | class | `IDisposable`, `IReadOnlyCollection<MaterialInstance>`, `IEnumerable<MaterialInstance>`, +1 more | 4 |  |

## Alta.UnityWrappers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `UnityQualitySettingsController` | static class |  | 1 |  |

## Alta.Utilities

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaContractResolver` | class | `DefaultContractResolver` | 1 |  |
| `AltaGizmos` | class |  | 2 |  |
| `AndroidExtensions` | static class |  | 1 |  |
| `AsyncPump` | static class |  | 2 |  |
| `AvailablePlayerSaveData` | class |  | 0 |  |
| `AvailablePlayerSaveData.Available` | enum |  | 3 |  |
| `BakeLODGroupGrouper` | class | `MonoBehaviour`, `IBakeable` | 2 |  |
| `BoolSettingValue` | class |  | 1 |  |
| `BuildVersionException` | class | `Exception` | 1 |  |
| `BuildVersionExtensions` | static class |  | 2 |  |
| `ChunkSaveFormat` | class | `IAltaFileFormat` | 13 |  |
| `ChunkSaveFormat.Version` | class |  | 5 |  |
| `ColorMaterialProperty` | class | `MaterialProperty<Color>` | 3 |  |
| `CorruptPlayerSaveFileException` | internal class | `PlayerSaveException` | 2 |  |
| `CursorUtilities` | static class |  | 1 |  |
| `DamagePopup` | class | `TextPopup` | 3 | [Items, interaction and damage](../items/overview.md) |
| `DatabaseSettingsFile` | class | `IAltaFile` | 20 |  |
| `DebuggingCollection<T>` | class | `IEnumerable`, `ICollection<T>`, `IEnumerable<T>` | 9 |  |
| `DebuggingCollection<T>.DebuggingCollectionEnumerator<TInnerType>` | class | `IEnumerator<TInnerType>`, `IEnumerator`, `IDisposable` | 6 |  |
| `DevOnlyAttribute` | class | `Attribute` | 0 |  |
| `DynamicPhysicsTimeSet` | class |  | 1 |  |
| `EnumFloatGameSettingsAccess` | class | `FloatGameSettingsAccess` | 2 |  |
| `EnumFloatGameSettingsAccess.CreateEnum` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<EnumFloatGameSettingsAccess>` | 0 |  |
| `EnumGameSettingAccess` | class | `EnumSettingAccess` | 3 |  |
| `EnumGameSettingAccess.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<EnumGameSettingAccess>` | 0 |  |
| `EnumSettingAccess` | abstract class | `StringGameSettingsAccess` | 1 |  |
| `FloatGameSettingsAccess` | class | `SettingsFieldAccess<float>` | 0 |  |
| `FloatGameSettingsAccess.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<FloatGameSettingsAccess>` | 0 |  |
| `FloatMaterialProperty` | class | `MaterialProperty<float>` | 3 |  |
| `ForwardedList<T>` | class | `IListenedList<T>`, `IEnumerable<T>`, `IEnumerable` | 9 |  |
| `GameSettings` | class | `Settings`, `ICloneable` | 37 | [Settings and files](../console-and-utilities/settings-and-files.md#gamesettings): Marked `[Obsolete("Use GlobalConstants instead.")]`, but it's still what `GameConfig` holds and the game still reads it everywhere. |
| `GeneralDelegates` | static class |  | 0 |  |
| `GeneralDelegates.BoolUpdater` | delegate |  | 0 |  |
| `GeneralDelegates.ValueUpdater` | delegate |  | 0 |  |
| `GeometryHelperMethods` | static class |  | 1 |  |
| `IIgnoreForStaticFlatten` | interface | `IDontSplit` | 0 |  |
| `IListenedList<T>` | interface | `IEnumerable<T>`, `IEnumerable` | 7 |  |
| `IntGameSettingsAccess` | class | `SettingsFieldAccess<int>` | 0 |  |
| `IntGameSettingsAccess.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<IntGameSettingsAccess>` | 0 |  |
| `ISettingsFieldAccess` | interface |  | 3 |  |
| `ISpawnArguments` | interface |  | 1 |  |
| `JsonAltaFormat<T>` | class | `IAltaFileFormat` | 4 |  |
| `JsonMaxAttribute` | class | `JsonPropertyFilterAttribute` | 2 |  |
| `JsonMaxValueProvider` | class | `JsonRangeValueProviderFilter<float>` | 2 |  |
| `JsonMinAttribute` | class | `JsonPropertyFilterAttribute` | 2 |  |
| `JsonMinValueProvider` | class | `JsonRangeValueProviderFilter<float>` | 2 |  |
| `JsonPropertyFilterAttribute` | abstract class | `Attribute` | 2 |  |
| `JsonRangeAttribute` | class | `JsonPropertyFilterAttribute` | 2 |  |
| `JsonRangeFloatAttribute` | class | `JsonPropertyFilterAttribute` | 2 |  |
| `JsonRangeFloatValueProvider` | class | `JsonRangeValueProviderFilter<float>` | 2 |  |
| `JsonRangeValueProvider` | class | `JsonRangeValueProviderFilter<int>` | 2 |  |
| `JsonRangeValueProviderFilter<T>` | abstract class | `IValueProvider` | 4 |  |
| `LandmarkCandidateFinder` | class | `MonoBehaviour` | 0 |  |
| `LauncherSettings` | class | `Settings`, `ICloneable` | 1 |  |
| `LerpingControlledFloatValue` | class |  | 12 |  |
| `LerpingFloatGetValue` | class |  | 8 |  |
| `LerpingFloatValue` | class |  | 10 |  |
| `LerpingValue<T>` | abstract class |  | 9 |  |
| `Line` | struct |  | 3 |  |
| `ListenedList<T>` | class | `IListenedList<T>`, `IEnumerable<T>`, `IEnumerable`, +1 more | 12 |  |
| `ListItemChangedHandler<T>` | delegate |  | 0 |  |
| `LoggingWatch` | class |  | 4 |  |
| `MaterialProperty<T>` | abstract class |  | 3 |  |
| `MaterialPropertyBlockSettings<T>` | class | `HashedGeneralValue<T>` | 0 |  |
| `MeshFilterExtensions` | static class |  | 1 |  |
| `MicrophoneEnumSettingAccess` | class | `EnumSettingAccess` | 3 |  |
| `PlayerSave` | class | `IAltaFileFormat` | 20 |  |
| `PlayerSaveData` | class | `HashedGeneralValue<PlayerSaveData>` | 2 | [Saving](../networking/saving.md): The starting inventory for new players (`InitialPlayerInventory` in the settings picks which). |
| `PlayerSaveData.Create` | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<PlayerSaveData>` | 0 |  |
| `PlayerSaveException` | internal abstract class | `Exception` | 2 |  |
| `PlayerSaveFileData` | class | `BasicSaveData<PlayerSaveFileData>` | 2 |  |
| `PlayerSaveFileData1` | class | `OldSaveData` | 3 |  |
| `PlayerSaveFileData2` | class | `OldSaveData` | 3 |  |
| `PlayerSaveUtility` | class |  | 4 |  |
| `PlayerSmoothingLevel` | enum |  | 2 |  |
| `RotateOverTime` | class | `TransformScriptAnimation`, `IIgnoreForStaticFlatten`, `IDontSplit` | 0 |  |
| `Screenshot` | class |  | 8 |  |
| `ScriptHelper` | abstract class | `MonoBehaviour` | 0 |  |
| `ServerSaveUtility` | class |  | 12 |  |
| `ServerSettings` | class | `Settings`, `ICloneable` | 49 | [Server settings](../networking/server-settings.md#serversettings), [Server settings](../../tavernlib-api/config/server-settings.md#serversettings): All instance properties with public getters and setters. Default values from the code. |
| `SetRenderQueue` | class | `MonoBehaviour` | 0 |  |
| `SettingBasedToggler` | class | `MonoBehaviour` | 0 |  |
| `SettingsFieldAccess` | class | `ScriptableObject`, `ISettingsFieldAccess` | 7 |  |
| `SettingsFieldAccess<TFieldType>` | abstract class | `SettingsFieldAccess` | 4 |  |
| `SettingsFileAccess<TSettings>` | class | `ISettingsFileAccess`, `ISettings` | 12 | [Settings and files](../console-and-utilities/settings-and-files.md#settingsfileaccess): When it's made it: |
| `SettingsFilesHandler` | static class |  | 0 |  |
| `SettingsManager` | class | `ISettingsManager` | 5 | [Settings and files](../console-and-utilities/settings-and-files.md#settingsmanager): Static members, plus an instance that VContainer hands out as `ISettingsManager`. |
| `SettingType` | enum |  | 6 |  |
| `Show_Workspace` | class | `AltaMenuItemBase.Township.Utility` | 0 |  |
| `SortedEnumerator<T>` | class | `IEnumerator<T>`, `IEnumerator`, `IDisposable` | 6 |  |
| `SortedList<T>` | class | `IEnumerable<T>`, `IEnumerable` | 7 |  |
| `SpawnPoint` | struct |  | 2 |  |
| `StringGameSettingsAccess` | class | `SettingsFieldAccess<string>` | 0 |  |
| `StringGameSettingsAccess.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<StringGameSettingsAccess>` | 0 |  |
| `StringSettingValue` | class |  | 1 |  |
| `TargetChangedHandler<T>` | delegate |  | 0 |  |
| `TextPopup` | class | `MonoBehaviour` | 3 |  |
| `TimelineExtension` | static class |  | 2 |  |
| `ToggleGameSettingAccess` | class | `SettingsFieldAccess<bool>` | 0 |  |
| `ToggleGameSettingAccess.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<ToggleGameSettingAccess>` | 0 |  |
| `Vector3MaterialProperty` | class | `MaterialProperty<Vector3>` | 3 |  |
| `VertexColorUtility` | static class |  | 1 |  |
| `WorldLandmarkConfig` | class |  | 1 |  |
| `WorldLandmarkConfigMarker` | class | `MonoBehaviour` | 0 |  |
| `WorldLandmarkMarker` | class | `WorldLandmarkConfigMarker` | 0 |  |

## Alta.Utilities.Atlas

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AtlasDefinition` | class | `ScriptableObject` | 28 |  |
| `AtlasDefinition.AtlasedMaterial` | class |  | 6 |  |
| `AtlasSettings` | class | `ScriptableObject` | 4 |  |
| `AtlasTarget` | enum |  | 2 |  |
| `AtlasType` | enum |  | 5 |  |
| `BasicBlit` | internal class | `ShaderBlit` | 1 |  |
| `IPreventAtlasing` | interface |  | 1 |  |
| `IPreventNoLongerReadable` | interface |  | 1 |  |
| `MaterialRect` | struct |  | 6 |  |
| `MeshFilterExtensions` | static class |  | 1 |  |
| `MetalNonForgingBlit` | internal class | `ShaderBlit` | 1 |  |
| `NoWindFoliageRampLerp3Blit` | internal class | `ShaderBlit` | 1 |  |
| `PreventAtlas` | class | `MonoBehaviour`, `IPreventAtlasing` | 0 |  |
| `RampLerp3Blit` | internal class | `ShaderBlit` | 1 |  |
| `RampLerp_CosmeticTestBlit` | internal class | `ShaderBlit` | 1 |  |
| `RampLerpBlit` | internal class | `ShaderBlit` | 1 |  |
| `RampLerpNoCullCutoutBlit` | internal class | `ShaderBlit` | 1 |  |
| `Scale` | enum |  | 5 |  |
| `ShaderBlit` | internal abstract class |  | 1 |  |
| `SimpleStandardBlit` | internal class | `ShaderBlit` | 1 |  |
| `StandardHeatBlit` | internal class | `ShaderBlit` | 1 |  |
| `UVFixType` | enum |  | 2 |  |
| `WindFoliageBlit` | internal class | `ShaderBlit` | 1 |  |
| `WindFoliageRampLerp3Blit` | internal class | `ShaderBlit` | 1 |  |
| `WindFoliageTextureSwayBlit` | internal class | `ShaderBlit` | 1 |  |
| `WindFoliageVertexColorBlit` | internal class | `ShaderBlit` | 1 |  |
| `WindFoliageVertexColorColorRampBlit` | internal class | `ShaderBlit` | 1 |  |

## Alta.Utilities.Hierarchy

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaHierarchyData` | class | `ScriptableObject` | 5 |  |
| `AltaHierarchyData.Pocket` | class |  | 2 |  |

## Alta.Utilities.Profiling

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ChunkDisplay` | class | `LiveDataDisplayBase` | 1 |  |
| `FpsDisplay` | class | `LiveDataDisplayBase` | 0 |  |
| `GraphicsLevelDisplay` | class | `LiveDataDisplayBase` | 1 |  |
| `LastCombatHit` | class | `LiveDataDisplayBase` | 2 |  |
| `LiveDataDisplayBase` | abstract class | `ScriptableObject` | 6 |  |
| `LiveDataDisplayCollection` | class | `ScriptableObject` | 1 |  |
| `LiveDataDisplayView` | class | `MonoBehaviour` | 1 |  |
| `NetworkBytesDisplay` | class | `LiveDataDisplayBase` | 2 |  |
| `NetworkMessagesDisplay` | class | `LiveDataDisplayBase` | 2 |  |
| `NetworkPacketsDisplay` | class | `LiveDataDisplayBase` | 2 |  |
| `PingDisplay` | class | `LiveDataDisplayBase` | 2 |  |
| `PlayerCountDisplay` | class | `LiveDataDisplayBase` | 0 |  |
| `ServerDiagnosticsDisplay` | class | `LiveDataDisplayBase` | 3 |  |
| `ServerFpsDisplay` | class | `LiveDataDisplayBase` | 0 |  |
| `TotalDamageDisplay` | class | `LiveDataDisplayBase` | 0 |  |

## Alta.Utilities.Profiling.NetworkTransportMetrics

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ConnectionChannelStatistic` | class | `NetworkingStatistic` | 2 |  |
| `ConnectionChannelStatistics` | class | `NetworkingStatisticsList<ConnectionChannelStatistic, KeyValuePair<ConnectionChannel, ConnectionChannelStatistic>>` | 1 |  |
| `INetworkStatistic` | interface |  | 4 |  |
| `INetworkStatisticCollection` | interface |  | 4 |  |
| `NetworkingProfiler` | class | `SingletonBehaviour<NetworkingProfiler>` | 2 |  |
| `NetworkingStatistic` | class | `INetworkStatistic` | 9 |  |
| `NetworkingStatisticsList<T>` | abstract class | `INetworkStatisticCollection` | 6 |  |
| `NetworkingStatisticsList<TStatistic, TInternalObject>` | class | `NetworkingStatisticsList<TStatistic>` | 1 |  |
| `NetworkingStatisticsListNonSerialized<T>` | abstract class | `INetworkStatisticCollection` | 6 |  |
| `NetworkStatisticWithIncomingPackets` | abstract class | `NetworkTransportStatistic` | 2 |  |
| `NetworkTransportConnectionStatistic` | class | `NetworkStatisticWithIncomingPackets` | 4 |  |
| `NetworkTransportCountStatisticField` | class | `NetworkTransportStatisticField` | 2 |  |
| `NetworkTransportHostStatistic` | class | `NetworkTransportStatistic` | 5 |  |
| `NetworkTransportOverallStatistics` | class | `NetworkStatisticWithIncomingPackets` | 1 |  |
| `NetworkTransportStatistic` | abstract class | `INetworkStatisticCollection` | 6 |  |
| `NetworkTransportStatisticField` | class | `INetworkStatistic` | 9 |  |
| `NetworkTransportStatisticType` | enum |  | 2 |  |

## Alta.Utilities.Profiling.NetworkTransportMetrics.ABTesting

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ServerPingProfiler` | class | `NetworkEntityBehaviour` | 3 |  |

## Alta.Utility.Graphics

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `GraphicsSettingsController` | static class |  | 2 |  |
