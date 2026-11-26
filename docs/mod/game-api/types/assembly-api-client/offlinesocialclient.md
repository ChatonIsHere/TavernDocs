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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`ISocialClient`](/mod/game-api/types/assembly-api-client/isocialclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineSocialClient()"}</code> | <span className="api-desc">Creates an `OfflineSocialClient` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestedtype">{"FriendRequestedType"}</Link>{"> AddFriend(int friendIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-createfriendshipbetweenusers" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendrequestresult">{"FriendRequestResult"}</Link>{"> CreateFriendshipBetweenUsers(int userIdentifier, int friendIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendRequests()"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-getfriends" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriends()"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-getfriendsforuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetFriendsForUser(int userIdentifier)"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-getfriendship" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{"> GetFriendship(int userIdentifier, int friendIdentifier)"}</code> | <span className="api-desc">Returns null.</span> |
| <Link id="m-getoculusfriends" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/oculusfriendinfo">{"OculusFriendInfo"}</Link>{">> GetOculusFriends(IEnumerable<ulong> oculusIds)"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-getsentfriendrequests" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{">> GetSentFriendRequests()"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-removefriend" /><code>{"Task RemoveFriend(int friendIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
