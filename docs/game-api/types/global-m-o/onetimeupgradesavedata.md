---
title: "OneTimeUpgradeSaveData"
description: "Save format (version 1) for OneTimeUpgradeInteraction, holding the players who already took the upgrade."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeUpgradeSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save format (version 1) for `OneTimeUpgradeInteraction`, holding the players who already took the upgrade.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NewSaveData<OneTimeUpgradeInteraction, OneTimeUpgradeSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`OneTimeUpgradeInteraction`](/game-api/types/global-m-o/onetimeupgradeinteraction), [`OneTimeUpgradeSaveData`](/game-api/types/global-m-o/onetimeupgradesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OneTimeUpgradeSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-upgradedplayeridssaved" /><code>{"int[] upgradedPlayerIDsSaved"}</code> | User IDs of players who have used the upgrade. |
