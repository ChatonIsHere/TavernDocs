---
title: "TriggerSaveDataOLD1"
description: "Old save data (version 1) for Trigger, migrated to TriggerSaveData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerSaveDataOLD1

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data (version 1) for `Trigger`, migrated to `TriggerSaveData`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TriggerSaveDataOLD1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-togglesaved" /><code>{"bool toggleSaved"}</code> | Saved `toggle` setting. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `TriggerSaveData`, keeping `toggle`; `syncWithSender` comes out false. |
