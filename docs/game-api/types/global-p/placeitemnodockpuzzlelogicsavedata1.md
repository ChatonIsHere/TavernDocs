---
title: "PlaceItemNoDockPuzzleLogicSaveData1"
description: "Old save format (version 1) for PlaceItemNoDockPuzzleLogic, migrated on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockPuzzleLogicSaveData1

A **class** in `Root.Township`, no namespace.

Old save format (version 1) for `PlaceItemNoDockPuzzleLogic`, migrated on load.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemNoDockPuzzleLogicSaveData1()"}</code> | Creates a `PlaceItemNoDockPuzzleLogicSaveData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-correctitemssaved" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"[] correctItemsSaved"}</code> | Items that solved the puzzle in the old format. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current save data with one option holding the old correct items and output 1. |
