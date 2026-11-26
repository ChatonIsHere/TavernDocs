---
title: "IHistoryManager<T>"
description: "Undo and redo history for one kind of action, such as the customization screen's."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHistoryManager&lt;T&gt;

An **interface** in `Root.Township`, the global namespace.

Undo and redo history for one kind of action, such as the customization screen's. Implemented by `HistoryManager<T>` and `EmptyHistory<T>`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`IHistoryManager`](/mod/game-api/types/global-i-l/ihistorymanager)
- **Derived types** [`EmptyHistory<T>`](/mod/game-api/types/global-e-h/emptyhistory-t), [`HistoryManager<T>`](/mod/game-api/types/global-e-h/historymanager-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ispushpossible" /><code>{"bool IsPushPossible { get; }"}</code> | <span className="api-desc">Whether a new action can be added now.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-push" /><code>{"void Push(T item)"}</code> | <span className="api-desc">Adds an action to the history.</span> |

## Used in

Members of other types that take, return or hold a `IHistoryManager&lt;T>`:

<div className="api-used-in">

[`CustomizationWrapper.historyManager`](/mod/game-api/types/alta-customization/customizationwrapper#m-historymanager), [`CustomizationWrapper.HistoryManager`](/mod/game-api/types/alta-customization/customizationwrapper#m-historymanager-2).

</div>
