---
title: "UIList"
description: "abstract class UIList in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UIList

An **abstract class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RopeUIList`](/game-api/types/alta-menus/ropeuilist), [`SimpleUIList`](/game-api/types/alta-menus/simpleuilist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected UIList()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"virtual float CurrentValue { get; set; }"}</code> |  |
| <Link id="m-elements" /><code>{"List<"}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> Elements { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"abstract void AddElement("}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> |  |
| <Link id="m-clearlist" /><code>{"virtual void ClearList(bool isDestroyingElements = false)"}</code> |  |
| <Link id="m-completereset" /><code>{"virtual void CompleteReset(IEnumerable<"}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> newElements, bool isDestroyingElements = false)"}</code> |  |
| <Link id="m-removeelement" /><code>{"virtual void RemoveElement("}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> |  |

## Used in

Members of other types that take, return or hold a `UIList`:

[`FriendsInvitesPanel.uiList`](/game-api/types/alta-menus/friendsinvitespanel#m-uilist), [`FriendsListPanel.uiList`](/game-api/types/alta-menus/friendslistpanel#m-uilist), [`FriendsRequestsPanel.uiList`](/game-api/types/alta-menus/friendsrequestspanel#m-uilist), [`GroupMembersPage.uiList`](/game-api/types/alta-menus/groupmemberspage#m-uilist), [`InboxPanel.uiList`](/game-api/types/alta-menus/inboxpanel#m-uilist), [`IncomingGroupRequestPage.uiList`](/game-api/types/alta-menus/incominggrouprequestpage#m-uilist), [`InviteUserToGroupPanel.uiList`](/game-api/types/alta-menus/inviteusertogrouppanel#m-uilist), [`InviteUserToGroupViaFriendsPanel.uiList`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-uilist), [`JoinedGroupsList.uiList`](/game-api/types/alta-menus/joinedgroupslist#m-uilist), [`OculusFriendsListPanel.uiList`](/game-api/types/alta-menus/oculusfriendslistpanel#m-uilist), [`OutgoingGroupInvitesPage.uiList`](/game-api/types/alta-menus/outgoinggroupinvitespage#m-uilist), [`RecentPlayersListPanel.uiList`](/game-api/types/alta-menus/recentplayerslistpanel#m-uilist), [`ReportsPanel.uiList`](/game-api/types/alta-menus/reportspanel#m-uilist).
