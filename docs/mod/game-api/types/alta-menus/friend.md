---
title: "Friend"
description: "A friend entry: the user's ID and display name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Friend

A **struct** in `Root.Township`, `Alta.Meta.Friends`.

A friend entry: the user's ID and display name.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Friend(ulong userID, string userDisplayName)"}</code> | <span className="api-desc">Creates a `Friend` from `userID` and `userDisplayName`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayname" /><code>{"string DisplayName { get; }"}</code> | <span className="api-desc">The friend's display name.</span> |
| <Link id="m-id" /><code>{"ulong ID { get; }"}</code> | <span className="api-desc">The friend's user ID.</span> |

## Used in

Members of other types that take, return or hold a `Friend`:

<div className="api-used-in">

[`IPlatformFriendService.GetFriends`](/mod/game-api/types/alta-menus/iplatformfriendservice#m-getfriends), [`IPlatformFriendService.GetLinkedFriends`](/mod/game-api/types/alta-menus/iplatformfriendservice#m-getlinkedfriends), [`IPlatformFriendService.GetUnlinkedFriends`](/mod/game-api/types/alta-menus/iplatformfriendservice#m-getunlinkedfriends), [`InviteUserToGroupViaFriendsPanel.AddOculusUser`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-addoculususer), [`InviteUserToGroupViaFriendsPanel.FinishOculusInvite`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-finishoculusinvite), [`InviteUserToGroupViaFriendsPanel.InviteOculusFriendToGroup`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-inviteoculusfriendtogroup), [`InviteUserToGroupViaFriendsPanel.SpawnOculusFriendButtons`](/mod/game-api/types/alta-menus/inviteusertogroupviafriendspanel#m-spawnoculusfriendbuttons), [`OculusFriendsListPanel.InviteOculusUserToBeFriend`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-inviteoculususertobefriend), [`OculusFriendsListPanel.ShowOptionsForOculusFriend`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-showoptionsforoculusfriend).

</div>
