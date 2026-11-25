---
title: Event buses and services
description: The township event bus (crafting, forging, grabbing), the analytics event stream, and getting the game's services out of VContainer.
sidebar_position: 12
---

# Event buses and services

The game has two event bus types and a dependency injection container (VContainer, third party). Most of the game still uses plain C# events and singletons, but a few useful server-side events only go through the bus.

There are two classes called `EventBus`, and they behave differently:

| Type | Assembly | Delivery |
| --- | --- | --- |
| `Alta.Core.EventBus.EventBus` (the township event bus) | `Township.Core.Runtime` | Queued. Listeners and events are both held until the bus's `LateTick`, then delivered on the main thread. |
| `Alta.EventBusSystem.EventBus<T>` | `Alta.EventBus.Runtime` | Immediate. `Send` calls every listener straight away, on the sender's thread. Used by the analytics service. |

## The township event bus

`ATT.EventBus.EventBusLocator.Get<ITownshipEventBus>()` in `Root.Township`. The bus is made and registered in `ProjectLifetimeScope`, the game's root scope, so it exists from the first scene.

| Member of `IEventBus` | What it does | Notes |
| --- | --- | --- |
| `void Broadcast<T>(T eventData) where T : class` | Queues an event. | Delivered to listeners of exactly `typeof(T)`, the type at the call. |
| `void AddListener<T>(Action<T> listener)`, `RemoveListener<T>(Action<T> listener)` | Queues adding or removing a listener. | Takes effect at the next `LateTick`. Keep the delegate if you want to remove it. |
| `void AddUnsafeListener<TBaseType>(Type type, Action<TBaseType> listener)`, `RemoveUnsafeListener<T>(Type, Action<T>)` | Listens to a type you name at runtime. | |

`EventBusLocator.Get<T>()` logs an error and returns null if nothing is registered under `T`. `EventBusLocator.Register<T>(IEventBus)` lets you register a bus of your own.

### The game's events

All in `ATT.EventBus.TownshipEvents`. Every one is broadcast only on the server (or in a local test), by code that checks `NetworkSceneManager.IsServer || NetworkSceneManager.IsLocalTest`.

| Event | Members | Broadcast when |
| --- | --- | --- |
| `ItemCraftedEvent` | `IPlayer Source`, `List<uint> ItemPartHashes` | Two crafting parts are joined (`CraftingPart`). |
| `ItemForgedEvent` | the player and the prefab hash | A forged piece is marked complete (`ForgedModel`). |
| `PlayerGrabbedPrefabEvent` | `IPlayer Source`, `NetworkPrefab GrabbedPrefab` | A player grabs a pickup (`Pickup`). |
| `PlayerInPositionEvent`, `PrefabInPositionEvent` | the player or prefab | A micro tutorial's position check passes. |
| `ForceCompleteTutorialStepEvent` | the player | `microtutorial next-step`. |

```csharp
// Server only: the game broadcasts these on the server (and in a local test).
var bus = EventBusLocator.Get<ITownshipEventBus>();
bus.AddListener<ItemCraftedEvent>(e => MelonLogger.Msg($"{e.Source?.UserInfo.Username} crafted from {e.ItemPartHashes.Count} parts"));
bus.AddListener<PlayerGrabbedPrefabEvent>(e => MelonLogger.Msg($"{e.Source?.UserInfo.Username} grabbed {e.GrabbedPrefab?.name}"));
```

The listener runs a little after the event, in the same or the next frame, on the main thread. An exception in one listener is logged and the bus moves on to the next event, so later listeners for that same event are skipped.

For anything else (docking, damage, joins), patch the game's own method; the Items and Networking areas list good targets.

## Analytics events

`Alta.Analytics.IAnalyticsService` in `Alta.Analytics.Runtime`. The game describes many player actions as analytics events (area visits, climbing, challenges, unlocks, tutorials, social actions) and sends them to this service. Its one dispatcher, `ATT.Analytics.AltaAnalyticsDispatcher`, posts each to Alta's dead web API. You can listen too:

```csharp
#pragma warning disable CS0618 // StaticLifetimeScope is marked obsolete
StaticLifetimeScope<ProjectLifetimeScopeStatic>.ResolveWithCallback<IAnalyticsService>(service =>
    service.AddListener(data => MelonLogger.Msg($"Analytics: {data.EventName} ({data.Count} properties)")));
#pragma warning restore CS0618
```

| Member | What it is |
| --- | --- |
| `void Send(IAnalyticsEvent analyticsEvent)` | Injects the event's dependencies, then sends its `Data` to every listener at once. |
| `void AddListener(Action<IReadonlyAnalyticsData>)`, `RemoveListener(...)` | Adding the same delegate twice logs an error. Removing a listener from inside a listener throws, since the list is being walked. |
| `IReadonlyAnalyticsData` | `string EventName`, `int? UserId`, and the properties (`IAnalyticsProperty`) as a collection. |

Listeners run on whatever thread sent the event. Which side sends a given event depends on the event; I didn't trace every one, so check the sender before relying on it. Steady skips `AltaAnalyticsDispatcher.OnAnalyticsEvent` so the dead posts stop; that doesn't affect your listener.

## VContainer scopes

The game builds a tree of VContainer `LifetimeScope`s (in `Alta.LifetimeScopes`):

| Scope | Where | Registers (among others) |
| --- | --- | --- |
| `ProjectLifetimeScope` | Made by `DependencyInjectionInitializer` at launch, kept across scenes. | Global settings assets, `IAnalyticsService`, the township event bus, `IDisposer`, the loading screen factory. |
| `ApplicationLifetimeScope` | Set up at launch. | `IHighLevelApiClient` (the API client), `ISettingsManager`, `IAuthenticationUtility`, `ILoginPreferences`, `IPlayerStateFactory`, XR and platform services. |
| `GameLifetimeScope` | In a game scene. | `IRespawnSystem`, `IPlayerRespawnPositionProvider`, micro tutorial services. |
| `MainMenuVrLifetimeScope`, `PlayerControllerLifetimeScope`, `GameObjectLifetimeScope` | Menus, the local player, single objects. | |

Each scope's root runs a matching static helper, so code without injection can still get services:

`Alta.Core.Lifetime.StaticLifetimeScope<TContainer>` in `Township.Core.Runtime`, with `ProjectLifetimeScopeStatic`, `ApplicationLifetimeScopeStatic` and `GameLifetimeScopeStatic`. Marked `[Obsolete]`; suppress CS0618.

| Member | What it does | Notes |
| --- | --- | --- |
| `static bool TryResolve<T>(out T resolved)` | Resolves now, or false if that scope isn't built yet. | Throws (VContainer) if the type isn't registered there. |
| `static void ResolveWithCallback<T>(Action<T> onResolve)` | Calls back now, or when the scope is built. | The safe choice from `OnInitializeMelon`. |
| `static Lazy<T> ResolveLazy<T>()` | Resolves on first `.Value`. | |
| `static Task<T> ResolveAsync<T>()` | A task. | |
| `static YieldInstruction<T> WaitFor<T>()` | For a coroutine. | |

Ask the scope that registers the type: the analytics service from `ProjectLifetimeScopeStatic`, the API client from `ApplicationLifetimeScopeStatic`. `GameLifetimeScopeStatic` belongs to the game scene's scope, so it isn't there in the menu.

`Alta.VContainerLayer.Runtime` adds factory base classes (`Factory<T>`, `FactoryAsync<...>`, `FactoryAsyncPooled<...>`) that the game's Addressables-based spawners derive from. You rarely need them.

## See also

- [Threads, coroutines and the timeline](threads-coroutines-and-timeline.md)
- [Alta assemblies](alta-assemblies.md) for `Alta.EventBus.Runtime`, `Alta.Analytics.Runtime` and the scope assemblies.
