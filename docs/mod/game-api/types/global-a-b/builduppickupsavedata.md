---
title: "BuildupPickupSaveData"
description: "Save data for a BuildupPickup: which saved child goes in each of its build-up slots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupPickupSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `BuildupPickup`: which saved child goes in each of its build-up slots.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NewSaveData<BuildupPickup, BuildupPickupSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BuildupPickup`](/mod/game-api/types/global-a-b/builduppickup), [`BuildupPickupSaveData`](/mod/game-api/types/global-a-b/builduppickupsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildupPickupSaveData()"}</code> | <span className="api-desc">Creates a `BuildupPickupSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attachedindexes" /><code>{"int[] attachedIndexes"}</code> | <span className="api-desc">One entry per build-up slot: the saved child index of the attached piece, or -1 when the slot is empty.</span> |
