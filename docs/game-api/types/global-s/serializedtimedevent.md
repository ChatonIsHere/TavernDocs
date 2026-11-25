---
title: "SerializedTimedEvent"
description: "class SerializedTimedEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedTimedEvent

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TimedEventSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimedEventSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TimedEventSaveData`](/game-api/types/global-t-x/timedeventsavedata)
- **Nested types** [`TimedEventSetup`](/game-api/types/global-s/serializedtimedevent-timedeventsetup), [`TimerData`](/game-api/types/global-s/serializedtimedevent-timerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedTimedEvent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allowrestartafterstop" /><code>{"private bool allowRestartAfterStop"}</code> |  |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> |  |
| <Link id="m-hasstarted" /><code>{"private bool hasStarted"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-setup" /><code>{"private "}<Link to="/game-api/types/global-s/serializedtimedevent-timedeventsetup">{"SerializedTimedEvent.TimedEventSetup"}</Link>{"[] setup"}</code> |  |
| <Link id="m-timers" /><code>{"private List<"}<Link to="/game-api/types/global-s/serializedtimedevent-timerdata">{"SerializedTimedEvent.TimerData"}</Link>{"> timers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-starttimers" /><code>{"void StartTimers()"}</code> |  |
| <Link id="m-stoptimers" /><code>{"void StopTimers()"}</code> |  |
