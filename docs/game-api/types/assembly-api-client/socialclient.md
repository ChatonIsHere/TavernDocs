---
title: "SocialClient"
description: "Online client for friends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SocialClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for friends. Reached as `ApiAccess.ApiClient.SocialClient`; calls Alta's web API, which no longer answers. TavernEssentials swaps in its own.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`ISocialClient`](/game-api/types/assembly-api-client/isocialclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal SocialClient("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `SocialClient` from `clientManager`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AddFriend(int friendIdentifier)"}</code> | Sends or accepts a friend request and returns what happened. |
| <Link id="m-createfriendshipbetweenusers" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendshipBetweenUsers(int userIdentifier, int friendIdentifier)"}</code> | Makes two users friends directly, an admin call. |
| <Link id="m-getfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendRequests()"}</code> | Gets every incoming friend request, all pages. |
| <Link id="m-getfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriends()"}</code> | Gets every friend of the logged-in user, all pages. |
| <Link id="m-getfriendsforuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendsForUser(int userIdentifier)"}</code> | Gets every friend of the given user, all pages. |
| <Link id="m-getfriendship" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> | Gets the friendship between two users. |
| <Link id="m-getoculusfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriends(IEnumerable<ulong> oculusIds)"}</code> | Gets Alta friendship details for a list of Oculus IDs. |
| <Link id="m-getsentfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetSentFriendRequests()"}</code> | Gets every outgoing friend request, all pages. |
| <Link id="m-removefriend" /><code>{"Task RemoveFriend(int friendIdentifier)"}</code> | Removes a friend. |
