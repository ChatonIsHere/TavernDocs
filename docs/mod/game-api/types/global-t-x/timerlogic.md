---
title: "TimerLogic"
description: "Saved component that runs a timer for a set duration and fires an event when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerLogic

A **class** in `Root.Township`, the global namespace.

Saved component that runs a timer for a set duration and fires an event when it ends. Base for `ImpactDetectionLogic`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TimerLogicSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimerLogicSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ImpactDetectionLogic`](/mod/game-api/types/global-i-l/impactdetectionlogic), [`TimerLogicSaveData`](/mod/game-api/types/global-t-x/timerlogicsavedata)
- **Nested types** [`TimeEvent`](/mod/game-api/types/global-t-x/timerlogic-timeevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerLogic()"}</code> | Creates a `TimerLogic` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeprogress" /><code>{"protected float activeProgress"}</code> | Timer progress from 0 to 1. |
| <Link id="m-timeralreadyactive" /><code>{"protected bool timerAlreadyActive"}</code> | True while the timer runs. |
| <Link id="m-timerresetswhenretriggered" /><code>{"protected bool timerResetsWhenRetriggered"}</code> | Whether starting the timer again resets its progress. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeduration" /><code>{"private float activeDuration"}</code> | Seconds the timer runs for once started. Saved. |
| <Link id="m-activeonload" /><code>{"private bool activeOnLoad"}</code> | When true, the timer starts as soon as it is loaded from save (in play mode). |
| <Link id="m-timerover" /><code>{"private UnityEvent timerOver"}</code> | Unity event invoked when the timer reaches the end. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-timertoggle" /><code>{"protected event "}<Link to="/mod/game-api/types/global-t-x/timerlogic-timeevent">{"TimerLogic.TimeEvent"}</Link>{" timerToggle"}</code> | Raised with true when the timer starts and false when it ends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-starttimer" /><code>{"void StartTimer()"}</code> | Starts the timer. If it is already running, it restarts the progress when `timerResetsWhenRetriggered` is set. |
| <Link id="m-waitactivetimer" /><code>{"protected IEnumerator WaitActiveTimer() (iterator)"}</code> | The timer coroutine. Raises `timerToggle` at start and end, then fires the timer over event. |
