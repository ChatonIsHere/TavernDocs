---
title: "PickupSaveDataOld1"
description: "Old save format (version 1) for Pickup, migrated to PickupSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupSaveDataOld1

A **class** in `Root.Township`, the global namespace.

Old save format (version 1) for `Pickup`, migrated to `PickupSaveData` on load.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupSaveDataOld1()"}</code> | <span className="api-desc">Creates a `PickupSaveDataOld1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastinteractorplayerid" /><code>{"int lastInteractorPlayerId"}</code> | <span className="api-desc">User ID of the last player who held the pickup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `PickupSaveData`, keeping the last holder and adding an empty two-entry `dockedMemory`.</span> |
