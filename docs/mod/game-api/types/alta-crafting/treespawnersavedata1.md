---
title: "TreeSpawnerSaveData1"
description: "Old version 1 save data for a TreeSpawner, migrated to TreeSpawnerSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeSpawnerSaveData1

A **class** in `Root.Township`, `Alta.Woodcutting`.

Old version 1 save data for a `TreeSpawner`, migrated to `TreeSpawnerSaveData` on load.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeSpawnerSaveData1()"}</code> | <span className="api-desc">Creates a `TreeSpawnerSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-waittorespawn" /><code>{"float waitToRespawn"}</code> | <span className="api-desc">Respawn wait in seconds.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the current save data, turning the seconds value into a `TimeSpan`.</span> |
