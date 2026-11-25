---
title: "GameTimeManager"
description: "A scene NetworkEntityBehaviour. public static GameTimeManager Instance (a field)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTimeManager

A **class** in `Root.Township`, no namespace.

A scene `NetworkEntityBehaviour`. `public static GameTimeManager Instance` (a field).

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GameTimeManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GameTimeManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GameTimeManagerSaveData`](/game-api/types/global-e-h/gametimemanagersavedata)
- **Nested types** [`TimeName`](/game-api/types/global-e-h/gametimemanager-timename)
- **Documented in** [Time and environment](/game-api/world/time-and-environment#gametimemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTimeManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" Instance"}</code> |  |
| <Link id="m-availablekeywords" /><code>{"private "}<Link to="/game-api/types/global-e-h/gametimemanager-timename">{"GameTimeManager.TimeName"}</Link>{"[] availableKeyWords"}</code> |  |
| <Link id="m-daydurationminutes" /><code>{"private float dayDurationMinutes"}</code> |  |
| <Link id="m-dayprogress" /><code>{"private float dayProgress"}</code> |  |
| <Link id="m-daytonightratio" /><code>{"private float dayToNightRatio"}</code> |  |
| <Link id="m-deltaoperation" /><code>{"private Func<float, float> deltaOperation"}</code> |  |
| <Link id="m-initialtime" /><code>{"private float initialTime"}</code> |  |
| <Link id="m-isrushing" /><code>{"private bool isRushing"}</code> |  |
| <Link id="m-issettinginstance" /><code>{"private bool isSettingInstance"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-monthdurationdays" /><code>{"private float monthDurationDays"}</code> |  |
| <Link id="m-monthprogress" /><code>{"private float monthProgress"}</code> |  |
| <Link id="m-nextsync" /><code>{"private float nextSync"}</code> |  |
| <Link id="m-offsetfromserver" /><code>{"private float offsetFromServer"}</code> |  |
| <Link id="m-rushingtimemultiplier" /><code>{"private float rushingTimeMultiplier"}</code> |  |
| <Link id="m-smallhoursnightpercentage" /><code>{"private float smallHoursNightPercentage"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> |  |
| <Link id="m-syncrefreshrate" /><code>{"private float syncRefreshRate"}</code> |  |
| <Link id="m-targettime" /><code>{"private float targetTime"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablekeywords-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-e-h/gametimemanager-timename">{"GameTimeManager.TimeName"}</Link>{"> AvailableKeyWords { get; }"}</code> |  |
| <Link id="m-currentnormalizedtime" /><code>{"float CurrentNormalizedTime { get; }"}</code> |  |
| <Link id="m-currenttime" /><code>{"float CurrentTime { get; }"}</code> |  |
| <Link id="m-dayduration" /><code>{"float DayDuration { get; }"}</code> |  |
| <Link id="m-daydurationminutes-2" /><code>{"float DayDurationMinutes { get; }"}</code> |  |
| <Link id="m-dayprogress-2" /><code>{"float DayProgress { get; }"}</code> |  |
| <Link id="m-daytonightratio-2" /><code>{"float DayToNightRatio { get; }"}</code> |  |
| <Link id="m-defaulttimeline" /><code><Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" DefaultTimeline { get; private set; }"}</code> |  |
| <Link id="m-isnight" /><code>{"static bool IsNight { get; private set; }"}</code> |  |
| <Link id="m-monthprogress-2" /><code>{"float MonthProgress { get; }"}</code> |  |
| <Link id="m-nightduration" /><code>{"float NightDuration { get; }"}</code> |  |
| <Link id="m-normalizedtimeline" /><code><Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" NormalizedTimeline { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-dawnreached" /><code>{"static event Action DawnReached"}</code> |  |
| <Link id="m-duskreached" /><code>{"static event Action DuskReached"}</code> |  |
| <Link id="m-nightchanged" /><code>{"static event Action<bool> NightChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getkeywords" /><code>{"string GetKeywords()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-rushtotime" /><code>{"void RushToTime(float time)"}</code> |  |
| <Link id="m-updatetimebykeyword" /><code>{"void UpdateTimeByKeyWord(string name)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-clientupdate" /><code>{"private float ClientUpdate(float dayDelta)"}</code> |  |
| <Link id="m-createtimeline" /><code>{"private void CreateTimeline(TimeSpan startTime)"}</code> |  |
| <Link id="m-getnormalizedtime" /><code>{"private TimeSpan GetNormalizedTime()"}</code> |  |
| <Link id="m-gettimefromtimeline" /><code>{"private float GetTimeFromTimeline("}<Link to="/game-api/types/assembly-other/timeline">{"Timeline"}</Link>{" timeline)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onnightchanged" /><code>{"private void OnNightChanged(bool wasNight)"}</code> |  |
| <Link id="m-serverupdate" /><code>{"private float ServerUpdate(float dayDelta)"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isForcingSnapping)"}</code> |  |
| <Link id="m-updatenormalizedtime" /><code>{"private void UpdateNormalizedTime()"}</code> |  |
| <Link id="m-updateprogressfromtimeline" /><code>{"private void UpdateProgressFromTimeline()"}</code> |  |
| <Link id="m-updatetimeline" /><code>{"private void UpdateTimeline(TimeSpan deltaTime)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GameTimeManager`:

[`DayTimeManager.gameTimeManager`](/game-api/types/alta-world/daytimemanager#m-gametimemanager), [`TimeScroller.timeManager`](/game-api/types/global-t-x/timescroller#m-timemanager).
