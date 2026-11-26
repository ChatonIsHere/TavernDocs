---
title: Alta assemblies
description: What is in each of Alta's separate Alta.* assemblies next to Root.Township, and what matters to a modder.
sidebar_position: 14
---

# Alta assemblies

Next to `Root.Township.dll` in `A Township Tale_Data\Managed` are 29 small `Alta.*` assemblies. Most are plumbing that `Root.Township` builds on. A few have things mods use every day. Each is a section here, in rough order of how much you'll need it.

To use one, add a `Reference` to it in your `.csproj` like the game ones in [Your first mod](../../game-mods/your-first-mod.md). att-stubs has them all, with public members only (only `Root.Township` keeps its private members).

| Assembly | You'll want it for |
| --- | --- |
| `Alta.CommandLine` | Reading flags |
| `Alta.IO` | Data folders, `PlayerPreferences` |
| `Alta.Timing.Runtime` | `Timeline` |
| `Alta.Coroutines` | `AltaCoroutine`, `RateLimiter` |
| `Alta.Values` | Looking items and other assets up by name or hash |
| `Alta.NetworkTransport.Runtime` | Using `Connection` and other networking types |
| `Alta.Api.Client`, `Alta.Api.DataTransferModels` | Stubbing dead web calls, `UserInfo` |
| The rest | Rarely |

## Alta.CommandLine

`CommandLineArguments` (no namespace): `Contains`, `TryGetNextArguments`, `AllArguments`, `RawCommandLine` and constants for the flag names. See [Startup and app state](startup-and-app-state.md#commandlinearguments).

`CommandLineArgumentsInEditor` is a `GlobalSettings` asset for extra arguments in the editor; ignore it.

## Alta.IO

`Alta.Utilities.AltaIO` (the data folders), `AltaFolder`, `AltaFile`, `IAltaFolder`, `IAltaFile`, `IAltaFileFormat`, `TextFileFormat`, the remote and S3 save folders (`RemoteAltaFolder`, `S3RemoteFolder`, `S3StorageFolder`, `S3Utility`, `DigitalOceanUtility`), and `PlayerPreferences` with its typed wrappers. See [Settings and files](settings-and-files.md).

## Alta.Timing.Runtime

`Alta.Timing.Timeline` (the "call this later" scheduler), `TimelineUpdater` (the behaviour that steps it), `ITimeline`, and a set of priority queues in `Alta.Timing.PriorityQueue`. See [Threads, coroutines and the timeline](threads-coroutines-and-timeline.md#timeline).

## Alta.Coroutines

`AltaCoroutine`, `AltaCoroutineState`, `CoroutineYields`, `TaskYield<T>`, `EditorCoroutine` (no namespace), `Alta.Utilities.RateLimiter`, and the internal `AltaCoroutineHandler` singleton coroutines run on. See [Threads, coroutines and the timeline](threads-coroutines-and-timeline.md#altacoroutine).

## Alta.Values

The base classes for the game's data assets.

| Type | What it is |
| --- | --- |
| `Alta.GeneralValue` | A `ScriptableObject` with a `Description` and a `Type`. |
| `Alta.HashedGeneralValue<T>` | A `GeneralValue` with a stable `uint Hash`. `Item`, `PageCollection`, `PopulationDefinition`, `MouldDefinition`, `Festivity`, `GameAction` and many more derive from it. |
| `HashedGeneralValueConverter<T>` | The console converter for those types: a hash, or a name. |
| `HashedGeneralValueComparer` | Compares by hash. |
| `HashedPathAttribute` | Which `Resources` folders hold a type's assets. |
| `Alta.Networking.HashHelper` | The hashing the game uses: `Hash(string)`, `HashCompressed`, `GetHashCodeForString`, and the editor-side hash validation. Hashes are 16 bits (`MaxHash` 65535). |

`HashedGeneralValue<T>` members you'll use:

- `static T Get(uint hash)`: null for 0; logs an error ("Missing hash") when not found.
- `static T Get(string name, bool isLogging = true)`: by asset name, **lower case**, spaces removed. The method removes spaces but doesn't lower-case what you pass, so `Item.Get("Iron Ingot")` fails and `Item.Get("ironingot")` works. The console converter lower-cases for you.
- `static IEnumerable<T> All`, `static int Count`: every loaded asset of the type. The first use loads them all from `Resources`.
- `uint Hash { get; }`, and the asset's `name`.

## Alta.Api.Client and Alta.Api.DataTransferModels

The client for Alta's dead web API, and the data types it used (`UserInfo`, `UserInfoWithPermissions`, `GameServerInfo`, `GroupPermissions`, `ShutdownReason`, `RetryHandler`, `JsonUtility`). See [Alta's web API](alta-web-api.md). The one thing to remember from here: `JsonUtility.SetupJsonSerializerSettings` changes `JsonConvert.DefaultSettings` for the whole process.

## Alta.Serialization.Runtime

The bit-level serializer behind every network message and save: `Alta.Serialization.Stream` (abstract, with `IsReading` and `IsWriting` and `Serialize...(ref value)` methods that read or write depending on the direction), `BitReader`, `BitWriter`, `StreamReader`, `StreamWriter`, `StreamCounter`, `Compressor`. See [Stream](../networking/stream.md) in the Networking area.

## Alta.NetworkTransport.Runtime

The transport layer under the game's networking: `ITransport`, `ITransportClient`, `ITransportServer`, `ITransportConnection`, `ITransportSocket`, `IPacketProcessor`, `MessageReceivePool`, `AltaNetworkError`, and a kcp transport (`Alta.NetworkingTransport.Kcp`: `KcpTransport`, `KcpClientWrapper`, `KcpServerWrapper`, `KcpSettings`). `Alta.Networking.Connection` itself is in `Root.Township`, but its constructor and members use these types, so you need this reference to compile code that touches a `Connection`. See [Sockets and connections](../networking/connections.md) in the Networking area.

## Alta.PlatformInformation.Runtime

`Alta.PlatformInformation.PlatformProvider` and `PlatformFlags` (`Windows`, `Linux`, `Android`, `AndroidPreview`, `Quest`, `Pico`, `Unknown`). `IsServer()` only means Linux. See [Startup and app state](startup-and-app-state.md#player-mode-and-xr).

## Alta.Platform and Alta.Platform.Generic

Platform service interfaces in `Alta.Platform`: `IPlatformService`, `IPlatformDevice`, `IAuthenticationService`, `IAuthenticationFeatures`, `IUserService`, `IValidVersionService`, `IUser`, plus the enums `PlayerMode` (flags; see the trap in [Startup and app state](startup-and-app-state.md#player-mode-and-xr)), `PlatformTarget` (`PC`, `Quest`), `AccessTokenMode` and `FfvSource`. `Fakes` has do-nothing versions; `FakeValidVersionService` says every version is valid.

`Alta.Platform.Generic` is the PC implementation: `AuthenticationService` (auto-login through `IAuthenticationUtility`, no platform login or account linking) and `UserService`. On PC there is no platform account, so `UserService.IsLoggedIn` is always false; the game's own login is `LoginManager` and the API client.

## Alta.Authentication

Logging in to Alta.

| Type | What it is |
| --- | --- |
| `UserPermissions` (no namespace, static) | `HasPermission(string)` checks the game's own login's policies. Constants: `Developer` is `server_owner`, `DebugFeatures` is `debug_features`, plus `admin_vr_modes`, `play_offline`, `moderator`. |
| `Alta.Authentication.AuthenticationUtility` | Logs in from the command line (`/login`, `/login_hash`, `/access_token`, `/oauth_login`), with a username and password, or with a stored refresh token. |
| `LoginPreferences`, `ILoginPreferences` | "Remember me" and the stored refresh token. |
| `Constants` | The `PlayerPreferences` key names for the three tokens. |
| `PlayerSubscriberStatus` | `None`, `Subscriber`, `Developer`, `AltaMod`. |

`UserPermissions.HasPermission("debug_features")` is what decides whether the remote console starts. It's about the process's login, not a player.

## Alta.Global.Runtime

`Alta.Global.GlobalSettings<T>`: design data `ScriptableObject`s with a static `Instance`, set up by `GlobalSettingsInitializer` in the first scene. See [Settings and files](settings-and-files.md#globalsettings). The game's own settings classes (`MenuSettings`, `NetworkingSettings` and so on) are in `Root.Township`.

## Alta.EventBus.Runtime

`Alta.EventBusSystem.EventBus<T>`, `IEventBus<T>`, `IEventSource<T>`: a tiny synchronous event bus. `Send` calls each listener at once; adding the same listener twice logs an error. Used by the analytics service. Not the township event bus, which is in `Township.Core.Runtime`. See [Event buses and services](event-buses-and-services.md).

## Alta.Analytics.Runtime

`Alta.Analytics.IAnalyticsService` and `AnalyticsService` (send an `IAnalyticsEvent`, listen for `IReadonlyAnalyticsData`), `AbstractAnalyticsDispatcher` (a base for things that forward events somewhere), `AnalyticsEvent`, `AnalyticsData`, `AnalyticsProperty` and their interfaces. The game's only dispatcher sends to Alta's dead API. See [Event buses and services](event-buses-and-services.md#analytics-events).

## Alta.LifetimeScopes

The game's VContainer scopes (`Alta.ATT.LifetimeScopes`): `ProjectLifetimeScope`, `ApplicationLifetimeScope`, `GameLifetimeScope`, `MainMenuVrLifetimeScope`, `PlayerControllerLifetimeScope`, `GameObjectLifetimeScope`, their installers, `DependencyInjectionInitializer` (which makes the project scope at launch), and `Binder` and `ContainerBuilderExtensions` (the `builder.Bind<T>().To<U>()` style the game registers with). See [Event buses and services](event-buses-and-services.md#vcontainer-scopes).

## Alta.VContainerLayer.Runtime

Factory base classes on top of VContainer: `Factory<T>` and friends (make an instance through the container and track it for disposal), `FactoryAsync<...>` (load an Addressables prefab, instantiate, inject), `FactoryAsyncPooled<...>` (the same with a pool: `Spawn` and `Despawn`), and the `IFactory...`, `IDespawnable`, `IPooledInstance` and `IFactoryConstructable` interfaces. You only meet these if you patch one of the game's factories.

## Alta.LifecycleManagement.Runtime

`IDisposable` helpers in `Alta.LifecycleManagement`: `Disposer` and `IDisposer` (collect disposables and dispose them together; anything added after disposal is disposed at once), `CompositeDisposable`, `SerialDisposable`, `Disposable.Create(Action)`, `Disposable.Empty`, and the extensions `AddToDisposer` and `OnDisposal`. The container hands out a fresh `IDisposer` to each thing that asks.

## Alta.ArrayPools.Runtime

`UnclearedPower2ArrayPool<T>` (`Alta.ArrayPools`): `Shared`, `Request(int size)`, `Release(T[])`, `Copy`, `ToArray(List<T>)`. Arrays come back **at least** the size you asked for (the next power of two, 16 or more), and **not cleared**, so they hold whatever the last user left. Releasing an array whose length isn't a power of two logs a fatal error. `ArrayPoolManager.LogAllPools()` logs what's pooled. Used by about fifteen game types, mostly networking and meshes.

## Alta.Core.Runtime

Just `Alta.Core.Runtime.AverageNumber`: a running total, count, average, min and max, used for the update module timings. The average covers everything since the last `Reset()`. Because of an `else if`, a value that sets a new maximum is never checked as a minimum, so `Min` can stay at `double.MaxValue` when values only rise.

Most of what you'd expect in a "core" assembly is in `Township.Core.Runtime` instead: `MainThreadDispatcher`, `Alta.Core.Settings`, `Alta.Core.EventBus`, `StaticLifetimeScope`, `Result` and `IResult`, `BuildVersion`, and dozens of extension methods (`CollectionExtensions`, `TransformExtensions`, `StringExtensions` and so on).

## Alta.Singletons

`Alta.Utilities.SingletonBehaviour<T>`: a `MonoBehaviour` with `static T Instance` and `static Action<T> InstanceSet`. In `Awake`, a second instance destroys its own component (not its GameObject) and returns. `Instance` is never cleared, but Unity's null check makes a destroyed one compare equal to null. Many game managers derive from it: `ApplicationManager`, `ServerConsoleManager`, `DemoLoadScripts` and more. If you override `Awake` in a subclass, call `base.Awake()`.

## Alta.Profiling.Runtime

`Alta.Profiling.ProfilingSession` is a nested stopwatch with a text report: `new ProfilingSession(name)`, dispose it, then `GenerateReport()`. The lifetime scopes only make one in a development build, which the shipped game isn't. `ProfileMarker` does nothing outside a development build. For real profiling use Unity's profiler markers or Canary.

## Alta.XRManagement and Alta.XRManagement.Windows

`XRUtility.GetCommandXRMode()` and `TownshipXRMode` (`OpenXR`, `Valve`, `NoVR`), `XRManagerSettingsController` (starts and stops Unity's XR manager), `XRLoaderStaticData`. The Windows assembly has `WindowsXRLoaderInitializer`, which picks the OpenXR or OpenVR loader from the mode and loads nothing for `NoVR`, and `SteamOpenVrInitializer`. Rover patches `GetCommandXRMode` to run without a headset. See [Startup and app state](startup-and-app-state.md#player-mode-and-xr).

## Alta.Attributes

Inspector attributes for the Unity editor: `ButtonAttribute`, `ReadOnlyAttribute`, `GetComponentAttribute` and its variants, `ConditionAttribute`, `MinAttribute`, `MaxAttribute`, `SceneNameAttribute`, `ReorderableListAttribute`, `TimeInSecondsAttribute` and about fifty more, plus a few that other packages expect (in `Gaia`, `Pathfinding`, `QuickLod.Attributes` and `UnityEngine.PostProcessing`). They only change how fields look in the editor and do nothing in the game. You'll see them on fields in decompiled code; ignore them.

## Alta.Build

Build-time baking: `IBuildBakeable`, `IBuildRendererBakeable`, `IBuildRendererPostBake`, and `BuildRendererBakeable`, a `MonoBehaviour` whose `Bake` prepares renderers when static objects are combined. `StaticObjectCombiner.Bake` calls `BuildRendererBakeable.BakeBuildBakeables`. Nothing for mods.

## Alta.MenuItem

The game's editor menu system: `AltaMenuItem` (an `ISearchableTool` with a `Run` method) and `AltaMenuItemBase`, a tree of nested classes whose names become menu paths. Over two hundred game types have a nested `Create` class built on it, which is why you see `AltaMenuItemBase.Assets.Create...` in decompiled code. Editor only.

## Alta.SearchableTools

`ISearchableTool`: `Priority`, `Icon`, `Name`, `Description`, `GetPath()`, `Validate()`. The interface behind the editor's tool search. Editor only.

## See also

- [Overview](overview.md) for where the most-used types live.
- [Stream](../networking/stream.md) and [Sockets and connections](../networking/connections.md) for `Alta.Serialization.Runtime` and `Alta.NetworkTransport.Runtime` in depth.
