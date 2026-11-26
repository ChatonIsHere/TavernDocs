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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`ITimeline`](/mod/game-api/types/assembly-other/itimeline)
- **Nested types** [`Entry`](/mod/game-api/types/assembly-other/timeline-entry), [`IEntry`](/mod/game-api/types/assembly-other/timeline-ientry), [`RepeatableEntry`](/mod/game-api/types/assembly-other/timeline-repeatableentry), [`SerializedEntryState`](/mod/game-api/types/assembly-other/timeline-serializedentrystate)
- **Documented in** [Threads, coroutines and the timeline](/mod/game-api/console-and-utilities/threads-coroutines-and-timeline#timeline), [Time and environment](/mod/game-api/world/time-and-environment#timeline), [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies), [Console, utilities and Alta assemblies](/mod/game-api/console-and-utilities/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Timeline(TimeSpan startingTime)"}</code> | <span className="api-desc">Creates a `Timeline` from `startingTime`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/fastpriorityqueuetimespan-t">{"FastPriorityQueueTimeSpan"}</Link>{"<"}<Link to="/mod/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{"> entries"}</code> | <span className="api-desc">Priority queue of scheduled entries, ordered by target time.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" instance"}</code> | <span className="api-desc">Backing field for `Instance`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deltatime" /><code>{"TimeSpan DeltaTime { get; private set; }"}</code> | <span className="api-desc">Time the timeline moved in the last `Update`, scaled by `TimeSpeed`.</span> |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The game's timeline. Created on first use along with a `Timeline` GameObject whose updater advances it.</span> |
| <Link id="m-time" /><code>{"TimeSpan Time { get; private set; }"}</code> | <span className="api-desc">Current timeline time. Starts at zero; the server restores it from the world save.</span> |
| <Link id="m-timespeed" /><code>{"float TimeSpeed { get; set; }"}</code> | <span className="api-desc">Multiplier on how fast timeline time passes. Values of 0 or below are treated as 1.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-timechanged" /><code>{"event Action<TimeSpan> TimeChanged"}</code> | <span className="api-desc">Raised after each `Update` with the scaled delta time.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callafterduration" /><code><Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallAfterDuration(Action callback, float durationSeconds)"}</code> | <span className="api-desc">Schedules a one-off callback the given seconds or `TimeSpan` from now. Returns an entry you can pass to `Cancel`.</span> |
| <Link id="m-callafterduration-2" /><code><Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallAfterDuration(Action callback, TimeSpan duration)"}</code> | <span className="api-desc">Schedules a one-off callback the given seconds or `TimeSpan` from now. Returns an entry you can pass to `Cancel`.</span> |
| <Link id="m-callrepeatableafterduration" /><code><Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallRepeatableAfterDuration(Action callback, float durationSeconds, float repeatIntervalSeconds)"}</code> | <span className="api-desc">Schedules a callback after a delay and then every interval. Intervals under 0.01 s are scheduled once instead.</span> |
| <Link id="m-callrepeatableafterduration-2" /><code><Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallRepeatableAfterDuration(Action callback, TimeSpan duration, TimeSpan repeatInterval)"}</code> | <span className="api-desc">Schedules a callback after a delay and then every interval. Intervals under 0.01 s are scheduled once instead.</span> |
| <Link id="m-cancel" /><code>{"static void Cancel(ref "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry)"}</code> | <span className="api-desc">Stops an entry from firing and sets your reference to null. Safe to call with null.</span> |
| <Link id="m-clearentries" /><code>{"void ClearEntries()"}</code> | <span className="api-desc">Drops every scheduled entry.</span> |
| <Link id="m-getserializedstate" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" GetSerializedState(TimeSpan targetTime)"}</code> | <span className="api-desc">Says whether a saved target time is unset, already past or still ahead.</span> |
| <Link id="m-insertcallbackattime" /><code><Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" InsertCallbackAtTime(Action callback, TimeSpan time)"}</code> | <span className="api-desc">Schedules a one-off callback at an exact timeline time.</span> |
| <Link id="m-load" /><code>{"void Load(TimeSpan time)"}</code> | <span className="api-desc">Sets the time and runs every entry that's now due, rescheduling repeating ones.</span> |
| <Link id="m-loadentry" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" LoadEntry(out "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry, Action callback, TimeSpan targetTime, bool isRegistering = true, bool isInvokingPast = true)"}</code> | <span className="api-desc">Restores a saved one-off entry: runs the callback if its time has passed, or schedules it if it's ahead.</span> |
| <Link id="m-loadrepeatableentry" /><code>{"static int LoadRepeatableEntry(out "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry, Action callback, TimeSpan targetTime, TimeSpan interval)"}</code> | <span className="api-desc">Restores a saved repeating entry and returns how many intervals were missed. It doesn't call the callback for them.</span> |
| <Link id="m-saveentry" /><code>{"static TimeSpan SaveEntry("}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry)"}</code> | <span className="api-desc">Returns an entry's target time for saving, or zero if it's null or already due.</span> |
| <Link id="m-serializeentry" /><code><Link to="/mod/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" SerializeEntry(ref "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, Action callback, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isRegistering = true, bool isInvokingPast = true)"}</code> | <span className="api-desc">Writes or reads an entry's target time; on read, runs it if past and schedules it if ahead.</span> |
| <Link id="m-serializerepeatableentry" /><code>{"void SerializeRepeatableEntry(ref "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, Action callback, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isInvokingPast)"}</code> | <span className="api-desc">Writes or reads a repeating entry; on read, calls the callback once per missed interval (capped at 1000) and reschedules it.</span> |
| <Link id="m-update" /><code>{"void Update(TimeSpan deltaTime)"}</code> | <span className="api-desc">Advances the timeline by a real time delta, scaled by `TimeSpeed`, and runs due entries.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enqueentry" /><code>{"private void EnqueEntry("}<Link to="/mod/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{" entry)"}</code> | <span className="api-desc">Adds an entry to the queue, doubling the queue's size when it fills.</span> |
| <Link id="m-insertrepeatablecallbackattime" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" InsertRepeatableCallbackAtTime(Action callback, TimeSpan time, TimeSpan repeatInterval)"}</code> | <span className="api-desc">Schedules a repeating callback at a timeline time. Intervals under 0.01 s are logged and scheduled once.</span> |
| <Link id="m-serializeentry-2" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" SerializeEntry(ref "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, out TimeSpan targetTime)"}</code> | <span className="api-desc">Writes or reads an entry's target time; on read, runs it if past and schedules it if ahead.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Timeline`:

<div className="api-used-in">

[`Timeline.Entry.CheckEntryReuse`](/mod/game-api/types/assembly-other/timeline-entry#m-checkentryreuse), [`Timeline.RepeatableEntry.CheckEntryReuse`](/mod/game-api/types/assembly-other/timeline-repeatableentry#m-checkentryreuse), [`OffsetEvent.OffsetEvent`](/mod/game-api/types/alta-crafting/offsetevent#m-ctor), [`OffsetEvent.timeline`](/mod/game-api/types/alta-crafting/offsetevent#m-timeline), [`OffsetEventHelper.CreateOffset`](/mod/game-api/types/alta-crafting/offseteventhelper#m-createoffset), [`GameTimeManager.DefaultTimeline`](/mod/game-api/types/global-e-h/gametimemanager#m-defaulttimeline), [`GameTimeManager.GetTimeFromTimeline`](/mod/game-api/types/global-e-h/gametimemanager#m-gettimefromtimeline), [`GameTimeManager.NormalizedTimeline`](/mod/game-api/types/global-e-h/gametimemanager#m-normalizedtimeline).

</div>
