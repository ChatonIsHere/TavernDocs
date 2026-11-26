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
| <Link id="m-ctor" /><code>{"PlaceItemNoDockFirePuzzleLogicSaveData()"}</code> | <span className="api-desc">Creates a `PlaceItemNoDockFirePuzzleLogicSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emptyoutput" /><code>{"int emptyOutput"}</code> | <span className="api-desc">Output value meant for when nothing is placed.</span> |
| <Link id="m-invalidoutput" /><code>{"int invalidOutput"}</code> | <span className="api-desc">Output value meant for a wrong item. Defaults to -1.</span> |
| <Link id="m-options" /><code><Link to="/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata-option">{"PlaceItemNoDockFirePuzzleLogicSaveData.Option"}</Link>{"[] options"}</code> | <span className="api-desc">The accepted options and their outputs.</span> |

## Used in

Members of other types that take, return or hold a `PlaceItemNoDockFirePuzzleLogicSaveData`:

<div className="api-used-in">

[`PlaceItemNoDockFirePuzzleLogic.config`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogic#m-config).

</div>
