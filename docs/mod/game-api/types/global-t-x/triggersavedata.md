---
title: "TriggerSaveData"
description: "Save data (version 2) for Trigger: its toggle and sync-with-sender settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for `Trigger`: its toggle and sync-with-sender settings.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<Trigger, TriggerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Trigger`](/mod/game-api/types/global-t-x/trigger), [`TriggerSaveData`](/mod/game-api/types/global-t-x/triggersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerSaveData()"}</code> | <span className="api-desc">Creates a `TriggerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-syncwithsendersaved" /><code>{"bool syncWithSenderSaved"}</code> | <span className="api-desc">Saved `syncWithSender`.</span> |
| <Link id="m-togglesaved" /><code>{"bool toggleSaved"}</code> | <span className="api-desc">Saved `toggle`.</span> |
