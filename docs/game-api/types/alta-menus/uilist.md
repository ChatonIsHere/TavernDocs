---
title: "UIList"
description: "Base for a list of elements in the game's world-space menus."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UIList

An **abstract class** in `Root.Township`, `Alta.Meta.UI`.

Base for a list of elements in the game's world-space menus. Subclasses decide how elements are laid out.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RopeUIList`](/game-api/types/alta-menus/ropeuilist), [`SimpleUIList`](/game-api/types/alta-menus/simpleuilist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected UIList()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"virtual float CurrentValue { get; set; }"}</code> | The list's current value, such as a scroll position. Meaning depends on the subclass. |
| <Link id="m-elements" /><code>{"List<"}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> Elements { get; }"}</code> | The elements in the list. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"abstract void AddElement("}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | Adds an element to the list. Implemented by each list type. |
| <Link id="m-clearlist" /><code>{"virtual void ClearList(bool isDestroyingElements = false)"}</code> | Empties the list, optionally destroying the element objects. |
| <Link id="m-completereset" /><code>{"virtual void CompleteReset(IEnumerable<"}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> newElements, bool isDestroyingElements = false)"}</code> | Clears the list and adds the given elements. |
| <Link id="m-removeelement" /><code>{"virtual void RemoveElement("}<Link to="/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | Removes an element from the list and destroys it. |

## Used in

Members of other types that take, return or hold a `UIList`:

[`FriendsInvitesPanel.uiList`](/game-api/types/alta-menus/friendsinvitespanel#m-uilist), [`FriendsListPanel.uiList`](/game-api/types/alta-menus/friendslistpanel#m-uilist), [`FriendsRequestsPanel.uiList`](/game-api/types/alta-menus/friendsrequestspanel#m-uilist), [`GroupMembersPage.uiList`](/game-api/types/alta-menus/groupmemberspage#m-uilist), [`InboxPanel.uiList`](/game-api/types/alta-menus/inboxpanel#m-uilist), [`IncomingGroupRequestPage.uiList`](/game-api/types/alta-menus/incominggrouprequestpage#m-uilist), [`InviteUserToGroupPanel.uiList`](/game-api/types/alta-menus/inviteusertogrouppanel#m-uilist), [`InviteUserToGroupViaFriendsPanel.uiList`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-uilist), [`JoinedGroupsList.uiList`](/game-api/types/alta-menus/joinedgroupslist#m-uilist), [`OculusFriendsListPanel.uiList`](/game-api/types/alta-menus/oculusfriendslistpanel#m-uilist), [`OutgoingGroupInvitesPage.uiList`](/game-api/types/alta-menus/outgoinggroupinvitespage#m-uilist), [`RecentPlayersListPanel.uiList`](/game-api/types/alta-menus/recentplayerslistpanel#m-uilist), [`ReportsPanel.uiList`](/game-api/types/alta-menus/reportspanel#m-uilist).
