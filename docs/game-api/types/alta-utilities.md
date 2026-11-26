---
title: Utilities and other Alta namespaces
description: "Types in Alta, Alta.Utilities and the remaining small Alta namespaces of Root.Township."
sidebar_position: 13
---

# Utilities and other Alta namespaces

Types in Alta, Alta.Utilities and the remaining small Alta namespaces of Root.Township. 206 types, 6 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CurveRange<T>`](/game-api/types/alta-utilities/curverange-t) | class | `DoubleValue<T>` | 4 |  |
| [`CurveValue<T>`](/game-api/types/alta-utilities/curvevalue-t) | class |  | 4 |  |
| [`DoubleValue<T>`](/game-api/types/alta-utilities/doublevalue-t) | class | `SingleValue<T>` | 3 | A `SingleValue<T>` with a second float value. |
| [`FileDownload`](/game-api/types/alta-utilities/filedownload) | class |  | 6 |  |
| [`ICollisionStandard`](/game-api/types/alta-utilities/icollisionstandard) | interface |  | 1 |  |
| [`IDisableOnSimpleServer`](/game-api/types/alta-utilities/idisableonsimpleserver) | interface |  | 1 |  |
| [`Math2d`](/game-api/types/alta-utilities/math2d) | static class |  | 1 |  |
| [`MathfOperation`](/game-api/types/alta-utilities/mathfoperation) | static class |  | 6 |  |
| [`Operation`](/game-api/types/alta-utilities/operation) | delegate |  | 0 |  |
| [`OperationType`](/game-api/types/alta-utilities/operationtype) | enum |  | 7 | How to combine two floats, turned into a function by `MathfOperation.GetOperation`: Set (take the new value), Max, Min, Add, Subtract, Multiply, or Multiply1Minus (`a * (1 - b)`). |
| [`SerializeHashedObject`](/game-api/types/alta-utilities/serializehashedobject) | static class |  | 3 |  |
| [`SimpleHashedGeneralValue<T>`](/game-api/types/alta-utilities/simplehashedgeneralvalue-t) | abstract class | `HashedGeneralValue<T>`, `IDisableOnSimpleServer` | 2 |  |
| [`SingleValue<T>`](/game-api/types/alta-utilities/singlevalue-t) | class |  | 4 | A serializable pair of an object and a float, for inspector lists of weighted or scored things. |
| [`StatDefinitionConverter`](/game-api/types/alta-utilities/statdefinitionconverter) | class | `HashedGeneralValueConverter<StatDefinition>` | 0 |  |
| [`SurfaceMaterial`](/game-api/types/alta-utilities/surfacematerial) | class | `ScriptableObject` | 0 | Empty marker asset naming a surface type. Static environment pieces and `ICollisionStandard` objects expose one as their `Material`. |
| [`SurfaceMaterial.Create`](/game-api/types/alta-utilities/surfacematerial-create) | class | `AltaMenuItemBase.Assets.Create.Township.Environmental.ScriptableObject<SurfaceMaterial>` | 0 |  |

## Alta.AssetBaking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AssetBakingSettings`](/game-api/types/alta-utilities/assetbakingsettings) | static class |  | 5 |  |
| [`CachedDirectory`](/game-api/types/alta-utilities/cacheddirectory) | class |  | 3 |  |

## Alta.Bezier

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Bezier`](/game-api/types/alta-utilities/bezier) | static class |  | 4 |  |
| [`BezierSpline`](/game-api/types/alta-utilities/bezierspline) | class | `MonoBehaviour`, `IInstructionResult` | 19 | A cubic Bezier spline component: control points in groups of three per curve, with free, aligned or mirrored handles and optional looping. Used by spline displays, terrain splines, forest spline instructions and some effects. |
| [`ItemModifier`](/game-api/types/alta-utilities/itemmodifier) | abstract class | `SplineDisplayModifier` | 2 |  |
| [`Skip`](/game-api/types/alta-utilities/skip) | class | `ItemModifier`, `IIgnoreForStaticFlatten`, `IDontSplit` | 1 |  |
| [`SplineChangedHandler`](/game-api/types/alta-utilities/splinechangedhandler) | delegate |  | 0 |  |
| [`SplineCylinder`](/game-api/types/alta-utilities/splinecylinder) | class | `SplineDisplay` | 0 |  |
| [`SplineDecorator`](/game-api/types/alta-utilities/splinedecorator) | class | `SplineDisplay` | 1 |  |
| [`SplineDecorator.ForwardMode`](/game-api/types/alta-utilities/splinedecorator-forwardmode) | enum |  | 2 |  |
| [`SplineDecorator.Part`](/game-api/types/alta-utilities/splinedecorator-part) | struct |  | 5 | One placement point that `SplineDecorator` works out along a spline before spawning an item there. |
| [`SplineDecorator.RotationMode`](/game-api/types/alta-utilities/splinedecorator-rotationmode) | enum |  | 4 |  |
| [`SplineDecorator.ScaleMode`](/game-api/types/alta-utilities/splinedecorator-scalemode) | enum |  | 2 |  |
| [`SplineDecorator.UpMode`](/game-api/types/alta-utilities/splinedecorator-upmode) | enum |  | 2 |  |
| [`SplineDisplay`](/game-api/types/alta-utilities/splinedisplay) | abstract class | `MonoBehaviour`, `IBakeable` | 5 | Base for something built along a parent `BezierSpline` (a mesh, fence and so on). It rebuilds when the spline changes and can be baked to remove itself. |
| [`SplineDisplayModifier`](/game-api/types/alta-utilities/splinedisplaymodifier) | abstract class | `MonoBehaviour`, `IDestroyOnBake` | 0 |  |
| [`SplineMesh`](/game-api/types/alta-utilities/splinemesh) | class | `SplineDisplay` | 0 |  |
| [`WedgeChooser`](/game-api/types/alta-utilities/wedgechooser) | class | `ItemModifier` | 2 |  |
| [`WedgeChooser.Wedge`](/game-api/types/alta-utilities/wedgechooser-wedge) | class |  | 5 | One choice in a `WedgeChooser`: prefabs for a spline piece that turns by a given angle, with optional mirrored versions for left turns. |

## Alta.Rendering

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`MaterialInstance`](/game-api/types/alta-utilities/materialinstance) | class | `IDisposable` | 4 |  |
| [`MaterialInstanceGroup`](/game-api/types/alta-utilities/materialinstancegroup) | class | `IDisposable`, `IReadOnlyCollection<MaterialInstance>`, `IEnumerable<MaterialInstance>`, +1 more | 4 |  |

## Alta.UnityWrappers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`UnityQualitySettingsController`](/game-api/types/alta-utilities/unityqualitysettingscontroller) | static class |  | 1 |  |

## Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaContractResolver`](/game-api/types/alta-utilities/altacontractresolver) | class | `DefaultContractResolver` | 1 |  |
| [`AltaGizmos`](/game-api/types/alta-utilities/altagizmos) | class |  | 2 |  |
| [`AndroidExtensions`](/game-api/types/alta-utilities/androidextensions) | static class |  | 1 |  |
| [`AsyncPump`](/game-api/types/alta-utilities/asyncpump) | static class |  | 2 |  |
| [`AvailablePlayerSaveData`](/game-api/types/alta-utilities/availableplayersavedata) | class |  | 0 |  |
| [`AvailablePlayerSaveData.Available`](/game-api/types/alta-utilities/availableplayersavedata-available) | enum |  | 3 |  |
| [`BakeLODGroupGrouper`](/game-api/types/alta-utilities/bakelodgroupgrouper) | class | `MonoBehaviour`, `IBakeable` | 2 |  |
| [`BoolSettingValue`](/game-api/types/alta-utilities/boolsettingvalue) | class |  | 1 |  |
| [`BuildVersionException`](/game-api/types/alta-utilities/buildversionexception) | class | `Exception` | 1 |  |
| [`BuildVersionExtensions`](/game-api/types/alta-utilities/buildversionextensions) | static class |  | 2 |  |
| [`ChunkSaveFormat`](/game-api/types/alta-utilities/chunksaveformat) | class | `IAltaFileFormat` | 13 | File format for one chunk's save: a list of versions, each with the chunk's own data and its saved objects. Shared by reference count. |
| [`ChunkSaveFormat.Version`](/game-api/types/alta-utilities/chunksaveformat-version) | class |  | 5 | One block of a chunk save file: the chunk data and saved objects written under one chunk versioning. A file holds one block per versioning that has data in it. |
| [`ColorMaterialProperty`](/game-api/types/alta-utilities/colormaterialproperty) | class | `MaterialProperty<Color>` | 3 | A colour shader property, looked up by name once, that can be set on a material or a property block. |
| [`CorruptPlayerSaveFileException`](/game-api/types/alta-utilities/corruptplayersavefileexception) | internal class | `PlayerSaveException` | 2 |  |
| [`CursorUtilities`](/game-api/types/alta-utilities/cursorutilities) | static class |  | 1 |  |
| [`DamagePopup`](/game-api/types/alta-utilities/damagepopup) | class | `TextPopup` | 3 | [Items, interaction and damage](../items/overview.md) |
| [`DatabaseSettingsFile`](/game-api/types/alta-utilities/databasesettingsfile) | class | `IAltaFile` | 20 | A settings "file" stored through the Alta web API's settings endpoint instead of on disk. Most file operations do nothing. |
| [`DebuggingCollection<T>`](/game-api/types/alta-utilities/debuggingcollection-t) | class | `IEnumerable`, `ICollection<T>`, `IEnumerable<T>` | 9 |  |
| [`DebuggingCollection<T>.DebuggingCollectionEnumerator<TInnerType>`](/game-api/types/alta-utilities/debuggingcollection-t-debuggingcollectionenumerator-tinnertype) | class | `IEnumerator<TInnerType>`, `IEnumerator`, `IDisposable` | 6 |  |
| [`DevOnlyAttribute`](/game-api/types/alta-utilities/devonlyattribute) | class | `Attribute` | 0 |  |
| [`DynamicPhysicsTimeSet`](/game-api/types/alta-utilities/dynamicphysicstimeset) | class |  | 1 |  |
| [`EnumFloatGameSettingsAccess`](/game-api/types/alta-utilities/enumfloatgamesettingsaccess) | class | `FloatGameSettingsAccess` | 2 |  |
| [`EnumFloatGameSettingsAccess.CreateEnum`](/game-api/types/alta-utilities/enumfloatgamesettingsaccess-createenum) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<EnumFloatGameSettingsAccess>` | 0 |  |
| [`EnumGameSettingAccess`](/game-api/types/alta-utilities/enumgamesettingaccess) | class | `EnumSettingAccess` | 3 |  |
| [`EnumGameSettingAccess.Create`](/game-api/types/alta-utilities/enumgamesettingaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<EnumGameSettingAccess>` | 0 |  |
| [`EnumSettingAccess`](/game-api/types/alta-utilities/enumsettingaccess) | abstract class | `StringGameSettingsAccess` | 1 |  |
| [`FloatGameSettingsAccess`](/game-api/types/alta-utilities/floatgamesettingsaccess) | class | `SettingsFieldAccess<float>` | 0 |  |
| [`FloatGameSettingsAccess.Create`](/game-api/types/alta-utilities/floatgamesettingsaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<FloatGameSettingsAccess>` | 0 |  |
| [`FloatMaterialProperty`](/game-api/types/alta-utilities/floatmaterialproperty) | class | `MaterialProperty<float>` | 3 | A cached shader property id for a float value, set on a material or a property block. |
| [`ForwardedList<T>`](/game-api/types/alta-utilities/forwardedlist-t) | class | `IListenedList<T>`, `IEnumerable<T>`, `IEnumerable` | 9 | A read-only view onto another listened list that can be swapped at runtime. It forwards the target's add, remove and target-changed events as its own, and reads as empty with no target. |
| [`GameSettings`](/game-api/types/alta-utilities/gamesettings) | class | `Settings`, `ICloneable` | 37 | [Settings and files](../console-and-utilities/settings-and-files.md#gamesettings): Marked `[Obsolete("Use GlobalConstants instead.")]`, but it's still what `GameConfig` holds and the game still reads it everywhere. |
| [`GeneralDelegates`](/game-api/types/alta-utilities/generaldelegates) | static class |  | 0 |  |
| [`GeneralDelegates.BoolUpdater`](/game-api/types/alta-utilities/generaldelegates-boolupdater) | delegate |  | 0 | Handler that can change a bool passed by reference. Used for block checks such as `Interactor.GetGrabAssistBlock` and the teleport block in `SmoothLocomotion`, where any handler can set the flag. |
| [`GeneralDelegates.ValueUpdater`](/game-api/types/alta-utilities/generaldelegates-valueupdater) | delegate |  | 0 | Callback that can change a float passed by `ref`. |
| [`GeometryHelperMethods`](/game-api/types/alta-utilities/geometryhelpermethods) | static class |  | 1 |  |
| [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten) | interface | `IDontSplit` | 0 | Marker for components that must stay on their own object when static scenery is flattened. Extends `IDontSplit`; used by things like `ModifiableStaticObject` and `RotateOverTime`. |
| [`IListenedList<T>`](/game-api/types/alta-utilities/ilistenedlist-t) | interface | `IEnumerable<T>`, `IEnumerable` | 7 | A read-only view of a list that raises events when items are added or removed. `ListenedList<T>` and `ForwardedList<T>` implement it. |
| [`IntGameSettingsAccess`](/game-api/types/alta-utilities/intgamesettingsaccess) | class | `SettingsFieldAccess<int>` | 0 |  |
| [`IntGameSettingsAccess.Create`](/game-api/types/alta-utilities/intgamesettingsaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<IntGameSettingsAccess>` | 0 |  |
| [`ISettingsFieldAccess`](/game-api/types/alta-utilities/isettingsfieldaccess) | interface |  | 3 | A game or server setting shown in a menu, with a display name and description. Implemented by `SettingsFieldAccess` and menu command actions. |
| [`ISpawnArguments`](/game-api/types/alta-utilities/ispawnarguments) | interface |  | 1 |  |
| [`JsonAltaFormat<T>`](/game-api/types/alta-utilities/jsonaltaformat-t) | class | `IAltaFileFormat` | 4 |  |
| [`JsonMaxAttribute`](/game-api/types/alta-utilities/jsonmaxattribute) | class | `JsonPropertyFilterAttribute` | 2 |  |
| [`JsonMaxValueProvider`](/game-api/types/alta-utilities/jsonmaxvalueprovider) | class | `JsonRangeValueProviderFilter<float>` | 2 |  |
| [`JsonMinAttribute`](/game-api/types/alta-utilities/jsonminattribute) | class | `JsonPropertyFilterAttribute` | 2 |  |
| [`JsonMinValueProvider`](/game-api/types/alta-utilities/jsonminvalueprovider) | class | `JsonRangeValueProviderFilter<float>` | 2 |  |
| [`JsonPropertyFilterAttribute`](/game-api/types/alta-utilities/jsonpropertyfilterattribute) | abstract class | `Attribute` | 2 | Base of the `JsonMin`, `JsonMax` and `JsonRange` attributes on settings properties, which clamp values when JSON is read or a value is set from the console. |
| [`JsonRangeAttribute`](/game-api/types/alta-utilities/jsonrangeattribute) | class | `JsonPropertyFilterAttribute` | 2 |  |
| [`JsonRangeFloatAttribute`](/game-api/types/alta-utilities/jsonrangefloatattribute) | class | `JsonPropertyFilterAttribute` | 2 |  |
| [`JsonRangeFloatValueProvider`](/game-api/types/alta-utilities/jsonrangefloatvalueprovider) | class | `JsonRangeValueProviderFilter<float>` | 2 |  |
| [`JsonRangeValueProvider`](/game-api/types/alta-utilities/jsonrangevalueprovider) | class | `JsonRangeValueProviderFilter<int>` | 2 |  |
| [`JsonRangeValueProviderFilter<T>`](/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t) | abstract class | `IValueProvider` | 4 | Wraps a Json.NET `IValueProvider` so values are clamped to a range both when read and when written. Subclasses define `Clamp`. |
| [`LandmarkCandidateFinder`](/game-api/types/alta-utilities/landmarkcandidatefinder) | class | `MonoBehaviour` | 0 |  |
| [`LauncherSettings`](/game-api/types/alta-utilities/launchersettings) | class | `Settings`, `ICloneable` | 1 | Settings shared with the launcher, read through `SettingsManager.LauncherConfig`. Holds only the camera photo folder. |
| [`LerpingControlledFloatValue`](/game-api/types/alta-utilities/lerpingcontrolledfloatvalue) | class |  | 12 | A float that eases toward a target over time and writes each step through a setter callback. A control value can temporarily take over the target. Call `Update` every frame. |
| [`LerpingFloatGetValue`](/game-api/types/alta-utilities/lerpingfloatgetvalue) | class |  | 8 |  |
| [`LerpingFloatValue`](/game-api/types/alta-utilities/lerpingfloatvalue) | class |  | 10 | Helper that moves a float towards a target over time and pushes each new value to a setter. You call `Update` every frame yourself. |
| [`LerpingValue<T>`](/game-api/types/alta-utilities/lerpingvalue-t) | abstract class |  | 9 |  |
| [`Line`](/game-api/types/alta-utilities/line) | struct |  | 3 | A line segment between two world points. |
| [`ListenedList<T>`](/game-api/types/alta-utilities/listenedlist-t) | class | `IListenedList<T>`, `IEnumerable<T>`, `IEnumerable`, +1 more | 12 | A list that raises events when items are added or removed. Adding through the `ICollection` interface is refused with an error. |
| [`ListItemChangedHandler<T>`](/game-api/types/alta-utilities/listitemchangedhandler-t) | delegate |  | 0 | Callback for an `IListenedList<T>` `ItemAdded` and `ItemRemoved` events. Gets the list and the item. |
| [`LoggingWatch`](/game-api/types/alta-utilities/loggingwatch) | class |  | 4 |  |
| [`MaterialProperty<T>`](/game-api/types/alta-utilities/materialproperty-t) | abstract class |  | 3 |  |
| [`MaterialPropertyBlockSettings<T>`](/game-api/types/alta-utilities/materialpropertyblocksettings-t) | class | `HashedGeneralValue<T>` | 0 |  |
| [`MeshFilterExtensions`](/game-api/types/alta-utilities/meshfilterextensions) | static class |  | 1 |  |
| [`MicrophoneEnumSettingAccess`](/game-api/types/alta-utilities/microphoneenumsettingaccess) | class | `EnumSettingAccess` | 3 |  |
| [`PlayerSave`](/game-api/types/alta-utilities/playersave) | class | `IAltaFileFormat` | 20 | A player's save file: position data plus binary blobs for their body, state stack, player entity, progression and cosmetics. Server: `Player.Save` gives the loaded one. The blobs are saving-system bits; treat them as opaque. |
| [`PlayerSaveData`](/game-api/types/alta-utilities/playersavedata) | class | `HashedGeneralValue<PlayerSaveData>` | 2 | [Saving](../networking/saving.md): The starting inventory for new players (`InitialPlayerInventory` in the settings picks which). |
| [`PlayerSaveData.Create`](/game-api/types/alta-utilities/playersavedata-create) | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<PlayerSaveData>` | 0 |  |
| [`PlayerSaveException`](/game-api/types/alta-utilities/playersaveexception) | internal abstract class | `Exception` | 2 |  |
| [`PlayerSaveFileData`](/game-api/types/alta-utilities/playersavefiledata) | class | `BasicSaveData<PlayerSaveFileData>` | 2 | Basic save data inside a `PlayerSave`: the player's last position and home point. |
| [`PlayerSaveFileData1`](/game-api/types/alta-utilities/playersavefiledata1) | class | `OldSaveData` | 3 |  |
| [`PlayerSaveFileData2`](/game-api/types/alta-utilities/playersavefiledata2) | class | `OldSaveData` | 3 |  |
| [`PlayerSaveUtility`](/game-api/types/alta-utilities/playersaveutility) | class |  | 4 | Server: finds and loads per-player save files. `ServerSaveUtility` makes one over the save's `Players` folder; each player has a subfolder and file named after their user ID. |
| [`PlayerSmoothingLevel`](/game-api/types/alta-utilities/playersmoothinglevel) | enum |  | 2 |  |
| [`RotateOverTime`](/game-api/types/alta-utilities/rotateovertime) | class | `TransformScriptAnimation`, `IIgnoreForStaticFlatten`, `IDontSplit` | 0 |  |
| [`Screenshot`](/game-api/types/alta-utilities/screenshot) | class |  | 8 |  |
| [`ScriptHelper`](/game-api/types/alta-utilities/scripthelper) | abstract class | `MonoBehaviour` | 0 |  |
| [`ServerSaveUtility`](/game-api/types/alta-utilities/serversaveutility) | class |  | 12 |  |
| [`ServerSettings`](/game-api/types/alta-utilities/serversettings) | class | `Settings`, `ICloneable` | 49 | [ServerSettings](../../tavernlib-api/types/backend-server-configs/serversettings.md), [Server settings](../networking/server-settings.md#serversettings): A **class** in `TavernLib`, `TavernLib.Backend.Server.Configs`. |
| [`SetRenderQueue`](/game-api/types/alta-utilities/setrenderqueue) | class | `MonoBehaviour` | 0 |  |
| [`SettingBasedToggler`](/game-api/types/alta-utilities/settingbasedtoggler) | class | `MonoBehaviour` | 0 |  |
| [`SettingsFieldAccess`](/game-api/types/alta-utilities/settingsfieldaccess) | class | `ScriptableObject`, `ISettingsFieldAccess` | 7 | Asset that ties a settings menu entry to one game or server setting, read and written by reflection in the generic subclass. |
| [`SettingsFieldAccess<TFieldType>`](/game-api/types/alta-utilities/settingsfieldaccess-tfieldtype) | abstract class | `SettingsFieldAccess` | 4 | An asset that reads and writes one named property of `GameSettings` or `ServerSettings` by reflection. Used by quick access menu and settings UI entries. |
| [`SettingsFileAccess<TSettings>`](/game-api/types/alta-utilities/settingsfileaccess-tsettings) | class | `ISettingsFileAccess`, `ISettings` | 12 | [Settings and files](../console-and-utilities/settings-and-files.md#settingsfileaccess): When it's made it: |
| [`SettingsFilesHandler`](/game-api/types/alta-utilities/settingsfileshandler) | static class |  | 0 |  |
| [`SettingsManager`](/game-api/types/alta-utilities/settingsmanager) | class | `ISettingsManager` | 5 | [Settings and files](../console-and-utilities/settings-and-files.md#settingsmanager): Static members, plus an instance that VContainer hands out as `ISettingsManager`. |
| [`SettingType`](/game-api/types/alta-utilities/settingtype) | enum |  | 6 | Kind of setting control in a settings menu: toggle, scroll, enum float, command, multi command or assisted multi command. Used to pick the menu widget, as in `DevToolsBoard`. |
| [`Show_Workspace`](/game-api/types/alta-utilities/show_workspace) | class | `AltaMenuItemBase.Township.Utility` | 0 |  |
| [`SortedEnumerator<T>`](/game-api/types/alta-utilities/sortedenumerator-t) | class | `IEnumerator<T>`, `IEnumerator`, `IDisposable` | 6 |  |
| [`SortedList<T>`](/game-api/types/alta-utilities/sortedlist-t) | class | `IEnumerable<T>`, `IEnumerable` | 7 |  |
| [`SpawnPoint`](/game-api/types/alta-utilities/spawnpoint) | struct |  | 2 | A plain position and rotation pair for spawning something. |
| [`StringGameSettingsAccess`](/game-api/types/alta-utilities/stringgamesettingsaccess) | class | `SettingsFieldAccess<string>` | 0 |  |
| [`StringGameSettingsAccess.Create`](/game-api/types/alta-utilities/stringgamesettingsaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<StringGameSettingsAccess>` | 0 |  |
| [`StringSettingValue`](/game-api/types/alta-utilities/stringsettingvalue) | class |  | 1 |  |
| [`TargetChangedHandler<T>`](/game-api/types/alta-utilities/targetchangedhandler-t) | delegate |  | 0 | Callback for when a `ForwardedList<T>` switches the list it forwards to. Gets the forwarded list plus the old and new target lists. |
| [`TextPopup`](/game-api/types/alta-utilities/textpopup) | class | `MonoBehaviour` | 3 | Client: pooled floating text that drifts upward, faces the local player's head and scales with distance. It switches itself off beyond `maxDistance` and back on when the player comes close. `DamagePopup` extends it. |
| [`TimelineExtension`](/game-api/types/alta-utilities/timelineextension) | static class |  | 2 |  |
| [`ToggleGameSettingAccess`](/game-api/types/alta-utilities/togglegamesettingaccess) | class | `SettingsFieldAccess<bool>` | 0 |  |
| [`ToggleGameSettingAccess.Create`](/game-api/types/alta-utilities/togglegamesettingaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<ToggleGameSettingAccess>` | 0 |  |
| [`Vector3MaterialProperty`](/game-api/types/alta-utilities/vector3materialproperty) | class | `MaterialProperty<Vector3>` | 3 | A named shader property that takes a `Vector3`, set by cached property id. |
| [`VertexColorUtility`](/game-api/types/alta-utilities/vertexcolorutility) | static class |  | 1 |  |
| [`WorldLandmarkConfig`](/game-api/types/alta-utilities/worldlandmarkconfig) | class |  | 1 |  |
| [`WorldLandmarkConfigMarker`](/game-api/types/alta-utilities/worldlandmarkconfigmarker) | class | `MonoBehaviour` | 0 |  |
| [`WorldLandmarkMarker`](/game-api/types/alta-utilities/worldlandmarkmarker) | class | `WorldLandmarkConfigMarker` | 0 |  |

## Alta.Utilities.Atlas

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AtlasDefinition`](/game-api/types/alta-utilities/atlasdefinition) | class | `ScriptableObject` | 28 | Asset describing a texture atlas: which materials it combines into one baked material, and where each sits in the atlas. `ApplyTo` swaps renderers over to the baked material and rewrites their mesh UVs. Mostly a build and editor tool. |
| [`AtlasDefinition.AtlasedMaterial`](/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial) | class |  | 6 | One source material inside an `AtlasDefinition` and where it sits in the baked texture atlas. |
| [`AtlasSettings`](/game-api/types/alta-utilities/atlassettings) | class | `ScriptableObject` | 4 |  |
| [`AtlasTarget`](/game-api/types/alta-utilities/atlastarget) | enum |  | 2 | Flags for which kind of objects an atlas definition targets: static, dynamic or both. Checked with `AtlasDefinition.IsTargeting`. |
| [`AtlasType`](/game-api/types/alta-utilities/atlastype) | enum |  | 5 | Which atlased shader a texture atlas uses: common, wind foliage, no-wind foliage, forging metal or non-forging metal. |
| [`BasicBlit`](/game-api/types/alta-utilities/basicblit) | internal class | `ShaderBlit` | 1 |  |
| [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing) | interface |  | 1 | Implemented by components that can keep a renderer out of texture atlas baking. |
| [`IPreventNoLongerReadable`](/game-api/types/alta-utilities/ipreventnolongerreadable) | interface |  | 1 |  |
| [`MaterialRect`](/game-api/types/alta-utilities/materialrect) | struct |  | 6 | A material with its offset and scale inside a texture atlas, and whether mesh UVs need fixing to use it. |
| [`MeshFilterExtensions`](/game-api/types/alta-utilities/meshfilterextensions-alta-utilities-atlas) | static class |  | 1 |  |
| [`MetalNonForgingBlit`](/game-api/types/alta-utilities/metalnonforgingblit) | internal class | `ShaderBlit` | 1 |  |
| [`NoWindFoliageRampLerp3Blit`](/game-api/types/alta-utilities/nowindfoliageramplerp3blit) | internal class | `ShaderBlit` | 1 |  |
| [`PreventAtlas`](/game-api/types/alta-utilities/preventatlas) | class | `MonoBehaviour`, `IPreventAtlasing` | 0 |  |
| [`RampLerp3Blit`](/game-api/types/alta-utilities/ramplerp3blit) | internal class | `ShaderBlit` | 1 |  |
| [`RampLerp_CosmeticTestBlit`](/game-api/types/alta-utilities/ramplerp_cosmetictestblit) | internal class | `ShaderBlit` | 1 |  |
| [`RampLerpBlit`](/game-api/types/alta-utilities/ramplerpblit) | internal class | `ShaderBlit` | 1 |  |
| [`RampLerpNoCullCutoutBlit`](/game-api/types/alta-utilities/ramplerpnocullcutoutblit) | internal class | `ShaderBlit` | 1 |  |
| [`Scale`](/game-api/types/alta-utilities/scale) | enum |  | 5 |  |
| [`ShaderBlit`](/game-api/types/alta-utilities/shaderblit) | internal abstract class |  | 1 |  |
| [`SimpleStandardBlit`](/game-api/types/alta-utilities/simplestandardblit) | internal class | `ShaderBlit` | 1 |  |
| [`StandardHeatBlit`](/game-api/types/alta-utilities/standardheatblit) | internal class | `ShaderBlit` | 1 |  |
| [`UVFixType`](/game-api/types/alta-utilities/uvfixtype) | enum |  | 2 |  |
| [`WindFoliageBlit`](/game-api/types/alta-utilities/windfoliageblit) | internal class | `ShaderBlit` | 1 |  |
| [`WindFoliageRampLerp3Blit`](/game-api/types/alta-utilities/windfoliageramplerp3blit) | internal class | `ShaderBlit` | 1 |  |
| [`WindFoliageTextureSwayBlit`](/game-api/types/alta-utilities/windfoliagetextureswayblit) | internal class | `ShaderBlit` | 1 |  |
| [`WindFoliageVertexColorBlit`](/game-api/types/alta-utilities/windfoliagevertexcolorblit) | internal class | `ShaderBlit` | 1 |  |
| [`WindFoliageVertexColorColorRampBlit`](/game-api/types/alta-utilities/windfoliagevertexcolorcolorrampblit) | internal class | `ShaderBlit` | 1 |  |

## Alta.Utilities.Hierarchy

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaHierarchyData`](/game-api/types/alta-utilities/altahierarchydata) | class | `ScriptableObject` | 5 |  |
| [`AltaHierarchyData.Pocket`](/game-api/types/alta-utilities/altahierarchydata-pocket) | class |  | 2 | A named group of objects kept in the editor hierarchy tool's data. Editor only. |

## Alta.Utilities.Profiling

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ChunkDisplay`](/game-api/types/alta-utilities/chunkdisplay) | class | `LiveDataDisplayBase` | 1 |  |
| [`FpsDisplay`](/game-api/types/alta-utilities/fpsdisplay) | class | `LiveDataDisplayBase` | 0 |  |
| [`GraphicsLevelDisplay`](/game-api/types/alta-utilities/graphicsleveldisplay) | class | `LiveDataDisplayBase` | 1 |  |
| [`LastCombatHit`](/game-api/types/alta-utilities/lastcombathit) | class | `LiveDataDisplayBase` | 2 |  |
| [`LiveDataDisplayBase`](/game-api/types/alta-utilities/livedatadisplaybase) | abstract class | `ScriptableObject` | 6 | Base asset for one line of the live debug data display (a title and a value). Subclasses supply the value text. |
| [`LiveDataDisplayCollection`](/game-api/types/alta-utilities/livedatadisplaycollection) | class | `ScriptableObject` | 1 |  |
| [`LiveDataDisplayView`](/game-api/types/alta-utilities/livedatadisplayview) | class | `MonoBehaviour` | 1 | Client: the on-screen debug readout (FPS and similar stats) on the player. Toggled by the DisplayFPS controller action for users with the `debug_features` permission. |
| [`NetworkBytesDisplay`](/game-api/types/alta-utilities/networkbytesdisplay) | class | `LiveDataDisplayBase` | 2 |  |
| [`NetworkMessagesDisplay`](/game-api/types/alta-utilities/networkmessagesdisplay) | class | `LiveDataDisplayBase` | 2 |  |
| [`NetworkPacketsDisplay`](/game-api/types/alta-utilities/networkpacketsdisplay) | class | `LiveDataDisplayBase` | 2 |  |
| [`PingDisplay`](/game-api/types/alta-utilities/pingdisplay) | class | `LiveDataDisplayBase` | 2 |  |
| [`PlayerCountDisplay`](/game-api/types/alta-utilities/playercountdisplay) | class | `LiveDataDisplayBase` | 0 |  |
| [`ServerDiagnosticsDisplay`](/game-api/types/alta-utilities/serverdiagnosticsdisplay) | class | `LiveDataDisplayBase` | 3 |  |
| [`ServerFpsDisplay`](/game-api/types/alta-utilities/serverfpsdisplay) | class | `LiveDataDisplayBase` | 0 |  |
| [`TotalDamageDisplay`](/game-api/types/alta-utilities/totaldamagedisplay) | class | `LiveDataDisplayBase` | 0 |  |

## Alta.Utilities.Profiling.NetworkTransportMetrics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConnectionChannelStatistic`](/game-api/types/alta-utilities/connectionchannelstatistic) | class | `NetworkingStatistic` | 2 |  |
| [`ConnectionChannelStatistics`](/game-api/types/alta-utilities/connectionchannelstatistics) | class | `NetworkingStatisticsList<ConnectionChannelStatistic, KeyValuePair<ConnectionChannel, ConnectionChannelStatistic>>` | 1 |  |
| [`INetworkStatistic`](/game-api/types/alta-utilities/inetworkstatistic) | interface |  | 4 |  |
| [`INetworkStatisticCollection`](/game-api/types/alta-utilities/inetworkstatisticcollection) | interface |  | 4 |  |
| [`NetworkingProfiler`](/game-api/types/alta-utilities/networkingprofiler) | class | `SingletonBehaviour<NetworkingProfiler>` | 2 |  |
| [`NetworkingStatistic`](/game-api/types/alta-utilities/networkingstatistic) | class | `INetworkStatistic` | 9 | Counter for one kind of network message in the transport metrics: how many were sent and how many bytes. |
| [`NetworkingStatisticsList<T>`](/game-api/types/alta-utilities/networkingstatisticslist-t) | abstract class | `INetworkStatisticCollection` | 6 | A named list of network traffic statistics with per-frame and per-second byte totals, for profiling and summary dumps. |
| [`NetworkingStatisticsList<TStatistic, TInternalObject>`](/game-api/types/alta-utilities/networkingstatisticslist-tstatistic-tinternalobject) | class | `NetworkingStatisticsList<TStatistic>` | 1 |  |
| [`NetworkingStatisticsListNonSerialized<T>`](/game-api/types/alta-utilities/networkingstatisticslistnonserialized-t) | abstract class | `INetworkStatisticCollection` | 6 |  |
| [`NetworkStatisticWithIncomingPackets`](/game-api/types/alta-utilities/networkstatisticwithincomingpackets) | abstract class | `NetworkTransportStatistic` | 2 |  |
| [`NetworkTransportConnectionStatistic`](/game-api/types/alta-utilities/networktransportconnectionstatistic) | class | `NetworkStatisticWithIncomingPackets` | 4 |  |
| [`NetworkTransportCountStatisticField`](/game-api/types/alta-utilities/networktransportcountstatisticfield) | class | `NetworkTransportStatisticField` | 2 | A network transport profiling statistic that counts events, such as packets, read from a value function. |
| [`NetworkTransportHostStatistic`](/game-api/types/alta-utilities/networktransporthoststatistic) | class | `NetworkTransportStatistic` | 5 |  |
| [`NetworkTransportOverallStatistics`](/game-api/types/alta-utilities/networktransportoverallstatistics) | class | `NetworkStatisticWithIncomingPackets` | 1 |  |
| [`NetworkTransportStatistic`](/game-api/types/alta-utilities/networktransportstatistic) | abstract class | `INetworkStatisticCollection` | 6 | Base for a set of outgoing network transport stats (messages, packets, bytes) used by the networking profiler. |
| [`NetworkTransportStatisticField`](/game-api/types/alta-utilities/networktransportstatisticfield) | class | `INetworkStatistic` | 9 | One network traffic counter for the profiler. Reads a running total from a function you pass in and reports it relative to the last reset. |
| [`NetworkTransportStatisticType`](/game-api/types/alta-utilities/networktransportstatistictype) | enum |  | 2 | Whether a network transport statistic counts bytes or message count. |

## Alta.Utilities.Profiling.NetworkTransportMetrics.ABTesting

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ServerPingProfiler`](/game-api/types/alta-utilities/serverpingprofiler) | class | `NetworkEntityBehaviour` | 3 |  |

## Alta.Utility.Graphics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GraphicsSettingsController`](/game-api/types/alta-utilities/graphicssettingscontroller) | static class |  | 2 |  |
