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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`TextListElement`](/game-api/types/alta-menus/textlistelement)
- **Derived types** [`ListElementWithButtonAndExtraText`](/game-api/types/alta-menus/listelementwithbuttonandextratext), [`ListElementWithData<TData>`](/game-api/types/alta-menus/listelementwithdata-tdata), [`ListElementWith2Buttons`](/game-api/types/alta-menus/listelementwith2buttons), [`TeleportPointElement`](/game-api/types/global-t-x/teleportpointelement)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ListElementWithButton()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" button"}</code> | Backing field for `Button`, the button that selects this element. |
| <Link id="m-deselected" /><code>{"private UnityEvent deselected"}</code> | Inspector event invoked by `Deselect`. |
| <Link id="m-selected" /><code>{"private UnityEvent selected"}</code> | Inspector event invoked by `Select`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-button-2" /><code><Link to="/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" Button { get; }"}</code> | The entry's button. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deselected-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> Deselected"}</code> | Raised by `Deselect`. |
| <Link id="m-selected-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> Selected"}</code> | Raised by `Select`, including when the button is pressed. |

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
| <Link id="m-onpressed" /><code>{"private void OnPressed("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Handler for the button's `Pressed` event. Calls `Select`. |

</details>

## Used in

Members of other types that take, return or hold a `ListElementWithButton`:

[`FriendsInvitesPanel.listElement`](/game-api/types/alta-menus/friendsinvitespanel#m-listelement), [`FriendsListPanel.listElement`](/game-api/types/alta-menus/friendslistpanel#m-listelement), [`FriendsRequestsPanel.listElement`](/game-api/types/alta-menus/friendsrequestspanel#m-listelement), [`GroupMembersPage.ShowOptionsPopup`](/game-api/types/alta-menus/groupmemberspage#m-showoptionspopup), [`InboxPanel.dataMapping`](/game-api/types/alta-menus/inboxpanel#m-datamapping), [`InboxPanel.friendRequestElement`](/game-api/types/alta-menus/inboxpanel#m-friendrequestelement), [`InboxPanel.groupInviteElement`](/game-api/types/alta-menus/inboxpanel#m-groupinviteelement), [`InboxPanel.HandleSelectedElement`](/game-api/types/alta-menus/inboxpanel#m-handleselectedelement), [`InboxPanel.playerReportElement`](/game-api/types/alta-menus/inboxpanel#m-playerreportelement), [`InboxPanel.selected`](/game-api/types/alta-menus/inboxpanel#m-selected), [`InboxPanel.statusElement`](/game-api/types/alta-menus/inboxpanel#m-statuselement), [`InviteUserToGroupPanel.elementTemplate`](/game-api/types/alta-menus/inviteusertogrouppanel#m-elementtemplate), [`InviteUserToGroupViaFriendsPanel.elementTemplate`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-elementtemplate), [`InviteUserToGroupViaFriendsPanel.oculusUserTemplate`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-oculususertemplate), [`InviteUserToGroupViaFriendsPanel.SpawnAltaFriendButtons`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnaltafriendbuttons), [`InviteUserToGroupViaFriendsPanel.SpawnOculusFriendButtons`](/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnoculusfriendbuttons), [`OculusFriendsListPanel.listElement`](/game-api/types/alta-menus/oculusfriendslistpanel#m-listelement), [`OculusFriendsListPanel.oculusOnlyListElement`](/game-api/types/alta-menus/oculusfriendslistpanel#m-oculusonlylistelement), [`OutgoingGroupInvitesPage.listElement`](/game-api/types/alta-menus/outgoinggroupinvitespage#m-listelement), [`ReportsPanel.dataMapping`](/game-api/types/alta-menus/reportspanel#m-datamapping), [`ReportsPanel.HandleSelectedElement`](/game-api/types/alta-menus/reportspanel#m-handleselectedelement), [`ReportsPanel.playerReportElement`](/game-api/types/alta-menus/reportspanel#m-playerreportelement), [`ReportsPanel.selected`](/game-api/types/alta-menus/reportspanel#m-selected), [`RecentPlayersPage.OnPlayerSelected`](/game-api/types/alta-menus/recentplayerspage#m-onplayerselected), [`GymnasiumTeleportPointPage.OnTeleportPointSelected`](/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onteleportpointselected).
