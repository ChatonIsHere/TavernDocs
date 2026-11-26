---
title: "RespawnOnDestroySaveData"
description: "Save data for RespawnOnDestroy: delay range, the object to respawn and any pending timer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnOnDestroySaveData

A **class** in `Root.Township`, the global namespace.

Save data for `RespawnOnDestroy`: delay range, the object to respawn and any pending timer.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NewSaveData<RespawnOnDestroy, RespawnOnDestroySaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RespawnOnDestroy`](/mod/game-api/types/global-q-r/respawnondestroy), [`RespawnOnDestroySaveData`](/mod/game-api/types/global-q-r/respawnondestroysavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnOnDestroySaveData()"}</code> | <span className="api-desc">Creates a `RespawnOnDestroySaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximumtimetorespawn" /><code>{"float maximumTimeToRespawn"}</code> | <span className="api-desc">Saved longest delay.</span> |
| <Link id="m-minimumtimetorespawn" /><code>{"float minimumTimeToRespawn"}</code> | <span className="api-desc">Saved shortest delay.</span> |
| <Link id="m-respawnobject" /><code><Link to="/mod/game-api/types/alta-world/savablesaveddynamicobject">{"SavableSavedDynamicObject"}</Link>{" respawnObject"}</code> | <span className="api-desc">Saved copy of the object to respawn.</span> |
| <Link id="m-respawntimer" /><code>{"TimeSpan respawnTimer"}</code> | <span className="api-desc">Time left on a pending respawn.</span> |
