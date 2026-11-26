---
title: "GroupMemberListElement"
description: "Row in a group's member list, showing the member's username."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMemberListElement

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Row in a group's member list, showing the member's username.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ListElementWithData<GroupMember>`](/mod/game-api/types/alta-menus/listelementwithdata-tdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupMemberListElement()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettext" /><code>{"protected override string GetText("}<Link to="/mod/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" data)"}</code> | Returns the member's username. |

## Used in

Members of other types that take, return or hold a `GroupMemberListElement`:

[`GroupMembersPage.groupMemberListElement`](/mod/game-api/types/alta-menus/groupmemberspage#m-groupmemberlistelement).
