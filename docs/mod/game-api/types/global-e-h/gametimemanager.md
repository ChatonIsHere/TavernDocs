---
title: "GameTimeManager"
description: "Keeps the time of day and month and decides when it's night."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTimeManager

A **class** in `Root.Township`, the global namespace.

Keeps the time of day and month and decides when it's night. One timeline second is one game day. The server runs it and syncs clients every few seconds; get it from `GameTimeManager.Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GameTimeManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GameTimeManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GameTimeManagerSaveData`](/mod/game-api/types/global-e-h/gametimemanagersavedata)
- **Nested types** [`TimeName`](/mod/game-api/types/global-e-h/gametimemanager-timename)
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment#gametimemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTimeManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" Instance"}</code> | <span className="api-desc">The current manager, set on `Awake`.</span> |

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablekeywords" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gametimemanager-timename">{"GameTimeManager.TimeName"}</Link>{"[] availableKeyWords"}</code> | <span className="api-desc">Named times of day (for example dawn) that `UpdateTimeByKeyWord` rushes to.</span> |
| <Link id="m-daydurationminutes" /><code>{"private float dayDurationMinutes"}</code> | <span className="api-desc">Real minutes in one game day. Defaults to 20.</span> |
| <Link id="m-dayprogress" /><code>{"private float dayProgress"}</code> | <span className="api-desc">Progress through the current day, 0 to 1.</span> |
| <Link id="m-daytonightratio" /><code>{"private float dayToNightRatio"}</code> | <span className="api-desc">Point in the day where day turns to night (before the small-hours adjustment). Defaults to 0.5.</span> |
| <Link id="m-deltaoperation" /><code>{"private Func<float, float> deltaOperation"}</code> | <span className="api-desc">Per-tick hook: `ServerUpdate` on the server, `ClientUpdate` on clients.</span> |
| <Link id="m-initialtime" /><code>{"private float initialTime"}</code> | <span className="api-desc">Starting time of a new world, as a fraction of a day. Defaults to 0.1.</span> |
| <Link id="m-isrushing" /><code>{"private bool isRushing"}</code> | <span className="api-desc">True while time is running faster towards `targetTime`.</span> |
| <Link id="m-issettinginstance" /><code>{"private bool isSettingInstance"}</code> | <span className="api-desc">If true (default), this manager becomes `Instance` on Awake.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-monthdurationdays" /><code>{"private float monthDurationDays"}</code> | <span className="api-desc">Game days in one month. Defaults to 30.</span> |
| <Link id="m-monthprogress" /><code>{"private float monthProgress"}</code> | <span className="api-desc">Progress through the current month, 0 to 1.</span> |
| <Link id="m-nextsync" /><code>{"private float nextSync"}</code> | <span className="api-desc">Real time of the next server sync. Set to 0 to sync at once.</span> |
| <Link id="m-offsetfromserver" /><code>{"private float offsetFromServer"}</code> | <span className="api-desc">Client: remaining seconds of difference from the server clock to blend in.</span> |
| <Link id="m-rushingtimemultiplier" /><code>{"private float rushingTimeMultiplier"}</code> | <span className="api-desc">Speed-up while rushing. Defaults to 2.</span> |
| <Link id="m-smallhoursnightpercentage" /><code>{"private float smallHoursNightPercentage"}</code> | <span className="api-desc">Share of the night counted as day at each end (the small hours). Defaults to 0.25.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> | <span className="api-desc">Method sync used for time updates.</span> |
| <Link id="m-syncrefreshrate" /><code>{"private float syncRefreshRate"}</code> | <span className="api-desc">Seconds between server time syncs. Defaults to 10.</span> |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> | <span className="api-desc">Day progress that rushing stops at.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablekeywords-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/gametimemanager-timename">{"GameTimeManager.TimeName"}</Link>{"> AvailableKeyWords { get; }"}</code> | <span className="api-desc">Named times (such as dawn or noon) for `UpdateTimeByKeyWord`.</span> |
| <Link id="m-currentnormalizedtime" /><code>{"float CurrentNormalizedTime { get; }"}</code> | <span className="api-desc">Time of day from 0 to 1 where the day half and night half are equal length.</span> |
| <Link id="m-currenttime" /><code>{"float CurrentTime { get; }"}</code> | <span className="api-desc">Time of day from 0 to 1 as the fraction of the current day.</span> |
| <Link id="m-dayduration" /><code>{"float DayDuration { get; }"}</code> | <span className="api-desc">Real seconds of daylight in one game day, counting the small hours as day.</span> |
| <Link id="m-daydurationminutes-2" /><code>{"float DayDurationMinutes { get; }"}</code> | <span className="api-desc">Real minutes in one game day.</span> |
| <Link id="m-dayprogress-2" /><code>{"float DayProgress { get; }"}</code> | <span className="api-desc">Progress through the current day, 0 to 1.</span> |
| <Link id="m-daytonightratio-2" /><code>{"float DayToNightRatio { get; }"}</code> | <span className="api-desc">Share of the day (0 to 1) that is the day part before night starts.</span> |
| <Link id="m-defaulttimeline" /><code><Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" DefaultTimeline { get; private set; }"}</code> | <span className="api-desc">Timeline of game days: the whole part counts days, the fraction is the time of day.</span> |
| <Link id="m-isnight" /><code>{"static bool IsNight { get; private set; }"}</code> | <span className="api-desc">Whether it is night now. Static.</span> |
| <Link id="m-monthprogress-2" /><code>{"float MonthProgress { get; }"}</code> | <span className="api-desc">Progress through the current month, 0 to 1.</span> |
| <Link id="m-nightduration" /><code>{"float NightDuration { get; }"}</code> | <span className="api-desc">Real seconds of night in one game day, not counting the small hours.</span> |
| <Link id="m-normalizedtimeline" /><code><Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" NormalizedTimeline { get; private set; }"}</code> | <span className="api-desc">Timeline with the day and night halves stretched to equal length.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-dawnreached" /><code>{"static event Action DawnReached"}</code> | <span className="api-desc">Raised when night ends. Static.</span> |
| <Link id="m-duskreached" /><code>{"static event Action DuskReached"}</code> | <span className="api-desc">Raised when night starts. Static.</span> |
| <Link id="m-nightchanged" /><code>{"static event Action<bool> NightChanged"}</code> | <span className="api-desc">Raised with the new night state when it changes. Static.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getkeywords" /><code>{"string GetKeywords()"}</code> | <span className="api-desc">Text listing the available time keywords.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the sync and picks the server or client update; clients start a timeline at the initial time.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: makes the timeline if loading didn't, and starts following the main timeline.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the time to a new player and makes them snap to it.</span> |
| <Link id="m-rushtotime" /><code>{"void RushToTime(float time)"}</code> | <span className="api-desc">Server: fast-forwards to a normalized time (0 to 0.5 day part, 0.5 to 1 night part) at the rushing speed.</span> |
| <Link id="m-updatetimebykeyword" /><code>{"void UpdateTimeByKeyWord(string name)"}</code> | <span className="api-desc">Server: rushes to a named time; logs an error for an unknown name.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the static `Instance` if `isSettingInstance` is on.</span> |
| <Link id="m-clientupdate" /><code>{"private float ClientUpdate(float dayDelta)"}</code> | <span className="api-desc">Client: adds a share of the remaining offset from the server time to each frame's delta, so the clock eases into sync.</span> |
| <Link id="m-createtimeline" /><code>{"private void CreateTimeline(TimeSpan startTime)"}</code> | <span className="api-desc">Creates the default and normalized timelines from a start time and updates day and month progress.</span> |
| <Link id="m-getnormalizedtime" /><code>{"private TimeSpan GetNormalizedTime()"}</code> | <span className="api-desc">Converts default time so day and night each take half of the normalized day, whatever the day to night ratio.</span> |
| <Link id="m-gettimefromtimeline" /><code>{"private float GetTimeFromTimeline("}<Link to="/mod/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> | <span className="api-desc">Fraction of the current day on a timeline (one timeline second is one game day).</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the global timeline and clears `Instance` if it's this one.</span> |
| <Link id="m-onnightchanged" /><code>{"private void OnNightChanged(bool wasNight)"}</code> | <span className="api-desc">Raises `NightChanged`, then `DawnReached` or `DuskReached`.</span> |
| <Link id="m-serverupdate" /><code>{"private float ServerUpdate(float dayDelta)"}</code> | <span className="api-desc">Server: sends a time sync to the chunks every `syncRefreshRate` seconds.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isForcingSnapping)"}</code> | <span className="api-desc">Syncs the time, day to night ratio and rush state. Clients snap if forced or more than 0.05 off; skipped in local tests.</span> |
| <Link id="m-updatenormalizedtime" /><code>{"private void UpdateNormalizedTime()"}</code> | <span className="api-desc">Moves the normalized timeline to match the default one.</span> |
| <Link id="m-updateprogressfromtimeline" /><code>{"private void UpdateProgressFromTimeline()"}</code> | <span className="api-desc">Recomputes day and month progress from the default timeline.</span> |
| <Link id="m-updatetimeline" /><code>{"private void UpdateTimeline(TimeSpan deltaTime)"}</code> | <span className="api-desc">Advances game time each tick (faster while rushing until the target is reached), updates night state and fires dawn or dusk.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GameTimeManager`:

<div className="api-used-in">

[`DayTimeManager.gameTimeManager`](/mod/game-api/types/alta-world/daytimemanager#m-gametimemanager), [`TimeScroller.timeManager`](/mod/game-api/types/global-t-x/timescroller#m-timemanager).

</div>
