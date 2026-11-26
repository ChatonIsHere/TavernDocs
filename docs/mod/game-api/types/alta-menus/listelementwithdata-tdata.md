---
title: "ListElementWithData<TData>"
description: "Base for a list row with a button that holds a data object and shows text made from it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListElementWithData&lt;TData&gt;

An **abstract class** in `Root.Township`, `Alta.Meta.UI`.

Base for a list row with a button that holds a data object and shows text made from it. Subclasses say how to turn the data into text.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ListElementWithButton`](/mod/game-api/types/alta-menus/listelementwithbutton)
- **Derived types** [`GroupMemberListElement`](/mod/game-api/types/alta-menus/groupmemberlistelement), [`JoinedGroupListElement`](/mod/game-api/types/alta-menus/joinedgrouplistelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ListElementWithData()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"TData Data { get; private set; }"}</code> | <span className="api-desc">The data this row shows, set by `Setup`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(TData data)"}</code> | <span className="api-desc">Stores the data and refreshes the row.</span> |
| <Link id="m-gettext" /><code>{"protected abstract string GetText(TData data)"}</code> | <span className="api-desc">Returns the text to show for the data.</span> |
| <Link id="m-onsetup" /><code>{"protected virtual void OnSetup(TData data)"}</code> | <span className="api-desc">Called by `Setup`; by default sets the row's text from `GetText`.</span> |
