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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/game-api/types/alta-menus/grouppage)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GroupMembersPage()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> | Analytics service used to report bans. |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> | Text shown when the group has no members. |
| <Link id="m-groupmemberlistelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/groupmemberlistelement">{"GroupMemberListElement"}</Link>{" groupMemberListElement"}</code> | Prefab cloned for each member row. |
| <Link id="m-invitefield" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" inviteField"}</code> | Input field where the user types a username to invite. |
| <Link id="m-invitespanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" invitesPanel"}</code> | Outgoing invites panel, told to refresh after a new invite is sent. |
| <Link id="m-toomanymemberstext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" tooManyMembersText"}</code> | Text shown instead of the list when the group has more than 100 members. |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> | The list that holds the member rows. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | VContainer injection point that supplies the analytics service. |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> | Hooks up the invite field and rebuilds the member list behind a loading screen. |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> | Clears and destroys the member list when the shown group changes. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-banmember" /><code>{"private void BanMember("}<Link to="/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> | Asks for confirmation, then bans the member from the group's first server through `SocialService` and sends an analytics event. |
| <Link id="m-handleinvitepressed" /><code>{"private async void HandleInvitePressed("}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> | Handler for the invite field's Submitted event; runs `InviteUser` with the typed name behind a loading screen. |
| <Link id="m-inviteuser" /><code>{"private async Task InviteUser(string username)"}</code> | Looks up a user by username through the API and adds a group invite for them, showing a popup with the result. |
| <Link id="m-kickmember" /><code>{"private void KickMember("}<Link to="/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> | Asks for confirmation, then kicks the member with `KickMemberAsync` behind a loading screen. |
| <Link id="m-kickmemberasync" /><code>{"private async Task KickMemberAsync("}<Link to="/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> | Kicks the member through the API and shows an error popup if it fails. |
| <Link id="m-setupmemberslist" /><code>{"private async Task SetupMembersList()"}</code> | Fetches all members and builds a list element for each. Shows a notice instead if the group has over 100 members. |
| <Link id="m-showoptionspopup" /><code>{"private void ShowOptionsPopup("}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" member)"}</code> | Shows Kick and Ban options for the selected member, depending on the local player's group permissions. |

</details>

## Used in

Members of other types that take, return or hold a `GroupMembersPage`:

[`SelectedGroupPanel.membersPage`](/game-api/types/alta-menus/selectedgrouppanel#m-memberspage).
