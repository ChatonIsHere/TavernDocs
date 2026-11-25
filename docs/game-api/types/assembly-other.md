---
title: Other Alta assemblies
description: "Types in the small Alta.* assemblies next to Root.Township."
sidebar_position: 26
---

# Other Alta assemblies

Types in the smaller `Alta.*` assemblies, one section per assembly. 288 types, 38 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Analytics.Runtime

### Alta.Analytics

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AbstractAnalyticsDispatcher`](/game-api/types/assembly-other/abstractanalyticsdispatcher) | abstract class | `IInitializable` | 1 |  |
| [`AnalyticsData`](/game-api/types/assembly-other/analyticsdata) | class | `IAnalyticsData`, `IAnalyticsPropertyWriter`, `IReadonlyAnalyticsData`, +3 more | 7 |  |
| [`AnalyticsEvent`](/game-api/types/assembly-other/analyticsevent) | abstract class | `IAnalyticsEvent`, `IAnalyticsPropertyWriter` | 6 |  |
| [`AnalyticsProperty`](/game-api/types/assembly-other/analyticsproperty) | struct | `IAnalyticsProperty` | 3 |  |
| [`AnalyticsService`](/game-api/types/assembly-other/analyticsservice) | class | `IAnalyticsService`, `IEventSource<IReadonlyAnalyticsData>` | 5 |  |
| [`IAnalyticsData`](/game-api/types/assembly-other/ianalyticsdata) | interface | `IAnalyticsPropertyWriter`, `IReadonlyAnalyticsData`, `IReadOnlyCollection<IAnalyticsProperty>`, +2 more | 1 |  |
| [`IAnalyticsEvent`](/game-api/types/assembly-other/ianalyticsevent) | interface | `IAnalyticsPropertyWriter` | 4 |  |
| [`IAnalyticsInstrument`](/game-api/types/assembly-other/ianalyticsinstrument) | interface |  | 1 |  |
| [`IAnalyticsProperty`](/game-api/types/assembly-other/ianalyticsproperty) | interface |  | 2 |  |
| [`IAnalyticsPropertyWriter`](/game-api/types/assembly-other/ianalyticspropertywriter) | interface |  | 1 |  |
| [`IAnalyticsService`](/game-api/types/assembly-other/ianalyticsservice) | interface | `IEventSource<IReadonlyAnalyticsData>` | 1 | The game's analytics event bus. Listeners (dispatchers) receive each event's data. |
| [`IReadonlyAnalyticsData`](/game-api/types/assembly-other/ireadonlyanalyticsdata) | interface | `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md): `string EventName`, `int? UserId`, and the properties (`IAnalyticsProperty`) as a collection. |

## Alta.ArrayPools.Runtime

### Alta.ArrayPools

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ArrayPoolManager`](/game-api/types/assembly-other/arraypoolmanager) | static class |  | 4 |  |
| [`IUnclearedPower2ArrayPool`](/game-api/types/assembly-other/iunclearedpower2arraypool) | interface |  | 1 |  |
| [`UnclearedPower2ArrayPool<T>`](/game-api/types/assembly-other/unclearedpower2arraypool-t) | class | `IUnclearedPower2ArrayPool` | 7 |  |

## Alta.Attributes

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BoolValueLabeling`](/game-api/types/assembly-other/boolvaluelabeling) | class | `ConditionalLabeling` | 3 |  |
| [`BuildTestAttribute`](/game-api/types/assembly-other/buildtestattribute) | class | `Attribute` | 0 |  |
| [`ButtonAttribute`](/game-api/types/assembly-other/buttonattribute) | class | `PropertyAttribute` | 5 |  |
| [`CacheTransformAttribute`](/game-api/types/assembly-other/cachetransformattribute) | class | `PrefabApplyAttribute` | 1 |  |
| [`CacheTransformIfEmptyAttribute`](/game-api/types/assembly-other/cachetransformifemptyattribute) | class | `PrefabApplyAttribute` | 1 |  |
| [`CleanNullsAttribute`](/game-api/types/assembly-other/cleannullsattribute) | class | `PrefabApplyAttribute` | 1 |  |
| [`CleanRange`](/game-api/types/assembly-other/cleanrange) | class | `PropertyAttribute` | 5 |  |
| [`CommentAttribute`](/game-api/types/assembly-other/commentattribute) | class | `PropertyAttribute` | 4 |  |
| [`CommentAttribute.MessageType`](/game-api/types/assembly-other/commentattribute-messagetype) | enum |  | 4 |  |
| [`ConditionalLabeling`](/game-api/types/assembly-other/conditionallabeling) | abstract class | `PropertyAttribute` | 7 |  |
| [`ConditionAttribute`](/game-api/types/assembly-other/conditionattribute) | class | `PropertyAttribute` | 4 |  |
| [`CustomMethodApplyAttribute`](/game-api/types/assembly-other/custommethodapplyattribute) | class | `PrefabApplyAttribute` | 3 |  |
| [`DegreeToRadian`](/game-api/types/assembly-other/degreetoradian) | class | `PropertyAttribute` | 0 |  |
| [`DotFromAngle`](/game-api/types/assembly-other/dotfromangle) | class | `PropertyAttribute` | 0 |  |
| [`EnumFlagsAttribute`](/game-api/types/assembly-other/enumflagsattribute) | class | `PropertyAttribute` | 0 |  |
| [`FloatRangeSettings`](/game-api/types/assembly-other/floatrangesettings) | class | `PropertyAttribute` | 4 |  |
| [`ForcedCapitalizationAttribute`](/game-api/types/assembly-other/forcedcapitalizationattribute) | class | `PropertyAttribute` | 0 |  |
| [`FormattedBytesFieldAttribute`](/game-api/types/assembly-other/formattedbytesfieldattribute) | class | `PropertyAttribute` | 0 |  |
| [`GetComponentAttribute`](/game-api/types/assembly-other/getcomponentattribute) | class | `PrefabApplyAttribute` | 6 |  |
| [`GetComponentIfEmptyAttribute`](/game-api/types/assembly-other/getcomponentifemptyattribute) | class | `GetComponentAttribute` | 1 |  |
| [`GetComponentInChildrenAttribute`](/game-api/types/assembly-other/getcomponentinchildrenattribute) | class | `GetComponentAttribute` | 2 |  |
| [`GetComponentInParentAttribute`](/game-api/types/assembly-other/getcomponentinparentattribute) | class | `GetComponentAttribute` | 1 |  |
| [`GetComponentsAttribute`](/game-api/types/assembly-other/getcomponentsattribute) | class | `PrefabApplyAttribute` | 5 |  |
| [`GetComponentsInChildrenAttribute`](/game-api/types/assembly-other/getcomponentsinchildrenattribute) | class | `GetComponentsAttribute` | 1 |  |
| [`GetComponentsInChildrenInterfaceAttribute`](/game-api/types/assembly-other/getcomponentsinchildreninterfaceattribute) | class | `GetComponentsInterfaceAttribute` | 2 |  |
| [`GetComponentsInParentAttribute`](/game-api/types/assembly-other/getcomponentsinparentattribute) | class | `GetComponentsAttribute` | 1 |  |
| [`GetComponentsInterfaceAttribute`](/game-api/types/assembly-other/getcomponentsinterfaceattribute) | class | `PrefabApplyAttribute` | 6 |  |
| [`HasComponentLabel`](/game-api/types/assembly-other/hascomponentlabel) | class | `ConditionalLabeling` | 3 |  |
| [`HashedObjectAttribute`](/game-api/types/assembly-other/hashedobjectattribute) | class | `PropertyAttribute` | 2 |  |
| [`HasMethodApplyAttribute`](/game-api/types/assembly-other/hasmethodapplyattribute) | class | `Attribute` | 0 |  |
| [`HasReferenceValueAttribute`](/game-api/types/assembly-other/hasreferencevalueattribute) | class | `PrefabApplyAttribute` | 2 |  |
| [`InversedIntAttribute`](/game-api/types/assembly-other/inversedintattribute) | class | `PropertyAttribute` | 2 |  |
| [`LabelAdd`](/game-api/types/assembly-other/labeladd) | class | `PropertyAttribute` | 2 |  |
| [`MaxAttribute`](/game-api/types/assembly-other/maxattribute) | class | `PropertyAttribute` | 2 |  |
| [`MethodApplyAttribute`](/game-api/types/assembly-other/methodapplyattribute) | class | `Attribute` | 0 |  |
| [`MinAttribute`](/game-api/types/assembly-other/minattribute) | class | `PropertyAttribute` | 2 |  |
| [`NormalizedVector`](/game-api/types/assembly-other/normalizedvector) | class | `PropertyAttribute` | 0 |  |
| [`NotConditionAttribute`](/game-api/types/assembly-other/notconditionattribute) | class | `ConditionAttribute` | 1 |  |
| [`NullConditionAttribute`](/game-api/types/assembly-other/nullconditionattribute) | class | `PropertyAttribute` | 4 |  |
| [`ObsoleteFieldAttribute`](/game-api/types/assembly-other/obsoletefieldattribute) | class | `PropertyAttribute` | 0 |  |
| [`PlatformConditionAttribute`](/game-api/types/assembly-other/platformconditionattribute) | class | `PropertyAttribute` | 3 |  |
| [`PostHeaderAttribute`](/game-api/types/assembly-other/postheaderattribute) | class | `PropertyAttribute` | 2 |  |
| [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute) | abstract class | `PropertyAttribute` | 1 |  |
| [`QuaternionVector3Attribute`](/game-api/types/assembly-other/quaternionvector3attribute) | class | `PropertyAttribute` | 0 |  |
| [`ReadOnlyAttribute`](/game-api/types/assembly-other/readonlyattribute) | class | `PropertyAttribute` | 4 |  |
| [`ReadOnlyInDebugAttribute`](/game-api/types/assembly-other/readonlyindebugattribute) | class | `PropertyAttribute` | 0 |  |
| [`ReadOnlyMode`](/game-api/types/assembly-other/readonlymode) | enum |  | 3 |  |
| [`ReorderableListAttribute`](/game-api/types/assembly-other/reorderablelistattribute) | class | `PropertyAttribute` | 5 |  |
| [`SceneNameAttribute`](/game-api/types/assembly-other/scenenameattribute) | class | `PropertyAttribute` | 0 |  |
| [`SerializedInterfaceAttribute`](/game-api/types/assembly-other/serializedinterfaceattribute) | class | `PropertyAttribute` | 2 |  |
| [`SquaredValue`](/game-api/types/assembly-other/squaredvalue) | class | `PropertyAttribute` | 0 |  |
| [`StepAnimationCurveAttribute`](/game-api/types/assembly-other/stepanimationcurveattribute) | class | `PropertyAttribute` | 0 |  |
| [`SubInspectorAttribute`](/game-api/types/assembly-other/subinspectorattribute) | class | `PropertyAttribute` | 0 |  |
| [`TanFromAngle`](/game-api/types/assembly-other/tanfromangle) | class | `PropertyAttribute` | 0 |  |
| [`TimeInSecondsAttribute`](/game-api/types/assembly-other/timeinsecondsattribute) | class | `PropertyAttribute` | 0 |  |
| [`TypeExtensions`](/game-api/types/assembly-other/typeextensions) | static class |  | 4 |  |
| [`ValidatePrefabApplyAttribute`](/game-api/types/assembly-other/validateprefabapplyattribute) | class | `PrefabApplyAttribute` | 2 |  |
| [`ValueConditionAttribute`](/game-api/types/assembly-other/valueconditionattribute) | class | `PropertyAttribute` | 5 |  |

## Alta.Authentication

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`PlayerSubscriberStatus`](/game-api/types/assembly-other/playersubscriberstatus) | enum |  | 4 | [Player](../networking/player.md#playersubscriberstatus), [Alta assemblies](../console-and-utilities/alta-assemblies.md): `None`, `Subscriber`, `Developer`, `AltaMod` (0 to 3). |
| [`UserPermissions`](/game-api/types/assembly-other/userpermissions) | static class |  | 7 |  |

### Alta.Authentication

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AuthenticationUtility`](/game-api/types/assembly-other/authenticationutility) | class | `IAuthenticationUtility` | 6 | [Alta assemblies](../console-and-utilities/alta-assemblies.md), [Startup and app state](../console-and-utilities/startup-and-app-state.md): Logs in from the command line (`/login`, `/login_hash`, `/access_token`, `/oauth_login`), with a username and password, or with a stored refresh token. |
| [`Constants`](/game-api/types/assembly-other/constants) | static class |  | 3 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The `PlayerPreferences` key names for the three tokens. |
| [`IAuthenticationUtility`](/game-api/types/assembly-other/iauthenticationutility) | interface |  | 5 |  |
| [`ILoginPreferences`](/game-api/types/assembly-other/iloginpreferences) | interface |  | 5 | [Alta assemblies](../console-and-utilities/alta-assemblies.md) |
| [`LoginPreferences`](/game-api/types/assembly-other/loginpreferences) | class | `ILoginPreferences`, `IInitializable`, `IDisposable` | 8 | [Alta assemblies](../console-and-utilities/alta-assemblies.md) |

## Alta.Build

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BuildRendererBakeable`](/game-api/types/assembly-other/buildrendererbakeable) | abstract class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 3 |  |
| [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable) | interface |  | 0 | Empty marker interface for components that the build process bakes. `IBuildRendererBakeable` and `IBuildRendererPostBake` extend it. |
| [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable) | interface | `IBuildBakeable` | 3 | Build-time hook for components that bake renderer data into a prefab. Bakers run in `SortingOrder` order. |
| [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake) | interface | `IBuildBakeable` | 1 | For components that need a step after a build renderer bake. `BuildRendererBakeable` calls `PostBake` on every one under the target once baking finishes. Build-time only. |

## Alta.CommandLine

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CommandLineArguments`](/game-api/types/assembly-other/commandlinearguments) | static class |  | 45 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#commandlinearguments): Reads `Environment.GetCommandLineArgs()` once, on first use. |
| [`CommandLineArgumentsInEditor`](/game-api/types/assembly-other/commandlineargumentsineditor) | class | `GlobalSettings<CommandLineArgumentsInEditor>` | 1 |  |

## Alta.Core.Runtime

### Alta.Core.Runtime

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AverageNumber`](/game-api/types/assembly-other/averagenumber) | class |  | 8 |  |

## Alta.Coroutines

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaCoroutine`](/game-api/types/assembly-other/altacoroutine) | class |  | 14 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine), [Alta assemblies](../console-and-utilities/alta-assemblies.md): A wrapper around a Unity coroutine that catches exceptions and tells you how it ended. |
| [`AltaCoroutineState`](/game-api/types/assembly-other/altacoroutinestate) | enum |  | 5 |  |
| [`CoroutineYields`](/game-api/types/assembly-other/coroutineyields) | static class |  | 3 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#coroutineyields-and-taskyield) |
| [`EditorCoroutine`](/game-api/types/assembly-other/editorcoroutine) | class | `AltaCoroutine` | 1 |  |
| [`TaskYield<T>`](/game-api/types/assembly-other/taskyield-t) | class | `CustomYieldInstruction` | 4 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#coroutineyields-and-taskyield) |

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaCoroutineHandler`](/game-api/types/assembly-other/altacoroutinehandler) | internal class | `SingletonBehaviour<AltaCoroutineHandler>` | 0 |  |
| [`RateLimiter`](/game-api/types/assembly-other/ratelimiter) | class |  | 2 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#ratelimiter), [Alta assemblies](../console-and-utilities/alta-assemblies.md): `new RateLimiter(float targetTickRate)` then `bool IsRateLimited()`: false at most `targetTickRate` times a second (by `Time.realtimeSinceStartup`), true in between. |

## Alta.EventBus.Runtime

### Alta.EventBusSystem

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`EventBus<T>`](/game-api/types/assembly-other/eventbus-t) | class | `IEventBus<T>`, `IEventSource<T>` | 4 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`IEventBus<T>`](/game-api/types/assembly-other/ieventbus-t) | interface | `IEventSource<T>` | 1 |  |
| [`IEventSource<T>`](/game-api/types/assembly-other/ieventsource-t) | interface |  | 2 |  |

## Alta.Global.Runtime

### Alta.Global

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GlobalSettings`](/game-api/types/assembly-other/globalsettings) | abstract class | `ScriptableObject` | 1 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| [`GlobalSettings<T>`](/game-api/types/assembly-other/globalsettings-t) | class | `GlobalSettings` | 2 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| [`GlobalSettings<TConcrete, TInterface>`](/game-api/types/assembly-other/globalsettings-tconcrete-tinterface) | class | `GlobalSettings` | 3 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| [`GlobalSettingsAttribute`](/game-api/types/assembly-other/globalsettingsattribute) | class | `Attribute` | 2 |  |
| [`GlobalSettingsInitializer`](/game-api/types/assembly-other/globalsettingsinitializer) | class | `MonoBehaviour` | 0 |  |

## Alta.IO

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IPlayerPreferenceValue<T>`](/game-api/types/assembly-other/iplayerpreferencevalue-t) | interface |  | 1 |  |
| [`PlayerPreferenceBool`](/game-api/types/assembly-other/playerpreferencebool) | class | `PlayerPreferenceValue<bool>` | 1 |  |
| [`PlayerPreferenceFloat`](/game-api/types/assembly-other/playerpreferencefloat) | class | `PlayerPreferenceValue<float>` | 1 |  |
| [`PlayerPreferenceInt`](/game-api/types/assembly-other/playerpreferenceint) | class | `PlayerPreferenceValue<int>` | 1 |  |
| [`PlayerPreferences`](/game-api/types/assembly-other/playerpreferences) | static class |  | 12 | [Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences): The game's replacement for Unity's `PlayerPrefs`: a dictionary saved to `player.prefs` in `StorageFolder`. |
| [`PlayerPreferenceString`](/game-api/types/assembly-other/playerpreferencestring) | class | `PlayerPreferenceValue<string>` | 1 |  |
| [`PlayerPreferenceValue<T>`](/game-api/types/assembly-other/playerpreferencevalue-t) | abstract class | `IPlayerPreferenceValue<T>` | 2 |  |
| [`PlayerSettingsNames`](/game-api/types/assembly-other/playersettingsnames) | class |  | 2 |  |

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaFile`](/game-api/types/assembly-other/altafile) | class | `IAltaFile` | 24 |  |
| [`AltaFolder`](/game-api/types/assembly-other/altafolder) | class | `IAltaFolder` | 16 |  |
| [`AltaIO`](/game-api/types/assembly-other/altaio) | class |  | 7 | [Settings and files](../console-and-utilities/settings-and-files.md#altaio), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md): Static folders, set up the first time anything touches the class. |
| [`DigitalOceanUtility`](/game-api/types/assembly-other/digitaloceanutility) | static class |  | 3 |  |
| [`FileInfoWrapper`](/game-api/types/assembly-other/fileinfowrapper) | class | `IFileAccess` | 8 |  |
| [`FileSystemExtensions`](/game-api/types/assembly-other/filesystemextensions) | static class |  | 2 |  |
| [`IAltaFile`](/game-api/types/assembly-other/ialtafile) | interface |  | 19 | [Settings and files](../console-and-utilities/settings-and-files.md#ialtafolder-and-ialtafile) |
| [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat) | abstract class | `IDisposable` | 5 | Base for a file format the game can read from and write to a stream, such as a save file's contents. Disposable. |
| [`IAltaFolder`](/game-api/types/assembly-other/ialtafolder) | interface |  | 15 | [Settings and files](../console-and-utilities/settings-and-files.md#ialtafolder-and-ialtafile) |
| [`IFileAccess`](/game-api/types/assembly-other/ifileaccess) | interface |  | 7 |  |
| [`IRemoteAltaFile`](/game-api/types/assembly-other/iremotealtafile) | interface |  | 4 |  |
| [`RemoteAltaFile`](/game-api/types/assembly-other/remotealtafile) | class | `RemoteFiles.RemoteAltaFile<FileInfoWrapper>` | 1 |  |
| [`RemoteAltaFolder`](/game-api/types/assembly-other/remotealtafolder) | class | `AltaFolder` | 6 |  |
| [`RemoteFiles`](/game-api/types/assembly-other/remotefiles) | static class |  | 1 |  |
| [`RemoteFiles.RemoteAltaFile<TFileType>`](/game-api/types/assembly-other/remotefiles-remotealtafile-tfiletype) | abstract class | `IAltaFile`, `IRemoteAltaFile` | 23 |  |
| [`S3CloudStorageRemoteFile`](/game-api/types/assembly-other/s3cloudstorageremotefile) | class | `RemoteFiles.RemoteAltaFile<S3StorageFile>` | 1 |  |
| [`S3RemoteFolder`](/game-api/types/assembly-other/s3remotefolder) | class | `AltaFolder` | 9 |  |
| [`S3StorageFile`](/game-api/types/assembly-other/s3storagefile) | class | `S3StorageObject`, `IFileAccess` | 7 |  |
| [`S3StorageFolder`](/game-api/types/assembly-other/s3storagefolder) | class | `S3StorageObject` | 5 |  |
| [`S3StorageObject`](/game-api/types/assembly-other/s3storageobject) | class |  | 6 |  |
| [`S3Utility`](/game-api/types/assembly-other/s3utility) | static class |  | 3 |  |
| [`TextFileFormat`](/game-api/types/assembly-other/textfileformat) | class | `IAltaFileFormat` | 4 |  |

## Alta.LifecycleManagement.Runtime

### Alta.LifecycleManagement

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CompositeDisposable`](/game-api/types/assembly-other/compositedisposable) | class | `ICollection<IDisposable>`, `IEnumerable<IDisposable>`, `IEnumerable`, +2 more | 14 |  |
| [`Disposable`](/game-api/types/assembly-other/disposable) | static class |  | 3 |  |
| [`Disposer`](/game-api/types/assembly-other/disposer) | class | `IDisposer`, `IDisposable` | 3 |  |
| [`DisposerExtensions`](/game-api/types/assembly-other/disposerextensions) | static class |  | 2 |  |
| [`ICancelable`](/game-api/types/assembly-other/icancelable) | interface | `IDisposable` | 1 |  |
| [`IIsolate`](/game-api/types/assembly-other/iisolate) | interface |  | 0 |  |
| [`SerialDisposable`](/game-api/types/assembly-other/serialdisposable) | class | `ICancelable`, `IDisposable` | 3 |  |

### System

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IDisposer`](/game-api/types/assembly-other/idisposer) | interface | `IDisposable` | 1 |  |

## Alta.LifetimeScopes

### Alta.ATT.LifetimeScopes

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AbstractAltaLifetimeScope`](/game-api/types/assembly-other/abstractaltalifetimescope) | abstract class | `LifetimeScope` | 1 |  |
| [`AnalyticsInstaller`](/game-api/types/assembly-other/analyticsinstaller) | class |  | 1 |  |
| [`ApplicationLifetimeScope`](/game-api/types/assembly-other/applicationlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`Binder`](/game-api/types/assembly-other/binder) | abstract class |  | 0 |  |
| [`Binder<TContract>`](/game-api/types/assembly-other/binder-tcontract) | class | `Binder` | 7 |  |
| [`Binder<TContract>.AltaRegistrationBuilder`](/game-api/types/assembly-other/binder-tcontract-altaregistrationbuilder) | class | `RegistrationBuilder` | 2 |  |
| [`ContainerBuilderExtensions`](/game-api/types/assembly-other/containerbuilderextensions) | static class |  | 2 |  |
| [`DependencyInjectionEditorInitializer`](/game-api/types/assembly-other/dependencyinjectioneditorinitializer) | class | `ScriptableObject` | 0 |  |
| [`DependencyInjectionInitializer`](/game-api/types/assembly-other/dependencyinjectioninitializer) | class | `MonoBehaviour` | 0 |  |
| [`GameLifetimeScope`](/game-api/types/assembly-other/gamelifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`GameObjectLifetimeScope`](/game-api/types/assembly-other/gameobjectlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`GlobalSettingsInstaller`](/game-api/types/assembly-other/globalsettingsinstaller) | class | `ScriptableObject` | 1 |  |
| [`MainMenuVrLifetimeScope`](/game-api/types/assembly-other/mainmenuvrlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`PlatformSpecificScriptableObjectInstaller`](/game-api/types/assembly-other/platformspecificscriptableobjectinstaller) | class | `ScriptableObject` | 1 |  |
| [`PlayerControllerLifetimeScope`](/game-api/types/assembly-other/playercontrollerlifetimescope) | class | `GameObjectLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`ProjectLifetimeScope`](/game-api/types/assembly-other/projectlifetimescope) | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| [`WindowsGlobalSettingsInstaller`](/game-api/types/assembly-other/windowsglobalsettingsinstaller) | class | `PlatformSpecificScriptableObjectInstaller` | 1 |  |
| [`WindowsInstaller`](/game-api/types/assembly-other/windowsinstaller) | class |  | 1 |  |

## Alta.MenuItem

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaMenuItem`](/game-api/types/assembly-other/altamenuitem) | abstract class | `ISearchableTool` | 12 | Base for Alta's editor menu commands. Subclasses nest inside an `AltaMenuItemBase` path class, and editor tooling generates a Unity menu entry for each one. Editor only, does nothing in a running server. |
| [`AltaMenuItemBase`](/game-api/types/assembly-other/altamenuitembase) (and 172 nested types) | class |  | 1 |  |

## Alta.NetworkTransport.Runtime

### Alta.NetworkingTransport

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaNetworkError`](/game-api/types/assembly-other/altanetworkerror) | enum |  | 9 |  |
| [`INetworkTransportResult`](/game-api/types/assembly-other/inetworktransportresult) | interface |  | 2 |  |
| [`IPacketProcessor`](/game-api/types/assembly-other/ipacketprocessor) | interface |  | 1 |  |
| [`IParallelPacketProcessor`](/game-api/types/assembly-other/iparallelpacketprocessor) | interface | `IPacketProcessor` | 1 |  |
| [`ITransport`](/game-api/types/assembly-other/itransport) | interface |  | 6 |  |
| [`ITransportClient`](/game-api/types/assembly-other/itransportclient) | interface | `ITransportSocket` | 3 |  |
| [`ITransportConnection`](/game-api/types/assembly-other/itransportconnection) | interface |  | 8 |  |
| [`ITransportServer`](/game-api/types/assembly-other/itransportserver) | interface | `ITransportSocket` | 2 |  |
| [`ITransportSocket`](/game-api/types/assembly-other/itransportsocket) | interface |  | 9 |  |
| [`MessageReceivePool`](/game-api/types/assembly-other/messagereceivepool) | static class |  | 4 |  |
| [`NetworkTransportResult`](/game-api/types/assembly-other/networktransportresult) | class | `INetworkTransportResult` | 5 |  |

### Alta.NetworkingTransport.Kcp

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`KcpClientConnection`](/game-api/types/assembly-other/kcpclientconnection) | class | `ITransportConnection` | 10 |  |
| [`KcpClientWrapper`](/game-api/types/assembly-other/kcpclientwrapper) | class | `ITransportClient`, `ITransportSocket` | 14 |  |
| [`KcpErrorConverter`](/game-api/types/assembly-other/kcperrorconverter) | static class |  | 1 |  |
| [`KcpServerConnection`](/game-api/types/assembly-other/kcpserverconnection) | class | `ITransportConnection` | 10 |  |
| [`KcpServerWrapper`](/game-api/types/assembly-other/kcpserverwrapper) | class | `ITransportServer`, `ITransportSocket` | 13 |  |
| [`KcpSettings`](/game-api/types/assembly-other/kcpsettings) | class | `GlobalSettings<KcpSettings>` | 11 |  |
| [`KcpTransport`](/game-api/types/assembly-other/kcptransport) | class | `ITransport` | 9 |  |

### Alta.NetworkingTransport.Parallel

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`LlapiMetric`](/game-api/types/assembly-other/llapimetric) | class |  | 6 |  |

## Alta.Platform

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FfvSource`](/game-api/types/assembly-other/ffvsource) | enum |  | 4 |  |
| [`PlatformTarget`](/game-api/types/assembly-other/platformtarget) | enum |  | 2 | [Player](../networking/player.md#platformtarget): `PC = 1`, `Quest = 2` (flags, in `Alta.Platform.dll`). The client sends it in its join request. |
| [`PlayerMode`](/game-api/types/assembly-other/playermode) | enum |  | 8 | [Player](../networking/player.md#playermode): `PlayerMode` (no namespace, in `Alta.Platform.dll`), a flags enum: |
| [`PlayerModeExtensions`](/game-api/types/assembly-other/playermodeextensions) | static class |  | 2 |  |

### Alta.Platform

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccessTokenMode`](/game-api/types/assembly-other/accesstokenmode) | enum |  | 3 |  |
| [`IAuthenticationFeatures`](/game-api/types/assembly-other/iauthenticationfeatures) | interface |  | 3 |  |
| [`IAuthenticationService`](/game-api/types/assembly-other/iauthenticationservice) | interface |  | 9 |  |
| [`IPlatformDevice`](/game-api/types/assembly-other/iplatformdevice) | interface |  | 1 |  |
| [`IPlatformService`](/game-api/types/assembly-other/iplatformservice) | interface |  | 2 |  |
| [`IUserService`](/game-api/types/assembly-other/iuserservice) | interface | `IAuthenticationService` | 4 |  |
| [`IValidVersionService`](/game-api/types/assembly-other/ivalidversionservice) | interface |  | 3 |  |

### Alta.Platform.Fakes

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FakePlatformDevice`](/game-api/types/assembly-other/fakeplatformdevice) | class | `IPlatformDevice` | 1 |  |
| [`FakePlatformService`](/game-api/types/assembly-other/fakeplatformservice) | class | `IPlatformService` | 2 |  |
| [`FakeValidVersionService`](/game-api/types/assembly-other/fakevalidversionservice) | class | `IValidVersionService` | 3 |  |

### Alta.Platform.Models

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IUser`](/game-api/types/assembly-other/iuser) | interface |  | 2 |  |

## Alta.Platform.Generic

### Alta.Platform.Generic

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AuthenticationFeatures`](/game-api/types/assembly-other/authenticationfeatures) | class | `IAuthenticationFeatures` | 3 |  |
| [`AuthenticationService`](/game-api/types/assembly-other/authenticationservice) | class | `IAuthenticationService` | 10 |  |
| [`UserService`](/game-api/types/assembly-other/userservice) | class | `IUserService`, `IAuthenticationService` | 15 |  |

## Alta.PlatformInformation.Runtime

### Alta.PlatformInformation

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`LocalPlatformProvider`](/game-api/types/assembly-other/localplatformprovider) | internal class |  | 1 |  |
| [`OverridePlatformProvider`](/game-api/types/assembly-other/overrideplatformprovider) | internal class |  | 4 |  |
| [`PlatformFlags`](/game-api/types/assembly-other/platformflags) | enum |  | 7 |  |
| [`PlatformProvider`](/game-api/types/assembly-other/platformprovider) | static class |  | 20 |  |

## Alta.Profiling.Runtime

### Alta.Profiling

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ProfileMarker`](/game-api/types/assembly-other/profilemarker) | static class |  | 2 |  |
| [`ProfilingSession`](/game-api/types/assembly-other/profilingsession) | class | `IDisposable` | 6 |  |

## Alta.SearchableTools

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ISearchableTool`](/game-api/types/assembly-other/isearchabletool) | interface |  | 6 |  |

## Alta.Serialization.Runtime

### Alta.Serialization

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BitDisplay`](/game-api/types/assembly-other/bitdisplay) | static class |  | 2 |  |
| [`BitReader`](/game-api/types/assembly-other/bitreader) | class |  | 12 |  |
| [`BitWriter`](/game-api/types/assembly-other/bitwriter) | class |  | 14 |  |
| [`BitWriter.GetMoreData`](/game-api/types/assembly-other/bitwriter-getmoredata) | delegate |  | 0 |  |
| [`Compressor`](/game-api/types/assembly-other/compressor) | class | `Stream` | 10 |  |
| [`Stream`](/game-api/types/assembly-other/stream) | abstract class | `IDisposable`, `ICloneable` | 51 | [Stream](../networking/stream.md): Every network message and every save file in the game is written with this: a bit stream with one abstract base and two concrete types, `StreamWriter` and `StreamReader`. |
| [`Stream.StringEncoding`](/game-api/types/assembly-other/stream-stringencoding) | enum |  | 2 |  |
| [`StreamCounter`](/game-api/types/assembly-other/streamcounter) | class | `Stream` | 10 |  |
| [`StreamReader`](/game-api/types/assembly-other/streamreader) | class | `Stream` | 14 | [Stream](../networking/stream.md#streamwriter-and-streamreader) |
| [`StreamWriter`](/game-api/types/assembly-other/streamwriter) | class | `Stream` | 20 | [Stream](../networking/stream.md#streamwriter-and-streamreader) |
| [`UFloatBytes`](/game-api/types/assembly-other/ufloatbytes) | internal struct |  | 1 |  |
| [`ULongBytes`](/game-api/types/assembly-other/ulongbytes) | internal struct |  | 1 |  |

## Alta.Singletons

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`SingletonBehaviour<T>`](/game-api/types/assembly-other/singletonbehaviour-t) | class | `MonoBehaviour` | 2 | Base for a component that should exist once. The first one to wake becomes `Instance`; any later copy destroys itself. |

## Alta.Timing.Runtime

### Alta.Timing

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ITimeline`](/game-api/types/assembly-other/itimeline) | interface |  | 1 |  |
| [`Timeline`](/game-api/types/assembly-other/timeline) | class | `ITimeline` | 21 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline), [Time and environment](../world/time-and-environment.md#timeline): A scheduler for "call this in N seconds" and "every N seconds", used for respawns, decay, loot refills, taxes, timed stat changes and the like. Main thread. |
| [`Timeline.IEntry`](/game-api/types/assembly-other/timeline-ientry) | interface |  | 2 | Handle to a callback scheduled on the game `Timeline` (from `CallAfterDuration`, `CallRepeatableAfterDuration` and so on). Pass it to `Timeline.Cancel` to stop it. |
| [`Timeline.SerializedEntryState`](/game-api/types/assembly-other/timeline-serializedentrystate) | enum |  | 3 |  |
| [`TimelineUpdater`](/game-api/types/assembly-other/timelineupdater) | class | `MonoBehaviour` | 0 |  |

### Alta.Timing.PriorityQueue

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FastPriorityQueue<T>`](/game-api/types/assembly-other/fastpriorityqueue-t) | class | `IFixedSizePriorityQueue<T, float>`, `IPriorityQueue<T, float>`, `IEnumerable<T>`, +1 more | 14 |  |
| [`FastPriorityQueueNode`](/game-api/types/assembly-other/fastpriorityqueuenode) | class |  | 2 |  |
| [`FastPriorityQueueNodeTimeSpan`](/game-api/types/assembly-other/fastpriorityqueuenodetimespan) | class |  | 2 |  |
| [`FastPriorityQueueTimeSpan<T>`](/game-api/types/assembly-other/fastpriorityqueuetimespan-t) | class | `IFixedSizePriorityQueue<T, TimeSpan>`, `IPriorityQueue<T, TimeSpan>`, `IEnumerable<T>`, +1 more | 13 |  |
| [`GenericPriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority) | class | `IFixedSizePriorityQueue<TItem, TPriority>`, `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, +1 more | 15 |  |
| [`GenericPriorityQueueNode<TPriority>`](/game-api/types/assembly-other/genericpriorityqueuenode-tpriority) | class |  | 3 |  |
| [`IFixedSizePriorityQueue<TItem, in TPriority>`](/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority) | internal interface | `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, `IEnumerable` | 2 |  |
| [`IPriorityQueue<TItem, in TPriority>`](/game-api/types/assembly-other/ipriorityqueue-titem-intpriority) | interface | `IEnumerable<TItem>`, `IEnumerable` | 8 |  |
| [`SimplePriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority) | class | `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, `IEnumerable` | 20 |  |
| [`SimplePriorityQueue<TItem>`](/game-api/types/assembly-other/simplepriorityqueue-titem) | class | `SimplePriorityQueue<TItem, float>` | 3 |  |
| [`StablePriorityQueue<T>`](/game-api/types/assembly-other/stablepriorityqueue-t) | class | `IFixedSizePriorityQueue<T, float>`, `IPriorityQueue<T, float>`, `IEnumerable<T>`, +1 more | 13 |  |
| [`StablePriorityQueueNode`](/game-api/types/assembly-other/stablepriorityqueuenode) | class | `FastPriorityQueueNode` | 1 |  |

## Alta.VContainerLayer.Runtime

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Factory`](/game-api/types/assembly-other/factory) | abstract class | `IFactory`, `IDisposable` | 1 |  |
| [`Factory<TInterface>`](/game-api/types/assembly-other/factory-tinterface) | abstract class | `Factory`, `IFactory<TInterface>`, `IFactory`, +1 more | 1 |  |
| [`Factory<TParam, TInterface>`](/game-api/types/assembly-other/factory-tparam-tinterface) | abstract class | `Factory`, `IFactory<TParam, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`Factory<TParam1, TParam2, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tinterface) | abstract class | `Factory`, `IFactory<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`Factory<TParam1, TParam2, TParam3, TInterface>`](/game-api/types/assembly-other/factory-tparam1-tparam2-tparam3-tinterface) | abstract class | `Factory`, `IFactory<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`FactoryAsync`](/game-api/types/assembly-other/factoryasync) | abstract class | `Factory` | 1 |  |
| [`FactoryAsync<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TInterface>`, `IFactory`, +1 more | 1 |  |
| [`FactoryAsync<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TParam, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`FactoryAsync<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`FactoryAsync<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasync-tparam1-tparam2-tparam3-tconcrete-tinterface) | abstract class | `FactoryAsync`, `IFactoryAsync<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`FactoryAsyncPooled<TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tconcrete-tinterface) | abstract class | `Factory` | 2 |  |
| [`FactoryAsyncPooled<TParam, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam-tconcrete-tinterface) | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`FactoryAsyncPooled<TParam1, TParam2, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tconcrete-tinterface) | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>`](/game-api/types/assembly-other/factoryasyncpooled-tparam1-tparam2-tparam3-tconcrete-tinterface) | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 |  |
| [`IDespawnable`](/game-api/types/assembly-other/idespawnable) | interface |  | 1 |  |
| [`IFactory`](/game-api/types/assembly-other/ifactory) | interface | `IDisposable` | 0 | Base interface for the VContainer layer's factories. The generic versions add `Create` with zero to three parameters; all are disposable. |
| [`IFactory<in TParam, out TInterface>`](/game-api/types/assembly-other/ifactory-intparam-outtinterface) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactory<in TParam1, in TParam2, in TParam3, out TInterface>`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-intparam3-outtinterface) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactory<in TParam1, in TParam2, out TInterface>`](/game-api/types/assembly-other/ifactory-intparam1-intparam2-outtinterface) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactory<out TInstance>`](/game-api/types/assembly-other/ifactory-outtinstance) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactoryAsync<in TParam, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam-tinterface) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactoryAsync<in TParam1, in TParam2, in TParam3, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-intparam3-tinterface) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactoryAsync<in TParam1, in TParam2, TInterface>`](/game-api/types/assembly-other/ifactoryasync-intparam1-intparam2-tinterface) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactoryAsync<TInterface>`](/game-api/types/assembly-other/ifactoryasync-tinterface) | interface | `IFactory`, `IDisposable` | 1 |  |
| [`IFactoryAsyncPooled<in TParam, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam-tinterface) | interface | `IFactory`, `IDisposable` | 2 |  |
| [`IFactoryAsyncPooled<in TParam1, in TParam2, in TParam3, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam1-intparam2-intparam3-tinterface) | interface | `IFactory`, `IDisposable` | 2 |  |
| [`IFactoryAsyncPooled<in TParam1, in TParam2, TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-intparam1-intparam2-tinterface) | interface | `IFactory`, `IDisposable` | 2 |  |
| [`IFactoryAsyncPooled<TInterface>`](/game-api/types/assembly-other/ifactoryasyncpooled-tinterface) | interface | `IFactory`, `IDisposable` | 2 |  |
| [`IFactoryConstructable`](/game-api/types/assembly-other/ifactoryconstructable) | interface |  | 1 |  |
| [`IFactoryConstructable<in TParam1, in TParam2, in TParam3>`](/game-api/types/assembly-other/ifactoryconstructable-intparam1-intparam2-intparam3) | interface |  | 1 |  |
| [`IFactoryConstructable<in TParam1, in TParam2>`](/game-api/types/assembly-other/ifactoryconstructable-intparam1-intparam2) | interface |  | 1 |  |
| [`IFactoryConstructable<in TParam>`](/game-api/types/assembly-other/ifactoryconstructable-intparam) | interface |  | 1 |  |
| [`IPooledInstance`](/game-api/types/assembly-other/ipooledinstance) | interface | `IDespawnable` | 1 |  |
| [`IPooledInstance<in TParam1, in TParam2, in TParam3>`](/game-api/types/assembly-other/ipooledinstance-intparam1-intparam2-intparam3) | interface | `IDespawnable` | 1 |  |
| [`IPooledInstance<in TParam1, in TParam2>`](/game-api/types/assembly-other/ipooledinstance-intparam1-intparam2) | interface | `IDespawnable` | 1 |  |
| [`IPooledInstance<in TParam>`](/game-api/types/assembly-other/ipooledinstance-intparam) | interface | `IDespawnable` | 1 |  |

## Alta.Values

### Alta

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GeneralValue`](/game-api/types/assembly-other/generalvalue) | abstract class | `ScriptableObject` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): A `ScriptableObject` with a `Description` and a `Type`. |
| [`HashedGeneralValue`](/game-api/types/assembly-other/hashedgeneralvalue) | abstract class | `GeneralValue` | 2 |  |
| [`HashedGeneralValue<T>`](/game-api/types/assembly-other/hashedgeneralvalue-t) | abstract class | `HashedGeneralValue` | 8 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): A `GeneralValue` with a stable `uint Hash`. `Item`, `PageCollection`, `PopulationDefinition`, `MouldDefinition`, `Festivity`, `GameAction` and many more derive from it. |
| [`HashedGeneralValueComparer`](/game-api/types/assembly-other/hashedgeneralvaluecomparer) | class | `IEqualityComparer<HashedGeneralValue>` | 1 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): Compares by hash. |
| [`HashedGeneralValueConverter<T>`](/game-api/types/assembly-other/hashedgeneralvalueconverter-t) | class | `TypeConverter` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The console converter for those types: a hash, or a name. |
| [`HashedPathAttribute`](/game-api/types/assembly-other/hashedpathattribute) | class | `Attribute` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): Which `Resources` folders hold a type's assets. |

### Alta.Networking

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`HashHelper`](/game-api/types/assembly-other/hashhelper) | static class |  | 7 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The hashing the game uses: `Hash(string)`, `HashCompressed`, `GetHashCodeForString`, and the editor-side hash validation. Hashes are 16 bits (`MaxHash` 65535). |

## Alta.XRManagement

### (no namespace)

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`XRUtility`](/game-api/types/assembly-other/xrutility) | static class |  | 1 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |

### Alta.XRLoaders

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IXRLoaderInitializer`](/game-api/types/assembly-other/ixrloaderinitializer) | interface |  | 0 |  |
| [`IXRManagerSettingsController`](/game-api/types/assembly-other/ixrmanagersettingscontroller) | interface |  | 3 |  |
| [`TownshipXRMode`](/game-api/types/assembly-other/townshipxrmode) | enum |  | 3 |  |
| [`XRLoaderStaticData`](/game-api/types/assembly-other/xrloaderstaticdata) | static class |  | 6 |  |
| [`XRManagerSettingsController`](/game-api/types/assembly-other/xrmanagersettingscontroller) | class | `IXRManagerSettingsController`, `IInitializable` | 4 |  |

## Alta.XRManagement.Windows

### Alta.XRLoaders

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IWindowsXRLoaderSettings`](/game-api/types/assembly-other/iwindowsxrloadersettings) | interface |  | 3 |  |
| [`IXRSupportSystem`](/game-api/types/assembly-other/ixrsupportsystem) | interface |  | 2 |  |
| [`SteamOpenVrInitializer`](/game-api/types/assembly-other/steamopenvrinitializer) | class | `IXRSupportSystem` | 2 |  |
| [`WindowsXRLoaderInitializer`](/game-api/types/assembly-other/windowsxrloaderinitializer) | class | `IInitializable`, `IXRLoaderInitializer` | 3 |  |
| [`WindowsXRLoaderSettings`](/game-api/types/assembly-other/windowsxrloadersettings) | class | `GlobalSettings<WindowsXRLoaderSettings>`, `IWindowsXRLoaderSettings` | 4 |  |
