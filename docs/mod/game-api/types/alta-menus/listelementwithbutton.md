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
| <Link id="m-ctor" /><code>{"ListElementWithButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-button" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" button"}</code> | <span className="api-desc">Backing field for `Button`, the button that selects this element.</span> |
| <Link id="m-deselected" /><code>{"private UnityEvent deselected"}</code> | <span className="api-desc">Inspector event invoked by `Deselect`.</span> |
| <Link id="m-selected" /><code>{"private UnityEvent selected"}</code> | <span className="api-desc">Inspector event invoked by `Select`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-button-2" /><code><Link to="/mod/game-api/types/alta-menus/buttonwithevents">{"ButtonWithEvents"}</Link>{" Button { get; }"}</code> | <span className="api-desc">The entry's button.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deselected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> Deselected"}</code> | <span className="api-desc">Raised by `Deselect`.</span> |
| <Link id="m-selected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{"> Selected"}</code> | <span className="api-desc">Raised by `Select`, including when the button is pressed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deselect" /><code>{"void Deselect()"}</code> | <span className="api-desc">Raises `Deselected` and the deselected Unity event.</span> |
| <Link id="m-select" /><code>{"void Select()"}</code> | <span className="api-desc">Raises `Selected` and the selected Unity event.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Hooks the button press to `Select`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpressed" /><code>{"private void OnPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Handler for the button's `Pressed` event. Calls `Select`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ListElementWithButton`:

<div className="api-used-in">

[`FriendsInvitesPanel.listElement`](/mod/game-api/types/alta-menus/friendsinvitespanel#m-listelement), [`FriendsListPanel.listElement`](/mod/game-api/types/alta-menus/friendslistpanel#m-listelement), [`FriendsRequestsPanel.listElement`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-listelement), [`GroupMembersPage.ShowOptionsPopup`](/mod/game-api/types/alta-menus/groupmemberspage#m-showoptionspopup), [`InboxPanel.dataMapping`](/mod/game-api/types/alta-menus/inboxpanel#m-datamapping), [`InboxPanel.friendRequestElement`](/mod/game-api/types/alta-menus/inboxpanel#m-friendrequestelement), [`InboxPanel.groupInviteElement`](/mod/game-api/types/alta-menus/inboxpanel#m-groupinviteelement), [`InboxPanel.HandleSelectedElement`](/mod/game-api/types/alta-menus/inboxpanel#m-handleselectedelement), [`InboxPanel.playerReportElement`](/mod/game-api/types/alta-menus/inboxpanel#m-playerreportelement), [`InboxPanel.selected`](/mod/game-api/types/alta-menus/inboxpanel#m-selected), [`InboxPanel.statusElement`](/mod/game-api/types/alta-menus/inboxpanel#m-statuselement), [`InviteUserToGroupPanel.elementTemplate`](/mod/game-api/types/alta-menus/inviteusertogrouppanel#m-elementtemplate), [`InviteUserToGroupViaFriendsPanel.elementTemplate`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-elementtemplate), [`InviteUserToGroupViaFriendsPanel.oculusUserTemplate`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-oculususertemplate), [`InviteUserToGroupViaFriendsPanel.SpawnAltaFriendButtons`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnaltafriendbuttons), [`InviteUserToGroupViaFriendsPanel.SpawnOculusFriendButtons`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnoculusfriendbuttons), [`OculusFriendsListPanel.listElement`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-listelement), [`OculusFriendsListPanel.oculusOnlyListElement`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-oculusonlylistelement), [`OutgoingGroupInvitesPage.listElement`](/mod/game-api/types/alta-menus/outgoinggroupinvitespage#m-listelement), [`ReportsPanel.dataMapping`](/mod/game-api/types/alta-menus/reportspanel#m-datamapping), [`ReportsPanel.HandleSelectedElement`](/mod/game-api/types/alta-menus/reportspanel#m-handleselectedelement), [`ReportsPanel.playerReportElement`](/mod/game-api/types/alta-menus/reportspanel#m-playerreportelement), [`ReportsPanel.selected`](/mod/game-api/types/alta-menus/reportspanel#m-selected), [`RecentPlayersPage.OnPlayerSelected`](/mod/game-api/types/alta-menus/recentplayerspage#m-onplayerselected), [`GymnasiumTeleportPointPage.OnTeleportPointSelected`](/mod/game-api/types/game-other-namespaces/gymnasiumteleportpointpage#m-onteleportpointselected).

</div>
