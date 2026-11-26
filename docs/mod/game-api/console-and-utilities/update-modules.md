---
title: Update modules
description: UnityUpdateManager, UpdateModule and BudgetedUpdateModule, the game's way of running code every frame without a MonoBehaviour per object.
sidebar_position: 8
---

# Update modules

`UnityUpdateManager`, `UpdateModule`, `BudgetedUpdateModule`, `UpdateSegment`, `UpdateModuleInfo` and `IUnityUpdateMethod` in `Root.Township` (no namespace). Both sides. Main thread.

Instead of giving every object its own `Update`, most of the game registers a callback with an `UpdateModule`, and one `UnityUpdateManager` behaviour calls every module from its `Update`, `LateUpdate` and `FixedUpdate`. Each module is timed, which is what Canary records as per-module update times.

## UnityUpdateManager

`public class UnityUpdateManager : MonoBehaviour`. One in the scene; `UnityUpdateManager.Instance`.

| Member | What it is | Notes |
| --- | --- | --- |
| `static UpdateModule UpdateModule { get; }` | "Shared Update Module": anything that wants an `Update`. | |
| `static UpdateModule LateUpdateModule { get; }` | "Shared LateUpdate Module". | |
| `static UpdateModule FixedUpdateModule { get; }` | "Shared FixedUpdate Module". | |
| `static BudgetedUpdateModule BudgetedUpdateModule { get; }` | "Shared BudgetedUpdate Module", 0.1 ms a frame by default (the scene's `sharedBudgetedUpdateMsAllowance`). | |
| `static Dictionary<string, UpdateModuleInfo> AllModuleInfos { get; }` | Timing and count for each module made with `includeInServerProfiling: true`, by name. | Canary reads this. |
| `static UnityUpdateManager Instance { get; }` | The manager. | |
| `static bool IsProfiling { get; set; }` | Switches every module to its profiling loop. | In this build the two loops do the same thing. |
| `IEnumerable<UpdateModule> AllModules { get; }` | Every module, Update ones first. | |
| `static void RegisterModule(UpdateModule module, UpdateSegment updateSegment)` | Adds a module. Modules made before the manager wakes up are queued and added in its `Awake`. | The `UpdateModule` constructor calls it for you. |

Modules run in the order they were registered. The manager has no execution order attribute, so where its `Update` falls among other behaviours is Unity's choice.

## UpdateModule

`public class UpdateModule`. Make one with `new UpdateModule(string name, UpdateSegment segment, bool includeInServerProfiling = false)`; it registers itself. `UpdateSegment` is `Update`, `LateUpdate` or `FixedUpdate`.

| Member | What it does | Notes |
| --- | --- | --- |
| `virtual IUnityUpdateMethod RegisterMethod(Action method)` | Adds a callback and returns a handle. | Newest first: a new method runs before the ones already there. |
| `static void DeregisterMethod(ref IUnityUpdateMethod methodNode)` | Removes a callback and sets your handle to null. | Safe to call twice. |
| `virtual void Update()` | Calls every method once and records how long it took. | The manager calls it. |
| `string Name { get; }`, `bool IncludeInServerProfiling { get; }` | | |
| `UpdateModuleInfo ModuleInfo { get; }` | `float UpdateDurationMs` (average), `int RegisteredCount`, `ResetDuration()`. | The average is over every frame since the last reset, not a recent window. |
| `int ActualCount()` | Walks the list and counts. | |

### Running every frame

```csharp
private static IUnityUpdateMethod handle;

public static void Start()
{
    handle = UnityUpdateManager.UpdateModule.RegisterMethod(Tick);
}

public static void Stop()
{
    UpdateModule.DeregisterMethod(ref handle); // sets handle to null
}

private static void Tick()
{
    // Throwing here would log once and drop Tick for good.
}
```

This is lighter than a `MonoBehaviour` and needs no GameObject. You can register before the manager exists; your method just doesn't run until it does.

### Your own module

```csharp
// Shows in profiling as "HelloTavern Update". Make it once; there's no way to remove a module.
public static readonly UpdateModule Module = new UpdateModule("HelloTavern Update", UpdateSegment.Update, includeInServerProfiling: true);
```

A module of your own shows up by name in `AllModuleInfos` (and so in Canary), which tells hosts how much time your mod takes. Names must be unique among profiled modules: a second one with the same name logs an error and isn't listed.

### Reading the timings

```csharp
foreach (var pair in UnityUpdateManager.AllModuleInfos)
    MelonLogger.Msg($"{pair.Key}: {pair.Value.UpdateDurationMs:F3} ms average, {pair.Value.RegisteredCount} methods");
```

The averages never reset on their own. To measure a window, call `ResetDuration()` at its start, or read the private `duration` field (an `AverageNumber`, which has `Min`, `Max` and `Total`) as Canary does.

## BudgetedUpdateModule

`public class BudgetedUpdateModule : UpdateModule`. `new BudgetedUpdateModule(string name, float msAllowance, UpdateSegment segment, bool includeInServerProfiling = false)`.

Each frame it calls methods until `MsAllowance` milliseconds have passed, then stops and carries on from there next frame. The list is a ring, so every method gets its turn, just not every frame. At least one method runs each frame. Use it for work that can lag a few frames behind, like distance checks.

| Member | What it is |
| --- | --- |
| `float MsAllowance { get; set; }` | The budget per frame, in milliseconds. |
| `static bool IsDebuggingAllowance { get; set; }` | Ignores the budget and records how long a full pass takes (`BudgetedUpdateModuleProfiler`). |

## Gotchas

- **An exception removes the method.** The module logs "Error while invoking Unity Update Method" with the module's name and deregisters the method that threw. Your handle still looks valid, but nothing runs. Catch inside your method if it can fail.
- **Don't deregister a different method from inside an update.** The loop has already read the next node. If that's the one you remove, the next call hits a cleared node, logs an error, skips the rest of the list for that frame and lowers `RegisteredCount` twice (this is from reading the loop; it looks like it). Removing your own method from inside it is fine.
- **Register and deregister on the main thread.** The list isn't locked.
- **Hooking a module is hooking everything in it.** A Harmony patch on `UpdateModule.Update` runs for every module every frame. To time or wrap one game system, patch the method it registers instead. The game's modules are mostly `private static readonly` fields on the class that uses them (for example `NetworkManager.receivingModule`, "Networking Receiving"), reachable through att-stubs or `AccessTools`.

## The game's modules

Over forty, each a static field on the class that uses it. The profiled ones, which show in `AllModuleInfos` and Canary:

| Name | Segment | Owner |
| --- | --- | --- |
| Shared Update Module, Shared BudgetedUpdate Module, Shared FixedUpdate Module, Shared LateUpdate Module | each | `UnityUpdateManager` |
| Networking Receiving | Update | `NetworkManager` |
| Networking Sending | LateUpdate | `NetworkManager` |
| AI Agent Updater | FixedUpdate | `AgentUpdater` |
| Heat Source Update | FixedUpdate | `HeatSourceBase` |
| Audio Position Update | LateUpdate | `AkGameObj` (Wwise) |

Others, not profiled, include Chunk Detector Update, Hand Interactor, Smooth Locomotion, NetworkRigidbody, Generic Crafting Station, Recycler, Heat Area update, Impact Detector Resolver, Population Item Distance Check (budgeted), Look At Player (budgeted) and Lerp Follow Effects.

## See also

- [Threads, coroutines and the timeline](threads-coroutines-and-timeline.md) for code that runs later rather than every frame.
- Canary's `Recorder.ReadUpdateModules` for reading the timings in a real mod.
