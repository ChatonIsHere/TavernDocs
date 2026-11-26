---
title: "IHistoryManager"
description: "An undo and redo history."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHistoryManager

An **interface** in `Root.Township`, the global namespace.

An undo and redo history. The cosmetics editor uses one for outfit changes.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`EmptyHistory<T>`](/mod/game-api/types/global-e-h/emptyhistory-t), [`HistoryAccess`](/mod/game-api/types/global-e-h/historyaccess), [`HistoryManager<T>`](/mod/game-api/types/global-e-h/historymanager-t), [`IHistoryManager<T>`](/mod/game-api/types/global-i-l/ihistorymanager-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | <span className="api-desc">True if there is an undone action to redo.</span> |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | <span className="api-desc">True if there is an action to undo.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | <span className="api-desc">Raised when a new action is added.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the history.</span> |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | <span className="api-desc">Redoes the last undone action.</span> |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | <span className="api-desc">Undoes the last action.</span> |

## Used in

Members of other types that take, return or hold a `IHistoryManager`:

<div className="api-used-in">

[`CustomizationHistoryAccess.history`](/mod/game-api/types/alta-customization/customizationhistoryaccess#m-history), [`CustomizationHistoryAccess.History`](/mod/game-api/types/alta-customization/customizationhistoryaccess#m-history-2), [`CustomizationWrapper.History`](/mod/game-api/types/alta-customization/customizationwrapper#m-history), [`ComponentHistoryAccess.history`](/mod/game-api/types/global-c-d/componenthistoryaccess#m-history), [`ComponentHistoryAccess.History`](/mod/game-api/types/global-c-d/componenthistoryaccess#m-history-2), [`HistoryAccess.History`](/mod/game-api/types/global-e-h/historyaccess#m-history), [`IHasHistory.History`](/mod/game-api/types/global-i-l/ihashistory#m-history).

</div>
