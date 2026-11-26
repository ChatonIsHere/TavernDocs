---
title: "FriendRequestedType"
description: "Outcome of a friend request: befriended, request sent, already friends or already requested."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestedType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Outcome of a friend request: befriended, request sent, already friends or already requested.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-alreadyfriends" /><code>{"AlreadyFriends = 2"}</code> |
| <Link id="m-alreadyrequested" /><code>{"AlreadyRequested = 3"}</code> |
| <Link id="m-befriended" /><code>{"Befriended = 0"}</code> |
| <Link id="m-requestsent" /><code>{"RequestSent = 1"}</code> |

## Used in

Members of other types that take, return or hold a `FriendRequestedType`:

[`ISocialClient.AddFriend`](/mod/game-api/types/assembly-api-client/isocialclient#m-addfriend), [`OfflineSocialClient.AddFriend`](/mod/game-api/types/assembly-api-client/offlinesocialclient#m-addfriend), [`SocialClient.AddFriend`](/mod/game-api/types/assembly-api-client/socialclient#m-addfriend), [`FriendRequestResult.Result`](/mod/game-api/types/assembly-api-models/friendrequestresult#m-result), [`SocialService.AcceptFriendRequest`](/mod/game-api/types/global-s/socialservice#m-acceptfriendrequest), [`SocialService.RequestFriend`](/mod/game-api/types/global-s/socialservice#m-requestfriend).
