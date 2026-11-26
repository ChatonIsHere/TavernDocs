---
title: "PlayerDetectSaveDataOld1"
description: "Old save data (version 1) for PlayerDetect, holding only a radius."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDetectSaveDataOld1

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data (version 1) for `PlayerDetect`, holding only a radius. Migrates to `PlayerDetectSaveData`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDetectSaveDataOld1()"}</code> | Creates a `PlayerDetectSaveDataOld1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-radiussaved" /><code>{"float radiusSaved"}</code> | Detection radius. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Returns a `PlayerDetectSaveData` with the same radius and default bounds settings. |
