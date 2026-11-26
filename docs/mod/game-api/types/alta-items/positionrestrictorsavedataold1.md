---
title: "PositionRestrictorSaveDataOld1"
description: "Old version 1 save data for a PositionRestrictor, holding only a radius."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRestrictorSaveDataOld1

A **class** in `Root.Township`, `Alta.Pages`.

Old version 1 save data for a `PositionRestrictor`, holding only a radius.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRestrictorSaveDataOld1()"}</code> | <span className="api-desc">Creates a `PositionRestrictorSaveDataOld1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"float radius"}</code> | <span className="api-desc">Allowed radius.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Upgrades to `PositionRestrictorSaveData2` with just the radius set.</span> |
