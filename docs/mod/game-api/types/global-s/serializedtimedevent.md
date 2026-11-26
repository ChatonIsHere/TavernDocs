---
title: "SerializedTimedEvent"
description: "Server: fires a list of events after set delays using the Timeline, and saves pending timers so they survive a restart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedTimedEvent

A **class** in `Root.Township`, the global namespace.

Server: fires a list of events after set delays using the `Timeline`, and saves pending timers so they survive a restart.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TimedEventSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimedEventSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TimedEventSaveData`](/mod/game-api/types/global-t-x/timedeventsavedata)
- **Nested types** [`TimedEventSetup`](/mod/game-api/types/global-s/serializedtimedevent-timedeventsetup), [`TimerData`](/mod/game-api/types/global-s/serializedtimedevent-timerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedTimedEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowrestartafterstop" /><code>{"private bool allowRestartAfterStop"}</code> | Whether `StartTimers` works again after a stop. Default true. |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> | Starts the timers when the server initializes the entity. Default true. |
| <Link id="m-hasstarted" /><code>{"private bool hasStarted"}</code> | Whether the timers have been started. Saved. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-setup" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serializedtimedevent-timedeventsetup">{"SerializedTimedEvent.TimedEventSetup"}</Link>{"[] setup"}</code> | The delays and the event each one fires. |
| <Link id="m-timers" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/serializedtimedevent-timerdata">{"SerializedTimedEvent.TimerData"}</Link>{"> timers"}</code> | Pending `Timeline` entries and their setup index. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts the timers if `autoStart` is on and they haven't started. |
| <Link id="m-starttimers" /><code>{"void StartTimers()"}</code> | Schedules every set-up event on the `Timeline`. Does nothing if already started. |
| <Link id="m-stoptimers" /><code>{"void StopTimers()"}</code> | Cancels all pending timers. If `allowRestartAfterStop` is on, they can be started again. |
