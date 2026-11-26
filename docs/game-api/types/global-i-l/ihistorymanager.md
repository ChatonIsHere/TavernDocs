---
title: "IHistoryManager"
description: "An undo and redo history."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHistoryManager

An **interface** in `Root.Township`, no namespace.

An undo and redo history. The cosmetics editor uses one for outfit changes.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`EmptyHistory<T>`](/game-api/types/global-e-h/emptyhistory-t), [`HistoryAccess`](/game-api/types/global-e-h/historyaccess), [`HistoryManager<T>`](/game-api/types/global-e-h/historymanager-t), [`IHistoryManager<T>`](/game-api/types/global-i-l/ihistorymanager-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | True if there is an undone action to redo. |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | True if there is an action to undo. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | Raised when a new action is added. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the history. |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | Redoes the last undone action. |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Undoes the last action. |

## Used in

Members of other types that take, return or hold a `IHistoryManager`:

[`CustomizationHistoryAccess.history`](/game-api/types/alta-customization/customizationhistoryaccess#m-history), [`CustomizationHistoryAccess.History`](/game-api/types/alta-customization/customizationhistoryaccess#m-history-2), [`CustomizationWrapper.History`](/game-api/types/alta-customization/customizationwrapper#m-history), [`ComponentHistoryAccess.history`](/game-api/types/global-c-d/componenthistoryaccess#m-history), [`ComponentHistoryAccess.History`](/game-api/types/global-c-d/componenthistoryaccess#m-history-2), [`HistoryAccess.History`](/game-api/types/global-e-h/historyaccess#m-history), [`IHasHistory.History`](/game-api/types/global-i-l/ihashistory#m-history).
