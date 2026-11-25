---
title: Threads, coroutines and the timeline
description: Getting back to Unity's main thread, AltaCoroutine and CoroutineYields, the Timeline scheduler in Alta.Timing.Runtime, and RateLimiter.
sidebar_position: 9
---

# Threads, coroutines and the timeline

Unity objects may only be touched from the main thread. The game runs most of its code there, but some of it isn't: socket callbacks, the console event queue, NLog targets, web requests. This page covers the tools the game uses to move work around in time and between threads. All of them work on both sides.

## Which thread am I on

| Code | Thread |
| --- | --- |
| `Update`, Harmony patches on game methods called from `Update`, `UpdateModule` methods, coroutines, timeline callbacks | Main |
| Console commands (every console) | Main |
| After an `await` in code that started on the main thread | Main. Unity's synchronization context sends the rest of the method back to the main thread. |
| Inside `Task.Run`, or after `ConfigureAwait(false)` | A thread-pool thread |
| `ServerConsoleManager.ConsoleConnected`, websocket handler events | The socket's thread |
| Console event subscribers | The console event queue's thread |
| `ServerConsoleLogTarget.LogSent` and other NLog targets | Whatever thread logged |
| The game's API client (`RetryHandler` sends inside `Task.Run`) | Thread pool, then back to the caller's context |

## MainThreadDispatcher

`Alta.Core.Threading.MainThreadDispatcher` in `Township.Core.Runtime`. A `MonoBehaviour` in the scene, but the members you use are static.

| Member | What it does | Notes |
| --- | --- | --- |
| `static void Run(Action actionToHandle)` | Queues the action to run in the dispatcher's next `Update`. | Always queues, even from the main thread. An exception is logged ("Failed running method on the main thread") and the rest of the queue still runs. |
| `static Task<T> RunAsync<T>(Func<T> actionToHandle)` | Same, and gives you the result. | |
| `static Task<T> RunAsync<T>(Func<Task<T>> actionToHandle)` | Same for an async function: started on the main thread, result when it finishes. | |
| `static bool IsCurrent { get; }` | True on the main thread. | Only right after the dispatcher's `Awake` has run. |

If there's no dispatcher yet, actions wait in the queue, and after five seconds the game logs that the call "might be ignored".

```csharp
Task.Run(() =>
{
    var answer = 42; // something slow
    MainThreadDispatcher.Run(() => MelonLogger.Msg($"Answer {answer}, frame {Time.frameCount}"));
});
```

```csharp
// Runs on the next Update, even if you're already on the main thread.
return await MainThreadDispatcher.RunAsync(() => Time.frameCount);
```

The websocket console uses `Run` for every request, and the settings files use it to raise `SettingsChanged`.

## AltaCoroutine

`AltaCoroutine` in `Alta.Coroutines` (no namespace). A wrapper around a Unity coroutine that catches exceptions and tells you how it ended.

| Member | What it does | Notes |
| --- | --- | --- |
| `static AltaCoroutine Start(IEnumerator enumerator, MonoBehaviour targetObject = null, CancellationToken cancellation = default)` | Starts it on `targetObject`, or on the game's hidden `AltaCoroutineHandler` singleton. | The handler is `internal` and lives in the scene; before it exists, starting without a target throws. |
| `static AltaCoroutine Create(...)` then `Start()` | The same in two steps, so you can set callbacks first. | |
| `void Stop()` | Stops it and calls `OnStopped`. | |
| `AltaCoroutineState State { get; }` | `NotStarted`, `Running`, `Stopped`, `Finished` or `Error`. | |
| `Action OnFinished`, `Action OnStopped`, `Action<Exception> OnError` | Callbacks. | With no `OnError`, an exception is logged as "Error in coroutine". |
| `Task<bool> GetTask()` | A task: true when it finishes, false when it's stopped, faulted on an exception. | Adds to the callbacks, so set yours before calling it. |
| `static bool IsInitialized { get; }` | The handler exists. | |
| `static void DelayCall(Action call)` | Runs at the end of this frame. Several calls in one frame are batched. | |
| `static void DelayCall(float delaySeconds, Action call)` | Runs after that many seconds. | |
| `static void DuoDelayCall(Action call)` | Runs after the end of the frame and the next physics step. | |

The cancellation token is checked after each `yield`, not while waiting.

```csharp
var routine = AltaCoroutine.Start(CountDown());
routine.OnError = e => MelonLogger.Error(e);
routine.OnFinished = () => MelonLogger.Msg("Done");

AltaCoroutine.DelayCall(5f, () => MelonLogger.Msg("Five seconds later"));
```

`EditorCoroutine.Immediate(IEnumerator)` runs a coroutine to the end at once, ignoring waits. It's for editor tools.

### CoroutineYields and TaskYield

`CoroutineYields` (static) hands out shared yield objects: `EndOfFrame`, `FixedUpdate` and `WaitForSeconds(float)`, which caches one `WaitForSeconds` per duration. Use it instead of `new WaitForSeconds` in code that runs often.

`TaskYield<T>` is a `CustomYieldInstruction` that waits for a `Task<T>`: `yield return new TaskYield<int>(task)`, then read `Result`. If the task fails, the exception comes out of Unity's coroutine runner rather than your enumerator, so `AltaCoroutine.OnError` doesn't see it.

## Timeline

`Alta.Timing.Timeline` in `Alta.Timing.Runtime`. A scheduler for "call this in N seconds" and "every N seconds", used for respawns, decay, loot refills, taxes, timed stat changes and the like. Main thread.

`Timeline.Instance` makes it the first time you touch it, with a `Timeline` GameObject (kept across scenes) whose `TimelineUpdater` advances it each `Update`. Touch it first from the main thread.

| Member | What it does | Notes |
| --- | --- | --- |
| `static Timeline Instance { get; }` | The game's timeline. | |
| `TimeSpan Time { get; }` | Timeline time. Starts at zero; on a server, the world save puts it back (below). | Not the time of day; that's `GameTimeManager`. |
| `TimeSpan DeltaTime { get; }` | The last step. | |
| `float TimeSpeed { get; set; }` | Scales time. Values of zero or less mean 1. | On a server, `TimeManager` sets it from the server setting `TimeSpeedMultiplier` and again whenever server settings change. |
| `event Action<TimeSpan> TimeChanged` | After each step, with the delta. | |
| `IEntry CallAfterDuration(Action callback, float durationSeconds)`, `(Action, TimeSpan)` | Calls once, later. | |
| `IEntry InsertCallbackAtTime(Action callback, TimeSpan time)` | Calls once at a timeline time. | |
| `IEntry CallRepeatableAfterDuration(Action callback, float durationSeconds, float repeatIntervalSeconds)`, `(Action, TimeSpan, TimeSpan)` | Calls after a delay, then every interval. | An interval under 0.01 s logs an error and calls once. |
| `static void Cancel(ref IEntry entry)` | Stops an entry and nulls your reference. | |
| `void Update(TimeSpan deltaTime)` | Moves time forward and runs everything that's due. | `time future` calls it to skip ahead. |
| `void ClearEntries()` | Drops every entry. | |
| `static TimeSpan SaveEntry(IEntry)`, `static int LoadRepeatableEntry(...)`, `static SerializedEntryState LoadEntry(...)`, `SerializeEntry(...)` | Save and restore an entry's due time, running any that came due while saved. | What the game's saved timers use. |

`IEntry` has `TimeSpan Time` and `bool IsActive`.

```csharp
private static Timeline.IEntry entry;

public static void Start()
{
    entry = Timeline.Instance.CallRepeatableAfterDuration(() => MelonLogger.Msg("A minute passed"), 60f, 60f);
}

public static void Stop() => Timeline.Cancel(ref entry);
```

Things to know:

- **It runs on the wall clock.** `TimelineUpdater` steps by the change in `DateTime.Now`, not Unity's time. A slow frame doesn't slow it, and if the PC's clock jumps (it looks like a daylight saving change would do this) the timeline jumps with it.
- **Stopping a game mode clears it.** `GameMode.StopModeAsync` calls `ClearEntries()`, so leaving a server or stopping one drops your entries along with the game's.
- **An exception cancels the entry.** It's logged ("Timeline action failed with exception") and a repeating entry stops repeating.
- **Lots of entries due at once all run in that `Update`.** `time future 1 d` fires a day's worth of respawns in one frame.
- **The server saves it.** `TimeManager` (a world entity, server side) saves `Time` with the world and the real time it was saved. On load it calls `Timeline.Load` with the saved time, plus the downtime (scaled by `TimeSpeed`) if the server setting `IsAdvancingTimeWhenOffline` is on. `Load` runs everything that came due in one go. A client's timeline just starts at zero.

The priority queues in `Alta.Timing.PriorityQueue` (`FastPriorityQueue`, `SimplePriorityQueue`, `StablePriorityQueue` and their nodes) look like a copy of the open source BlueRaja priority queue (same type names). The timeline uses `FastPriorityQueueTimeSpan`. Usable, but nothing game-specific.

## RateLimiter

`Alta.Utilities.RateLimiter` in `Alta.Coroutines`. `new RateLimiter(float targetTickRate)` then `bool IsRateLimited()`: false at most `targetTickRate` times a second (by `Time.realtimeSinceStartup`), true in between. A rate of zero or less never limits.

```csharp
private static readonly RateLimiter limiter = new RateLimiter(2f); // at most twice a second

public static void OnSomethingNoisy()
{
    if (limiter.IsRateLimited()) return;
    MelonLogger.Msg("Noisy thing happened");
}
```

## See also

- [Update modules](update-modules.md) for every-frame work.
- [Event buses and services](event-buses-and-services.md): the township event bus also delivers on the main thread, a little later.
