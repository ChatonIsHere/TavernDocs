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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineSocialClient`](/mod/game-api/types/assembly-api-client/offlinesocialclient), [`SocialClient`](/mod/game-api/types/assembly-api-client/socialclient)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AddFriend(int friendIdentifier)"}</code> | <span className="api-desc">Sends a friend request. The result says whether they became friends, the request was sent, or it was already done.</span> |
| <Link id="m-createfriendshipbetweenusers" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendshipBetweenUsers(int userIdentifier, int friendIdentifier)"}</code> | <span className="api-desc">Makes two given users friends. Probably needs admin rights.</span> |
| <Link id="m-getfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendRequests()"}</code> | <span className="api-desc">Lists friend requests sent to the logged-in user.</span> |
| <Link id="m-getfriends" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriends()"}</code> | <span className="api-desc">Lists the logged-in user's friends.</span> |
| <Link id="m-getfriendsforuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendsForUser(int userIdentifier)"}</code> | <span className="api-desc">Lists a given user's friends.</span> |
| <Link id="m-getfriendship" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> | <span className="api-desc">Gets the friendship between two users.</span> |
| <Link id="m-getoculusfriends" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriends(IEnumerable<ulong> oculusIds)"}</code> | <span className="api-desc">Looks up Alta friendships for a list of Oculus ids.</span> |
| <Link id="m-getsentfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetSentFriendRequests()"}</code> | <span className="api-desc">Lists friend requests the logged-in user has sent.</span> |
| <Link id="m-removefriend" /><code>{"Task RemoveFriend(int friendIdentifier)"}</code> | <span className="api-desc">Removes a friend.</span> |

## Used in

Members of other types that take, return or hold a `ISocialClient`:

<div className="api-used-in">

[`HighLevelApiClient.SocialClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-socialclient), [`IHighLevelApiClient.SocialClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-socialclient), [`OfflineHighLevelApiClient.SocialClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-socialclient).

</div>
