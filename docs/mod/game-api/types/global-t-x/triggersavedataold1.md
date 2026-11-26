---
title: "TriggerSaveDataOLD1"
description: "Old save data (version 1) for Trigger, migrated to TriggerSaveData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerSaveDataOLD1

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data (version 1) for `Trigger`, migrated to `TriggerSaveData`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerSaveDataOLD1()"}</code> | <span className="api-desc">Creates a `TriggerSaveDataOLD1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-togglesaved" /><code>{"bool toggleSaved"}</code> | <span className="api-desc">Saved `toggle` setting.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `TriggerSaveData`, keeping `toggle`; `syncWithSender` comes out false.</span> |
