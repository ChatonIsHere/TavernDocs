---
title: "EmptyHistory<T>"
description: "Undo history that stores nothing: pushes, undos and redos do nothing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyHistory&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Undo history that stores nothing: pushes, undos and redos do nothing. Use the shared `Instance` where no history is wanted.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`IHistoryManager<T>`](/mod/game-api/types/global-i-l/ihistorymanager-t), [`IHistoryManager`](/mod/game-api/types/global-i-l/ihistorymanager-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmptyHistory()"}</code> | <span className="api-desc">Creates an `EmptyHistory` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/emptyhistory-t">{"EmptyHistory"}</Link>{"<T> Instance { get; }"}</code> | <span className="api-desc">The shared instance for `T`.</span> |
| <Link id="m-ispushpossible" /><code>{"bool IsPushPossible { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | <span className="api-desc">Always false.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | <span className="api-desc">Never raised.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-push" /><code>{"void Push(T item)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | <span className="api-desc">Does nothing.</span> |
