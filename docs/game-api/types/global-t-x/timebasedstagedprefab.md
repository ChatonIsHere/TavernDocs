---
title: "TimeBasedStagedPrefab"
description: "class TimeBasedStagedPrefab in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeBasedStagedPrefab

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`StageBasedPrefab`](/game-api/types/global-s/stagebasedprefab), [`ISavable<TimeBasedStagedPrefabSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimeBasedStagedPrefabSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TimeBasedStagedPrefabSaveData`](/game-api/types/global-t-x/timebasedstagedprefabsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimeBasedStagedPrefab()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-restart" /><code>{"private bool restart"}</code> |
| <Link id="m-startedtime" /><code>{"private TimeSpan startedTime"}</code> |
| <Link id="m-timers" /><code>{"private List<"}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> timers"}</code> |
| <Link id="m-timessetup" /><code>{"private "}<Link to="/game-api/types/global-t-x/timedprefabstagedefinition">{"TimedPrefabStageDefinition"}</Link>{" timesSetup"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isrunning" /><code>{"bool IsRunning { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-starttimer" /><code>{"void StartTimer()"}</code> |
| <Link id="m-stoptimers" /><code>{"void StopTimers()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-deletetimers" /><code>{"private void DeleteTimers()"}</code> |
| <Link id="m-handletimereached" /><code>{"private Action HandleTimeReached(int setupIndex, int stageIndex)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-reachedfinalstage" /><code>{"private void ReachedFinalStage()"}</code> |

</details>
