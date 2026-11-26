---
title: "OfflineSocialClient"
description: "Offline stand-in for the friends client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineSocialClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the friends client. Lists come back empty; changing friendships throws `OfflineException`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`ISocialClient`](/game-api/types/assembly-api-client/isocialclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineSocialClient()"}</code> | Creates an `OfflineSocialClient` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AddFriend(int friendIdentifier)"}</code> | Throws `OfflineException`. |
| <Link id="m-createfriendshipbetweenusers" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendshipBetweenUsers(int userIdentifier, int friendIdentifier)"}</code> | Throws `OfflineException`. |
| <Link id="m-getfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendRequests()"}</code> | Returns an empty list. |
| <Link id="m-getfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriends()"}</code> | Returns an empty list. |
| <Link id="m-getfriendsforuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendsForUser(int userIdentifier)"}</code> | Returns an empty list. |
| <Link id="m-getfriendship" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> | Returns null. |
| <Link id="m-getoculusfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriends(IEnumerable<ulong> oculusIds)"}</code> | Returns an empty list. |
| <Link id="m-getsentfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetSentFriendRequests()"}</code> | Returns an empty list. |
| <Link id="m-removefriend" /><code>{"Task RemoveFriend(int friendIdentifier)"}</code> | Throws `OfflineException`. |
