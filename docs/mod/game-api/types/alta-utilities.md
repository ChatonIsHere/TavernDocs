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
| [`CurveRange<T>`](/mod/game-api/types/alta-utilities/curverange-t) | class | `DoubleValue<T>` | 4 | A topic with two values and an animation curve, evaluated across the range between the values. Base of `AttributeCurveRange` for biome attributes. |
| [`CurveValue<T>`](/mod/game-api/types/alta-utilities/curvevalue-t) | class |  | 4 | Pairs a topic with an animation curve. Base of `AttributeCurveValue` for biome attributes. |
| [`DoubleValue<T>`](/mod/game-api/types/alta-utilities/doublevalue-t) | class | `SingleValue<T>` | 3 | A `SingleValue<T>` with a second float value. |
| [`FileDownload`](/mod/game-api/types/alta-utilities/filedownload) | class |  | 6 | Result type for console commands that write a file for the caller, stored under the game's storage folder in Command Output, one subfolder per calling user. A string converts to it implicitly. |
| [`ICollisionStandard`](/mod/game-api/types/alta-utilities/icollisionstandard) | interface |  | 1 | Something with a surface material for collisions. `StaticEnvironmentPiece` and `StaticEnvironmentPieceInstance` implement it. |
| [`IDisableOnSimpleServer`](/mod/game-api/types/alta-utilities/idisableonsimpleserver) | interface |  | 1 | Content that can be turned off on a simple server, such as items and pages. Loot and progress commands check it. |
| [`Math2d`](/mod/game-api/types/alta-utilities/math2d) | static class |  | 1 | Static 2D geometry helpers. |
| [`MathfOperation`](/mod/game-api/types/alta-utilities/mathfoperation) | static class |  | 6 | Static float operations picked by an `OperationType`, for code that combines a current value with a new one. |
| [`Operation`](/mod/game-api/types/alta-utilities/operation) | delegate |  | 0 | A function that combines two floats into one. `MathfOperation.GetOperation` returns one for the cave generator parts. |
| [`OperationType`](/mod/game-api/types/alta-utilities/operationtype) | enum |  | 7 | How to combine two floats, turned into a function by `MathfOperation.GetOperation`: Set (take the new value), Max, Min, Add, Subtract, Multiply, or Multiply1Minus (`a * (1 - b)`). |
| [`SerializeHashedObject`](/mod/game-api/types/alta-utilities/serializehashedobject) | static class |  | 3 | Stream extension methods that send a `HashedGeneralValue` (or a `PlayerProgressFlag`) as its 16-bit hash. |
| [`SimpleHashedGeneralValue<T>`](/mod/game-api/types/alta-utilities/simplehashedgeneralvalue-t) | abstract class | `HashedGeneralValue<T>`, `IDisableOnSimpleServer` | 2 | A `HashedGeneralValue` asset that can be marked as turned off on simple servers. |
| [`SingleValue<T>`](/mod/game-api/types/alta-utilities/singlevalue-t) | class |  | 4 | A serializable pair of an object and a float, for inspector lists of weighted or scored things. |
| [`StatDefinitionConverter`](/mod/game-api/types/alta-utilities/statdefinitionconverter) | class | `HashedGeneralValueConverter<StatDefinition>` | 0 | Type converter that turns a stat name or hash string into a `StatDefinition`. |
| [`SurfaceMaterial`](/mod/game-api/types/alta-utilities/surfacematerial) | class | `ScriptableObject` | 0 | Empty marker asset naming a surface type. Static environment pieces and `ICollisionStandard` objects expose one as their `Material`. |
| [`SurfaceMaterial.Create`](/mod/game-api/types/alta-utilities/surfacematerial-create) | class | `AltaMenuItemBase.Assets.Create.Township.Environmental.ScriptableObject<SurfaceMaterial>` | 0 | Editor menu entry that creates a new `SurfaceMaterial` asset. Not used at runtime. |

## Alta.AssetBaking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AssetBakingSettings`](/mod/game-api/types/alta-utilities/assetbakingsettings) | static class |  | 5 | Folder names for the asset baking step, which probably moves these assets into temporary folders during a build. |
| [`CachedDirectory`](/mod/game-api/types/alta-utilities/cacheddirectory) | class |  | 3 | A pair of folders used by asset baking: a project folder and the temporary folder its assets are moved to. `AssetBakingSettings.ProjectToUnbakedDirectoriesMap` lists them. |

## Alta.Bezier

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Bezier`](/mod/game-api/types/alta-utilities/bezier) | static class |  | 4 | Math for quadratic (3 point) and cubic (4 point) Bezier curves. |
| [`BezierSpline`](/mod/game-api/types/alta-utilities/bezierspline) | class | `MonoBehaviour`, `IInstructionResult` | 19 | A cubic Bezier spline component: control points in groups of three per curve, with free, aligned or mirrored handles and optional looping. Used by spline displays, terrain splines, forest spline instructions and some effects. |
| [`ItemModifier`](/mod/game-api/types/alta-utilities/itemmodifier) | abstract class | `SplineDisplayModifier` | 2 | Base for components that sit next to a `SplineDecorator` and pick or change the objects it places along a spline. |
| [`Skip`](/mod/game-api/types/alta-utilities/skip) | class | `ItemModifier`, `IIgnoreForStaticFlatten`, `IDontSplit` | 1 | An `ItemModifier` that places a random prefab from its list at every Nth spot along the spline. |
| [`SplineChangedHandler`](/mod/game-api/types/alta-utilities/splinechangedhandler) | delegate |  | 0 | Callback for `BezierSpline.Changed`, passed the spline that changed. `SplineDisplay` uses it to redraw. |
| [`SplineCylinder`](/mod/game-api/types/alta-utilities/splinecylinder) | class | `SplineDisplay` | 0 | Builds a tube mesh along a `BezierSpline` (such as a rope or pipe) and gives it a matching `MeshCollider`. Also runs on headless servers, so the collider exists there. |
| [`SplineDecorator`](/mod/game-api/types/alta-utilities/splinedecorator) | class | `SplineDisplay` | 1 | Spline display that places copies of prefabs along its parent `BezierSpline`, with spacing, offset, scale and rotation options. It does not generate on a headless server, so the server only has baked items. |
| [`SplineDecorator.ForwardMode`](/mod/game-api/types/alta-utilities/splinedecorator-forwardmode) | enum |  | 2 | How `SplineDecorator` picks each placed object's forward direction: the curve's direction, or towards the next placed point. |
| [`SplineDecorator.Part`](/mod/game-api/types/alta-utilities/splinedecorator-part) | struct |  | 5 | One placement point that `SplineDecorator` works out along a spline before spawning an item there. |
| [`SplineDecorator.RotationMode`](/mod/game-api/types/alta-utilities/splinedecorator-rotationmode) | enum |  | 4 | How `SplineDecorator` rotates placed objects: not at all, look along the forward direction, look along it flattened to horizontal, or look along it with up set to the terrain normal. |
| [`SplineDecorator.ScaleMode`](/mod/game-api/types/alta-utilities/splinedecorator-scalemode) | enum |  | 2 | Flags for how `SplineDecorator` scales placed objects: stretch along Z to reach the next point, and scale Y by height. |
| [`SplineDecorator.UpMode`](/mod/game-api/types/alta-utilities/splinedecorator-upmode) | enum |  | 2 | Which up vector `SplineDecorator` uses when applying offsets: world up or the curve's own up. |
| [`SplineDisplay`](/mod/game-api/types/alta-utilities/splinedisplay) | abstract class | `MonoBehaviour`, `IBakeable` | 5 | Base for something built along a parent `BezierSpline` (a mesh, fence and so on). It rebuilds when the spline changes and can be baked to remove itself. |
| [`SplineDisplayModifier`](/mod/game-api/types/alta-utilities/splinedisplaymodifier) | abstract class | `MonoBehaviour`, `IDestroyOnBake` | 0 | Base for components that tweak a sibling `SplineDisplay`. Destroyed when the spline is baked. |
| [`SplineMesh`](/mod/game-api/types/alta-utilities/splinemesh) | class | `SplineDisplay` | 0 | Spline display that builds a strip mesh (a wall or fence-like profile) along its parent `BezierSpline` and gives it a matching `MeshCollider`. Generates on the server too. |
| [`WedgeChooser`](/mod/game-api/types/alta-utilities/wedgechooser) | class | `ItemModifier` | 2 | Item modifier for a `SplineDecorator` that picks a prefab for each point by how sharply the spline turns there, flipping it 180 degrees for left turns where needed. |
| [`WedgeChooser.Wedge`](/mod/game-api/types/alta-utilities/wedgechooser-wedge) | class |  | 5 | One choice in a `WedgeChooser`: prefabs for a spline piece that turns by a given angle, with optional mirrored versions for left turns. |

## Alta.Rendering

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`MaterialInstance`](/mod/game-api/types/alta-utilities/materialinstance) | class | `IDisposable` | 4 | Takes a renderer's own material copy (`renderer.material`) and cleans it up when disposed, so the copy does not leak. |
| [`MaterialInstanceGroup`](/mod/game-api/types/alta-utilities/materialinstancegroup) | class | `IDisposable`, `IReadOnlyCollection<MaterialInstance>`, `IEnumerable<MaterialInstance>`, +1 more | 4 | Makes a `MaterialInstance` for each of a set of renderers and disposes them together. |

## Alta.UnityWrappers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`UnityQualitySettingsController`](/mod/game-api/types/alta-utilities/unityqualitysettingscontroller) | static class |  | 1 | Sets Unity quality settings for the platform at start up: Android (Quest) gets lighter settings than PC. |

## Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaContractResolver`](/mod/game-api/types/alta-utilities/altacontractresolver) | class | `DefaultContractResolver` | 1 | Json.NET contract resolver that lets a `JsonPropertyFilterAttribute` on a member change how its value is read and written. |
| [`AltaGizmos`](/mod/game-api/types/alta-utilities/altagizmos) | class |  | 2 | Editor gizmo helpers. The drawing code is stripped from this build. |
| [`AndroidExtensions`](/mod/game-api/types/alta-utilities/androidextensions) | static class |  | 1 | Android-only helpers that call Java through `AndroidJavaObject`. They do nothing useful on the PC server. |
| [`AsyncPump`](/mod/game-api/types/alta-utilities/asyncpump) | static class |  | 2 | Lets main-thread code block on a `Task` without a deadlock, by running Unity's queued continuations while it waits. |
| [`AvailablePlayerSaveData`](/mod/game-api/types/alta-utilities/availableplayersavedata) | class |  | 0 | Holds the `Available` enum: which starting inventory preset new players get (`None`, `DeckedOut` or `Default`). The server setting `InitialPlayerInventory` picks one and `PlayerSaveData.GetCurrent` finds the matching asset. |
| [`AvailablePlayerSaveData.Available`](/mod/game-api/types/alta-utilities/availableplayersavedata-available) | enum |  | 3 | Which player save is available: none, the decked out one or the default one. |
| [`BakeLODGroupGrouper`](/mod/game-api/types/alta-utilities/bakelodgroupgrouper) | class | `MonoBehaviour`, `IBakeable` | 2 | Bake-time component that merges the `LODGroup`s of its children into one `LODGroup` on this object. The impostor baking step is empty in this build. |
| [`BoolSettingValue`](/mod/game-api/types/alta-utilities/boolsettingvalue) | class |  | 1 | Serializable check that a bool game setting has an expected value. |
| [`BuildVersionException`](/mod/game-api/types/alta-utilities/buildversionexception) | class | `Exception` | 1 | Exception for a bad build version. Nothing in this build throws it. |
| [`BuildVersionExtensions`](/mod/game-api/types/alta-utilities/buildversionextensions) | static class |  | 2 | Extension helpers for `BuildVersion`. |
| [`ChunkSaveFormat`](/mod/game-api/types/alta-utilities/chunksaveformat) | class | `IAltaFileFormat` | 13 | File format for one chunk's save: a list of versions, each with the chunk's own data and its saved objects. Shared by reference count. |
| [`ChunkSaveFormat.Version`](/mod/game-api/types/alta-utilities/chunksaveformat-version) | class |  | 5 | One block of a chunk save file: the chunk data and saved objects written under one chunk versioning. A file holds one block per versioning that has data in it. |
| [`ColorMaterialProperty`](/mod/game-api/types/alta-utilities/colormaterialproperty) | class | `MaterialProperty<Color>` | 3 | A colour shader property, looked up by name once, that can be set on a material or a property block. |
| [`CorruptPlayerSaveFileException`](/mod/game-api/types/alta-utilities/corruptplayersavefileexception) | internal class | `PlayerSaveException` | 2 | Internal exception for a corrupt player save file. Nothing in this build throws it. |
| [`CursorUtilities`](/mod/game-api/types/alta-utilities/cursorutilities) | static class |  | 1 | Mouse cursor helper for desktop play. |
| [`DamagePopup`](/mod/game-api/types/alta-utilities/damagepopup) | class | `TextPopup` | 3 | [Items, interaction and damage](../items/overview.md) |
| [`DatabaseSettingsFile`](/mod/game-api/types/alta-utilities/databasesettingsfile) | class | `IAltaFile` | 20 | A settings "file" stored through the Alta web API's settings endpoint instead of on disk. Most file operations do nothing. |
| [`DebuggingCollection<T>`](/mod/game-api/types/alta-utilities/debuggingcollection-t) | class | `IEnumerable`, `ICollection<T>`, `IEnumerable<T>` | 9 | Collection wrapper that logs an error with a stack trace when it is changed during enumeration, so you can find the code that did it. |
| [`DebuggingCollection<T>.DebuggingCollectionEnumerator<TInnerType>`](/mod/game-api/types/alta-utilities/debuggingcollection-t-debuggingcollectionenumerator-tinnertype) | class | `IEnumerator<TInnerType>`, `IEnumerator`, `IDisposable` | 6 | Enumerator for `DebuggingCollection` that tracks whether enumeration is under way, so the collection can log changes made while iterating. |
| [`DevOnlyAttribute`](/mod/game-api/types/alta-utilities/devonlyattribute) | class | `Attribute` | 0 | Marks a settings property as developer only, for example `ServerSettings.IsAutoSaving`. Console commands use a separate `Alta.Console.DevOnlyAttribute`. |
| [`DynamicPhysicsTimeSet`](/mod/game-api/types/alta-utilities/dynamicphysicstimeset) | class |  | 1 | Server: scales the physics fixed timestep with server FPS, between the minimum and maximum physics rates in the server settings. `ServerHandler` starts it. |
| [`EnumFloatGameSettingsAccess`](/mod/game-api/types/alta-utilities/enumfloatgamesettingsaccess) | class | `FloatGameSettingsAccess` | 2 | Float setting access that only takes values from a fixed list, each with a display name, for settings shown as a set of choices. |
| [`EnumFloatGameSettingsAccess.CreateEnum`](/mod/game-api/types/alta-utilities/enumfloatgamesettingsaccess-createenum) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<EnumFloatGameSettingsAccess>` | 0 | Editor menu entry that creates an `EnumFloatGameSettingsAccess` asset. |
| [`EnumGameSettingAccess`](/mod/game-api/types/alta-utilities/enumgamesettingaccess) | class | `EnumSettingAccess` | 3 | Settings field access for an enum setting, offered as a list of names. Can show custom display names, matched to the enum values by order. |
| [`EnumGameSettingAccess.Create`](/mod/game-api/types/alta-utilities/enumgamesettingaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<EnumGameSettingAccess>` | 0 | Editor menu entry that creates an `EnumGameSettingAccess` asset. |
| [`EnumSettingAccess`](/mod/game-api/types/alta-utilities/enumsettingaccess) | abstract class | `StringGameSettingsAccess` | 1 | Base for string settings that offer a fixed list of options, such as `EnumGameSettingAccess` and `MicrophoneEnumSettingAccess`. |
| [`FloatGameSettingsAccess`](/mod/game-api/types/alta-utilities/floatgamesettingsaccess) | class | `SettingsFieldAccess<float>` | 0 | Settings field access for a float setting. |
| [`FloatGameSettingsAccess.Create`](/mod/game-api/types/alta-utilities/floatgamesettingsaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<FloatGameSettingsAccess>` | 0 | Editor menu entry that creates a `FloatGameSettingsAccess` asset. |
| [`FloatMaterialProperty`](/mod/game-api/types/alta-utilities/floatmaterialproperty) | class | `MaterialProperty<float>` | 3 | A cached shader property id for a float value, set on a material or a property block. |
| [`ForwardedList<T>`](/mod/game-api/types/alta-utilities/forwardedlist-t) | class | `IListenedList<T>`, `IEnumerable<T>`, `IEnumerable` | 9 | A read-only view onto another listened list that can be swapped at runtime. It forwards the target's add, remove and target-changed events as its own, and reads as empty with no target. |
| [`GameSettings`](/mod/game-api/types/alta-utilities/gamesettings) | class | `Settings`, `ICloneable` | 37 | [Settings and files](../console-and-utilities/settings-and-files.md#gamesettings): Marked `[Obsolete("Use GlobalConstants instead.")]`, but it's still what `GameConfig` holds and the game still reads it everywhere. |
| [`GeneralDelegates`](/mod/game-api/types/alta-utilities/generaldelegates) | static class |  | 0 | Holds two shared delegate types that change a value by `ref`: `BoolUpdater` for a bool and `ValueUpdater` for a float. |
| [`GeneralDelegates.BoolUpdater`](/mod/game-api/types/alta-utilities/generaldelegates-boolupdater) | delegate |  | 0 | Handler that can change a bool passed by reference. Used for block checks such as `Interactor.GetGrabAssistBlock` and the teleport block in `SmoothLocomotion`, where any handler can set the flag. |
| [`GeneralDelegates.ValueUpdater`](/mod/game-api/types/alta-utilities/generaldelegates-valueupdater) | delegate |  | 0 | Callback that can change a float passed by `ref`. |
| [`GeometryHelperMethods`](/mod/game-api/types/alta-utilities/geometryhelpermethods) | static class |  | 1 | Point and segment tests on the XZ plane (Y is ignored). |
| [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten) | interface | `IDontSplit` | 0 | Marker for components that must stay on their own object when static scenery is flattened. Extends `IDontSplit`; used by things like `ModifiableStaticObject` and `RotateOverTime`. |
| [`IListenedList<T>`](/mod/game-api/types/alta-utilities/ilistenedlist-t) | interface | `IEnumerable<T>`, `IEnumerable` | 7 | A read-only view of a list that raises events when items are added or removed. `ListenedList<T>` and `ForwardedList<T>` implement it. |
| [`IntGameSettingsAccess`](/mod/game-api/types/alta-utilities/intgamesettingsaccess) | class | `SettingsFieldAccess<int>` | 0 | Settings field access for an int setting. |
| [`IntGameSettingsAccess.Create`](/mod/game-api/types/alta-utilities/intgamesettingsaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<IntGameSettingsAccess>` | 0 | Editor menu entry that creates an `IntGameSettingsAccess` asset. |
| [`ISettingsFieldAccess`](/mod/game-api/types/alta-utilities/isettingsfieldaccess) | interface |  | 3 | A game or server setting shown in a menu, with a display name and description. Implemented by `SettingsFieldAccess` and menu command actions. |
| [`ISpawnArguments`](/mod/game-api/types/alta-utilities/ispawnarguments) | interface |  | 1 | Implemented by components on a prefab to read extra spawn arguments. The spawn console command and `PackageManager` pass them to every such component on the new entity. |
| [`JsonAltaFormat<T>`](/mod/game-api/types/alta-utilities/jsonaltaformat-t) | class | `IAltaFileFormat` | 4 | `IAltaFileFormat` that stores one object as JSON, using `AltaContractResolver.settings`. |
| [`JsonMaxAttribute`](/mod/game-api/types/alta-utilities/jsonmaxattribute) | class | `JsonPropertyFilterAttribute` | 2 | JSON property attribute that caps a float at a maximum whenever the property is read or written through Newtonsoft. |
| [`JsonMaxValueProvider`](/mod/game-api/types/alta-utilities/jsonmaxvalueprovider) | class | `JsonRangeValueProviderFilter<float>` | 2 | Value provider used by `JsonMaxAttribute`: caps a float property at `max` on get and set. |
| [`JsonMinAttribute`](/mod/game-api/types/alta-utilities/jsonminattribute) | class | `JsonPropertyFilterAttribute` | 2 | JSON property attribute that keeps a float at or above a minimum whenever the property is read or written through Newtonsoft. |
| [`JsonMinValueProvider`](/mod/game-api/types/alta-utilities/jsonminvalueprovider) | class | `JsonRangeValueProviderFilter<float>` | 2 | Value provider used by `JsonMinAttribute`: keeps a float property at or above `min` on get and set. |
| [`JsonPropertyFilterAttribute`](/mod/game-api/types/alta-utilities/jsonpropertyfilterattribute) | abstract class | `Attribute` | 2 | Base of the `JsonMin`, `JsonMax` and `JsonRange` attributes on settings properties, which clamp values when JSON is read or a value is set from the console. |
| [`JsonRangeAttribute`](/mod/game-api/types/alta-utilities/jsonrangeattribute) | class | `JsonPropertyFilterAttribute` | 2 | JSON property attribute that clamps an int between a minimum and maximum whenever the property is read or written through Newtonsoft. |
| [`JsonRangeFloatAttribute`](/mod/game-api/types/alta-utilities/jsonrangefloatattribute) | class | `JsonPropertyFilterAttribute` | 2 | JSON property attribute that clamps a float between a minimum and maximum whenever the property is read or written through Newtonsoft. |
| [`JsonRangeFloatValueProvider`](/mod/game-api/types/alta-utilities/jsonrangefloatvalueprovider) | class | `JsonRangeValueProviderFilter<float>` | 2 | Value provider used by `JsonRangeFloatAttribute`: clamps a float property between `min` and `max` on get and set. |
| [`JsonRangeValueProvider`](/mod/game-api/types/alta-utilities/jsonrangevalueprovider) | class | `JsonRangeValueProviderFilter<int>` | 2 | Value provider used by `JsonRangeAttribute`: clamps an int property between `min` and `max` on get and set. |
| [`JsonRangeValueProviderFilter<T>`](/mod/game-api/types/alta-utilities/jsonrangevalueproviderfilter-t) | abstract class | `IValueProvider` | 4 | Wraps a Json.NET `IValueProvider` so values are clamped to a range both when read and when written. Subclasses define `Clamp`. |
| [`LandmarkCandidateFinder`](/mod/game-api/types/alta-utilities/landmarkcandidatefinder) | class | `MonoBehaviour` | 0 | Editor tool: finds large static objects in overworld chunks that could be world landmarks, and adds `WorldLandmarkMarker` to them. |
| [`LauncherSettings`](/mod/game-api/types/alta-utilities/launchersettings) | class | `Settings`, `ICloneable` | 1 | Settings shared with the launcher, read through `SettingsManager.LauncherConfig`. Holds only the camera photo folder. |
| [`LerpingControlledFloatValue`](/mod/game-api/types/alta-utilities/lerpingcontrolledfloatvalue) | class |  | 12 | A float that eases toward a target over time and writes each step through a setter callback. A control value can temporarily take over the target. Call `Update` every frame. |
| [`LerpingFloatGetValue`](/mod/game-api/types/alta-utilities/lerpingfloatgetvalue) | class |  | 8 | A float that eases from its current value towards a target over time. The target can be a function, read again each update. Call `Update` every frame. |
| [`LerpingFloatValue`](/mod/game-api/types/alta-utilities/lerpingfloatvalue) | class |  | 10 | Helper that moves a float towards a target over time and pushes each new value to a setter. You call `Update` every frame yourself. |
| [`LerpingValue<T>`](/mod/game-api/types/alta-utilities/lerpingvalue-t) | abstract class |  | 9 | Base for a value that eases from where it is to a target over time. Call `Update` each frame and it pushes every step through the setter given to the constructor; subclasses supply the maths. |
| [`Line`](/mod/game-api/types/alta-utilities/line) | struct |  | 3 | A line segment between two world points. |
| [`ListenedList<T>`](/mod/game-api/types/alta-utilities/listenedlist-t) | class | `IListenedList<T>`, `IEnumerable<T>`, `IEnumerable`, +1 more | 12 | A list that raises events when items are added or removed. Adding through the `ICollection` interface is refused with an error. |
| [`ListItemChangedHandler<T>`](/mod/game-api/types/alta-utilities/listitemchangedhandler-t) | delegate |  | 0 | Callback for an `IListenedList<T>` `ItemAdded` and `ItemRemoved` events. Gets the list and the item. |
| [`LoggingWatch`](/mod/game-api/types/alta-utilities/loggingwatch) | class |  | 4 | Stopwatch that logs how long a step took, at debug, warn or error level. |
| [`MaterialProperty<T>`](/mod/game-api/types/alta-utilities/materialproperty-t) | abstract class |  | 3 | Base for a typed shader property that can be set on a material or on a `MaterialPropertyBlock`. |
| [`MaterialPropertyBlockSettings<T>`](/mod/game-api/types/alta-utilities/materialpropertyblocksettings-t) | class | `HashedGeneralValue<T>` | 0 | Generic base for hashed settings assets used with material property blocks. Adds nothing to `HashedGeneralValue`. |
| [`MeshFilterExtensions`](/mod/game-api/types/alta-utilities/meshfilterextensions) | static class |  | 1 | Vertex colour helper for mesh filters. |
| [`MicrophoneEnumSettingAccess`](/mod/game-api/types/alta-utilities/microphoneenumsettingaccess) | class | `EnumSettingAccess` | 3 | Client: settings option that lists Vivox input devices and switches the microphone. |
| [`PlayerSave`](/mod/game-api/types/alta-utilities/playersave) | class | `IAltaFileFormat` | 20 | A player's save file: position data plus binary blobs for their body, state stack, player entity, progression and cosmetics. Server: `Player.Save` gives the loaded one. The blobs are saving-system bits; treat them as opaque. |
| [`PlayerSaveData`](/mod/game-api/types/alta-utilities/playersavedata) | class | `HashedGeneralValue<PlayerSaveData>` | 2 | [Saving](../networking/saving.md): The starting inventory for new players (`InitialPlayerInventory` in the settings picks which). |
| [`PlayerSaveData.Create`](/mod/game-api/types/alta-utilities/playersavedata-create) | class | `AltaMenuItemBase.Assets.Create.Utility.ScriptableObject<PlayerSaveData>` | 0 | Editor menu entry that creates a `PlayerSaveData` asset. |
| [`PlayerSaveException`](/mod/game-api/types/alta-utilities/playersaveexception) | internal abstract class | `Exception` | 2 | Internal base class for player save errors. `CorruptPlayerSaveFileException` derives from it. |
| [`PlayerSaveFileData`](/mod/game-api/types/alta-utilities/playersavefiledata) | class | `BasicSaveData<PlayerSaveFileData>` | 2 | Basic save data inside a `PlayerSave`: the player's last position and home point. |
| [`PlayerSaveFileData1`](/mod/game-api/types/alta-utilities/playersavefiledata1) | class | `OldSaveData` | 3 | Version 1 of the saved player position and home. Migrating moves anyone inside the old path and tower area to a respawn point. |
| [`PlayerSaveFileData2`](/mod/game-api/types/alta-utilities/playersavefiledata2) | class | `OldSaveData` | 3 | Version 2 of the saved player position and home. Migrating moves anyone out of four old areas to the original spawn point. |
| [`PlayerSaveUtility`](/mod/game-api/types/alta-utilities/playersaveutility) | class |  | 4 | Server: finds and loads per-player save files. `ServerSaveUtility` makes one over the save's `Players` folder; each player has a subfolder and file named after their user ID. |
| [`PlayerSmoothingLevel`](/mod/game-api/types/alta-utilities/playersmoothinglevel) | enum |  | 2 | Amount of smoothing for player movement: default or low. |
| [`RotateOverTime`](/mod/game-api/types/alta-utilities/rotateovertime) | class | `TransformScriptAnimation`, `IIgnoreForStaticFlatten`, `IDontSplit` | 0 | Script animation that spins a transform at a fixed rate in degrees per second on each axis. Skipped by static flattening and mesh splitting. |
| [`Screenshot`](/mod/game-api/types/alta-utilities/screenshot) | class |  | 8 | Takes a photo through a hand camera into a texture and saves it as a PNG (Windows) or to the gallery (Android). Client only. |
| [`ScriptHelper`](/mod/game-api/types/alta-utilities/scripthelper) | abstract class | `MonoBehaviour` | 0 | Base for helper components that only matter in the editor. It destroys itself in `Awake`, so it never runs in game. |
| [`ServerSaveUtility`](/mod/game-api/types/alta-utilities/serversaveutility) | class |  | 12 | Paths to one game server's save folders (save, chunks, cache, logs and player saves). The server makes one for itself; static helpers work from a `GameServerInfo`. |
| [`ServerSettings`](/mod/game-api/types/alta-utilities/serversettings) | class | `Settings`, `ICloneable` | 49 | [Server settings](../networking/server-settings.md#serversettings), [Server settings](../../tavernlib-api/config/server-settings.md#serversettings): All instance properties with public getters and setters. Default values from the code. |
| [`SetRenderQueue`](/mod/game-api/types/alta-utilities/setrenderqueue) | class | `MonoBehaviour` | 0 | Component that sets the render queue on the materials of its renderers on `Awake`, and on its direct children if enabled. |
| [`SettingBasedToggler`](/mod/game-api/types/alta-utilities/settingbasedtoggler) | class | `MonoBehaviour` | 0 | Component that turns its GameObject on or off to match the current player mode and a set of expected game setting values. Client side. |
| [`SettingsFieldAccess`](/mod/game-api/types/alta-utilities/settingsfieldaccess) | class | `ScriptableObject`, `ISettingsFieldAccess` | 7 | Asset that ties a settings menu entry to one game or server setting, read and written by reflection in the generic subclass. |
| [`SettingsFieldAccess<TFieldType>`](/mod/game-api/types/alta-utilities/settingsfieldaccess-tfieldtype) | abstract class | `SettingsFieldAccess` | 4 | An asset that reads and writes one named property of `GameSettings` or `ServerSettings` by reflection. Used by quick access menu and settings UI entries. |
| [`SettingsFileAccess<TSettings>`](/mod/game-api/types/alta-utilities/settingsfileaccess-tsettings) | class | `ISettingsFileAccess`, `ISettings` | 12 | [Settings and files](../console-and-utilities/settings-and-files.md#settingsfileaccess): When it's made it: |
| [`SettingsFilesHandler`](/mod/game-api/types/alta-utilities/settingsfileshandler) | static class |  | 0 | Empty static class. |
| [`SettingsManager`](/mod/game-api/types/alta-utilities/settingsmanager) | class | `ISettingsManager` | 5 | [Settings and files](../console-and-utilities/settings-and-files.md#settingsmanager): Static members, plus an instance that VContainer hands out as `ISettingsManager`. |
| [`SettingType`](/mod/game-api/types/alta-utilities/settingtype) | enum |  | 6 | Kind of setting control in a settings menu: toggle, scroll, enum float, command, multi command or assisted multi command. Used to pick the menu widget, as in `DevToolsBoard`. |
| [`Show_Workspace`](/mod/game-api/types/alta-utilities/show_workspace) | class | `AltaMenuItemBase.Township.Utility` | 0 | Editor menu item under Township/Utility. Its `Run` reads the workspace folder name from the data path but does nothing with it. |
| [`SortedEnumerator<T>`](/mod/game-api/types/alta-utilities/sortedenumerator-t) | class | `IEnumerator<T>`, `IEnumerator`, `IDisposable` | 6 | Enumerator over an array snapshot, returned by `SortedList`. |
| [`SortedList<T>`](/mod/game-api/types/alta-utilities/sortedlist-t) | class | `IEnumerable<T>`, `IEnumerable` | 7 | List kept in ascending order by a comparer, with linear time inserts. Not `System.Collections.Generic.SortedList`. |
| [`SpawnPoint`](/mod/game-api/types/alta-utilities/spawnpoint) | struct |  | 2 | A plain position and rotation pair for spawning something. |
| [`StringGameSettingsAccess`](/mod/game-api/types/alta-utilities/stringgamesettingsaccess) | class | `SettingsFieldAccess<string>` | 0 | Setting access asset for a string property on `GameSettings` or `ServerSettings`, found by name. |
| [`StringGameSettingsAccess.Create`](/mod/game-api/types/alta-utilities/stringgamesettingsaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<StringGameSettingsAccess>` | 0 | Editor menu entry that creates a `StringGameSettingsAccess` asset under Assets/Create/Global Settings/Field Access. |
| [`StringSettingValue`](/mod/game-api/types/alta-utilities/stringsettingvalue) | class |  | 1 | Serializable check that a string game setting does, or does not, equal an expected value. |
| [`TargetChangedHandler<T>`](/mod/game-api/types/alta-utilities/targetchangedhandler-t) | delegate |  | 0 | Callback for when a `ForwardedList<T>` switches the list it forwards to. Gets the forwarded list plus the old and new target lists. |
| [`TextPopup`](/mod/game-api/types/alta-utilities/textpopup) | class | `MonoBehaviour` | 3 | Client: pooled floating text that drifts upward, faces the local player's head and scales with distance. It switches itself off beyond `maxDistance` and back on when the player comes close. `DamagePopup` extends it. |
| [`TimelineExtension`](/mod/game-api/types/alta-utilities/timelineextension) | static class |  | 2 | Extension methods for running an `Action` later through `Timeline.Instance`. |
| [`ToggleGameSettingAccess`](/mod/game-api/types/alta-utilities/togglegamesettingaccess) | class | `SettingsFieldAccess<bool>` | 0 | Setting access asset for a bool property on `GameSettings` or `ServerSettings`, found by name. Used by toggles and `BoolSettingValue`. |
| [`ToggleGameSettingAccess.Create`](/mod/game-api/types/alta-utilities/togglegamesettingaccess-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.Field_Access.ScriptableObject<ToggleGameSettingAccess>` | 0 | Editor menu entry that creates a `ToggleGameSettingAccess` asset under Assets/Create/Global Settings/Field Access. |
| [`Vector3MaterialProperty`](/mod/game-api/types/alta-utilities/vector3materialproperty) | class | `MaterialProperty<Vector3>` | 3 | A named shader property that takes a `Vector3`, set by cached property id. |
| [`VertexColorUtility`](/mod/game-api/types/alta-utilities/vertexcolorutility) | static class |  | 1 | Makes and caches copies of meshes with every vertex set to one colour. Used for mesh colour baking and nameplates. |
| [`WorldLandmarkConfig`](/mod/game-api/types/alta-utilities/worldlandmarkconfig) | class |  | 1 | Serialized settings for a world landmark: how many chunks away it stays loaded, with a separate Android value. |
| [`WorldLandmarkConfigMarker`](/mod/game-api/types/alta-utilities/worldlandmarkconfigmarker) | class | `MonoBehaviour` | 0 | Empty marker component. Base for `WorldLandmarkMarker`. |
| [`WorldLandmarkMarker`](/mod/game-api/types/alta-utilities/worldlandmarkmarker) | class | `WorldLandmarkConfigMarker` | 0 | Empty marker component that tags a large static object as a world landmark. Added by `LandmarkCandidateFinder`. |

## Alta.Utilities.Atlas

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AtlasDefinition`](/mod/game-api/types/alta-utilities/atlasdefinition) | class | `ScriptableObject` | 28 | Asset describing a texture atlas: which materials it combines into one baked material, and where each sits in the atlas. `ApplyTo` swaps renderers over to the baked material and rewrites their mesh UVs. Mostly a build and editor tool. |
| [`AtlasDefinition.AtlasedMaterial`](/mod/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial) | class |  | 6 | One source material inside an `AtlasDefinition` and where it sits in the baked texture atlas. |
| [`AtlasSettings`](/mod/game-api/types/alta-utilities/atlassettings) | class | `ScriptableObject` | 4 | Settings asset listing which shaders can be atlased, their atlas type, and the blit shaders that bake each into diffuse, normal and emission atlases. |
| [`AtlasTarget`](/mod/game-api/types/alta-utilities/atlastarget) | enum |  | 2 | Flags for which kind of objects an atlas definition targets: static, dynamic or both. Checked with `AtlasDefinition.IsTargeting`. |
| [`AtlasType`](/mod/game-api/types/alta-utilities/atlastype) | enum |  | 5 | Which atlased shader a texture atlas uses: common, wind foliage, no-wind foliage, forging metal or non-forging metal. |
| [`BasicBlit`](/mod/game-api/types/alta-utilities/basicblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/NO Wind Foliage` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`IPreventAtlasing`](/mod/game-api/types/alta-utilities/ipreventatlasing) | interface |  | 1 | Implemented by components that can keep a renderer out of texture atlas baking. |
| [`IPreventNoLongerReadable`](/mod/game-api/types/alta-utilities/ipreventnolongerreadable) | interface |  | 1 | Lets a component keep a renderer's mesh readable when the bake step would mark it no longer readable. `StackingComponent` implements it. |
| [`MaterialRect`](/mod/game-api/types/alta-utilities/materialrect) | struct |  | 6 | A material with its offset and scale inside a texture atlas, and whether mesh UVs need fixing to use it. |
| [`MeshFilterExtensions`](/mod/game-api/types/alta-utilities/meshfilterextensions-alta-utilities-atlas) | static class |  | 1 | Extension for moving a mesh filter onto an atlased material. |
| [`MetalNonForgingBlit`](/mod/game-api/types/alta-utilities/metalnonforgingblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/MetalNonForging`, `Custom/Metal` and `Township Tale/StaticMetal` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`NoWindFoliageRampLerp3Blit`](/mod/game-api/types/alta-utilities/nowindfoliageramplerp3blit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/WindFoliage RampLerp3 LOD1` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`PreventAtlas`](/mod/game-api/types/alta-utilities/preventatlas) | class | `MonoBehaviour`, `IPreventAtlasing` | 0 | Component that keeps renderers out of texture atlasing: the listed ones, or every child renderer when the list is empty. |
| [`RampLerp3Blit`](/mod/game-api/types/alta-utilities/ramplerp3blit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/RampLerp3` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`RampLerp_CosmeticTestBlit`](/mod/game-api/types/alta-utilities/ramplerp_cosmetictestblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/RampLerp_CosmeticTest` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`RampLerpBlit`](/mod/game-api/types/alta-utilities/ramplerpblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/RampLerp` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`RampLerpNoCullCutoutBlit`](/mod/game-api/types/alta-utilities/ramplerpnocullcutoutblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/RampLerpNoCullCutout` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`Scale`](/mod/game-api/types/alta-utilities/scale) | enum |  | 5 | Size multiplier for a material's textures in an atlas: four times, twice, regular, half or quarter. |
| [`ShaderBlit`](/mod/game-api/types/alta-utilities/shaderblit) | internal abstract class |  | 1 | Internal base for the per-shader atlas blitters. `AtlasDefinition` picks a subclass by shader name and calls `Blit` to draw one material into the atlas textures. |
| [`SimpleStandardBlit`](/mod/game-api/types/alta-utilities/simplestandardblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/Cheap/SimpleStandard` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`StandardHeatBlit`](/mod/game-api/types/alta-utilities/standardheatblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Custom/StandardHeat` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`UVFixType`](/mod/game-api/types/alta-utilities/uvfixtype) | enum |  | 2 | How the atlas tool fixes a mesh's UVs after packing: not at all, or through texture coordinates (the default). |
| [`WindFoliageBlit`](/mod/game-api/types/alta-utilities/windfoliageblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/WindFoliage` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`WindFoliageRampLerp3Blit`](/mod/game-api/types/alta-utilities/windfoliageramplerp3blit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/WindFoliage RampLerp3` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`WindFoliageTextureSwayBlit`](/mod/game-api/types/alta-utilities/windfoliagetextureswayblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/WindFoliageTextureSway` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`WindFoliageVertexColorBlit`](/mod/game-api/types/alta-utilities/windfoliagevertexcolorblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/WindFoliageVertexColor` shader. `AtlasDefinition` uses it when it bakes texture atlases. |
| [`WindFoliageVertexColorColorRampBlit`](/mod/game-api/types/alta-utilities/windfoliagevertexcolorcolorrampblit) | internal class | `ShaderBlit` | 1 | Internal atlas blitter for the `Township Tale/WindFoliageVertexColorColorRamp` shader. `AtlasDefinition` uses it when it bakes texture atlases. |

## Alta.Utilities.Hierarchy

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaHierarchyData`](/mod/game-api/types/alta-utilities/altahierarchydata) | class | `ScriptableObject` | 5 | Editor settings for Alta's custom hierarchy window: icons, a recompile beep and saved object pockets. `GetData` returns null in this build. |
| [`AltaHierarchyData.Pocket`](/mod/game-api/types/alta-utilities/altahierarchydata-pocket) | class |  | 2 | A named group of objects kept in the editor hierarchy tool's data. Editor only. |

## Alta.Utilities.Profiling

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ChunkDisplay`](/mod/game-api/types/alta-utilities/chunkdisplay) | class | `LiveDataDisplayBase` | 1 | Live debug readout of the chunk the local player is in. |
| [`FpsDisplay`](/mod/game-api/types/alta-utilities/fpsdisplay) | class | `LiveDataDisplayBase` | 0 | Live debug readout of the current frame rate. |
| [`GraphicsLevelDisplay`](/mod/game-api/types/alta-utilities/graphicsleveldisplay) | class | `LiveDataDisplayBase` | 1 | Live debug readout of the current graphics optimisation level. |
| [`LastCombatHit`](/mod/game-api/types/alta-utilities/lastcombathit) | class | `LiveDataDisplayBase` | 2 | Placeholder debug readout for the last combat hit. `IsValid` always returns false, so it never shows. |
| [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase) | abstract class | `ScriptableObject` | 6 | Base asset for one line of the live debug data display (a title and a value). Subclasses supply the value text. |
| [`LiveDataDisplayCollection`](/mod/game-api/types/alta-utilities/livedatadisplaycollection) | class | `ScriptableObject` | 1 | Asset listing the live data displays that `LiveDataDisplayView` shows on the debug overlay. |
| [`LiveDataDisplayView`](/mod/game-api/types/alta-utilities/livedatadisplayview) | class | `MonoBehaviour` | 1 | Client: the on-screen debug readout (FPS and similar stats) on the player. Toggled by the DisplayFPS controller action for users with the `debug_features` permission. |
| [`NetworkBytesDisplay`](/mod/game-api/types/alta-utilities/networkbytesdisplay) | class | `LiveDataDisplayBase` | 2 | Placeholder debug readout for network bytes per second. `IsValid` always returns false and the update is empty, so it never shows. |
| [`NetworkMessagesDisplay`](/mod/game-api/types/alta-utilities/networkmessagesdisplay) | class | `LiveDataDisplayBase` | 2 | Placeholder debug readout for network messages per second. `IsValid` always returns false and the update is empty, so it never shows. |
| [`NetworkPacketsDisplay`](/mod/game-api/types/alta-utilities/networkpacketsdisplay) | class | `LiveDataDisplayBase` | 2 | Placeholder debug readout for network packets per second. `IsValid` always returns false and the update is empty, so it never shows. |
| [`PingDisplay`](/mod/game-api/types/alta-utilities/pingdisplay) | class | `LiveDataDisplayBase` | 2 | Client live data display showing the transport ping to the server and the game-level ping from `PingMessage`. |
| [`PlayerCountDisplay`](/mod/game-api/types/alta-utilities/playercountdisplay) | class | `LiveDataDisplayBase` | 0 | Live data display showing how many players are in `Player.AllPlayers`. |
| [`ServerDiagnosticsDisplay`](/mod/game-api/types/alta-utilities/serverdiagnosticsdisplay) | class | `LiveDataDisplayBase` | 3 | Client live data display showing the diagnostics text the server sends. It asks the server to start and stop sending when shown and hidden. |
| [`ServerFpsDisplay`](/mod/game-api/types/alta-utilities/serverfpsdisplay) | class | `LiveDataDisplayBase` | 0 | Client live data display showing the server frame rate reported in `ServerDiagnosticsMessage`. |
| [`TotalDamageDisplay`](/mod/game-api/types/alta-utilities/totaldamagedisplay) | class | `LiveDataDisplayBase` | 0 | Live data display showing `DamageDisplayer.TotalDamage`. |

## Alta.Utilities.Profiling.NetworkTransportMetrics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ConnectionChannelStatistic`](/mod/game-api/types/alta-utilities/connectionchannelstatistic) | class | `NetworkingStatistic` | 2 | Network transport statistic for one connection channel, labelled with the channel's quality of service. |
| [`ConnectionChannelStatistics`](/mod/game-api/types/alta-utilities/connectionchannelstatistics) | class | `NetworkingStatisticsList<ConnectionChannelStatistic, KeyValuePair<ConnectionChannel, ConnectionChannelStatistic>>` | 1 | Named "Connection Channels" list of `ConnectionChannelStatistic` entries, built from a dictionary of channels to statistics. Used by the networking profiler. |
| [`INetworkStatistic`](/mod/game-api/types/alta-utilities/inetworkstatistic) | interface |  | 4 | A single network traffic counter that can be updated each frame and each second, reset, and summarised as text. |
| [`INetworkStatisticCollection`](/mod/game-api/types/alta-utilities/inetworkstatisticcollection) | interface |  | 4 | A group of network statistics that can be updated, reset and dumped as one text report. |
| [`NetworkingProfiler`](/mod/game-api/types/alta-utilities/networkingprofiler) | class | `SingletonBehaviour<NetworkingProfiler>` | 2 | Singleton behaviour that holds connection simulator settings (delay and packet loss) for testing bad networks. |
| [`NetworkingStatistic`](/mod/game-api/types/alta-utilities/networkingstatistic) | class | `INetworkStatistic` | 9 | Counter for one kind of network message in the transport metrics: how many were sent and how many bytes. |
| [`NetworkingStatisticsList<T>`](/mod/game-api/types/alta-utilities/networkingstatisticslist-t) | abstract class | `INetworkStatisticCollection` | 6 | A named list of network traffic statistics with per-frame and per-second byte totals, for profiling and summary dumps. |
| [`NetworkingStatisticsList<TStatistic, TInternalObject>`](/mod/game-api/types/alta-utilities/networkingstatisticslist-tstatistic-tinternalobject) | class | `NetworkingStatisticsList<TStatistic>` | 1 | A `NetworkingStatisticsList` filled once in the constructor by mapping each item of a source collection to a statistic, with a display name. |
| [`NetworkingStatisticsListNonSerialized<T>`](/mod/game-api/types/alta-utilities/networkingstatisticslistnonserialized-t) | abstract class | `INetworkStatisticCollection` | 6 | Same as `NetworkingStatisticsList<T>` but the statistics list is not serialized, so it does not show in the inspector. |
| [`NetworkStatisticWithIncomingPackets`](/mod/game-api/types/alta-utilities/networkstatisticwithincomingpackets) | abstract class | `NetworkTransportStatistic` | 2 | Base for UNET transport statistics that also track incoming packets and incoming packets dropped, on top of the outgoing counters. |
| [`NetworkTransportConnectionStatistic`](/mod/game-api/types/alta-utilities/networktransportconnectionstatistic) | class | `NetworkStatisticWithIncomingPackets` | 4 | Transport statistics for one `Connection`. Mostly a stub: `SetupFields` and `UpdateAllStatisticValues` are empty, so its fields are never filled. |
| [`NetworkTransportCountStatisticField`](/mod/game-api/types/alta-utilities/networktransportcountstatisticfield) | class | `NetworkTransportStatisticField` | 2 | A network transport profiling statistic that counts events, such as packets, read from a value function. |
| [`NetworkTransportHostStatistic`](/mod/game-api/types/alta-utilities/networktransporthoststatistic) | class | `NetworkTransportStatistic` | 5 | UNET transport statistics for one host ID: message queue sizes plus outgoing message, packet and byte counts read from `NetworkTransport`. |
| [`NetworkTransportOverallStatistics`](/mod/game-api/types/alta-utilities/networktransportoverallstatistics) | class | `NetworkStatisticWithIncomingPackets` | 1 | UNET transport statistics across all hosts: incoming packets and drops plus outgoing message, packet and byte totals. |
| [`NetworkTransportStatistic`](/mod/game-api/types/alta-utilities/networktransportstatistic) | abstract class | `INetworkStatisticCollection` | 6 | Base for a set of outgoing network transport stats (messages, packets, bytes) used by the networking profiler. |
| [`NetworkTransportStatisticField`](/mod/game-api/types/alta-utilities/networktransportstatisticfield) | class | `INetworkStatistic` | 9 | One network traffic counter for the profiler. Reads a running total from a function you pass in and reports it relative to the last reset. |
| [`NetworkTransportStatisticType`](/mod/game-api/types/alta-utilities/networktransportstatistictype) | enum |  | 2 | Whether a network transport statistic counts bytes or message count. |

## Alta.Utilities.Profiling.NetworkTransportMetrics.ABTesting

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ServerPingProfiler`](/mod/game-api/types/alta-utilities/serverpingprofiler) | class | `NetworkEntityBehaviour` | 3 | Networked behaviour that measures round-trip time to every player by sending a ping event and timing the reply. Server reads the result through `ServerProfilingData.AveragePing`; reach it through the static `Instance`. |

## Alta.Utility.Graphics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GraphicsSettingsController`](/mod/game-api/types/alta-utilities/graphicssettingscontroller) | static class |  | 2 | Switches Unity's built-in shader settings between PC and Android. Called from `UnityQualitySettingsController`. |
