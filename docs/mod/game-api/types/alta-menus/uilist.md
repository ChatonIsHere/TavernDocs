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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RopeUIList`](/mod/game-api/types/alta-menus/ropeuilist), [`SimpleUIList`](/mod/game-api/types/alta-menus/simpleuilist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected UIList()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"virtual float CurrentValue { get; set; }"}</code> | <span className="api-desc">The list's current value, such as a scroll position. Meaning depends on the subclass.</span> |
| <Link id="m-elements" /><code>{"List<"}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> Elements { get; }"}</code> | <span className="api-desc">The elements in the list.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addelement" /><code>{"abstract void AddElement("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | <span className="api-desc">Adds an element to the list. Implemented by each list type.</span> |
| <Link id="m-clearlist" /><code>{"virtual void ClearList(bool isDestroyingElements = false)"}</code> | <span className="api-desc">Empties the list, optionally destroying the element objects.</span> |
| <Link id="m-completereset" /><code>{"virtual void CompleteReset(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{"> newElements, bool isDestroyingElements = false)"}</code> | <span className="api-desc">Clears the list and adds the given elements.</span> |
| <Link id="m-removeelement" /><code>{"virtual void RemoveElement("}<Link to="/mod/game-api/types/alta-menus/listelement">{"ListElement"}</Link>{" element)"}</code> | <span className="api-desc">Removes an element from the list and destroys it.</span> |

## Used in

Members of other types that take, return or hold a `UIList`:

<div className="api-used-in">

[`FriendsInvitesPanel.uiList`](/mod/game-api/types/alta-menus/friendsinvitespanel#m-uilist), [`FriendsListPanel.uiList`](/mod/game-api/types/alta-menus/friendslistpanel#m-uilist), [`FriendsRequestsPanel.uiList`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-uilist), [`GroupMembersPage.uiList`](/mod/game-api/types/alta-menus/groupmemberspage#m-uilist), [`InboxPanel.uiList`](/mod/game-api/types/alta-menus/inboxpanel#m-uilist), [`IncomingGroupRequestPage.uiList`](/mod/game-api/types/alta-menus/incominggrouprequestpage#m-uilist), [`InviteUserToGroupPanel.uiList`](/mod/game-api/types/alta-menus/inviteusertogrouppanel#m-uilist), [`InviteUserToGroupViaFriendsPanel.uiList`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-uilist), [`JoinedGroupsList.uiList`](/mod/game-api/types/alta-menus/joinedgroupslist#m-uilist), [`OculusFriendsListPanel.uiList`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-uilist), [`OutgoingGroupInvitesPage.uiList`](/mod/game-api/types/alta-menus/outgoinggroupinvitespage#m-uilist), [`RecentPlayersListPanel.uiList`](/mod/game-api/types/alta-menus/recentplayerslistpanel#m-uilist), [`ReportsPanel.uiList`](/mod/game-api/types/alta-menus/reportspanel#m-uilist).

</div>
