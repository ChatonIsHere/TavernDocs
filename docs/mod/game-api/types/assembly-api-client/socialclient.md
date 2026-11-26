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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`ISocialClient`](/mod/game-api/types/assembly-api-client/isocialclient)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal SocialClient("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `SocialClient` from `clientManager`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AddFriend(int friendIdentifier)"}</code> | <span className="api-desc">Sends or accepts a friend request and returns what happened.</span> |
| <Link id="m-createfriendshipbetweenusers" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendshipBetweenUsers(int userIdentifier, int friendIdentifier)"}</code> | <span className="api-desc">Makes two users friends directly, an admin call.</span> |
| <Link id="m-getfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendRequests()"}</code> | <span className="api-desc">Gets every incoming friend request, all pages.</span> |
| <Link id="m-getfriends" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriends()"}</code> | <span className="api-desc">Gets every friend of the logged-in user, all pages.</span> |
| <Link id="m-getfriendsforuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendsForUser(int userIdentifier)"}</code> | <span className="api-desc">Gets every friend of the given user, all pages.</span> |
| <Link id="m-getfriendship" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> | <span className="api-desc">Gets the friendship between two users.</span> |
| <Link id="m-getoculusfriends" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriends(IEnumerable<ulong> oculusIds)"}</code> | <span className="api-desc">Gets Alta friendship details for a list of Oculus IDs.</span> |
| <Link id="m-getsentfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetSentFriendRequests()"}</code> | <span className="api-desc">Gets every outgoing friend request, all pages.</span> |
| <Link id="m-removefriend" /><code>{"Task RemoveFriend(int friendIdentifier)"}</code> | <span className="api-desc">Removes a friend.</span> |
