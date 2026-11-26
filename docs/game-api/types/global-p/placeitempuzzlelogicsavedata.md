---
title: "PlaceItemPuzzleLogicSaveData"
description: "Saved config for PlaceItemPuzzleLogic: which items give which output value, and the values for empty and wrong."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemPuzzleLogicSaveData

A **class** in `Root.Township`, no namespace.

Saved config for `PlaceItemPuzzleLogic`: which items give which output value, and the values for empty and wrong.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlaceItemPuzzleLogic, PlaceItemPuzzleLogicSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlaceItemPuzzleLogic`](/game-api/types/global-p/placeitempuzzlelogic), [`PlaceItemPuzzleLogicSaveData`](/game-api/types/global-p/placeitempuzzlelogicsavedata)
- **Nested types** [`Option`](/game-api/types/global-p/placeitempuzzlelogicsavedata-option)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemPuzzleLogicSaveData()"}</code> | Creates a `PlaceItemPuzzleLogicSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyoutput" /><code>{"int emptyOutput"}</code> | Value sent when the dock is empty. |
| <Link id="m-invalidoutput" /><code>{"int invalidOutput"}</code> | Value sent when the docked item matches no option. Defaults to -1. |
| <Link id="m-options" /><code><Link to="/game-api/types/global-p/placeitempuzzlelogicsavedata-option">{"PlaceItemPuzzleLogicSaveData.Option"}</Link>{"[] options"}</code> | The item groups the puzzle accepts, each with its output value. |

## Used in

Members of other types that take, return or hold a `PlaceItemPuzzleLogicSaveData`:

[`PlaceItemPuzzleLogic.config`](/game-api/types/global-p/placeitempuzzlelogic#m-config).
