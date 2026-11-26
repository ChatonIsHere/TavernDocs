---
title: "HistoryManager<T>"
description: "Undo and redo history in a fixed size ring buffer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HistoryManager&lt;T&gt;

A **class** in `Root.Township`, no namespace.

Undo and redo history in a fixed size ring buffer. The oldest action is released and dropped when it fills up.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`IHistoryManager<T>`](/game-api/types/global-i-l/ihistorymanager-t), [`IHistoryManager`](/game-api/types/global-i-l/ihistorymanager-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HistoryManager(int maxCount)"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private T[] actions"}</code> | The ring buffer of actions. |
| <Link id="m-firstindex" /><code>{"private int firstIndex"}</code> | Slot of the oldest action. |
| <Link id="m-ismodifying" /><code>{"private bool isModifying"}</code> | True while an undo or redo is running. |
| <Link id="m-lastindex" /><code>{"private int lastIndex"}</code> | Slot after the newest action, the redo limit. |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> | Cursor: slot where the next action goes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ispushpossible" /><code>{"bool IsPushPossible { get; }"}</code> | False while an undo or redo is running, so actions made by it aren't recorded. |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | True if there is an undone action to redo. |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | True if there is an action to undo. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | Raised after an action is added. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Releases every stored action and empties the history. |
| <Link id="m-push" /><code>{"void Push(T item)"}</code> | Adds an action at the cursor, dropping any redo history; ignored during undo or redo. |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | Redoes the action at the cursor and moves forward. |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Moves back and undoes that action. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-back" /><code>{"private void Back()"}</code> | Moves the cursor back one slot, wrapping around. |
| <Link id="m-forward" /><code>{"private void Forward()"}</code> | Moves the cursor forward one slot, wrapping around. |

</details>
