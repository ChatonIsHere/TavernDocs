---
title: "CookableSaveData"
description: "Save data for a Cookable (version 1): how far it has cooked and burnt."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableSaveData

A **internal class** in `Root.Township`, `Alta.Cooking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `Cookable` (version 1): how far it has cooked and burnt.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<Cookable, CookableSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Cookable`](/game-api/types/alta-crafting/cookable), [`CookableSaveData`](/game-api/types/alta-crafting/cookablesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableSaveData()"}</code> | Creates a `CookableSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-burntprogress" /><code>{"float burntProgress"}</code> | Saved burn progress. |
| <Link id="m-cookedprogress" /><code>{"float cookedProgress"}</code> | Saved cooking progress. |
