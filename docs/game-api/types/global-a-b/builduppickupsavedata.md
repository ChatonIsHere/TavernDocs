---
title: "BuildupPickupSaveData"
description: "Save data for a BuildupPickup: which saved child goes in each of its build-up slots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupPickupSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `BuildupPickup`: which saved child goes in each of its build-up slots.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NewSaveData<BuildupPickup, BuildupPickupSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BuildupPickup`](/game-api/types/global-a-b/builduppickup), [`BuildupPickupSaveData`](/game-api/types/global-a-b/builduppickupsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BuildupPickupSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attachedindexes" /><code>{"int[] attachedIndexes"}</code> | One entry per build-up slot: the saved child index of the attached piece, or -1 when the slot is empty. |
