---
title: Time and environment
description: Timeline, TimeManager and GameTimeManager. How game time, the day and night cycle and scheduled callbacks work, what the time commands do, and the client-side sky and fog.
sidebar_position: 15
---

# Time and environment

Two clocks run in the game:

- **`Timeline`** is the clock everything waits on: respawns, loot refills, decay, cooldowns. It runs at real time times the server's time speed, and it's saved.
- **`GameTimeManager`** turns that into a time of day and a month, and decides when it's night.

There's no weather system in this build. Fog, ambience and the sky come from the atmosphere plugins, which only draw on clients.

## Timeline

`Alta.Timing.Timeline` in `Alta.Timing.Runtime` (not `Root.Township`; add a reference). Both sides, main thread.

`Timeline.Instance` is a static singleton. The first call makes it and a `TimelineUpdater` game object, which adds the real time since the last frame (from `DateTime.Now`) every `Update`.

| Member | What it does | Notes |
| --- | --- | --- |
| `static Timeline Instance { get; }` | The game's timeline. | |
| `TimeSpan Time { get; }` | Current timeline time. | On the server it's loaded from the save. On a client it starts at zero, so don't compare times across sides. |
| `TimeSpan DeltaTime { get; }` | The last step, after `TimeSpeed`. | |
| `float TimeSpeed { get; set; }` | Multiplier on every step. | `TimeManager` sets it from the server's `TimeSpeedMultiplier` setting, on the server. |
| `event Action<TimeSpan> TimeChanged` | After every step, with the step. | Every frame. |
| `IEntry CallAfterDuration(Action callback, float durationSeconds)` | Run once after that much timeline time. Also takes a `TimeSpan`. | |
| `IEntry InsertCallbackAtTime(Action callback, TimeSpan time)` | Run once at a timeline time. | |
| `IEntry CallRepeatableAfterDuration(Action callback, float durationSeconds, float repeatIntervalSeconds)` | Run after a delay, then every interval. | An interval under 0.01 s becomes a one-off. |
| `static void Cancel(ref IEntry entry)` | Stops it and nulls your reference. | |
| `void Update(TimeSpan deltaTime)` | Advances time, running every callback that comes due. | The `time future` command calls it. |
| `static TimeSpan SaveEntry(IEntry entry)`, `static int LoadRepeatableEntry(out IEntry entry, Action callback, TimeSpan targetTime, TimeSpan interval)`, `static SerializedEntryState LoadEntry(...)` | Save and restore a scheduled callback. | `LoadRepeatableEntry` returns how many intervals were missed. |

A callback that throws is logged ("Timeline action failed") and dropped, repeating or not.

```csharp
// Run something later on the game's timeline.
public static Timeline.IEntry InFiveMinutes(Action action)
{
    return Timeline.Instance.CallAfterDuration(action, 300f);
}
```

Timeline time is the right clock for anything that should respect the server's time speed and keep counting across restarts (if you save the entry). For plain real-time waits use a coroutine or `Task.Delay`.

## TimeManager

`TimeManager` in `Root.Township`, no namespace. A scene `NetworkEntityBehaviour`; `static TimeManager instance`. Server.

- Keeps `Timeline.Instance.TimeSpeed` equal to the server's `TimeSpeedMultiplier` setting, and updates it when settings change.
- Saves the timeline time and the real time it saved at. On load, if the server's `IsAdvancingTimeWhenOffline` setting is on (default true), it adds the time the server was off (times the time speed), so respawns and refills catch up.

## GameTimeManager

`GameTimeManager` in `Root.Township`, no namespace. A scene `NetworkEntityBehaviour`. `public static GameTimeManager Instance` (a field). Both sides.

It keeps its own `Timeline` (`DefaultTimeline`) where one whole timeline second is one game day: the whole part counts days, the fraction is the time of day. Each step of the main timeline moves it on by `delta / (dayDurationMinutes * 60)`. With the field default of 20 minutes, a game day is 20 real minutes at time speed 1.

| Member | What it does | Side |
| --- | --- | --- |
| `float CurrentTime { get; }` | Time of day, 0 to 1. 0 is the start of the day part. | Both |
| `float CurrentNormalizedTime { get; }` | Time of day stretched so day and night are each half. | Both |
| `float DayProgress`, `float MonthProgress` | 0 to 1. The month is `monthDurationDays` days (30 by default). | Both |
| `static bool IsNight { get; }` | | Both |
| `float DayToNightRatio`, `float DayDuration`, `float NightDuration`, `float DayDurationMinutes` | Cycle shape, in seconds of real time where it says duration. | Both |
| `Timeline DefaultTimeline`, `Timeline NormalizedTimeline` | | Both |
| `static event Action<bool> NightChanged`, `static event Action DuskReached`, `static event Action DawnReached` | Day and night changes. | Both |
| `void RushToTime(float time)` | Fast-forward (at twice the normal rate, the `rushingTimeMultiplier` default) to a normalised time: 0 to 0.5 is the day part, 0.5 to 1 the night part. | Server only; does nothing on clients. |
| `void UpdateTimeByKeyWord(string name)` | `RushToTime` to a named time from `AvailableKeyWords`. | Server |
| `IEnumerable<TimeName> AvailableKeyWords`, `string GetKeywords()` | The names (`TimeName.Name`, `TimeName.Time`). | |

The server sends the time to everyone every `syncRefreshRate` seconds (10 by default) and to each player as they arrive. A client eases towards it, or snaps if it's far off. Clients don't apply the time speed to their own timeline, so between syncs they can drift, and the sync pulls them back.

Night is when the day's progress is past the day part plus a share of the night (`smallHoursNightPercentage`) and before the last share. So dusk and dawn don't line up exactly with `DayToNightRatio`.

```csharp
// React to dusk and dawn. Fires on server and clients.
public static void WatchNight()
{
    GameTimeManager.DuskReached += () => MelonLogger.Msg("Night falls");
    GameTimeManager.DawnReached += () => MelonLogger.Msg("Morning");
}

// Fast-forward to an hour, as "time set 18" does. Server only.
public static void SetHour(float hour)
{
    if (GameTimeManager.Instance == null) return;
    float normalised = (hour - 6f) / 24f;
    if (normalised < 0f) normalised += 1f;
    GameTimeManager.Instance.RushToTime(normalised);
}
```

The events are static and survive a scene reload, so unsubscribe when your mod is done with them.

### Fixed daytime

The server's `FixedDaytime` setting (default -1, off) pins the sun. `DayTimeManager` reads it on the server and syncs it to clients, which then draw the sun at that time. `GameTimeManager` keeps counting regardless, so `IsNight`, the events and anything that checks the time of day carry on as normal.

## The time commands

`TimeCommandModule` (`Alta.Console.Commands`), module `time`, `[ServerOnly]`:

| Command | What it does |
| --- | --- |
| `time set <hour or keyword>` | A number is a 24 hour clock time: `(hour - 6) / 24` goes to `RushToTime`, so 6 is the start of the day. Otherwise a keyword. |
| `time keywords` | Lists keywords. |
| `time ofday [normalised]` | Logs `CurrentTime` or `CurrentNormalizedTime`. |
| `time` | The timeline's `Time`. |
| `time toggle` | If `CurrentTime` is between 0.25 and 0.75, rushes to normalised 0.75 (halfway through the night part), otherwise to 0.25 (halfway through the day part). |
| `time future <amount> [s/m/h/d]` | Advances the timeline. Everything scheduled in between fires at once: respawns, refills, decay. |

## Sky, fog and ambience

`Alta.Environmental.Atmosphere` holds the visual side. It's client only in practice: on headless builds the plugins skip their visuals.

| Type | What it is |
| --- | --- |
| `AtmosphereManager` | Scene behaviour, `static AtmosphereManager instance`. Blends `AtmospherePlugin`s into the ambient colour, fog colour and density and ambience audio. `event ResolveAtmosphere Resolve` lets you change the resolved set. `ReturnToBase()` drops overrides. |
| `DayTimeManager` | The sun and moon from `GameTimeManager`'s day and month progress, and the day's ambience and fog. Handles `FixedDaytime`. |
| `BorderDefinedAtmosphere`, `ForestDefinedAtmosphere`, `SpaceDefinedAtmosphere`, `CaveAmbience`, `ForestAmbience` | Plugins that change the look by area. |
| `AtmosphereSet` | A set of colours, fog and audio. A chunk's `Environment.OverrideSet` can force one. |
| `PrefabSceneDayTimeManager`, `PrefabSceneSettings` | A separate day and night driver for prefab scenes. |

`Alta.Environmental.Vegetation` has the grass (`GrassManager`) and wind (`LocalWindManager`), also visual.

A chunk's `ChunkEnvironment` (`locationChunk.Environment`) has its biome, its `SpawnData`, an ambient temperature override and the atmosphere override set.

## Hooking it

| Target | Why |
| --- | --- |
| `GameTimeManager.DuskReached`, `DawnReached`, `NightChanged` | Day and night. No patch needed. |
| `GameTimeManager.RushToTime(float)` | Every time change by command or code. |
| `Timeline.Update(TimeSpan)` | Every timeline step. Every frame, and `time future`. Keep it cheap. |
| `TimeManager`'s private `UpdateSettings` | To keep your own time speed instead of the server setting. |

## See also

- [Populations and spawners](populations.md), [Loot](loot.md): the main timeline users
- `ServerSettings` (in `Alta.Utilities`) has `TimeSpeedMultiplier` (default 1), `IsAdvancingTimeWhenOffline` (default true) and `FixedDaytime` (default -1)
