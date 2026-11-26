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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ListElementWithData<JoinedGroupManager>`](/mod/game-api/types/alta-menus/listelementwithdata-tdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JoinedGroupListElement()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invitebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" inviteButton"}</code> | <span className="api-desc">Button that raises `InviteFriend`.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invitefriend" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> InviteFriend"}</code> | <span className="api-desc">Raised when the row's invite button is pressed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettext" /><code>{"protected override string GetText("}<Link to="/mod/game-api/types/assembly-api-client/joinedgroupmanager">{"JoinedGroupManager"}</Link>{" data)"}</code> | <span className="api-desc">Returns the group's name for the row label.</span> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | <span className="api-desc">Hooks the invite button up to raise `InviteFriend`.</span> |

## Used in

Members of other types that take, return or hold a `JoinedGroupListElement`:

<div className="api-used-in">

[`JoinedGroupsList.elementTemplate`](/mod/game-api/types/alta-menus/joinedgroupslist#m-elementtemplate).

</div>
