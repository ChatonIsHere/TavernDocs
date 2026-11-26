---
title: "RespawnOnDestroySaveData"
description: "Save data for RespawnOnDestroy: delay range, the object to respawn and any pending timer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnOnDestroySaveData

A **class** in `Root.Township`, no namespace.

Save data for `RespawnOnDestroy`: delay range, the object to respawn and any pending timer.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`NewSaveData<RespawnOnDestroy, RespawnOnDestroySaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RespawnOnDestroy`](/game-api/types/global-q-r/respawnondestroy), [`RespawnOnDestroySaveData`](/game-api/types/global-q-r/respawnondestroysavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnOnDestroySaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumtimetorespawn" /><code>{"float maximumTimeToRespawn"}</code> | Saved longest delay. |
| <Link id="m-minimumtimetorespawn" /><code>{"float minimumTimeToRespawn"}</code> | Saved shortest delay. |
| <Link id="m-respawnobject" /><code><Link to="/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{" respawnObject"}</code> | Saved copy of the object to respawn. |
| <Link id="m-respawntimer" /><code>{"TimeSpan respawnTimer"}</code> | Time left on a pending respawn. |
