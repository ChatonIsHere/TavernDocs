---
title: "ListElementWithData<TData>"
description: "abstract class ListElementWithData<TData> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListElementWithData&lt;TData&gt;

An **abstract class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ListElementWithButton`](/game-api/types/alta-menus/listelementwithbutton)
- **Derived types** [`GroupMemberListElement`](/game-api/types/alta-menus/groupmemberlistelement), [`JoinedGroupListElement`](/game-api/types/alta-menus/joinedgrouplistelement)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ListElementWithData()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-data" /><code>{"TData Data { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-setup" /><code>{"void Setup(TData data)"}</code> |
| <Link id="m-gettext" /><code>{"protected abstract string GetText(TData data)"}</code> |
| <Link id="m-onsetup" /><code>{"protected virtual void OnSetup(TData data)"}</code> |
