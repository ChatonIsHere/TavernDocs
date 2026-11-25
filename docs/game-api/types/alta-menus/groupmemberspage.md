---
title: "GroupMembersPage"
description: "class GroupMembersPage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GroupMembersPage

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`GroupPage`](/game-api/types/alta-menus/grouppage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GroupMembersPage()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsservice" /><code>{"private "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService"}</code> |  |
| <Link id="m-emptylisttext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" emptyListText"}</code> |  |
| <Link id="m-groupmemberlistelement" /><code>{"private "}<Link to="/game-api/types/alta-menus/groupmemberlistelement">{"GroupMemberListElement"}</Link>{" groupMemberListElement"}</code> |  |
| <Link id="m-invitefield" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" inviteField"}</code> |  |
| <Link id="m-invitespanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panelcomponent">{"PanelComponent"}</Link>{" invitesPanel"}</code> |  |
| <Link id="m-toomanymemberstext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" tooManyMembersText"}</code> |  |
| <Link id="m-uilist" /><code>{"private "}<Link to="/game-api/types/alta-menus/uilist">{"UIList"}</Link>{" uiList"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |  |
| <Link id="m-refreshdata" /><code>{"override async void RefreshData()"}</code> |  |
| <Link id="m-banmember" /><code>{"private void BanMember("}<Link to="/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> |  |
| <Link id="m-handleinvitepressed" /><code>{"private async void HandleInvitePressed("}<Link to="/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" obj)"}</code> |  |
| <Link id="m-inviteuser" /><code>{"private async Task InviteUser(string username)"}</code> |  |
| <Link id="m-kickmember" /><code>{"private void KickMember("}<Link to="/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> |  |
| <Link id="m-kickmemberasync" /><code>{"private async Task KickMemberAsync("}<Link to="/game-api/types/assembly-api-client/groupmember">{"GroupMember"}</Link>{" member)"}</code> |  |
| <Link id="m-ongroupdatachange" /><code>{"protected override void OnGroupDataChange()"}</code> |  |
| <Link id="m-setupmemberslist" /><code>{"private async Task SetupMembersList()"}</code> |  |
| <Link id="m-showoptionspopup" /><code>{"private void ShowOptionsPopup("}<Link to="/game-api/types/alta-menus/listelementwithbutton">{"ListElementWithButton"}</Link>{" member)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GroupMembersPage`:

[`SelectedGroupPanel.membersPage`](/game-api/types/alta-menus/selectedgrouppanel#m-memberspage).
