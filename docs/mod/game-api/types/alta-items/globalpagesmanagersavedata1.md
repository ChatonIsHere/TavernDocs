---
title: "GlobalPagesManagerSaveData1"
description: "Old version 1 save data for the GlobalPagesManager, kept so old saves can load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPagesManagerSaveData1

A **internal class** in `Root.Township`, `Alta.Pages`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old version 1 save data for the `GlobalPagesManager`, kept so old saves can load.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPagesManagerSaveData1()"}</code> | Creates a `GlobalPagesManagerSaveData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pages" /><code>{"uint[] pages"}</code> | Page hashes from the old save. Not carried over by `Migrate`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Upgrades to version 2 with empty page and provider lists, so the old saved pages are dropped. |
