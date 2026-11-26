---
title: "TimerLogicSaveData1"
description: "Old save data (version 1) for TimerLogic, migrated to TimerLogicSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerLogicSaveData1

A **class** in `Root.Township`, the global namespace.

Old save data (version 1) for `TimerLogic`, migrated to `TimerLogicSaveData` on load.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimerLogicSaveData1()"}</code> | <span className="api-desc">Creates a `TimerLogicSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activedurationsaved" /><code>{"float activeDurationSaved"}</code> | <span className="api-desc">Saved timer duration in seconds.</span> |
| <Link id="m-timerresetswhenretriggeredsaved" /><code>{"bool timerResetsWhenRetriggeredSaved"}</code> | <span className="api-desc">Saved retrigger setting.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `TimerLogicSaveData`, copying duration and retrigger setting. `activeOnLoad` did not exist yet, so it comes out false.</span> |
