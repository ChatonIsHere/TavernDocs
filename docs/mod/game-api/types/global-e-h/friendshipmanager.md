---
title: "FriendshipManager"
description: "Each Player has one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FriendshipManager

A **class** in `Root.Township`, the global namespace.

Each `Player` has one. Holds that player's friend list, and on the client, whether that player is a friend of the local player. Data comes from the Alta social API.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FriendshipManager()"}</code> | <span className="api-desc">Creates a `FriendshipManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-player" /><code>{"private int player"}</code> | <span className="api-desc">User ID of the player this manager belongs to, set in `Setup`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-friends" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> Friends { get; }"}</code> | <span className="api-desc">The friends' user info. Entries added by `LocalStatusUpdate` have the placeholder name `[temp]`.</span> |
| <Link id="m-isfriend" /><code>{"bool IsFriend { get; private set; }"}</code> | <span className="api-desc">Whether this player is friends with the local player. Used for name boards.</span> |
| <Link id="m-isupdating" /><code>{"bool IsUpdating { get; private set; }"}</code> | <span className="api-desc">True while `GetFriends` is waiting on the API.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friendsids" /><code>{"private HashSet<int> friendsIDs { get; }"}</code> | <span className="api-desc">User IDs of this player's accepted friends, filled by `GetFriends` and status updates.</span> |
| <Link id="m-incomingrequestsids" /><code>{"private HashSet<int> incomingRequestsIDs { get; }"}</code> | <span className="api-desc">User IDs that sent this player a friend request.</span> |
| <Link id="m-outgoingrequestsids" /><code>{"private HashSet<int> outgoingRequestsIDs { get; }"}</code> | <span className="api-desc">User IDs this player has sent friend requests to.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-anyfriendshipstatusupdated" /><code>{"static event Action<int, bool> AnyFriendshipStatusUpdated"}</code> | <span className="api-desc">Static. Raised with the player's ID and new state whenever any player's `IsFriend` changes.</span> |
| <Link id="m-friendshipstatusupdated" /><code>{"event Action FriendshipStatusUpdated"}</code> | <span className="api-desc">Raised when `IsFriend` changes or the friend list is reloaded.</span> |
| <Link id="m-localfriendshipstatusupdated" /><code>{"static event Action LocalFriendshipStatusUpdated"}</code> | <span className="api-desc">Static. Raised when the local player's friend list finishes loading or a friend is added on the client.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfriend" /><code>{"void AddFriend("}<Link to="/mod/game-api/types/assembly-api-models/friendshipinfo">{"FriendshipInfo"}</Link>{" newFriendShip)"}</code> | <span className="api-desc">Adds a friend to the list. On the client also raises the update events.</span> |
| <Link id="m-friendrequestreceived" /><code>{"bool FriendRequestReceived(int player)"}</code> | <span className="api-desc">Whether this player has an incoming friend request from the given user. Only filled in for the local player.</span> |
| <Link id="m-friendrequestsent" /><code>{"bool FriendRequestSent(int player)"}</code> | <span className="api-desc">Whether this player has sent a friend request to the given user. Only filled in for the local player.</span> |
| <Link id="m-getfriends" /><code>{"async Task GetFriends(bool isLocalPlayer)"}</code> | <span className="api-desc">Reloads the friend list from the API. For the local player it also loads sent and received requests. Skipped on clients for remote players.</span> |
| <Link id="m-getfriendshiptype" /><code><Link to="/mod/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" GetFriendshipType(int player)"}</code> | <span className="api-desc">Whether the given user is a friend, has a pending request either way, or neither.</span> |
| <Link id="m-isfriendswith" /><code>{"bool IsFriendsWith(int player)"}</code> | <span className="api-desc">Whether the given user ID is in this player's friend list.</span> |
| <Link id="m-localstatusupdate" /><code>{"void LocalStatusUpdate(int playerId, "}<Link to="/mod/game-api/types/assembly-api-models/friendshiptype">{"FriendshipType"}</Link>{" newStatus)"}</code> | <span className="api-desc">Moves a user between friends, incoming and outgoing request lists without calling the API.</span> |
| <Link id="m-setup" /><code>{"void Setup(int player)"}</code> | <span className="api-desc">Sets which user ID this manager belongs to.</span> |
| <Link id="m-updatefromnetwork" /><code>{"async void UpdateFromNetwork("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Asks the API whether this player and the given player are friends, then updates both managers.</span> |
| <Link id="m-updatestatus" /><code>{"void UpdateStatus(bool isFriend)"}</code> | <span className="api-desc">Sets `IsFriend` and raises the events if it changed.</span> |
| <Link id="m-updatestatuswithplayer" /><code>{"void UpdateStatusWithPlayer(bool isFriend, int playerId)"}</code> | <span className="api-desc">Adds or removes a user ID from this player's friend list.</span> |

## Used in

Members of other types that take, return or hold a `FriendshipManager`:

<div className="api-used-in">

[`IPlayer.FriendshipManager`](/mod/game-api/types/alta-networking/iplayer#m-friendshipmanager), [`Player.FriendshipManager`](/mod/game-api/types/global-p/player#m-friendshipmanager).

</div>
