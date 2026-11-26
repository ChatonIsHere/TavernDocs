---
title: "TimerLogicSaveData1"
description: "Old save data (version 1) for TimerLogic, migrated to TimerLogicSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerLogicSaveData1

A **class** in `Root.Township`, no namespace.

Old save data (version 1) for `TimerLogic`, migrated to `TimerLogicSaveData` on load.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimerLogicSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activedurationsaved" /><code>{"float activeDurationSaved"}</code> | Saved timer duration in seconds. |
| <Link id="m-timerresetswhenretriggeredsaved" /><code>{"bool timerResetsWhenRetriggeredSaved"}</code> | Saved retrigger setting. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `TimerLogicSaveData`, copying duration and retrigger setting. `activeOnLoad` did not exist yet, so it comes out false. |
