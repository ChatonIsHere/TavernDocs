---
title: "JoinedGroupListElement"
description: "Client list row for a group the player has joined, showing its name and an invite button."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JoinedGroupListElement

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client list row for a group the player has joined, showing its name and an invite button.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ListElementWithData<JoinedGroupManager>`](/game-api/types/alta-menus/listelementwithdata-tdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedGroupListElement()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invitebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" inviteButton"}</code> | Button that raises `InviteFriend`. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invitefriend" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> InviteFriend"}</code> | Raised when the row's invite button is pressed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettext" /><code>{"protected override string GetText("}<Link to="/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" data)"}</code> | Returns the group's name for the row label. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Hooks the invite button up to raise `InviteFriend`. |

## Used in

Members of other types that take, return or hold a `JoinedGroupListElement`:

[`JoinedGroupsList.elementTemplate`](/game-api/types/alta-menus/joinedgroupslist#m-elementtemplate).
