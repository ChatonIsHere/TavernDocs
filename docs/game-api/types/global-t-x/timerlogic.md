---
title: "TimerLogic"
description: "class TimerLogic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerLogic

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<TimerLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimerLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ImpactDetectionLogic`](/game-api/types/global-i-l/impactdetectionlogic), [`TimerLogicSaveData`](/game-api/types/global-t-x/timerlogicsavedata)
- **Nested types** [`TimeEvent`](/game-api/types/global-t-x/timerlogic-timeevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerLogic()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeduration" /><code>{"private float activeDuration"}</code> |  |
| <Link id="m-activeonload" /><code>{"private bool activeOnLoad"}</code> |  |
| <Link id="m-activeprogress" /><code>{"protected float activeProgress"}</code> |  |
| <Link id="m-timeralreadyactive" /><code>{"protected bool timerAlreadyActive"}</code> |  |
| <Link id="m-timerover" /><code>{"private UnityEvent timerOver"}</code> |  |
| <Link id="m-timerresetswhenretriggered" /><code>{"protected bool timerResetsWhenRetriggered"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-timertoggle" /><code>{"protected event "}<Link to="/game-api/types/global-t-x/timerlogic-timeevent">{"TimerLogic.TimeEvent"}</Link>{" timerToggle"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-starttimer" /><code>{"void StartTimer()"}</code> |  |
| <Link id="m-waitactivetimer" /><code>{"protected IEnumerator WaitActiveTimer() (iterator)"}</code> |  |
