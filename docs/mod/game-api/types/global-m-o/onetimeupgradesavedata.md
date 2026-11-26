---
title: "OneTimeUpgradeSaveData"
description: "Save format (version 1) for OneTimeUpgradeInteraction, holding the players who already took the upgrade."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeUpgradeSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save format (version 1) for `OneTimeUpgradeInteraction`, holding the players who already took the upgrade.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NewSaveData<OneTimeUpgradeInteraction, OneTimeUpgradeSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`OneTimeUpgradeInteraction`](/mod/game-api/types/global-m-o/onetimeupgradeinteraction), [`OneTimeUpgradeSaveData`](/mod/game-api/types/global-m-o/onetimeupgradesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OneTimeUpgradeSaveData()"}</code> | Creates an `OneTimeUpgradeSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-upgradedplayeridssaved" /><code>{"int[] upgradedPlayerIDsSaved"}</code> | User IDs of players who have used the upgrade. |
