---
title: "FriendRequestResult"
description: "The web API's reply to a friend request: what happened, plus the friendship records each way."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendRequestResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses.DTOs.Responses`.

The web API's reply to a friend request: what happened, plus the friendship records each way.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendRequestResult()"}</code> | Creates a `FriendRequestResult` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-friendship" /><code><Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" Friendship { get; set; }"}</code> | The friendship record from the sender to the target. |
| <Link id="m-result" /><code><Link to="/mod/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{" Result { get; set; }"}</code> | Whether the players became friends, a request was sent, or they were already friends or already requested. |
| <Link id="m-reversefriendship" /><code><Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" ReverseFriendship { get; set; }"}</code> | The friendship record from the target back to the sender. |

## Used in

Members of other types that take, return or hold a `FriendRequestResult`:

[`ISocialClient.CreateFriendshipBetweenUsers`](/mod/game-api/types/assembly-api-client/isocialclient#m-createfriendshipbetweenusers), [`OfflineSocialClient.CreateFriendshipBetweenUsers`](/mod/game-api/types/assembly-api-client/offlinesocialclient#m-createfriendshipbetweenusers), [`SocialClient.CreateFriendshipBetweenUsers`](/mod/game-api/types/assembly-api-client/socialclient#m-createfriendshipbetweenusers), [`LowLevelApiClient.AddFriend`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-addfriend), [`LowLevelApiClient.CreateFriendship`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createfriendship), [`SocialService.RequestFriend`](/mod/game-api/types/global-s/socialservice#m-requestfriend-2).
