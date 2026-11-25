---
title: "OfflineSocialClient"
description: "class OfflineSocialClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineSocialClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`ISocialClient`](/game-api/types/assembly-api-client/isocialclient)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OfflineSocialClient()"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-addfriend" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AddFriend(int friendIdentifier)"}</code> |
| <Link id="m-createfriendshipbetweenusers" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendshipBetweenUsers(int userIdentifier, int friendIdentifier)"}</code> |
| <Link id="m-getfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendRequests()"}</code> |
| <Link id="m-getfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriends()"}</code> |
| <Link id="m-getfriendsforuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendsForUser(int userIdentifier)"}</code> |
| <Link id="m-getfriendship" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> |
| <Link id="m-getoculusfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriends(IEnumerable<ulong> oculusIds)"}</code> |
| <Link id="m-getsentfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetSentFriendRequests()"}</code> |
| <Link id="m-removefriend" /><code>{"Task RemoveFriend(int friendIdentifier)"}</code> |
