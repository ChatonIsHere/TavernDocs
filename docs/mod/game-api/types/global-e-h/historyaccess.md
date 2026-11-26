---
title: "HistoryAccess"
description: "Component front for an undo and redo history, raising bool events when undo or redo becomes possible or not, for buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HistoryAccess

An **abstract class** in `Root.Township`, the global namespace.

Component front for an undo and redo history, raising bool events when undo or redo becomes possible or not, for buttons.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IHasHistory`](/mod/game-api/types/global-i-l/ihashistory), [`IHistoryManager`](/mod/game-api/types/global-i-l/ihistorymanager)
- **Derived types** [`CustomizationHistoryAccess`](/mod/game-api/types/alta-customization/customizationhistoryaccess), [`ComponentHistoryAccess`](/mod/game-api/types/global-c-d/componenthistoryaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HistoryAccess()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cacheredopossible" /><code>{"private bool cacheRedoPossible"}</code> | <span className="api-desc">Last known redo state.</span> |
| <Link id="m-cacheundopossible" /><code>{"private bool cacheUndoPossible"}</code> | <span className="api-desc">Last known undo state.</span> |
| <Link id="m-redopossiblechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" redoPossibleChanged"}</code> | <span className="api-desc">Event raised with whether redo is now possible.</span> |
| <Link id="m-undopossiblechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" undoPossibleChanged"}</code> | <span className="api-desc">Event raised with whether undo is now possible.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"abstract "}<Link to="/mod/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | <span className="api-desc">The history this component drives.</span> |
| <Link id="m-isredopossible" /><code>{"bool IsRedoPossible { get; }"}</code> | <span className="api-desc">Whether there is something to redo.</span> |
| <Link id="m-isundopossible" /><code>{"bool IsUndoPossible { get; }"}</code> | <span className="api-desc">Whether there is something to undo.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempushed" /><code>{"event Action ItemPushed"}</code> | <span className="api-desc">Raised when a new item is added to the history.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Clears the history.</span> |
| <Link id="m-redo" /><code>{"void Redo()"}</code> | <span className="api-desc">Redoes the last undone item.</span> |
| <Link id="m-undo" /><code>{"void Undo()"}</code> | <span className="api-desc">Undoes the last item.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Listens for new history items.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onitempushed" /><code>{"private void OnItemPushed()"}</code> | <span className="api-desc">Updates the undo and redo state and raises `ItemPushed` when the history gets a new action.</span> |
| <Link id="m-updatecache" /><code>{"private void UpdateCache()"}</code> | <span className="api-desc">Raises the undo and redo events when either becomes possible or impossible.</span> |

</details>
