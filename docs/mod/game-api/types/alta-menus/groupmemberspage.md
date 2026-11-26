---
title: "GroupMembersPage"
description: "Client menu page listing a group's members, with kick and ban options and an invite-by-username field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMembersPage

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

Client menu page listing a group's members, with kick and ban options and an invite-by-username field. A `GroupPage` in the server management UI.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/mod/game-api/types/alta-menus/grouppage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupMembersPage()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | <span className="api-desc">Analytics service used to report bans.</span> |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | <span className="api-desc">Text shown when the group has no members.</span> |
| <Link id="m-groupmemberlistelement" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/groupmemberlistelement">{"GroupMemberListElement"}</Link>{" groupMemberListElement"}</code> | <span className="api-desc">Prefab cloned for each member row.</span> |
| <Link id="m-invitefield" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" inviteField"}</code> | <span className="api-desc">Input field where the user types a username to invite.</span> |
| <Link id="m-invitespanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" invitesPanel"}</code> | <span className="api-desc">Outgoing invites panel, told to refresh after a new invite is sent.</span> |
| <Link id="m-toomanymemberstext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" tooManyMembersText"}</code> | <span className="api-desc">Text shown instead of the list when the group has more than 100 members.</span> |
| <Link id="m-uilist" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | <span className="api-desc">The list that holds the member rows.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">VContainer injection point that supplies the analytics service.</span> |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | <span className="api-desc">Hooks up the invite field and rebuilds the member list behind a loading screen.</span> |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> | <span className="api-desc">Clears and destroys the member list when the shown group changes.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-banmember" /><code>{"private void BanMember("}<Link to="/mod/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> | <span className="api-desc">Asks for confirmation, then bans the member from the group's first server through `SocialService` and sends an analytics event.</span> |
| <Link id="m-handleinvitepressed" /><code>{"private async void HandleInvitePressed("}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> | <span className="api-desc">Handler for the invite field's Submitted event; runs `InviteUser` with the typed name behind a loading screen.</span> |
| <Link id="m-inviteuser" /><code>{"private async Task InviteUser(string username)"}</code> | <span className="api-desc">Looks up a user by username through the API and adds a group invite for them, showing a popup with the result.</span> |
| <Link id="m-kickmember" /><code>{"private void KickMember("}<Link to="/mod/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> | <span className="api-desc">Asks for confirmation, then kicks the member with `KickMemberAsync` behind a loading screen.</span> |
| <Link id="m-kickmemberasync" /><code>{"private async Task KickMemberAsync("}<Link to="/mod/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> | <span className="api-desc">Kicks the member through the API and shows an error popup if it fails.</span> |
| <Link id="m-setupmemberslist" /><code>{"private async Task SetupMembersList()"}</code> | <span className="api-desc">Fetches all members and builds a list element for each. Shows a notice instead if the group has over 100 members.</span> |
| <Link id="m-showoptionspopup" /><code>{"private void ShowOptionsPopup("}<Link to="/mod/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" member)"}</code> | <span className="api-desc">Shows Kick and Ban options for the selected member, depending on the local player's group permissions.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GroupMembersPage`:

<div className="api-used-in">

[`SelectedGroupPanel.membersPage`](/mod/game-api/types/alta-menus/selectedgrouppanel#m-memberspage).

</div>
