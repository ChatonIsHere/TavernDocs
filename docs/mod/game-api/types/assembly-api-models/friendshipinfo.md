---
title: "FriendshipInfo"
description: "A user returned by the Alta web API's friends endpoints, with when the friendship started and its state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendshipInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A user returned by the Alta web API's friends endpoints, with when the friendship started and its state.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`UserInfo`](/mod/game-api/types/assembly-api-models/userinfo)
- **Derived types** [`OculusFriendInfo`](/mod/game-api/types/assembly-api-models/oculusfriendinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendshipInfo()"}</code> | <span className="api-desc">Creates a `FriendshipInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | <span className="api-desc">When the friendship (or request) was created.</span> |
| <Link id="m-iconindex" /><code>{"int IconIndex { get; set; }"}</code> | <span className="api-desc">The user's chosen profile icon, as an index.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">The state of the friendship, such as a pending request or an accepted friend.</span> |

## Used in

Members of other types that take, return or hold a `FriendshipInfo`:

<div className="api-used-in">

[`ISocialClient.GetFriendRequests`](/mod/game-api/types/assembly-api-client/isocialclient#m-getfriendrequests), [`ISocialClient.GetFriends`](/mod/game-api/types/assembly-api-client/isocialclient#m-getfriends), [`ISocialClient.GetFriendsForUser`](/mod/game-api/types/assembly-api-client/isocialclient#m-getfriendsforuser), [`ISocialClient.GetFriendship`](/mod/game-api/types/assembly-api-client/isocialclient#m-getfriendship), [`ISocialClient.GetSentFriendRequests`](/mod/game-api/types/assembly-api-client/isocialclient#m-getsentfriendrequests), [`OfflineSocialClient.GetFriendRequests`](/mod/game-api/types/assembly-api-client/offlinesocialclient#m-getfriendrequests), [`OfflineSocialClient.GetFriends`](/mod/game-api/types/assembly-api-client/offlinesocialclient#m-getfriends), [`OfflineSocialClient.GetFriendsForUser`](/mod/game-api/types/assembly-api-client/offlinesocialclient#m-getfriendsforuser), [`OfflineSocialClient.GetFriendship`](/mod/game-api/types/assembly-api-client/offlinesocialclient#m-getfriendship), [`OfflineSocialClient.GetSentFriendRequests`](/mod/game-api/types/assembly-api-client/offlinesocialclient#m-getsentfriendrequests), [`SocialClient.GetFriendRequests`](/mod/game-api/types/assembly-api-client/socialclient#m-getfriendrequests), [`SocialClient.GetFriends`](/mod/game-api/types/assembly-api-client/socialclient#m-getfriends), [`SocialClient.GetFriendsForUser`](/mod/game-api/types/assembly-api-client/socialclient#m-getfriendsforuser), [`SocialClient.GetFriendship`](/mod/game-api/types/assembly-api-client/socialclient#m-getfriendship), [`SocialClient.GetSentFriendRequests`](/mod/game-api/types/assembly-api-client/socialclient#m-getsentfriendrequests), [`LowLevelApiClient.GetFriendRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequests), [`LowLevelApiClient.GetFriends`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriends), [`LowLevelApiClient.GetFriendsForUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuser), [`LowLevelApiClient.GetFriendship`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendship), [`LowLevelApiClient.GetSentFriendRequests`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequests), [`FriendRequestResult.Friendship`](/mod/game-api/types/assembly-api-models/friendrequestresult#m-friendship), [`FriendRequestResult.ReverseFriendship`](/mod/game-api/types/assembly-api-models/friendrequestresult#m-reversefriendship), [`FriendsManager.friendships`](/mod/game-api/types/alta-menus/friendsmanager#m-friendships), [`FriendsManager.Friendships`](/mod/game-api/types/alta-menus/friendsmanager#m-friendships-2), [`FriendsManager.friendshipsRequests`](/mod/game-api/types/alta-menus/friendsmanager#m-friendshipsrequests), [`FriendRequestNotification.friendRequest`](/mod/game-api/types/alta-menus/friendrequestnotification#m-friendrequest), [`FriendRequestNotification.FriendRequestNotification`](/mod/game-api/types/alta-menus/friendrequestnotification#m-ctor), [`FriendsInvitesPanel.Revoke`](/mod/game-api/types/alta-menus/friendsinvitespanel#m-revoke), [`FriendsInvitesPanel.ShowOptionsForFriend`](/mod/game-api/types/alta-menus/friendsinvitespanel#m-showoptionsforfriend), [`FriendsListPanel.RemoveFriend`](/mod/game-api/types/alta-menus/friendslistpanel#m-removefriend), [`FriendsListPanel.ShowInviteWindow`](/mod/game-api/types/alta-menus/friendslistpanel#m-showinvitewindow), [`FriendsListPanel.ShowOptionsForFriend`](/mod/game-api/types/alta-menus/friendslistpanel#m-showoptionsforfriend), [`FriendsRequestsPanel.AcceptFriendRequest`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-acceptfriendrequest), [`FriendsRequestsPanel.RejectFriendRequest`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-rejectfriendrequest), [`FriendsRequestsPanel.ShowOptionsForFriend`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-showoptionsforfriend), [`OculusFriendsListPanel.ShowOptionsForFriend`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-showoptionsforfriend), [`FriendRequestToken.CallFriendshipEvent`](/mod/game-api/types/global-e-h/friendrequesttoken#m-callfriendshipevent), [`FriendshipManager.AddFriend`](/mod/game-api/types/global-e-h/friendshipmanager#m-addfriend).

</div>
