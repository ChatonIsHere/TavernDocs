---
title: "TimerLogicSaveData"
description: "Save data (version 2) for TimerLogic: its duration and start and retrigger settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerLogicSaveData

A **class** in `Root.Township`, no namespace.

Save data (version 2) for `TimerLogic`: its duration and start and retrigger settings.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<TimerLogic, TimerLogicSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TimerLogic`](/game-api/types/global-t-x/timerlogic), [`TimerLogicSaveData`](/game-api/types/global-t-x/timerlogicsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerLogicSaveData()"}</code> | Creates a `TimerLogicSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activedurationsaved" /><code>{"float activeDurationSaved"}</code> | Saved `activeDuration`, in seconds. |
| <Link id="m-activeonloadsaved" /><code>{"bool activeOnLoadSaved"}</code> | Saved `activeOnLoad`: whether the timer starts on load. |
| <Link id="m-timerresetswhenretriggeredsaved" /><code>{"bool timerResetsWhenRetriggeredSaved"}</code> | Saved `timerResetsWhenRetriggered`: whether starting it again restarts the countdown. |
