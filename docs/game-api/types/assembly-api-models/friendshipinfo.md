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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`UserInfo`](/game-api/types/assembly-api-models/userinfo)
- **Derived types** [`OculusFriendInfo`](/game-api/types/assembly-api-models/oculusfriendinfo)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FriendshipInfo()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | When the friendship (or request) was created. |
| <Link id="m-iconindex" /><code>{"int IconIndex { get; set; }"}</code> | The user's chosen profile icon, as an index. |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" Type { get; set; }"}</code> | The state of the friendship, such as a pending request or an accepted friend. |

## Used in

Members of other types that take, return or hold a `FriendshipInfo`:

[`ISocialClient.GetFriendRequests`](/game-api/types/assembly-api-client/isocialclient#m-getfriendrequests), [`ISocialClient.GetFriends`](/game-api/types/assembly-api-client/isocialclient#m-getfriends), [`ISocialClient.GetFriendsForUser`](/game-api/types/assembly-api-client/isocialclient#m-getfriendsforuser), [`ISocialClient.GetFriendship`](/game-api/types/assembly-api-client/isocialclient#m-getfriendship), [`ISocialClient.GetSentFriendRequests`](/game-api/types/assembly-api-client/isocialclient#m-getsentfriendrequests), [`OfflineSocialClient.GetFriendRequests`](/game-api/types/assembly-api-client/offlinesocialclient#m-getfriendrequests), [`OfflineSocialClient.GetFriends`](/game-api/types/assembly-api-client/offlinesocialclient#m-getfriends), [`OfflineSocialClient.GetFriendsForUser`](/game-api/types/assembly-api-client/offlinesocialclient#m-getfriendsforuser), [`OfflineSocialClient.GetFriendship`](/game-api/types/assembly-api-client/offlinesocialclient#m-getfriendship), [`OfflineSocialClient.GetSentFriendRequests`](/game-api/types/assembly-api-client/offlinesocialclient#m-getsentfriendrequests), [`SocialClient.GetFriendRequests`](/game-api/types/assembly-api-client/socialclient#m-getfriendrequests), [`SocialClient.GetFriends`](/game-api/types/assembly-api-client/socialclient#m-getfriends), [`SocialClient.GetFriendsForUser`](/game-api/types/assembly-api-client/socialclient#m-getfriendsforuser), [`SocialClient.GetFriendship`](/game-api/types/assembly-api-client/socialclient#m-getfriendship), [`SocialClient.GetSentFriendRequests`](/game-api/types/assembly-api-client/socialclient#m-getsentfriendrequests), [`LowLevelApiClient.GetFriendRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendrequests), [`LowLevelApiClient.GetFriends`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriends), [`LowLevelApiClient.GetFriendsForUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendsforuser), [`LowLevelApiClient.GetFriendship`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfriendship), [`LowLevelApiClient.GetSentFriendRequests`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getsentfriendrequests), [`FriendRequestResult.Friendship`](/game-api/types/assembly-api-models/friendrequestresult#m-friendship), [`FriendRequestResult.ReverseFriendship`](/game-api/types/assembly-api-models/friendrequestresult#m-reversefriendship), [`FriendsManager.friendships`](/game-api/types/alta-menus/friendsmanager#m-friendships), [`FriendsManager.Friendships`](/game-api/types/alta-menus/friendsmanager#m-friendships-2), [`FriendsManager.friendshipsRequests`](/game-api/types/alta-menus/friendsmanager#m-friendshipsrequests), [`FriendRequestNotification.friendRequest`](/game-api/types/alta-menus/friendrequestnotification#m-friendrequest), [`FriendRequestNotification.FriendRequestNotification`](/game-api/types/alta-menus/friendrequestnotification#m-ctor), [`FriendsInvitesPanel.Revoke`](/game-api/types/alta-menus/friendsinvitespanel#m-revoke), [`FriendsInvitesPanel.ShowOptionsForFriend`](/game-api/types/alta-menus/friendsinvitespanel#m-showoptionsforfriend), [`FriendsListPanel.RemoveFriend`](/game-api/types/alta-menus/friendslistpanel#m-removefriend), [`FriendsListPanel.ShowInviteWindow`](/game-api/types/alta-menus/friendslistpanel#m-showinvitewindow), [`FriendsListPanel.ShowOptionsForFriend`](/game-api/types/alta-menus/friendslistpanel#m-showoptionsforfriend), [`FriendsRequestsPanel.AcceptFriendRequest`](/game-api/types/alta-menus/friendsrequestspanel#m-acceptfriendrequest), [`FriendsRequestsPanel.RejectFriendRequest`](/game-api/types/alta-menus/friendsrequestspanel#m-rejectfriendrequest), [`FriendsRequestsPanel.ShowOptionsForFriend`](/game-api/types/alta-menus/friendsrequestspanel#m-showoptionsforfriend), [`OculusFriendsListPanel.ShowOptionsForFriend`](/game-api/types/alta-menus/oculusfriendslistpanel#m-showoptionsforfriend), [`FriendRequestToken.CallFriendshipEvent`](/game-api/types/global-e-h/friendrequesttoken#m-callfriendshipevent), [`FriendshipManager.AddFriend`](/game-api/types/global-e-h/friendshipmanager#m-addfriend).
