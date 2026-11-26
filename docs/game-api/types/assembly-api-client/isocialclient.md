---
title: "ISocialClient"
description: "Alta web API calls for friends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISocialClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for friends. `ApiAccess.ApiClient.SocialClient`. TavernEssentials swaps in its own social client.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineSocialClient`](/game-api/types/assembly-api-client/offlinesocialclient), [`SocialClient`](/game-api/types/assembly-api-client/socialclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AddFriend(int friendIdentifier)"}</code> | Sends a friend request. The result says whether they became friends, the request was sent, or it was already done. |
| <Link id="m-createfriendshipbetweenusers" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendshipBetweenUsers(int userIdentifier, int friendIdentifier)"}</code> | Makes two given users friends. Probably needs admin rights. |
| <Link id="m-getfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendRequests()"}</code> | Lists friend requests sent to the logged-in user. |
| <Link id="m-getfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriends()"}</code> | Lists the logged-in user's friends. |
| <Link id="m-getfriendsforuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendsForUser(int userIdentifier)"}</code> | Lists a given user's friends. |
| <Link id="m-getfriendship" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> | Gets the friendship between two users. |
| <Link id="m-getoculusfriends" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriends(IEnumerable<ulong> oculusIds)"}</code> | Looks up Alta friendships for a list of Oculus ids. |
| <Link id="m-getsentfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetSentFriendRequests()"}</code> | Lists friend requests the logged-in user has sent. |
| <Link id="m-removefriend" /><code>{"Task RemoveFriend(int friendIdentifier)"}</code> | Removes a friend. |

## Used in

Members of other types that take, return or hold a `ISocialClient`:

[`HighLevelApiClient.SocialClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-socialclient), [`IHighLevelApiClient.SocialClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-socialclient), [`OfflineHighLevelApiClient.SocialClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-socialclient).
