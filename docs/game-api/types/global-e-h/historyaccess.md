---
title: "HistoryAccess"
description: "abstract class HistoryAccess in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HistoryAccess

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IHasHistory`](/game-api/types/global-i-l/ihashistory), [`IHistoryManager`](/game-api/types/global-i-l/ihistorymanager)
- **Derived types** [`CustomizationHistoryAccess`](/game-api/types/alta-customization/customizationhistoryaccess), [`ComponentHistoryAccess`](/game-api/types/global-c-d/componenthistoryaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HistoryAccess()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cacheredopossible" /><code>{"private bool cacheRedoPossible"}</code> |  |
| <Link id="m-cacheundopossible" /><code>{"private bool cacheUndoPossible"}</code> |  |
| <Link id="m-redopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" redoPossibleChanged"}</code> |  |
| <Link id="m-undopossiblechanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" undoPossibleChanged"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"abstract "}<Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> |  |
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
| <Link id="m-redo" /><code>{"void Redo()"}</code> |  |
| <Link id="m-undo" /><code>{"void Undo()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-onitempushed" /><code>{"private void OnItemPushed()"}</code> |  |
| <Link id="m-updatecache" /><code>{"private void UpdateCache()"}</code> |  |
