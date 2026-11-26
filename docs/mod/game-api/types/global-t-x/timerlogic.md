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
| <Link id="m-ctor" /><code>{"TimerLogic()"}</code> | <span className="api-desc">Creates a `TimerLogic` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeprogress" /><code>{"protected float activeProgress"}</code> | <span className="api-desc">Timer progress from 0 to 1.</span> |
| <Link id="m-timeralreadyactive" /><code>{"protected bool timerAlreadyActive"}</code> | <span className="api-desc">True while the timer runs.</span> |
| <Link id="m-timerresetswhenretriggered" /><code>{"protected bool timerResetsWhenRetriggered"}</code> | <span className="api-desc">Whether starting the timer again resets its progress.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeduration" /><code>{"private float activeDuration"}</code> | <span className="api-desc">Seconds the timer runs for once started. Saved.</span> |
| <Link id="m-activeonload" /><code>{"private bool activeOnLoad"}</code> | <span className="api-desc">When true, the timer starts as soon as it is loaded from save (in play mode).</span> |
| <Link id="m-timerover" /><code>{"private UnityEvent timerOver"}</code> | <span className="api-desc">Unity event invoked when the timer reaches the end.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-timertoggle" /><code>{"protected event "}<Link to="/mod/game-api/types/global-t-x/timerlogic-timeevent">{"TimerLogic.TimeEvent"}</Link>{" timerToggle"}</code> | <span className="api-desc">Raised with true when the timer starts and false when it ends.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-starttimer" /><code>{"void StartTimer()"}</code> | <span className="api-desc">Starts the timer. If it is already running, it restarts the progress when `timerResetsWhenRetriggered` is set.</span> |
| <Link id="m-waitactivetimer" /><code>{"protected IEnumerator WaitActiveTimer() (iterator)"}</code> | <span className="api-desc">The timer coroutine. Raises `timerToggle` at start and end, then fires the timer over event.</span> |
