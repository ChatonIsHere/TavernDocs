---
title: Other Alta assemblies
description: "Types in the small Alta.* assemblies next to Root.Township."
sidebar_position: 26
---

# Other Alta assemblies

Types in the smaller `Alta.*` assemblies, one section per assembly. 288 types, 39 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Analytics.Runtime

### Alta.Analytics

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AbstractAnalyticsDispatcher` | abstract class | `IInitializable` | 1 |  |
| `AnalyticsData` | class | `IAnalyticsData`, `IAnalyticsPropertyWriter`, `IReadonlyAnalyticsData`, +3 more | 7 |  |
| `AnalyticsEvent` | abstract class | `IAnalyticsEvent`, `IAnalyticsPropertyWriter` | 6 |  |
| `AnalyticsProperty` | struct | `IAnalyticsProperty` | 3 |  |
| `AnalyticsService` | class | `IAnalyticsService`, `IEventSource<IReadonlyAnalyticsData>` | 5 |  |
| `IAnalyticsData` | interface | `IAnalyticsPropertyWriter`, `IReadonlyAnalyticsData`, `IReadOnlyCollection<IAnalyticsProperty>`, +2 more | 1 |  |
| `IAnalyticsEvent` | interface | `IAnalyticsPropertyWriter` | 4 |  |
| `IAnalyticsInstrument` | interface |  | 1 |  |
| `IAnalyticsProperty` | interface |  | 2 |  |
| `IAnalyticsPropertyWriter` | interface |  | 1 |  |
| `IAnalyticsService` | interface | `IEventSource<IReadonlyAnalyticsData>` | 1 |  |
| `IReadonlyAnalyticsData` | interface | `IReadOnlyCollection<IAnalyticsProperty>`, `IEnumerable<IAnalyticsProperty>`, `IEnumerable` | 2 | [Event buses and services](../console-and-utilities/event-buses-and-services.md): `string EventName`, `int? UserId`, and the properties (`IAnalyticsProperty`) as a collection. |

## Alta.ArrayPools.Runtime

### Alta.ArrayPools

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ArrayPoolManager` | static class |  | 4 |  |
| `IUnclearedPower2ArrayPool` | interface |  | 1 |  |
| `UnclearedPower2ArrayPool<T>` | class | `IUnclearedPower2ArrayPool` | 7 |  |

## Alta.Attributes

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BoolValueLabeling` | class | `ConditionalLabeling` | 3 |  |
| `BuildTestAttribute` | class | `Attribute` | 0 |  |
| `ButtonAttribute` | class | `PropertyAttribute` | 5 |  |
| `CacheTransformAttribute` | class | `PrefabApplyAttribute` | 1 |  |
| `CacheTransformIfEmptyAttribute` | class | `PrefabApplyAttribute` | 1 |  |
| `CleanNullsAttribute` | class | `PrefabApplyAttribute` | 1 |  |
| `CleanRange` | class | `PropertyAttribute` | 5 |  |
| `CommentAttribute` | class | `PropertyAttribute` | 4 |  |
| `CommentAttribute.MessageType` | enum |  | 4 |  |
| `ConditionalLabeling` | abstract class | `PropertyAttribute` | 7 |  |
| `ConditionAttribute` | class | `PropertyAttribute` | 4 |  |
| `CustomMethodApplyAttribute` | class | `PrefabApplyAttribute` | 3 |  |
| `DegreeToRadian` | class | `PropertyAttribute` | 0 |  |
| `DotFromAngle` | class | `PropertyAttribute` | 0 |  |
| `EnumFlagsAttribute` | class | `PropertyAttribute` | 0 |  |
| `FloatRangeSettings` | class | `PropertyAttribute` | 4 |  |
| `ForcedCapitalizationAttribute` | class | `PropertyAttribute` | 0 |  |
| `FormattedBytesFieldAttribute` | class | `PropertyAttribute` | 0 |  |
| `GetComponentAttribute` | class | `PrefabApplyAttribute` | 6 |  |
| `GetComponentIfEmptyAttribute` | class | `GetComponentAttribute` | 1 |  |
| `GetComponentInChildrenAttribute` | class | `GetComponentAttribute` | 2 |  |
| `GetComponentInParentAttribute` | class | `GetComponentAttribute` | 1 |  |
| `GetComponentsAttribute` | class | `PrefabApplyAttribute` | 5 |  |
| `GetComponentsInChildrenAttribute` | class | `GetComponentsAttribute` | 1 |  |
| `GetComponentsInChildrenInterfaceAttribute` | class | `GetComponentsInterfaceAttribute` | 2 |  |
| `GetComponentsInParentAttribute` | class | `GetComponentsAttribute` | 1 |  |
| `GetComponentsInterfaceAttribute` | class | `PrefabApplyAttribute` | 6 |  |
| `HasComponentLabel` | class | `ConditionalLabeling` | 3 |  |
| `HashedObjectAttribute` | class | `PropertyAttribute` | 2 |  |
| `HasMethodApplyAttribute` | class | `Attribute` | 0 |  |
| `HasReferenceValueAttribute` | class | `PrefabApplyAttribute` | 2 |  |
| `InversedIntAttribute` | class | `PropertyAttribute` | 2 |  |
| `LabelAdd` | class | `PropertyAttribute` | 2 |  |
| `MaxAttribute` | class | `PropertyAttribute` | 2 |  |
| `MethodApplyAttribute` | class | `Attribute` | 0 |  |
| `MinAttribute` | class | `PropertyAttribute` | 2 |  |
| `NormalizedVector` | class | `PropertyAttribute` | 0 |  |
| `NotConditionAttribute` | class | `ConditionAttribute` | 1 |  |
| `NullConditionAttribute` | class | `PropertyAttribute` | 4 |  |
| `ObsoleteFieldAttribute` | class | `PropertyAttribute` | 0 |  |
| `PlatformConditionAttribute` | class | `PropertyAttribute` | 3 |  |
| `PostHeaderAttribute` | class | `PropertyAttribute` | 2 |  |
| `PrefabApplyAttribute` | abstract class | `PropertyAttribute` | 1 |  |
| `QuaternionVector3Attribute` | class | `PropertyAttribute` | 0 |  |
| `ReadOnlyAttribute` | class | `PropertyAttribute` | 4 |  |
| `ReadOnlyInDebugAttribute` | class | `PropertyAttribute` | 0 |  |
| `ReadOnlyMode` | enum |  | 3 |  |
| `ReorderableListAttribute` | class | `PropertyAttribute` | 5 |  |
| `SceneNameAttribute` | class | `PropertyAttribute` | 0 |  |
| `SerializedInterfaceAttribute` | class | `PropertyAttribute` | 2 |  |
| `SquaredValue` | class | `PropertyAttribute` | 0 |  |
| `StepAnimationCurveAttribute` | class | `PropertyAttribute` | 0 |  |
| `SubInspectorAttribute` | class | `PropertyAttribute` | 0 |  |
| `TanFromAngle` | class | `PropertyAttribute` | 0 |  |
| `TimeInSecondsAttribute` | class | `PropertyAttribute` | 0 |  |
| `TypeExtensions` | static class |  | 4 |  |
| `ValidatePrefabApplyAttribute` | class | `PrefabApplyAttribute` | 2 |  |
| `ValueConditionAttribute` | class | `PropertyAttribute` | 5 |  |

## Alta.Authentication

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `PlayerSubscriberStatus` | enum |  | 4 | [Player](../networking/player.md#playersubscriberstatus), [Alta assemblies](../console-and-utilities/alta-assemblies.md): `None`, `Subscriber`, `Developer`, `AltaMod` (0 to 3). |
| `UserPermissions` | static class |  | 7 |  |

### Alta.Authentication

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AuthenticationUtility` | class | `IAuthenticationUtility` | 6 | [Alta assemblies](../console-and-utilities/alta-assemblies.md), [Startup and app state](../console-and-utilities/startup-and-app-state.md): Logs in from the command line (`/login`, `/login_hash`, `/access_token`, `/oauth_login`), with a username and password, or with a stored refresh token. |
| `Constants` | static class |  | 3 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The `PlayerPreferences` key names for the three tokens. |
| `IAuthenticationUtility` | interface |  | 5 |  |
| `ILoginPreferences` | interface |  | 5 | [Alta assemblies](../console-and-utilities/alta-assemblies.md) |
| `LoginPreferences` | class | `ILoginPreferences`, `IInitializable`, `IDisposable` | 8 | [Alta assemblies](../console-and-utilities/alta-assemblies.md) |

## Alta.Build

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BuildRendererBakeable` | abstract class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 3 |  |
| `IBuildBakeable` | interface |  | 0 |  |
| `IBuildRendererBakeable` | interface | `IBuildBakeable` | 3 |  |
| `IBuildRendererPostBake` | interface | `IBuildBakeable` | 1 |  |

## Alta.CommandLine

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CommandLineArguments` | static class |  | 45 | [Startup and app state](../console-and-utilities/startup-and-app-state.md#commandlinearguments): Reads `Environment.GetCommandLineArgs()` once, on first use. |
| `CommandLineArgumentsInEditor` | class | `GlobalSettings<CommandLineArgumentsInEditor>` | 1 |  |

## Alta.Core.Runtime

### Alta.Core.Runtime

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AverageNumber` | class |  | 8 |  |

## Alta.Coroutines

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaCoroutine` | class |  | 14 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#altacoroutine), [Alta assemblies](../console-and-utilities/alta-assemblies.md): A wrapper around a Unity coroutine that catches exceptions and tells you how it ended. |
| `AltaCoroutineState` | enum |  | 5 |  |
| `CoroutineYields` | static class |  | 3 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#coroutineyields-and-taskyield) |
| `EditorCoroutine` | class | `AltaCoroutine` | 1 |  |
| `TaskYield<T>` | class | `CustomYieldInstruction` | 4 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#coroutineyields-and-taskyield) |

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaCoroutineHandler` | internal class | `SingletonBehaviour<AltaCoroutineHandler>` | 0 |  |
| `RateLimiter` | class |  | 2 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#ratelimiter), [Alta assemblies](../console-and-utilities/alta-assemblies.md): `new RateLimiter(float targetTickRate)` then `bool IsRateLimited()`: false at most `targetTickRate` times a second (by `Time.realtimeSinceStartup`), true in between. |

## Alta.EventBus.Runtime

### Alta.EventBusSystem

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `EventBus<T>` | class | `IEventBus<T>`, `IEventSource<T>` | 4 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `IEventBus<T>` | interface | `IEventSource<T>` | 1 |  |
| `IEventSource<T>` | interface |  | 2 |  |

## Alta.Global.Runtime

### Alta.Global

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `GlobalSettings` | abstract class | `ScriptableObject` | 1 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| `GlobalSettings<T>` | class | `GlobalSettings` | 2 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| `GlobalSettings<TConcrete, TInterface>` | class | `GlobalSettings` | 3 | [Settings and files](../console-and-utilities/settings-and-files.md#globalsettings): The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more. |
| `GlobalSettingsAttribute` | class | `Attribute` | 2 |  |
| `GlobalSettingsInitializer` | class | `MonoBehaviour` | 0 |  |

## Alta.IO

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IPlayerPreferenceValue<T>` | interface |  | 1 |  |
| `PlayerPreferenceBool` | class | `PlayerPreferenceValue<bool>` | 1 |  |
| `PlayerPreferenceFloat` | class | `PlayerPreferenceValue<float>` | 1 |  |
| `PlayerPreferenceInt` | class | `PlayerPreferenceValue<int>` | 1 |  |
| `PlayerPreferences` | static class |  | 12 | [Settings and files](../console-and-utilities/settings-and-files.md#playerpreferences): The game's replacement for Unity's `PlayerPrefs`: a dictionary saved to `player.prefs` in `StorageFolder`. |
| `PlayerPreferenceString` | class | `PlayerPreferenceValue<string>` | 1 |  |
| `PlayerPreferenceValue<T>` | abstract class | `IPlayerPreferenceValue<T>` | 2 |  |
| `PlayerSettingsNames` | class |  | 2 |  |

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaFile` | class | `IAltaFile` | 24 |  |
| `AltaFolder` | class | `IAltaFolder` | 16 |  |
| `AltaIO` | class |  | 7 | [Settings and files](../console-and-utilities/settings-and-files.md#altaio), [Console, utilities and Alta assemblies](../console-and-utilities/overview.md): Static folders, set up the first time anything touches the class. |
| `DigitalOceanUtility` | static class |  | 3 |  |
| `FileInfoWrapper` | class | `IFileAccess` | 8 |  |
| `FileSystemExtensions` | static class |  | 2 |  |
| `IAltaFile` | interface |  | 19 | [Settings and files](../console-and-utilities/settings-and-files.md#ialtafolder-and-ialtafile) |
| `IAltaFileFormat` | abstract class | `IDisposable` | 5 |  |
| `IAltaFolder` | interface |  | 15 | [Settings and files](../console-and-utilities/settings-and-files.md#ialtafolder-and-ialtafile) |
| `IFileAccess` | interface |  | 7 |  |
| `IRemoteAltaFile` | interface |  | 4 |  |
| `RemoteAltaFile` | class | `RemoteFiles.RemoteAltaFile<FileInfoWrapper>` | 1 |  |
| `RemoteAltaFolder` | class | `AltaFolder` | 6 |  |
| `RemoteFiles` | static class |  | 1 |  |
| `RemoteFiles.RemoteAltaFile<TFileType>` | abstract class | `IAltaFile`, `IRemoteAltaFile` | 23 |  |
| `S3CloudStorageRemoteFile` | class | `RemoteFiles.RemoteAltaFile<S3StorageFile>` | 1 |  |
| `S3RemoteFolder` | class | `AltaFolder` | 9 |  |
| `S3StorageFile` | class | `S3StorageObject`, `IFileAccess` | 7 |  |
| `S3StorageFolder` | class | `S3StorageObject` | 5 |  |
| `S3StorageObject` | class |  | 6 |  |
| `S3Utility` | static class |  | 3 |  |
| `TextFileFormat` | class | `IAltaFileFormat` | 4 |  |

## Alta.LifecycleManagement.Runtime

### Alta.LifecycleManagement

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CompositeDisposable` | class | `ICollection<IDisposable>`, `IEnumerable<IDisposable>`, `IEnumerable`, +2 more | 14 |  |
| `Disposable` | static class |  | 3 |  |
| `Disposer` | class | `IDisposer`, `IDisposable` | 3 |  |
| `DisposerExtensions` | static class |  | 2 |  |
| `ICancelable` | interface | `IDisposable` | 1 |  |
| `IIsolate` | interface |  | 0 |  |
| `SerialDisposable` | class | `ICancelable`, `IDisposable` | 3 |  |

### System

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IDisposer` | interface | `IDisposable` | 1 |  |

## Alta.LifetimeScopes

### Alta.ATT.LifetimeScopes

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AbstractAltaLifetimeScope` | abstract class | `LifetimeScope` | 1 |  |
| `AnalyticsInstaller` | class |  | 1 |  |
| `ApplicationLifetimeScope` | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `Binder` | abstract class |  | 0 |  |
| `Binder<TContract>` | class | `Binder` | 7 |  |
| `Binder<TContract>.AltaRegistrationBuilder` | class | `RegistrationBuilder` | 2 |  |
| `ContainerBuilderExtensions` | static class |  | 2 |  |
| `DependencyInjectionEditorInitializer` | class | `ScriptableObject` | 0 |  |
| `DependencyInjectionInitializer` | class | `MonoBehaviour` | 0 |  |
| `GameLifetimeScope` | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `GameObjectLifetimeScope` | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `GlobalSettingsInstaller` | class | `ScriptableObject` | 1 |  |
| `MainMenuVrLifetimeScope` | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `PlatformSpecificScriptableObjectInstaller` | class | `ScriptableObject` | 1 |  |
| `PlayerControllerLifetimeScope` | class | `GameObjectLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `ProjectLifetimeScope` | class | `AbstractAltaLifetimeScope` | 0 | [Event buses and services](../console-and-utilities/event-buses-and-services.md) |
| `WindowsGlobalSettingsInstaller` | class | `PlatformSpecificScriptableObjectInstaller` | 1 |  |
| `WindowsInstaller` | class |  | 1 |  |

## Alta.MenuItem

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaMenuItem` | abstract class | `ISearchableTool` | 12 |  |
| `AltaMenuItemBase` (and 172 nested types) | class |  | 1 |  |

## Alta.NetworkTransport.Runtime

### Alta.NetworkingTransport

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaNetworkError` | enum |  | 9 |  |
| `INetworkTransportResult` | interface |  | 2 |  |
| `IPacketProcessor` | interface |  | 1 |  |
| `IParallelPacketProcessor` | interface | `IPacketProcessor` | 1 |  |
| `ITransport` | interface |  | 6 |  |
| `ITransportClient` | interface | `ITransportSocket` | 3 |  |
| `ITransportConnection` | interface |  | 8 |  |
| `ITransportServer` | interface | `ITransportSocket` | 2 |  |
| `ITransportSocket` | interface |  | 9 |  |
| `MessageReceivePool` | static class |  | 4 |  |
| `NetworkTransportResult` | class | `INetworkTransportResult` | 5 |  |

### Alta.NetworkingTransport.Kcp

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `KcpClientConnection` | class | `ITransportConnection` | 10 |  |
| `KcpClientWrapper` | class | `ITransportClient`, `ITransportSocket` | 14 |  |
| `KcpErrorConverter` | static class |  | 1 |  |
| `KcpServerConnection` | class | `ITransportConnection` | 10 |  |
| `KcpServerWrapper` | class | `ITransportServer`, `ITransportSocket` | 13 |  |
| `KcpSettings` | class | `GlobalSettings<KcpSettings>` | 11 |  |
| `KcpTransport` | class | `ITransport` | 9 |  |

### Alta.NetworkingTransport.Parallel

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `LlapiMetric` | class |  | 6 |  |

## Alta.Platform

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FfvSource` | enum |  | 4 |  |
| `PlatformTarget` | enum |  | 2 | [Player](../networking/player.md#platformtarget): `PC = 1`, `Quest = 2` (flags, in `Alta.Platform.dll`). The client sends it in its join request. |
| `PlayerMode` | enum |  | 8 | [Player](../networking/player.md#playermode): `PlayerMode` (no namespace, in `Alta.Platform.dll`), a flags enum: |
| `PlayerModeExtensions` | static class |  | 2 |  |

### Alta.Platform

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccessTokenMode` | enum |  | 3 |  |
| `IAuthenticationFeatures` | interface |  | 3 |  |
| `IAuthenticationService` | interface |  | 9 |  |
| `IPlatformDevice` | interface |  | 1 |  |
| `IPlatformService` | interface |  | 2 |  |
| `IUserService` | interface | `IAuthenticationService` | 4 |  |
| `IValidVersionService` | interface |  | 3 |  |

### Alta.Platform.Fakes

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FakePlatformDevice` | class | `IPlatformDevice` | 1 |  |
| `FakePlatformService` | class | `IPlatformService` | 2 |  |
| `FakeValidVersionService` | class | `IValidVersionService` | 3 |  |

### Alta.Platform.Models

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IUser` | interface |  | 2 |  |

## Alta.Platform.Generic

### Alta.Platform.Generic

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AuthenticationFeatures` | class | `IAuthenticationFeatures` | 3 |  |
| `AuthenticationService` | class | `IAuthenticationService` | 10 |  |
| `UserService` | class | `IUserService`, `IAuthenticationService` | 15 |  |

## Alta.PlatformInformation.Runtime

### Alta.PlatformInformation

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `LocalPlatformProvider` | internal class |  | 1 |  |
| `OverridePlatformProvider` | internal class |  | 4 |  |
| `PlatformFlags` | enum |  | 7 |  |
| `PlatformProvider` | static class |  | 20 |  |

## Alta.Profiling.Runtime

### Alta.Profiling

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ProfileMarker` | static class |  | 2 |  |
| `ProfilingSession` | class | `IDisposable` | 6 |  |

## Alta.SearchableTools

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ISearchableTool` | interface |  | 6 |  |

## Alta.Serialization.Runtime

### Alta.Serialization

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BitDisplay` | static class |  | 2 |  |
| `BitReader` | class |  | 12 |  |
| `BitWriter` | class |  | 14 |  |
| `BitWriter.GetMoreData` | delegate |  | 0 |  |
| `Compressor` | class | `Stream` | 10 |  |
| `Stream` | abstract class | `IDisposable`, `ICloneable` | 51 | [Stream](../networking/stream.md): Every network message and every save file in the game is written with this: a bit stream with one abstract base and two concrete types, `StreamWriter` and `StreamReader`. |
| `Stream.StringEncoding` | enum |  | 2 |  |
| `StreamCounter` | class | `Stream` | 10 |  |
| `StreamReader` | class | `Stream` | 14 | [Stream](../networking/stream.md#streamwriter-and-streamreader) |
| `StreamWriter` | class | `Stream` | 20 | [Stream](../networking/stream.md#streamwriter-and-streamreader) |
| `UFloatBytes` | internal struct |  | 1 |  |
| `ULongBytes` | internal struct |  | 1 |  |

## Alta.Singletons

### Alta.Utilities

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `SingletonBehaviour<T>` | class | `MonoBehaviour` | 2 |  |

## Alta.Timing.Runtime

### Alta.Timing

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ITimeline` | interface |  | 1 |  |
| `Timeline` | class | `ITimeline` | 21 | [Threads, coroutines and the timeline](../console-and-utilities/threads-coroutines-and-timeline.md#timeline), [Time and environment](../world/time-and-environment.md#timeline): A scheduler for "call this in N seconds" and "every N seconds", used for respawns, decay, loot refills, taxes, timed stat changes and the like. Main thread. |
| `Timeline.IEntry` | interface |  | 2 |  |
| `Timeline.SerializedEntryState` | enum |  | 3 |  |
| `TimelineUpdater` | class | `MonoBehaviour` | 0 |  |

### Alta.Timing.PriorityQueue

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FastPriorityQueue<T>` | class | `IFixedSizePriorityQueue<T, float>`, `IPriorityQueue<T, float>`, `IEnumerable<T>`, +1 more | 14 |  |
| `FastPriorityQueueNode` | class |  | 2 |  |
| `FastPriorityQueueNodeTimeSpan` | class |  | 2 |  |
| `FastPriorityQueueTimeSpan<T>` | class | `IFixedSizePriorityQueue<T, TimeSpan>`, `IPriorityQueue<T, TimeSpan>`, `IEnumerable<T>`, +1 more | 13 |  |
| `GenericPriorityQueue<TItem, TPriority>` | class | `IFixedSizePriorityQueue<TItem, TPriority>`, `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, +1 more | 15 |  |
| `GenericPriorityQueueNode<TPriority>` | class |  | 3 |  |
| `IFixedSizePriorityQueue<TItem, in TPriority>` | internal interface | `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, `IEnumerable` | 2 |  |
| `IPriorityQueue<TItem, in TPriority>` | interface | `IEnumerable<TItem>`, `IEnumerable` | 8 |  |
| `SimplePriorityQueue<TItem, TPriority>` | class | `IPriorityQueue<TItem, TPriority>`, `IEnumerable<TItem>`, `IEnumerable` | 20 |  |
| `SimplePriorityQueue<TItem>` | class | `SimplePriorityQueue<TItem, float>` | 3 |  |
| `StablePriorityQueue<T>` | class | `IFixedSizePriorityQueue<T, float>`, `IPriorityQueue<T, float>`, `IEnumerable<T>`, +1 more | 13 |  |
| `StablePriorityQueueNode` | class | `FastPriorityQueueNode` | 1 |  |

## Alta.VContainerLayer.Runtime

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Factory` | abstract class | `IFactory`, `IDisposable` | 1 |  |
| `Factory<TInterface>` | abstract class | `Factory`, `IFactory<TInterface>`, `IFactory`, +1 more | 1 |  |
| `Factory<TParam, TInterface>` | abstract class | `Factory`, `IFactory<TParam, TInterface>`, `IFactory`, +1 more | 1 |  |
| `Factory<TParam1, TParam2, TInterface>` | abstract class | `Factory`, `IFactory<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 |  |
| `Factory<TParam1, TParam2, TParam3, TInterface>` | abstract class | `Factory`, `IFactory<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 |  |
| `FactoryAsync` | abstract class | `Factory` | 1 |  |
| `FactoryAsync<TConcrete, TInterface>` | abstract class | `FactoryAsync`, `IFactoryAsync<TInterface>`, `IFactory`, +1 more | 1 |  |
| `FactoryAsync<TParam, TConcrete, TInterface>` | abstract class | `FactoryAsync`, `IFactoryAsync<TParam, TInterface>`, `IFactory`, +1 more | 1 |  |
| `FactoryAsync<TParam1, TParam2, TConcrete, TInterface>` | abstract class | `FactoryAsync`, `IFactoryAsync<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 |  |
| `FactoryAsync<TParam1, TParam2, TParam3, TConcrete, TInterface>` | abstract class | `FactoryAsync`, `IFactoryAsync<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 |  |
| `FactoryAsyncPooled<TConcrete, TInterface>` | abstract class | `Factory` | 2 |  |
| `FactoryAsyncPooled<TParam, TConcrete, TInterface>` | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam, TInterface>`, `IFactory`, +1 more | 1 |  |
| `FactoryAsyncPooled<TParam1, TParam2, TConcrete, TInterface>` | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam1, TParam2, TInterface>`, `IFactory`, +1 more | 1 |  |
| `FactoryAsyncPooled<TParam1, TParam2, TParam3, TConcrete, TInterface>` | abstract class | `FactoryAsyncPooled<TConcrete, TInterface>`, `IFactoryAsyncPooled<TParam1, TParam2, TParam3, TInterface>`, `IFactory`, +1 more | 1 |  |
| `IDespawnable` | interface |  | 1 |  |
| `IFactory` | interface | `IDisposable` | 0 |  |
| `IFactory<in TParam, out TInterface>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactory<in TParam1, in TParam2, in TParam3, out TInterface>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactory<in TParam1, in TParam2, out TInterface>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactory<out TInstance>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactoryAsync<in TParam, TInterface>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactoryAsync<in TParam1, in TParam2, in TParam3, TInterface>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactoryAsync<in TParam1, in TParam2, TInterface>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactoryAsync<TInterface>` | interface | `IFactory`, `IDisposable` | 1 |  |
| `IFactoryAsyncPooled<in TParam, TInterface>` | interface | `IFactory`, `IDisposable` | 2 |  |
| `IFactoryAsyncPooled<in TParam1, in TParam2, in TParam3, TInterface>` | interface | `IFactory`, `IDisposable` | 2 |  |
| `IFactoryAsyncPooled<in TParam1, in TParam2, TInterface>` | interface | `IFactory`, `IDisposable` | 2 |  |
| `IFactoryAsyncPooled<TInterface>` | interface | `IFactory`, `IDisposable` | 2 |  |
| `IFactoryConstructable` | interface |  | 1 |  |
| `IFactoryConstructable<in TParam1, in TParam2, in TParam3>` | interface |  | 1 |  |
| `IFactoryConstructable<in TParam1, in TParam2>` | interface |  | 1 |  |
| `IFactoryConstructable<in TParam>` | interface |  | 1 |  |
| `IPooledInstance` | interface | `IDespawnable` | 1 |  |
| `IPooledInstance<in TParam1, in TParam2, in TParam3>` | interface | `IDespawnable` | 1 |  |
| `IPooledInstance<in TParam1, in TParam2>` | interface | `IDespawnable` | 1 |  |
| `IPooledInstance<in TParam>` | interface | `IDespawnable` | 1 |  |

## Alta.Values

### Alta

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `GeneralValue` | abstract class | `ScriptableObject` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): A `ScriptableObject` with a `Description` and a `Type`. |
| `HashedGeneralValue` | abstract class | `GeneralValue` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): A `GeneralValue` with a stable `uint Hash`. `Item`, `PageCollection`, `PopulationDefinition`, `MouldDefinition`, `Festivity`, `GameAction` and many more derive from it. |
| `HashedGeneralValue<T>` | abstract class | `HashedGeneralValue` | 8 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): A `GeneralValue` with a stable `uint Hash`. `Item`, `PageCollection`, `PopulationDefinition`, `MouldDefinition`, `Festivity`, `GameAction` and many more derive from it. |
| `HashedGeneralValueComparer` | class | `IEqualityComparer<HashedGeneralValue>` | 1 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): Compares by hash. |
| `HashedGeneralValueConverter<T>` | class | `TypeConverter` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The console converter for those types: a hash, or a name. |
| `HashedPathAttribute` | class | `Attribute` | 2 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): Which `Resources` folders hold a type's assets. |

### Alta.Networking

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `HashHelper` | static class |  | 7 | [Alta assemblies](../console-and-utilities/alta-assemblies.md): The hashing the game uses: `Hash(string)`, `HashCompressed`, `GetHashCodeForString`, and the editor-side hash validation. Hashes are 16 bits (`MaxHash` 65535). |

## Alta.XRManagement

### (no namespace)

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `XRUtility` | static class |  | 1 | [Startup and app state](../console-and-utilities/startup-and-app-state.md) |

### Alta.XRLoaders

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IXRLoaderInitializer` | interface |  | 0 |  |
| `IXRManagerSettingsController` | interface |  | 3 |  |
| `TownshipXRMode` | enum |  | 3 |  |
| `XRLoaderStaticData` | static class |  | 6 |  |
| `XRManagerSettingsController` | class | `IXRManagerSettingsController`, `IInitializable` | 4 |  |

## Alta.XRManagement.Windows

### Alta.XRLoaders

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IWindowsXRLoaderSettings` | interface |  | 3 |  |
| `IXRSupportSystem` | interface |  | 2 |  |
| `SteamOpenVrInitializer` | class | `IXRSupportSystem` | 2 |  |
| `WindowsXRLoaderInitializer` | class | `IInitializable`, `IXRLoaderInitializer` | 3 |  |
| `WindowsXRLoaderSettings` | class | `GlobalSettings<WindowsXRLoaderSettings>`, `IWindowsXRLoaderSettings` | 4 |  |
