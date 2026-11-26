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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TreeSpawnerSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-waittorespawn" /><code>{"float waitToRespawn"}</code> | Respawn wait in seconds. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current save data, turning the seconds value into a `TimeSpan`. |
