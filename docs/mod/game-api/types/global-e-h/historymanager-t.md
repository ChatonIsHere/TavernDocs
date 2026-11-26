---
title: "HistoryManager<T>"
description: "Undo and redo history in a fixed size ring buffer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HistoryManager&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Undo and redo history in a fixed size ring buffer. The oldest action is released and dropped when it fills up.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`IHistoryManager<T>`](/mod/game-api/types/global-i-l/ihistorymanager-t), [`IHistoryManager`](/mod/game-api/types/global-i-l/ihistorymanager-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HistoryManager(int maxCount)"}</code> | <span className="api-desc">Creates a `HistoryManager` from `maxCount`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actions" /><code>{"private T[] actions"}</code> | <span className="api-desc">The ring buffer of actions.</span> |
| <Link id="m-firstindex" /><code>{"private int firstIndex"}</code> | <span className="api-desc">Slot of the oldest action.</span> |
| <Link id="m-ismodifying" /><code>{"private bool isModifying"}</code> | <span className="api-desc">True while an undo or redo is running.</span> |
| <Link id="m-lastindex" /><code>{"private int lastIndex"}</code> | <span className="api-desc">Slot after the newest action, the redo limit.</span> |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> | <span className="api-desc">Cursor: slot where the next action goes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ispushpossible" /><code>{"bool IsPushPossible { get; }"}</code> | <span className="api-desc">False while an undo or redo is running, so actions made by it aren't recorded.</span> |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | <span className="api-desc">True if there is an undone action to redo.</span> |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | <span className="api-desc">True if there is an action to undo.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | <span className="api-desc">Raised after an action is added.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Releases every stored action and empties the history.</span> |
| <Link id="m-push" /><code>{"void Push(T item)"}</code> | <span className="api-desc">Adds an action at the cursor, dropping any redo history; ignored during undo or redo.</span> |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | <span className="api-desc">Redoes the action at the cursor and moves forward.</span> |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | <span className="api-desc">Moves back and undoes that action.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-back" /><code>{"private void Back()"}</code> | <span className="api-desc">Moves the cursor back one slot, wrapping around.</span> |
| <Link id="m-forward" /><code>{"private void Forward()"}</code> | <span className="api-desc">Moves the cursor forward one slot, wrapping around.</span> |

</details>
