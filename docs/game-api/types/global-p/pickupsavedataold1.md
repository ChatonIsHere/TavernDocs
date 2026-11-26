---
title: "PickupSaveDataOld1"
description: "Old save format (version 1) for Pickup, migrated to PickupSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupSaveDataOld1

A **class** in `Root.Township`, no namespace.

Old save format (version 1) for `Pickup`, migrated to `PickupSaveData` on load.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupSaveDataOld1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastinteractorplayerid" /><code>{"int lastInteractorPlayerId"}</code> | User ID of the last player who held the pickup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `PickupSaveData`, keeping the last holder and adding an empty two-entry `dockedMemory`. |
