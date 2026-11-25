---
title: "HistoryAccess"
description: "Component front for an undo and redo history, raising bool events when undo or redo becomes possible or not, for buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HistoryAccess

An **abstract class** in `Root.Township`, no namespace.

Component front for an undo and redo history, raising bool events when undo or redo becomes possible or not, for buttons.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IHasHistory`](/game-api/types/global-i-l/ihashistory), [`IHistoryManager`](/game-api/types/global-i-l/ihistorymanager)
- **Derived types** [`CustomizationHistoryAccess`](/game-api/types/alta-customization/customizationhistoryaccess), [`ComponentHistoryAccess`](/game-api/types/global-c-d/componenthistoryaccess)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected HistoryAccess()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cacheredopossible" /><code>{"private bool cacheRedoPossible"}</code> |
| <Link id="m-cacheundopossible" /><code>{"private bool cacheUndoPossible"}</code> |
| <Link id="m-redopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" redoPossibleChanged"}</code> |
| <Link id="m-undopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" undoPossibleChanged"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"abstract "}<Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | The history this component drives. |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | Whether there is something to redo. |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | Whether there is something to undo. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | Raised when a new item is added to the history. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Clears the history. |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | Redoes the last undone item. |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | Undoes the last item. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Listens for new history items. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onitempushed" /><code>{"private void OnItemPushed()"}</code> |
| <Link id="m-updatecache" /><code>{"private void UpdateCache()"}</code> |

</details>
