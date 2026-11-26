---
title: "TimeBasedStagedPrefab"
description: "Staged prefab that moves through its stages on a timer (from a TimedPrefabStageDefinition), using the server Timeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeBasedStagedPrefab

A **class** in `Root.Township`, no namespace.

Staged prefab that moves through its stages on a timer (from a `TimedPrefabStageDefinition`), using the server `Timeline`. The timer state is saved so it picks up where it left off.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`StageBasedPrefab`](/game-api/types/global-s/stagebasedprefab), [`ISavable<TimeBasedStagedPrefabSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimeBasedStagedPrefabSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TimeBasedStagedPrefabSaveData`](/game-api/types/global-t-x/timebasedstagedprefabsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeBasedStagedPrefab()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> | Start the timer when the server spawns it. Turned off after the final stage. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for start, stop and load debug messages. |
| <Link id="m-restart" /><code>{"private bool restart"}</code> | Inspector button that starts the timer. |
| <Link id="m-startedtime" /><code>{"private TimeSpan startedTime"}</code> | Timeline time the timer started. Not restored on load, so it saves as zero after a reload. |
| <Link id="m-timers" /><code>{"private List<"}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> timers"}</code> | Scheduled timeline entries. Timers set up on load aren't added, so `StopTimers` can't cancel those. |
| <Link id="m-timessetup" /><code>{"private "}<Link to="/game-api/types/global-t-x/timedprefabstagedefinition">{"TimedPrefabStageDefinition"}</Link>{" timesSetup"}</code> | Definition with each stage's time since start. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | True while the stage timers are running. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts the timer if `autoStart` is on. |
| <Link id="m-starttimer" /><code>{"void StartTimer()"}</code> | Schedules a timeline callback for each stage time, if not already running. |
| <Link id="m-stoptimers" /><code>{"void StopTimers()"}</code> | Stops running and cancels the timers. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deletetimers" /><code>{"private void DeleteTimers()"}</code> | Cancels every timer in `timers` and clears the list. |
| <Link id="m-handletimereached" /><code>{"private Action HandleTimeReached(int setupIndex, int stageIndex)"}</code> | Makes the callback that moves to a stage, and runs the final stage handling after the last entry. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the timers. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: the restart button starts the timer. |
| <Link id="m-reachedfinalstage" /><code>{"private void ReachedFinalStage()"}</code> | Stops running and turns off auto start. If the definition says so, detaches the last stage's entity and destroys this one. |

</details>
