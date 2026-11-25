---
title: "Timeline"
description: "A scheduler for \"call this in N seconds\" and \"every N seconds\", used for respawns, decay, loot refills, taxes, timed stat changes and the like."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Timeline

A **class** in `Alta.Timing.Runtime`, `Alta.Timing`.

A scheduler for "call this in N seconds" and "every N seconds", used for respawns, decay, loot refills, taxes, timed stat changes and the like. Main thread.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`ITimeline`](/game-api/types/assembly-other/itimeline)
- **Nested types** [`Entry`](/game-api/types/assembly-other/timeline-entry), [`IEntry`](/game-api/types/assembly-other/timeline-ientry), [`RepeatableEntry`](/game-api/types/assembly-other/timeline-repeatableentry), [`SerializedEntryState`](/game-api/types/assembly-other/timeline-serializedentrystate)
- **Documented in** [Threads, coroutines and the timeline](/game-api/console-and-utilities/threads-coroutines-and-timeline#timeline), [Time and environment](/game-api/world/time-and-environment#timeline), [Alta assemblies](/game-api/console-and-utilities/alta-assemblies), [Console, utilities and Alta assemblies](/game-api/console-and-utilities/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Timeline(TimeSpan startingTime)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/game-api/types/assembly-other/fastpriorityqueuetimespan-t">{"FastPriorityQueueTimeSpan"}</Link>{"<"}<Link to="/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{"> entries"}</code> |  |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" instance"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deltatime" /><code>{"TimeSpan DeltaTime { get; private set; }"}</code> |  |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" Instance { get; }"}</code> |  |
| <Link id="m-time" /><code>{"TimeSpan Time { get; private set; }"}</code> |  |
| <Link id="m-timespeed" /><code>{"float TimeSpeed { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-timechanged" /><code>{"event Action<TimeSpan> TimeChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callafterduration" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallAfterDuration(Action callback, float durationSeconds)"}</code> |  |
| <Link id="m-callafterduration-2" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallAfterDuration(Action callback, TimeSpan duration)"}</code> |  |
| <Link id="m-callrepeatableafterduration" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallRepeatableAfterDuration(Action callback, float durationSeconds, float repeatIntervalSeconds)"}</code> |  |
| <Link id="m-callrepeatableafterduration-2" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" CallRepeatableAfterDuration(Action callback, TimeSpan duration, TimeSpan repeatInterval)"}</code> |  |
| <Link id="m-cancel" /><code>{"static void Cancel(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry)"}</code> |  |
| <Link id="m-clearentries" /><code>{"void ClearEntries()"}</code> |  |
| <Link id="m-getserializedstate" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" GetSerializedState(TimeSpan targetTime)"}</code> |  |
| <Link id="m-insertcallbackattime" /><code><Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" InsertCallbackAtTime(Action callback, TimeSpan time)"}</code> |  |
| <Link id="m-load" /><code>{"void Load(TimeSpan time)"}</code> |  |
| <Link id="m-loadentry" /><code>{"static "}<Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" LoadEntry(out "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry, Action callback, TimeSpan targetTime, bool isRegistering = true, bool isInvokingPast = true)"}</code> |  |
| <Link id="m-loadrepeatableentry" /><code>{"static int LoadRepeatableEntry(out "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry, Action callback, TimeSpan targetTime, TimeSpan interval)"}</code> |  |
| <Link id="m-saveentry" /><code>{"static TimeSpan SaveEntry("}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry)"}</code> |  |
| <Link id="m-serializeentry" /><code><Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" SerializeEntry(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, Action callback, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isRegistering = true, bool isInvokingPast = true)"}</code> |  |
| <Link id="m-serializerepeatableentry" /><code>{"void SerializeRepeatableEntry(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, Action callback, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isInvokingPast)"}</code> |  |
| <Link id="m-update" /><code>{"void Update(TimeSpan deltaTime)"}</code> |  |
| <Link id="m-enqueentry" /><code>{"private void EnqueEntry("}<Link to="/game-api/types/assembly-other/timeline-entry">{"Timeline.Entry"}</Link>{" entry)"}</code> |  |
| <Link id="m-insertrepeatablecallbackattime" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" InsertRepeatableCallbackAtTime(Action callback, TimeSpan time, TimeSpan repeatInterval)"}</code> |  |
| <Link id="m-serializeentry-2" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-serializedentrystate">{"Timeline.SerializedEntryState"}</Link>{" SerializeEntry(ref "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" iEntry, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, out TimeSpan targetTime)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Timeline`:

[`Timeline.Entry.CheckEntryReuse`](/game-api/types/assembly-other/timeline-entry#m-checkentryreuse), [`Timeline.RepeatableEntry.CheckEntryReuse`](/game-api/types/assembly-other/timeline-repeatableentry#m-checkentryreuse), [`OffsetEvent.OffsetEvent`](/game-api/types/alta-crafting/offsetevent#m-ctor), [`OffsetEvent.timeline`](/game-api/types/alta-crafting/offsetevent#m-timeline), [`OffsetEventHelper.CreateOffset`](/game-api/types/alta-crafting/offseteventhelper#m-createoffset), [`GameTimeManager.DefaultTimeline`](/game-api/types/global-e-h/gametimemanager#m-defaulttimeline), [`GameTimeManager.GetTimeFromTimeline`](/game-api/types/global-e-h/gametimemanager#m-gettimefromtimeline), [`GameTimeManager.NormalizedTimeline`](/game-api/types/global-e-h/gametimemanager#m-normalizedtimeline).
