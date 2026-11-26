---
title: "PlaceItemNoDockPuzzleLogicSaveData"
description: "Saved config for PlaceItemNoDockPuzzleLogic: which items give which output value, and the values for empty and wrong."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaceItemNoDockPuzzleLogicSaveData

A **class** in `Root.Township`, the global namespace.

Saved config for `PlaceItemNoDockPuzzleLogic`: which items give which output value, and the values for empty and wrong.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlaceItemNoDockPuzzleLogic, PlaceItemNoDockPuzzleLogicSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlaceItemNoDockPuzzleLogic`](/mod/game-api/types/global-p/placeitemnodockpuzzlelogic), [`PlaceItemNoDockPuzzleLogicSaveData`](/mod/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata)
- **Nested types** [`Option`](/mod/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata-option)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaceItemNoDockPuzzleLogicSaveData()"}</code> | <span className="api-desc">Creates a `PlaceItemNoDockPuzzleLogicSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyoutput" /><code>{"int emptyOutput"}</code> | <span className="api-desc">Value sent when no item is present.</span> |
| <Link id="m-invalidoutput" /><code>{"int invalidOutput"}</code> | <span className="api-desc">Value sent when an item matches no option. Defaults to -1.</span> |
| <Link id="m-options" /><code><Link to="/mod/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata-option">{"PlaceItemNoDockPuzzleLogicSaveData.Option"}</Link>{"[] options"}</code> | <span className="api-desc">The item groups the puzzle accepts, each with its output value.</span> |

## Used in

Members of other types that take, return or hold a `PlaceItemNoDockPuzzleLogicSaveData`:

<div className="api-used-in">

[`PlaceItemNoDockPuzzleLogic.config`](/mod/game-api/types/global-p/placeitemnodockpuzzlelogic#m-config).

</div>
