---
title: "PlaceItemPuzzleLogicSaveData"
description: "Saved config for PlaceItemPuzzleLogic: which items give which output value, and the values for empty and wrong."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemPuzzleLogicSaveData

A **class** in `Root.Township`, the global namespace.

Saved config for `PlaceItemPuzzleLogic`: which items give which output value, and the values for empty and wrong.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlaceItemPuzzleLogic, PlaceItemPuzzleLogicSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlaceItemPuzzleLogic`](/mod/game-api/types/global-p/placeitempuzzlelogic), [`PlaceItemPuzzleLogicSaveData`](/mod/game-api/types/global-p/placeitempuzzlelogicsavedata)
- **Nested types** [`Option`](/mod/game-api/types/global-p/placeitempuzzlelogicsavedata-option)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemPuzzleLogicSaveData()"}</code> | <span className="api-desc">Creates a `PlaceItemPuzzleLogicSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyoutput" /><code>{"int emptyOutput"}</code> | <span className="api-desc">Value sent when the dock is empty.</span> |
| <Link id="m-invalidoutput" /><code>{"int invalidOutput"}</code> | <span className="api-desc">Value sent when the docked item matches no option. Defaults to -1.</span> |
| <Link id="m-options" /><code><Link to="/mod/game-api/types/global-p/placeitempuzzlelogicsavedata-option">{"PlaceItemPuzzleLogicSaveData.Option"}</Link>{"[] options"}</code> | <span className="api-desc">The item groups the puzzle accepts, each with its output value.</span> |

## Used in

Members of other types that take, return or hold a `PlaceItemPuzzleLogicSaveData`:

<div className="api-used-in">

[`PlaceItemPuzzleLogic.config`](/mod/game-api/types/global-p/placeitempuzzlelogic#m-config).

</div>
