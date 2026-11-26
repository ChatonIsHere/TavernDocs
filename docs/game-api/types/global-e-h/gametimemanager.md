---
title: "GameTimeManager"
description: "Keeps the time of day and month and decides when it's night."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTimeManager

A **class** in `Root.Township`, no namespace.

Keeps the time of day and month and decides when it's night. One timeline second is one game day. The server runs it and syncs clients every few seconds; get it from `GameTimeManager.Instance`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GameTimeManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GameTimeManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GameTimeManagerSaveData`](/game-api/types/global-e-h/gametimemanagersavedata)
- **Nested types** [`TimeName`](/game-api/types/global-e-h/gametimemanager-timename)
- **Documented in** [Time and environment](/game-api/world/time-and-environment#gametimemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTimeManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" Instance"}</code> | The current manager, set on `Awake`. |

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablekeywords" /><code>{"private "}<Link to="/game-api/types/global-e-h/gametimemanager-timename">{"GameTimeManager.TimeName"}</Link>{"[] availableKeyWords"}</code> | Named times of day (for example dawn) that `UpdateTimeByKeyWord` rushes to. |
| <Link id="m-daydurationminutes" /><code>{"private float dayDurationMinutes"}</code> | Real minutes in one game day. Defaults to 20. |
| <Link id="m-dayprogress" /><code>{"private float dayProgress"}</code> | Progress through the current day, 0 to 1. |
| <Link id="m-daytonightratio" /><code>{"private float dayToNightRatio"}</code> | Point in the day where day turns to night (before the small-hours adjustment). Defaults to 0.5. |
| <Link id="m-deltaoperation" /><code>{"private Func<float, float> deltaOperation"}</code> | Per-tick hook: `ServerUpdate` on the server, `ClientUpdate` on clients. |
| <Link id="m-initialtime" /><code>{"private float initialTime"}</code> | Starting time of a new world, as a fraction of a day. Defaults to 0.1. |
| <Link id="m-isrushing" /><code>{"private bool isRushing"}</code> | True while time is running faster towards `targetTime`. |
| <Link id="m-issettinginstance" /><code>{"private bool isSettingInstance"}</code> | If true (default), this manager becomes `Instance` on Awake. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-monthdurationdays" /><code>{"private float monthDurationDays"}</code> | Game days in one month. Defaults to 30. |
| <Link id="m-monthprogress" /><code>{"private float monthProgress"}</code> | Progress through the current month, 0 to 1. |
| <Link id="m-nextsync" /><code>{"private float nextSync"}</code> | Real time of the next server sync. Set to 0 to sync at once. |
| <Link id="m-offsetfromserver" /><code>{"private float offsetFromServer"}</code> | Client: remaining seconds of difference from the server clock to blend in. |
| <Link id="m-rushingtimemultiplier" /><code>{"private float rushingTimeMultiplier"}</code> | Speed-up while rushing. Defaults to 2. |
| <Link id="m-smallhoursnightpercentage" /><code>{"private float smallHoursNightPercentage"}</code> | Share of the night counted as day at each end (the small hours). Defaults to 0.25. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> | Method sync used for time updates. |
| <Link id="m-syncrefreshrate" /><code>{"private float syncRefreshRate"}</code> | Seconds between server time syncs. Defaults to 10. |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> | Day progress that rushing stops at. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablekeywords-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-e-h/gametimemanager-timename">{"GameTimeManager.TimeName"}</Link>{"> AvailableKeyWords { get; }"}</code> | Named times (such as dawn or noon) for `UpdateTimeByKeyWord`. |
| <Link id="m-currentnormalizedtime" /><code>{"float CurrentNormalizedTime { get; }"}</code> | Time of day from 0 to 1 where the day half and night half are equal length. |
| <Link id="m-currenttime" /><code>{"float CurrentTime { get; }"}</code> | Time of day from 0 to 1 as the fraction of the current day. |
| <Link id="m-dayduration" /><code>{"float DayDuration { get; }"}</code> | Real seconds of daylight in one game day, counting the small hours as day. |
| <Link id="m-daydurationminutes-2" /><code>{"float DayDurationMinutes { get; }"}</code> | Real minutes in one game day. |
| <Link id="m-dayprogress-2" /><code>{"float DayProgress { get; }"}</code> | Progress through the current day, 0 to 1. |
| <Link id="m-daytonightratio-2" /><code>{"float DayToNightRatio { get; }"}</code> | Share of the day (0 to 1) that is the day part before night starts. |
| <Link id="m-defaulttimeline" /><code><Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" DefaultTimeline { get; private set; }"}</code> | Timeline of game days: the whole part counts days, the fraction is the time of day. |
| <Link id="m-isnight" /><code>{"static bool IsNight { get; private set; }"}</code> | Whether it is night now. Static. |
| <Link id="m-monthprogress-2" /><code>{"float MonthProgress { get; }"}</code> | Progress through the current month, 0 to 1. |
| <Link id="m-nightduration" /><code>{"float NightDuration { get; }"}</code> | Real seconds of night in one game day, not counting the small hours. |
| <Link id="m-normalizedtimeline" /><code><Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" NormalizedTimeline { get; private set; }"}</code> | Timeline with the day and night halves stretched to equal length. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-dawnreached" /><code>{"static event Action DawnReached"}</code> | Raised when night ends. Static. |
| <Link id="m-duskreached" /><code>{"static event Action DuskReached"}</code> | Raised when night starts. Static. |
| <Link id="m-nightchanged" /><code>{"static event Action<bool> NightChanged"}</code> | Raised with the new night state when it changes. Static. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getkeywords" /><code>{"string GetKeywords()"}</code> | Text listing the available time keywords. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync and picks the server or client update; clients start a timeline at the initial time. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: makes the timeline if loading didn't, and starts following the main timeline. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the time to a new player and makes them snap to it. |
| <Link id="m-rushtotime" /><code>{"void RushToTime(float time)"}</code> | Server: fast-forwards to a normalized time (0 to 0.5 day part, 0.5 to 1 night part) at the rushing speed. |
| <Link id="m-updatetimebykeyword" /><code>{"void UpdateTimeByKeyWord(string name)"}</code> | Server: rushes to a named time; logs an error for an unknown name. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the static `Instance` if `isSettingInstance` is on. |
| <Link id="m-clientupdate" /><code>{"private float ClientUpdate(float dayDelta)"}</code> | Client: adds a share of the remaining offset from the server time to each frame's delta, so the clock eases into sync. |
| <Link id="m-createtimeline" /><code>{"private void CreateTimeline(TimeSpan startTime)"}</code> | Creates the default and normalized timelines from a start time and updates day and month progress. |
| <Link id="m-getnormalizedtime" /><code>{"private TimeSpan GetNormalizedTime()"}</code> | Converts default time so day and night each take half of the normalized day, whatever the day to night ratio. |
| <Link id="m-gettimefromtimeline" /><code>{"private float GetTimeFromTimeline("}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> | Fraction of the current day on a timeline (one timeline second is one game day). |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the global timeline and clears `Instance` if it's this one. |
| <Link id="m-onnightchanged" /><code>{"private void OnNightChanged(bool wasNight)"}</code> | Raises `NightChanged`, then `DawnReached` or `DuskReached`. |
| <Link id="m-serverupdate" /><code>{"private float ServerUpdate(float dayDelta)"}</code> | Server: sends a time sync to the chunks every `syncRefreshRate` seconds. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isForcingSnapping)"}</code> | Syncs the time, day to night ratio and rush state. Clients snap if forced or more than 0.05 off; skipped in local tests. |
| <Link id="m-updatenormalizedtime" /><code>{"private void UpdateNormalizedTime()"}</code> | Moves the normalized timeline to match the default one. |
| <Link id="m-updateprogressfromtimeline" /><code>{"private void UpdateProgressFromTimeline()"}</code> | Recomputes day and month progress from the default timeline. |
| <Link id="m-updatetimeline" /><code>{"private void UpdateTimeline(TimeSpan deltaTime)"}</code> | Advances game time each tick (faster while rushing until the target is reached), updates night state and fires dawn or dusk. |

</details>

## Used in

Members of other types that take, return or hold a `GameTimeManager`:

[`DayTimeManager.gameTimeManager`](/game-api/types/alta-world/daytimemanager#m-gametimemanager), [`TimeScroller.timeManager`](/game-api/types/global-t-x/timescroller#m-timemanager).
