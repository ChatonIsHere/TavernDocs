---
title: "TimerLogicSaveData"
description: "Save data (version 2) for TimerLogic: its duration and start and retrigger settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerLogicSaveData

A **class** in `Root.Township`, the global namespace.

Save data (version 2) for `TimerLogic`: its duration and start and retrigger settings.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<TimerLogic, TimerLogicSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`TimerLogic`](/mod/game-api/types/global-t-x/timerlogic), [`TimerLogicSaveData`](/mod/game-api/types/global-t-x/timerlogicsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerLogicSaveData()"}</code> | <span className="api-desc">Creates a `TimerLogicSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activedurationsaved" /><code>{"float activeDurationSaved"}</code> | <span className="api-desc">Saved `activeDuration`, in seconds.</span> |
| <Link id="m-activeonloadsaved" /><code>{"bool activeOnLoadSaved"}</code> | <span className="api-desc">Saved `activeOnLoad`: whether the timer starts on load.</span> |
| <Link id="m-timerresetswhenretriggeredsaved" /><code>{"bool timerResetsWhenRetriggeredSaved"}</code> | <span className="api-desc">Saved `timerResetsWhenRetriggered`: whether starting it again restarts the countdown.</span> |
