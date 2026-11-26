---
title: "TimeBasedStagedPrefab"
description: "Staged prefab that moves through its stages on a timer (from a TimedPrefabStageDefinition), using the server Timeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeBasedStagedPrefab

A **class** in `Root.Township`, the global namespace.

Staged prefab that moves through its stages on a timer (from a `TimedPrefabStageDefinition`), using the server `Timeline`. The timer state is saved so it picks up where it left off.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`StageBasedPrefab`](/mod/game-api/types/global-s/stagebasedprefab), [`ISavable<TimeBasedStagedPrefabSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimeBasedStagedPrefabSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TimeBasedStagedPrefabSaveData`](/mod/game-api/types/global-t-x/timebasedstagedprefabsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeBasedStagedPrefab()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> | <span className="api-desc">Start the timer when the server spawns it. Turned off after the final stage.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for start, stop and load debug messages.</span> |
| <Link id="m-restart" /><code>{"private bool restart"}</code> | <span className="api-desc">Inspector button that starts the timer.</span> |
| <Link id="m-startedtime" /><code>{"private TimeSpan startedTime"}</code> | <span className="api-desc">Timeline time the timer started. Not restored on load, so it saves as zero after a reload.</span> |
| <Link id="m-timers" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> timers"}</code> | <span className="api-desc">Scheduled timeline entries. Timers set up on load aren't added, so `StopTimers` can't cancel those.</span> |
| <Link id="m-timessetup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/timedprefabstagedefinition">{"TimedPrefabStageDefinition"}</Link>{" timesSetup"}</code> | <span className="api-desc">Definition with each stage's time since start.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> | <span className="api-desc">True while the stage timers are running.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts the timer if `autoStart` is on.</span> |
| <Link id="m-starttimer" /><code>{"void StartTimer()"}</code> | <span className="api-desc">Schedules a timeline callback for each stage time, if not already running.</span> |
| <Link id="m-stoptimers" /><code>{"void StopTimers()"}</code> | <span className="api-desc">Stops running and cancels the timers.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-deletetimers" /><code>{"private void DeleteTimers()"}</code> | <span className="api-desc">Cancels every timer in `timers` and clears the list.</span> |
| <Link id="m-handletimereached" /><code>{"private Action HandleTimeReached(int setupIndex, int stageIndex)"}</code> | <span className="api-desc">Makes the callback that moves to a stage, and runs the final stage handling after the last entry.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the timers.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: the restart button starts the timer.</span> |
| <Link id="m-reachedfinalstage" /><code>{"private void ReachedFinalStage()"}</code> | <span className="api-desc">Stops running and turns off auto start. If the definition says so, detaches the last stage's entity and destroys this one.</span> |

</details>
