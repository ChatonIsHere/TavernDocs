---
title: "EmptyHistory<T>"
description: "Undo history that stores nothing: pushes, undos and redos do nothing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyHistory&lt;T&gt;

A **class** in `Root.Township`, no namespace.

Undo history that stores nothing: pushes, undos and redos do nothing. Use the shared `Instance` where no history is wanted.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`IHistoryManager<T>`](/game-api/types/global-i-l/ihistorymanager-t), [`IHistoryManager`](/game-api/types/global-i-l/ihistorymanager-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmptyHistory()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-e-h/emptyhistory-t">{"EmptyHistory"}</Link>{"<T> Instance { get; }"}</code> | The shared instance for `T`. |
| <Link id="m-ispushpossible" /><code>{"bool IsPushPossible { get; }"}</code> | Always false. |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | Always false. |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | Always false. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | Never raised. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Does nothing. |
| <Link id="m-push" /><code>{"void Push(T item)"}</code> | Does nothing. |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | Does nothing. |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Does nothing. |
