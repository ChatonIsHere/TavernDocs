---
title: "ListElementWithButton"
description: "A text list entry with a button."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListElementWithButton

A **class** in `Root.Township`, `Alta.Meta.UI`.

A text list entry with a button. Pressing the button selects it.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`TextListElement`](/mod/game-api/types/alta-menus/textlistelement)
- **Derived types** [`ListElementWithButtonAndExtraText`](/mod/game-api/types/alta-menus/listelementwithbuttonandextratext), [`ListElementWithData<TData>`](/mod/game-api/types/alta-menus/listelementwithdata-tdata), [`ListElementWith2Buttons`](/mod/game-api/types/alta-menus/listelementwith2buttons), [`TeleportPointElement`](/mod/game-api/types/global-t-x/teleportpointelement)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListElementWithButton()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" button"}</code> | Backing field for `Button`, the button that selects this element. |
| <Link id="m-deselected" /><code>{"private UnityEvent deselected"}</code> | Inspector event invoked by `Deselect`. |
| <Link id="m-selected" /><code>{"private UnityEvent selected"}</code> | Inspector event invoked by `Select`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-button-2" /><code><Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" Button { get; }"}</code> | The entry's button. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deselected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> Deselected"}</code> | Raised by `Deselect`. |
| <Link id="m-selected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> Selected"}</code> | Raised by `Select`, including when the button is pressed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deselect" /><code>{"void Deselect()"}</code> | Raises `Deselected` and the deselected Unity event. |
| <Link id="m-select" /><code>{"void Select()"}</code> | Raises `Selected` and the selected Unity event. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Hooks the button press to `Select`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpressed" /><code>{"private void OnPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Handler for the button's `Pressed` event. Calls `Select`. |

</details>

## Used in

Members of other types that take, return or hold a `ListElementWithButton`:

[`FriendsInvitesPanel.listElement`](/mod/game-api/types/alta-menus/friendsinvitespanel#m-listelement), [`FriendsListPanel.listElement`](/mod/game-api/types/alta-menus/friendslistpanel#m-listelement), [`FriendsRequestsPanel.listElement`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-listelement), [`GroupMembersPage.ShowOptionsPopup`](/mod/game-api/types/alta-menus/groupmemberspage#m-showoptionspopup), [`InboxPanel.dataMapping`](/mod/game-api/types/alta-menus/inboxpanel#m-datamapping), [`InboxPanel.friendRequestElement`](/mod/game-api/types/alta-menus/inboxpanel#m-friendrequestelement), [`InboxPanel.groupInviteElement`](/mod/game-api/types/alta-menus/inboxpanel#m-groupinviteelement), [`InboxPanel.HandleSelectedElement`](/mod/game-api/types/alta-menus/inboxpanel#m-handleselectedelement), [`InboxPanel.playerReportElement`](/mod/game-api/types/alta-menus/inboxpanel#m-playerreportelement), [`InboxPanel.selected`](/mod/game-api/types/alta-menus/inboxpanel#m-selected), [`InboxPanel.statusElement`](/mod/game-api/types/alta-menus/inboxpanel#m-statuselement), [`InviteUserToGroupPanel.elementTemplate`](/mod/game-api/types/alta-menus/inviteusertogrouppanel#m-elementtemplate), [`InviteUserToGroupViaFriendsPanel.elementTemplate`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-elementtemplate), [`InviteUserToGroupViaFriendsPanel.oculusUserTemplate`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-oculususertemplate), [`InviteUserToGroupViaFriendsPanel.SpawnAltaFriendButtons`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnaltafriendbuttons), [`InviteUserToGroupViaFriendsPanel.SpawnOculusFriendButtons`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnoculusfriendbuttons), [`OculusFriendsListPanel.listElement`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-listelement), [`OculusFriendsListPanel.oculusOnlyListElement`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-oculusonlylistelement), [`OutgoingGroupInvitesPage.listElement`](/mod/game-api/types/alta-menus/outgoinggroupinvitespage#m-listelement), [`ReportsPanel.dataMapping`](/mod/game-api/types/alta-menus/reportspanel#m-datamapping), [`ReportsPanel.HandleSelectedElement`](/mod/game-api/types/alta-menus/reportspanel#m-handleselectedelement), [`ReportsPanel.playerReportElement`](/mod/game-api/types/alta-menus/reportspanel#m-playerreportelement), [`ReportsPanel.selected`](/mod/game-api/types/alta-menus/reportspanel#m-selected), [`RecentPlayersPage.OnPlayerSelected`](/mod/game-api/types/alta-menus/recentplayerspage#m-onplayerselected), [`GymnasiumTeleportPointPage.OnTeleportPointSelected`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onteleportpointselected).
