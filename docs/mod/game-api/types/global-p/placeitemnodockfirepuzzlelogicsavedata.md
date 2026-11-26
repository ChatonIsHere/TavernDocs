---
title: "PlaceItemNoDockFirePuzzleLogicSaveData"
description: "Saved config for PlaceItemNoDockFirePuzzleLogic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockFirePuzzleLogicSaveData

A **class** in `Root.Township`, the global namespace.

Saved config for `PlaceItemNoDockFirePuzzleLogic`. The fire puzzle only checks for a lit fire, so its logic doesn't read these values.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlaceItemNoDockFirePuzzleLogic, PlaceItemNoDockFirePuzzleLogicSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlaceItemNoDockFirePuzzleLogic`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogic), [`PlaceItemNoDockFirePuzzleLogicSaveData`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata)
- **Nested types** [`Option`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata-option)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemNoDockFirePuzzleLogicSaveData()"}</code> | Creates a `PlaceItemNoDockFirePuzzleLogicSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyoutput" /><code>{"int emptyOutput"}</code> | Output value meant for when nothing is placed. |
| <Link id="m-invalidoutput" /><code>{"int invalidOutput"}</code> | Output value meant for a wrong item. Defaults to -1. |
| <Link id="m-options" /><code><Link to="/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata-option">{"PlaceItemNoDockFirePuzzleLogicSaveData.Option"}</Link>{"[] options"}</code> | The accepted options and their outputs. |

## Used in

Members of other types that take, return or hold a `PlaceItemNoDockFirePuzzleLogicSaveData`:

[`PlaceItemNoDockFirePuzzleLogic.config`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-config).
