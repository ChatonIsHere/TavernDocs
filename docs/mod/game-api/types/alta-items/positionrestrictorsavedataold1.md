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
| <Link id="m-ctor" /><code>{"PositionRestrictorSaveDataOld1()"}</code> | Creates a `PositionRestrictorSaveDataOld1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"float radius"}</code> | Allowed radius. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Upgrades to `PositionRestrictorSaveData2` with just the radius set. |
