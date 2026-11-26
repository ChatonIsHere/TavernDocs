---
title: "Timeline"
description: "The game's scheduler for callbacks at a game time or on a repeat (respawns, decay, loot refills and the like)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timeline

A **class** in `Alta.Timing.Runtime`, `Alta.Timing`.

The game's scheduler for callbacks at a game time or on a repeat (respawns, decay, loot refills and the like). Get it from `Instance`; it runs on the main thread on both sides, and the server saves its time with the world.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITimeline`](/game-api/types/assembly-other/itimeline)
- **Nested types** [`Entry`](/game-api/types/assembly-other/timeline-entry), [`IEntry`](/game-api/types/assembly-other/timeline-ientry), [`RepeatableEntry`](/game-api/types/assembly-other/timeline-repeatableentry), [`SerializedEntryState`](/game-api/types/assembly-other/timeline-serializedentrystate)
- **Documented in** [Threads, coroutines and the timeline](/game-api/console-and-utilities/threads-coroutines-and-timeline#timeline), [Time and environment](/game-api/world/time-and-environment#timeline), [Alta assemblies](/game-api/console-and-utilities/alta-assemblies), [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Timeline(TimeSpan startingTime)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/game-api/types/assembly-other/fastpriorityqueuetimespan-t">{"FastPriorityQueueTimeSpan"}</Link>{"<"}<Link to="/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{"> entries"}</code> | Priority queue of scheduled entries, ordered by target time. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" instance"}</code> | Backing field for `Instance`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deltatime" /><code>{"TimeSpan DeltaTime { get; private set; }"}</code> | Time the timeline moved in the last `Update`, scaled by `TimeSpeed`. |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" Instance { get; }"}</code> | The game's timeline. Created on first use along with a `Timeline` GameObject whose updater advances it. |
| <Link id="m-time" /><code>{"TimeSpan Time { get; private set; }"}</code> | Current timeline time. Starts at zero; the server restores it from the world save. |
| <Link id="m-timespeed" /><code>{"float TimeSpeed { get; set; }"}</code> | Multiplier on how fast timeline time passes. Values of 0 or below are treated as 1. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-timechanged" /><code>{"event Action<TimeSpan> TimeChanged"}</code> | Raised after each `Update` with the scaled delta time. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callafterduration" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallAfterDuration(Action callback, float durationSeconds)"}</code> | Schedules a one-off callback the given seconds or `TimeSpan` from now. Returns an entry you can pass to `Cancel`. |
| <Link id="m-callafterduration-2" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallAfterDuration(Action callback, TimeSpan duration)"}</code> | Schedules a one-off callback the given seconds or `TimeSpan` from now. Returns an entry you can pass to `Cancel`. |
| <Link id="m-callrepeatableafterduration" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallRepeatableAfterDuration(Action callback, float durationSeconds, float repeatIntervalSeconds)"}</code> | Schedules a callback after a delay and then every interval. Intervals under 0.01 s are scheduled once instead. |
| <Link id="m-callrepeatableafterduration-2" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallRepeatableAfterDuration(Action callback, TimeSpan duration, TimeSpan repeatInterval)"}</code> | Schedules a callback after a delay and then every interval. Intervals under 0.01 s are scheduled once instead. |
| <Link id="m-cancel" /><code>{"static void Cancel(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry)"}</code> | Stops an entry from firing and sets your reference to null. Safe to call with null. |
| <Link id="m-clearentries" /><code>{"void ClearEntries()"}</code> | Drops every scheduled entry. |
| <Link id="m-getserializedstate" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" GetSerializedState(TimeSpan targetTime)"}</code> | Says whether a saved target time is unset, already past or still ahead. |
| <Link id="m-insertcallbackattime" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" InsertCallbackAtTime(Action callback, TimeSpan time)"}</code> | Schedules a one-off callback at an exact timeline time. |
| <Link id="m-load" /><code>{"void Load(TimeSpan time)"}</code> | Sets the time and runs every entry that's now due, rescheduling repeating ones. |
| <Link id="m-loadentry" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" LoadEntry(out "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry, Action callback, TimeSpan targetTime, bool isRegistering = true, bool isInvokingPast = true)"}</code> | Restores a saved one-off entry: runs the callback if its time has passed, or schedules it if it's ahead. |
| <Link id="m-loadrepeatableentry" /><code>{"static int LoadRepeatableEntry(out "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry, Action callback, TimeSpan targetTime, TimeSpan interval)"}</code> | Restores a saved repeating entry and returns how many intervals were missed. It doesn't call the callback for them. |
| <Link id="m-saveentry" /><code>{"static TimeSpan SaveEntry("}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry)"}</code> | Returns an entry's target time for saving, or zero if it's null or already due. |
| <Link id="m-serializeentry" /><code><Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" SerializeEntry(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, Action callback, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isRegistering = true, bool isInvokingPast = true)"}</code> | Writes or reads an entry's target time; on read, runs it if past and schedules it if ahead. |
| <Link id="m-serializerepeatableentry" /><code>{"void SerializeRepeatableEntry(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, Action callback, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isInvokingPast)"}</code> | Writes or reads a repeating entry; on read, calls the callback once per missed interval (capped at 1000) and reschedules it. |
| <Link id="m-update" /><code>{"void Update(TimeSpan deltaTime)"}</code> | Advances the timeline by a real time delta, scaled by `TimeSpeed`, and runs due entries. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enqueentry" /><code>{"private void EnqueEntry("}<Link to="/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{" entry)"}</code> | Adds an entry to the queue, doubling the queue's size when it fills. |
| <Link id="m-insertrepeatablecallbackattime" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" InsertRepeatableCallbackAtTime(Action callback, TimeSpan time, TimeSpan repeatInterval)"}</code> | Schedules a repeating callback at a timeline time. Intervals under 0.01 s are logged and scheduled once. |
| <Link id="m-serializeentry-2" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" SerializeEntry(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, out TimeSpan targetTime)"}</code> | Writes or reads an entry's target time; on read, runs it if past and schedules it if ahead. |

</details>

## Used in

Members of other types that take, return or hold a `Timeline`:

[`Timeline.Entry.CheckEntryReuse`](/game-api/types/assembly-other/timeline-entry#m-checkentryreuse), [`Timeline.RepeatableEntry.CheckEntryReuse`](/game-api/types/assembly-other/timeline-repeatableentry#m-checkentryreuse), [`OffsetEvent.OffsetEvent`](/game-api/types/alta-crafting/offsetevent#m-ctor), [`OffsetEvent.timeline`](/game-api/types/alta-crafting/offsetevent#m-timeline), [`OffsetEventHelper.CreateOffset`](/game-api/types/alta-crafting/offseteventhelper#m-createoffset), [`GameTimeManager.DefaultTimeline`](/game-api/types/global-e-h/gametimemanager#m-defaulttimeline), [`GameTimeManager.GetTimeFromTimeline`](/game-api/types/global-e-h/gametimemanager#m-gettimefromtimeline), [`GameTimeManager.NormalizedTimeline`](/game-api/types/global-e-h/gametimemanager#m-normalizedtimeline).
