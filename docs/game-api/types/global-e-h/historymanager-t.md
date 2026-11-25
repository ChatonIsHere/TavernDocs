---
title: "HistoryManager<T>"
description: "class HistoryManager<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HistoryManager&lt;T&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`IHistoryManager<T>`](/game-api/types/global-i-l/ihistorymanager-t), [`IHistoryManager`](/game-api/types/global-i-l/ihistorymanager-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HistoryManager(int maxCount)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private T[] actions"}</code> |  |
| <Link id="m-firstindex" /><code>{"private int firstIndex"}</code> |  |
| <Link id="m-ismodifying" /><code>{"private bool isModifying"}</code> |  |
| <Link id="m-lastindex" /><code>{"private int lastIndex"}</code> |  |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ispushpossible" /><code>{"bool IsPushPossible { get; }"}</code> |  |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> |  |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-push" /><code>{"void Push(T item)"}</code> |  |
| <Link id="m-redo" /><code>{"void Redo()"}</code> |  |
| <Link id="m-undo" /><code>{"void Undo()"}</code> |  |
| <Link id="m-back" /><code>{"private void Back()"}</code> |  |
| <Link id="m-forward" /><code>{"private void Forward()"}</code> |  |
